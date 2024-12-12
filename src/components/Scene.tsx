// src/Scene.tsx
import React, { useEffect } from 'react';
import * as THREE from 'three';

interface SceneProps {
  object: any;
}

const Scene: React.FC<SceneProps> = ({ object }) => {
  useEffect(() => {
    const scene = new THREE.Scene();  // 씬 생성
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000); // 카메라 설정
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });  // 렌더러 설정

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);  // 렌더러 DOM에 추가

    // 조명 설정
    const light = new THREE.PointLight(0xffffff, 0.75);  // 포인트 라이트 추가
    light.position.set(70, -20, 150);
    scene.add(light);

    // 부드러운 조명 추가
    const softLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(softLight);

    // 모델을 씬에 추가
    const modelGroup = new THREE.Group();
    modelGroup.add(object);
    scene.add(modelGroup);

    // 애니메이션 함수 설정
    const animate = () => {
      requestAnimationFrame(animate);  // 애니메이션 루프
      renderer.render(scene, camera);  // 씬 렌더링
    };

    animate();  // 애니메이션 시작
  }, [object]);  // object가 변경될 때마다 실행

  return null;  // 렌더링할 JSX는 없으므로 null을 반환
};

export default Scene;
