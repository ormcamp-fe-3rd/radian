import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

interface CarObicontrolProps {
  color: string;
}

const CarObicontrol: React.FC<CarObicontrolProps> = ({ color }) => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const modelRef = useRef<THREE.Object3D>();
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const radianModelRef = useRef<THREE.Object3D>();
  const backgroundModelRef = useRef<THREE.Object3D>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true; // 그림자 활성화
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 부드러운 그림자
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Disable zooming
    //controls.enableZoom = false;

    // Restrict camera to stay above the horizon
    controls.minPolarAngle = 0; // 0 radians (upwards)
    controls.maxPolarAngle = Math.PI / 2; // 90 degrees (horizontal)

    // Load HDR environment map
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(
      '/images/ProductReservation/mountain1.hdr',
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture; // Set as the scene background
        scene.environment = texture; // Use HDR for environment lighting
      },
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 0);
    directionalLight.castShadow = true; // 그림자 생성
    scene.add(directionalLight);

    const loader = new GLTFLoader();

    // Load radian_utility1.gltf (color changeable)
    loader.load(
      '/images/ProductReservation/radian_utility1.gltf',
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const material = new THREE.MeshStandardMaterial({
              color: new THREE.Color(color),
              metalness: 0.1, // 금속성 최대 (반사 강조)
              roughness: 0.1, // 표면을 매끄럽게 (빛 반사 잘됨)
              envMapIntensity: 0.5, // HDR 환경맵의 밝기 조절
              clearcoat: 1.0, // 코팅층 효과
              clearcoatRoughness: 0.7, // 코팅층 표면의 매끄러움
              // emissive: new THREE.Color(0x333333), // 빛을 내는 색상
              // emissiveIntensity: 1.0, // 발광 강도
              // transparent: true,
              // opacity: 0.5, // 0(완전 투명) ~ 1(불투명)
              // refractionRatio: 0.98, // 굴절률 (유리 효과)
            });
            mesh.material = material;
          }
        });

        model.scale.set(1, 1, 1);
        scene.add(model);
        radianModelRef.current = model;
      },
      undefined,
      (error) => {
        console.error('Error loading radian_utility1.gltf:', error);
      },
    );

    // Load background.gltf (with texture)
    loader.load(
      '/images/ProductReservation/body.gltf',
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            // Texture and material are preserved
            if (mesh.material instanceof THREE.MeshStandardMaterial) {
              mesh.material.needsUpdate = true; // Ensure material updates
              mesh.receiveShadow = true;
            }
          }
        });

        model.scale.set(1, 1, 1);
        scene.add(model);
        backgroundModelRef.current = model;
      },
      undefined,
      (error) => {
        console.error('Error loading background.gltf:', error);
      },
    );

    // Load extraModel1.gltf
    loader.load(
      '/images/ProductReservation/glass.gltf',
      (gltf) => {
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0x222222), // 어두운 회색 (썬팅 효과)
          metalness: 0.0, // 금속성 없음
          roughness: 0.1, // 반사광 강조
          envMapIntensity: 2.0, // 환경 맵의 반사 강도
          clearcoat: 1.0, // 코팅층 효과
          clearcoatRoughness: 0.0, // 코팅층을 매끄럽게
          transparent: true, // 투명도 활성화
          opacity: 0.5, // 살짝 어두운 유리
          refractionRatio: 0.98, // 빛 굴절 효과
        });

        const model = gltf.scene;

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.material = material;
          }
        });

        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0); // 위치 조정
        scene.add(model);
        console.log('extraModel1 loaded');
      },
      undefined,
      (error) => {
        console.error('Error loading extraModel1.gltf:', error);
      },
    );

// Load Glass Cover (유리 덮개)
loader.load(
  '/images/ProductReservation/glass2.gltf',
  (gltf) => {
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xe9e3c8), // 밝은 회색 (투명 유리)
      metalness: 0.1, // 약간의 반사
      roughness: 0.9, // 매끄러운 표면
      envMapIntensity: 0.8, // 환경 맵 반사 강도
      transparent: true, // 투명도 활성화
      opacity: 0.5, // 투명도 조절
      refractionRatio: 0.98, // 굴절 효과
    });

    const model = gltf.scene;

    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = material;
        mesh.renderOrder = 1; // 유리 덮개를 나중에 렌더링
      }
    });

    model.scale.set(1, 1, 1);
    model.position.set(0, 0, 0); // 위치 조정
    scene.add(model);
    console.log('Glass cover loaded');
  },
  undefined,
  (error) => {
    console.error('Error loading glass cover:', error);
  },
);

// Load Lamp Bulb (전구)
loader.load(
  '/images/ProductReservation/lamp.gltf',
  (gltf) => {
    const bulbMaterial = new THREE.MeshStandardMaterial({
      emissive: new THREE.Color(0xffffaa), // 발광 색상
      emissiveIntensity: 10.0, // 발광 강도
    });

    const model = gltf.scene;

    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = bulbMaterial;
        mesh.castShadow = true; // 그림자 생성
      }
    });

    // 램프 빛 효과를 위한 SpotLight 추가
    const lampLight = new THREE.SpotLight(0xffffaa, 5, 50, Math.PI / 6, 0.3); // (색상, 강도, 거리, 각도, 페널티)
    lampLight.position.set(0, 0, 0); // 램프 위치에 조명 설정
    lampLight.target.position.set(0, 0, 0); // 램프 빛이 앞 방향으로 집중되도록 설정
    lampLight.castShadow = true; // 그림자 활성화
    scene.add(lampLight);
    scene.add(lampLight.target); // 타겟 추가

    model.scale.set(1, 1, 1);
    model.position.set(0, 0, 0); // 위치 조정
    scene.add(model);
    console.log('Lamp bulb loaded');
  },
  undefined,
  (error) => {
    console.error('Error loading lamp bulb:', error);
  },
);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas || !rendererRef.current || !cameraRef.current) return;

      const parent = canvas.parentElement;
      if (!parent) return;

      const width = parent.clientWidth;
      const height = parent.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update color for radian_utility1.gltf when color prop changes
  useEffect(() => {
    if (radianModelRef.current) {
      radianModelRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.color.set(new THREE.Color(color));
            mesh.material.needsUpdate = true; // Ensure material updates
          }
        }
      });
    }
  }, [color]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default CarObicontrol;
