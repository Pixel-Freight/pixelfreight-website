'use client';

import React, { useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SquareProps {
  x: number;
  y: number;
  size: number;
  color: string;
  targetColor: string;
  isNearButton: boolean;
}

class Square {
  position: Position;
  size: number;
  color: string;
  targetColor: string;
  currentColor: string;
  isNearButton: boolean;
  rotation: number;
  rotationSpeed: number;
  opacity: number;

  constructor({ x, y, size, color, targetColor, isNearButton }: SquareProps) {
    this.position = { x, y };
    this.size = size;
    this.color = color;
    this.targetColor = targetColor;
    this.currentColor = color;
    this.isNearButton = isNearButton;
    this.rotation = 0;
    this.rotationSpeed = 0.02;
    this.opacity = 1;
  }

  update(cursor: Position, buttons: HTMLElement[]) {
    const lag = 10;
    this.position.x += (cursor.x - this.position.x) / lag;
    this.position.y += (cursor.y - this.position.y) / lag;

    let isNearAnyButton = false;

    if (buttons && buttons.length > 0) {
      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const buttonCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };

        const distance = Math.hypot(
          this.position.x - buttonCenter.x,
          this.position.y - buttonCenter.y
        );

        const buttonRadius = Math.max(rect.width, rect.height) * 0.8;

        if (distance < buttonRadius) {
          isNearAnyButton = true;

          // Magnetic pull
          const strength = 0.1;
          this.position.x += (buttonCenter.x - this.position.x) * strength;
          this.position.y += (buttonCenter.y - this.position.y) * strength;

          // Extract button background color
          const computedStyle = window.getComputedStyle(button);
          const bgColor = computedStyle.backgroundColor;

          // Convert rgb/rgba to hex
          const rgbMatch = bgColor.match(/\d+/g);
          if (rgbMatch && rgbMatch.length >= 3) {
            const [r, g, b] = rgbMatch.map(Number);
            this.targetColor = `#${((1 << 24) + (r << 16) + (g << 8) + b)
              .toString(16)
              .slice(1)}`;
          }
        }
      });
    }

    this.isNearButton = isNearAnyButton;

    // Smooth color transition
    const nextColor = this.isNearButton ? this.targetColor : this.color;
    this.currentColor = this.lerpColor(this.currentColor, nextColor, 0.1);

    this.rotation += this.rotationSpeed;
    this.opacity = this.isNearButton ? 0.5 : 1;
  }

  draw(context: CanvasRenderingContext2D) {
    const halfSize = this.size / 2;

    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.rotation);

    if (!this.isNearButton) {
      // Default state: transparent fill, white border
      context.globalAlpha = this.opacity;
      context.strokeStyle = '#ffffff';
      context.lineWidth = 2;
      context.fillStyle = 'transparent';
      context.beginPath();
      context.rect(-halfSize, -halfSize, this.size, this.size);
      context.fill();
      context.stroke();
    } else {
      // Near button: colored fill
      context.globalAlpha = this.opacity;
      context.fillStyle = this.currentColor;
      context.fillRect(-halfSize, -halfSize, this.size, this.size);

      // Optional dissolve effect
      context.globalAlpha = 0.1;
      context.fillStyle = '#ffffff';
      context.beginPath();
      context.arc(0, 0, this.size * 1.5, 0, Math.PI * 2);
      context.fill();
    }

    context.restore();
  }

  private lerpColor(color1: string, color2: string, amount: number): string {
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);

    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    const r = Math.round(r1 + (r2 - r1) * amount);
    const g = Math.round(g1 + (g2 - g1) * amount);
    const b = Math.round(b1 + (b2 - b1) * amount);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }
}

interface FollowCursorProps {
  color?: string;
  size?: number;
}

const FollowCursor: React.FC<FollowCursorProps> = ({
  color = 'var(--primary)',
  size = 20,
}) => {
  const requestRef = useRef<number>();
  const squareRef = useRef<Square | null>(null);
  const cursorRef = useRef<Position>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const getComputedColor = (colorVar: string): string => {
      if (typeof window === 'undefined') return '#7443f4';
      const style = getComputedStyle(document.documentElement);
      if (colorVar.startsWith('var(')) {
        const varName = colorVar.replace('var(', '').replace(')', '').trim();
        return style.getPropertyValue(varName).trim() || '#7443f4';
      }
      return colorVar;
    };

    const buttons = Array.from(
      document.querySelectorAll(
        'button, a[href], [role="button"], [tabindex="0"]'
      )
    ).filter(Boolean) as HTMLElement[];

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const resolvedColor = getComputedColor(color);
    const targetColor = getComputedColor('var(--primary)');

    squareRef.current = new Square({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      size,
      color: resolvedColor,
      targetColor: targetColor,
      isNearButton: false,
    });

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (squareRef.current && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        squareRef.current.update(cursorRef.current, buttons);
        squareRef.current.draw(ctx);
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, size]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default FollowCursor;
