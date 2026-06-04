'use client';

import React, { useEffect, useRef } from 'react';

type ThreeNamespace = typeof import('three');

export default function ThreeCanvas() {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvasElement = canvasRef.current;
        if (!canvasElement) return;

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        document.body.appendChild(script);

        let animationFrameId: number;
        let handleMouseMove: (e: MouseEvent) => void;
        let handleResize: () => void;

        script.onload = () => {
            const THREE = (window as Window & { THREE?: ThreeNamespace }).THREE;
            if (!THREE) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 4.5;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);
            canvasElement.appendChild(renderer.domElement);

            const geometry = new THREE.IcosahedronGeometry(2, 2);
            const originalPositions = geometry.attributes.position.clone();

            const material = new THREE.MeshBasicMaterial({
                color: 0x60ff99,
                wireframe: true,
                transparent: true,
                opacity: 0.22,
                blending: THREE.AdditiveBlending
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const pointMaterial = new THREE.PointsMaterial({
                color: 0xdab9ff,
                size: 0.03,
                transparent: true,
                opacity: 0.4
            });
            const pointCloud = new THREE.Points(geometry, pointMaterial);
            scene.add(pointCloud);

            const targetMouse = new THREE.Vector2(0, 0);
            const currentMouse = new THREE.Vector2(0, 0);

            handleMouseMove = (e: MouseEvent) => {
                targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            };

            handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('resize', handleResize);

            let time = 0;
            const renderLoop = () => {
                animationFrameId = requestAnimationFrame(renderLoop);
                time += 0.008;

                currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
                currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;

                mesh.rotation.y = time * 0.15 + (currentMouse.x * 0.4);
                mesh.rotation.x = time * 0.12 + (currentMouse.y * 0.4);
                pointCloud.rotation.y = mesh.rotation.y;
                pointCloud.rotation.x = mesh.rotation.x;
                const positionAttribute = geometry.attributes.position;
                for (let i = 0; i < positionAttribute.count; i++) {
                    const vx = originalPositions.getX(i);
                    const vy = originalPositions.getY(i);
                    const vz = originalPositions.getZ(i);
                    const wave = Math.sin(vx * 1.5 + time) * Math.cos(vy * 1.5 + time) * 0.15;
                    positionAttribute.setXYZ(i, vx + (vx * wave), vy + (vy * wave), vz + (vz * wave));
                }
                positionAttribute.needsUpdate = true;
                renderer.render(scene, camera);
            };

            renderLoop();
        };

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
            if (handleResize) window.removeEventListener('resize', handleResize);
            script.remove();
            canvasElement.innerHTML = '';
        };
    }, []);

    return <div ref={canvasRef} className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none" />;
}
