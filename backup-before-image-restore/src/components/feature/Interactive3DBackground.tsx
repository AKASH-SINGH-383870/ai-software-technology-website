import { useEffect, useRef } from 'react';

interface Interactive3DBackgroundProps {
  variant?: 'global' | 'hero';
}

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
}

interface WireframeShape {
  cx: number;
  cy: number;
  cz: number;
  size: number;
  rx: number;
  ry: number;
  rz: number;
  vrx: number;
  vry: number;
  vrz: number;
  color: string;
}

export default function Interactive3DBackground({ variant = 'global' }: Interactive3DBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const nodeCount = variant === 'hero' ? (isMobile ? 28 : 60) : isMobile ? 18 : 38;
    const maxDepth = 900;
    const focalLength = 420;

    const colors = [
      'rgba(0, 194, 255, ',   // Cyan accent
      'rgba(31, 60, 255, ',   // Royal blue primary
      'rgba(56, 189, 248, ',  // Sky glow
      'rgba(99, 102, 241, ',  // Indigo accent
    ];

    const nodes: Node3D[] = Array.from({ length: nodeCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: Math.random() * maxDepth + 80,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      vz: -Math.random() * 0.65 - 0.15,
      radius: Math.random() * 2 + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // 3D Octahedron / Cube wireframe shapes for 3D spatial depth
    const shapes: WireframeShape[] =
      variant === 'hero'
        ? [
            {
              cx: -width * 0.28,
              cy: -height * 0.12,
              cz: 360,
              size: isMobile ? 55 : 95,
              rx: 0.4,
              ry: 0.8,
              rz: 0.2,
              vrx: 0.0035,
              vry: 0.005,
              vrz: 0.002,
              color: 'rgba(0, 194, 255, 0.22)',
            },
            {
              cx: width * 0.3,
              cy: height * 0.1,
              cz: 420,
              size: isMobile ? 50 : 85,
              rx: 1.1,
              ry: 0.3,
              rz: 0.5,
              vrx: -0.004,
              vry: 0.0035,
              vrz: 0.0025,
              color: 'rgba(31, 60, 255, 0.26)',
            },
            {
              cx: width * 0.08,
              cy: -height * 0.24,
              cz: 520,
              size: isMobile ? 40 : 70,
              rx: 0.2,
              ry: 1.2,
              rz: 0.7,
              vrx: 0.0025,
              vry: -0.004,
              vrz: 0.003,
              color: 'rgba(56, 189, 248, 0.18)',
            },
          ]
        : [];

    // Octahedron base vertices & edges
    const octaVertices: [number, number, number][] = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1],
    ];
    const octaEdges: [number, number][] = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 4], [4, 3], [3, 5], [5, 2],
    ];

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / width - 0.5) * 140;
      targetMouseY = (e.clientY / height - 0.5) * 140;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    const rotatePoint = (
      x: number,
      y: number,
      z: number,
      rx: number,
      ry: number,
      rz: number
    ): [number, number, number] => {
      // Rotate X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      // Rotate Z
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;

      return [x3, y3, z2];
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      const projected: { sx: number; sy: number; scale: number; alpha: number; color: string; r: number }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;

          if (n.z <= 40) {
            n.z = maxDepth;
            n.x = (Math.random() - 0.5) * width * 1.5;
            n.y = (Math.random() - 0.5) * height * 1.5;
          }
          if (n.x > width) n.x = -width;
          if (n.x < -width) n.x = width;
          if (n.y > height) n.y = -height;
          if (n.y < -height) n.y = height;
        }

        const scale = focalLength / (focalLength + n.z);
        const sx = centerX + (n.x - currentMouseX * (1 - n.z / maxDepth)) * scale;
        const sy = centerY + (n.y - currentMouseY * (1 - n.z / maxDepth)) * scale;
        const alpha = Math.max(0.08, Math.min(0.75, (1 - n.z / maxDepth) * 0.8));

        projected.push({
          sx,
          sy,
          scale,
          alpha,
          color: n.color,
          r: Math.max(0.8, n.radius * scale * 1.6),
        });
      }

      // Draw 3D constellation connections
      const connectionDist = isMobile ? 115 : 155;
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.sx - p2.sx;
          const dy = p1.sy - p2.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * Math.min(p1.alpha, p2.alpha) * 0.45;
            ctx.strokeStyle = `rgba(0, 194, 255, ${lineAlpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
          }
        }
      }

      // Draw projected 3D nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha.toFixed(3)})`;
        ctx.fill();
      }

      // Draw 3D rotating wireframe polyhedra in hero mode
      for (let s = 0; s < shapes.length; s++) {
        const shape = shapes[s];
        if (!prefersReducedMotion) {
          shape.rx += shape.vrx;
          shape.ry += shape.vry;
          shape.rz += shape.vrz;
        }

        const pts2D: [number, number][] = octaVertices.map(([vx, vy, vz]) => {
          const [rx, ry, rz] = rotatePoint(
            vx * shape.size,
            vy * shape.size,
            vz * shape.size,
            shape.rx + currentMouseY * 0.002,
            shape.ry + currentMouseX * 0.002,
            shape.rz
          );
          const worldX = shape.cx + rx - currentMouseX * 0.35;
          const worldY = shape.cy + ry - currentMouseY * 0.35;
          const worldZ = shape.cz + rz;
          const scale = focalLength / Math.max(80, focalLength + worldZ);
          return [centerX + worldX * scale, centerY + worldY * scale];
        });

        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 1;
        for (let e = 0; e < octaEdges.length; e++) {
          const [a, b] = octaEdges[e];
          ctx.beginPath();
          ctx.moveTo(pts2D[a][0], pts2D[a][1]);
          ctx.lineTo(pts2D[b][0], pts2D[b][1]);
          ctx.stroke();
        }

        for (let v = 0; v < pts2D.length; v++) {
          ctx.beginPath();
          ctx.arc(pts2D[v][0], pts2D[v][1], 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 194, 255, 0.45)';
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={
        variant === 'hero'
          ? 'absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-85'
          : 'fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40'
      }
    />
  );
}
