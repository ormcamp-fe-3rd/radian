import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface CarObicontrolProps {
  color: string;
}

const CarObicontrol: React.FC<CarObicontrolProps> = ({ color }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null); // 모델 참조
  const sceneRef = useRef<THREE.Scene | null>(null); // 씬 참조

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Three.js 초기 설정
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // 배경색 설정
    sceneRef.current = scene; // 씬 저장

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // 조명 추가
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // 모델 로드
    const loader = new GLTFLoader();
    loader.load(
      '/src/assets/ProductReservationImages/testbox1.gltf', // GLTF 파일 경로
      (gltf) => {
        const model = gltf.scene;

        // 모델 내 모든 Mesh에 초기 색상 적용
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const material = new THREE.MeshStandardMaterial({
              color: new THREE.Color(color), // 초기 색상 적용
              metalness: 0.5,
              roughness: 0.5,
            });
            mesh.material = material;
          }
        });

        model.scale.set(1, 1, 1); // 모델 크기 조정
        scene.add(model);
        modelRef.current = model; // 모델 참조 저장
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error);
      }
    );

    // 애니메이션 루프
    const animate = () => {
        requestAnimationFrame(animate);
      
        // 모델 회전을 삭제하여 자동 회전 비활성화
        // if (modelRef.current) {
        //   modelRef.current.rotation.y += 0.01;
        // }
      
        controls.update();
        renderer.render(scene, camera);
      };
    animate();

     // 반응형 처리
     const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 초기화는 한 번만 실행

  // 색상 변경 처리
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.color.set(new THREE.Color(color)); // 색상 변경
          }
        }
      });
    }
  }, [color]); // 색상이 변경될 때만 실행

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%', // 캔버스 크기
        height: '100%',
        display: 'block',
      }}
    />
  );
};

export default CarObicontrol;