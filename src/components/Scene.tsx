'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = () => {
    const count = 2000
    const mesh = useRef<THREE.Points>(null!)

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }
        return positions
    }, [count])

    useFrame((state) => {
        const { mouse } = state
        mesh.current.rotation.x = mouse.y * 0.1
        mesh.current.rotation.y = mouse.x * 0.1

        // Subtle drift
        mesh.current.rotation.z += 0.001
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#2563eb"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    )
}

const BackgroundScene = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Particles />
            </Canvas>
        </div>
    )
}

export default BackgroundScene
