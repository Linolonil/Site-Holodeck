import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuração da cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Fundo transparente

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Criar partículas
    const particlesCount = 100; // Quantidade de partículas
    const geometries = [
      new THREE.SphereGeometry(0.2, 16, 16),
      new THREE.BoxGeometry(0.2, 0.2, 0.2),
      new THREE.CylinderGeometry(0.2, 0.2, 0.4, 16),
      new THREE.TorusGeometry(0.2, 0.05, 16, 100)
    ];

    const material = new THREE.MeshBasicMaterial({
      color: 0x8a2be2, // Cor lilás (BlueViolet)
      transparent: true,
      opacity: 0.8,
    });

    const particles = [];
    const particlesData = [];

    for (let i = 0; i < particlesCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      scene.add(particle);
      particles.push(particle);

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1
        ),
      });
    }

    // Função de animação
    const animate = () => {
      particles.forEach((particle, index) => {
        const data = particlesData[index];
        
        // Atualizar a posição da partícula
        particle.position.add(data.velocity);

        // Reposicionar partículas se saírem do limite
        if (particle.position.x < -20 || particle.position.x > 20) data.velocity.x = -data.velocity.x;
        if (particle.position.y < -20 || particle.position.y > 20) data.velocity.y = -data.velocity.y;
        if (particle.position.z < -20 || particle.position.z > 20) data.velocity.z = -data.velocity.z;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Atualizar a cena quando a janela for redimensionada
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    // Detectar movimento do mouse e dispersar partículas
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2(mouseX, mouseY);

      raycaster.setFromCamera(mouse, camera);

      particles.forEach((particle, index) => {
        const distance = particle.position.distanceTo(new THREE.Vector3(mouseX * 10, mouseY * 10, 0));
        if (distance < 1) {
          particlesData[index].velocity.add(
            new THREE.Vector3(
              (Math.random() - 0.5) * 0.2,
              (Math.random() - 0.5) * 0.2,
              (Math.random() - 0.5) * 0.2
            )
          );
        }
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
};

export default BackgroundParticles;
