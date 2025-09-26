'use client';
import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils';

interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
  offset?: [number, number];
  rotationSpeed?: number;
}

const Earth: React.FC<EarthProps> = ({
  className,
  theta = 0.3,
  dark = 0.9,
  scale = 1.2,
  diffuse = 1.4,
  mapSamples = 30000,
  mapBrightness = 7,
  baseColor = [0.4549, 0.2627, 0.9569],
  markerColor = [1, 0.2, 0.5],
  glowColor = [0.6314, 0.3725, 1],
  offset = [0, 0],
  rotationSpeed = 0.002,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        setSize(Math.min(width, height));
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || size === 0) return;

    let phi = 0;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: offset,
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += rotationSpeed;
      },
    });

    return () => globe.destroy();
  }, [size, theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor, offset, rotationSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full flex items-center justify-center overflow-visible pointer-events-none select-none',
        className
      )}
    >
      <div
        className="relative w-full h-full"
        style={{
          aspectRatio: '1',
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default Earth;