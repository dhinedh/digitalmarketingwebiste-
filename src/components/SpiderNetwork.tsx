import React, { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

const SpiderNetwork: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
    const pointsRef = useRef<Point[]>([]);
    const tempPointsRef = useRef<(Point & { life: number })[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const pointCount = 80;
        const connectionDistance = 140;
        const mouseRadius = 250;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initPoints();
        };

        const initPoints = () => {
            pointsRef.current = [];
            for (let i = 0; i < pointCount; i++) {
                pointsRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const points = pointsRef.current;
            const tempPoints = tempPointsRef.current;

            // Update and draw permanent points
            points.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                const dx = p.x - mouseRef.current.x;
                const dy = p.y - mouseRef.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Enhanced Cursor Interaction: Threading
                if (dist < connectionDistance * 1.8) {
                    const opacity = (1 - dist / (connectionDistance * 1.8)) * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.strokeStyle = `rgba(241, 180, 52, ${opacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }

                if (dist < mouseRadius) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    p.x -= dx * force * 0.04; // Attract
                    p.y -= dy * force * 0.04;
                }

                // Connections between permanent points
                for (let j = i + 1; j < points.length; j++) {
                    const p2 = points[j];
                    const dx2 = p.x - p2.x;
                    const dy2 = p.y - p2.y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    if (dist2 < connectionDistance) {
                        const opacity = (1 - dist2 / connectionDistance) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(241, 180, 52, ${opacity})`;
                        ctx.lineWidth = 0.4;
                        ctx.stroke();
                    }
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(241, 180, 52, 0.4)';
                ctx.fill();
            });

            // Update and draw temporary "silk" points from cursor
            for (let i = tempPoints.length - 1; i >= 0; i--) {
                const tp = tempPoints[i];
                tp.x += tp.vx;
                tp.y += tp.vy;
                tp.life -= 0.01;

                if (tp.life <= 0) {
                    tempPoints.splice(i, 1);
                    continue;
                }

                // Connect silk points to cursor
                const dmx = tp.x - mouseRef.current.x;
                const dmy = tp.y - mouseRef.current.y;
                const dmdist = Math.sqrt(dmx * dmx + dmy * dmy);
                
                if (dmdist < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
                    ctx.quadraticCurveTo(
                        (mouseRef.current.x + tp.x) / 2 + Math.sin(Date.now() * 0.01 + i) * 10,
                        (mouseRef.current.y + tp.y) / 2 + Math.cos(Date.now() * 0.01 + i) * 10,
                        tp.x, tp.y
                    );
                    ctx.strokeStyle = `rgba(241, 180, 52, ${tp.life * 0.3})`;
                    ctx.lineWidth = 0.3;
                    ctx.stroke();
                }

                ctx.beginPath();
                ctx.arc(tp.x, tp.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(241, 180, 52, ${tp.life * 0.5})`;
                ctx.fill();
            }

            // Atmospheric Background Particles
            ctx.fillStyle = 'rgba(241, 180, 52, 0.06)';
            for (let i = 0; i < 30; i++) {
                const time = Date.now() * 0.0003;
                const px = (Math.sin(time + i) * 0.5 + 0.5) * canvas.width;
                const py = (Math.cos(time * 0.7 + i) * 0.5 + 0.5) * canvas.height;
                ctx.beginPath();
                ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - mouseRef.current.x;
            const dy = e.clientY - mouseRef.current.y;
            const speed = Math.sqrt(dx * dx + dy * dy);

            // Emit silk points if moving fast
            if (speed > 5 && tempPointsRef.current.length < 40) {
                tempPointsRef.current.push({
                    x: mouseRef.current.x,
                    y: mouseRef.current.y,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1.0
                });
            }

            mouseRef.current = { x: e.clientX, y: e.clientY, vx: dx, vy: dy };
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ filter: 'contrast(1.1) brightness(1.1)' }}
        />
    );
};

export default SpiderNetwork;
