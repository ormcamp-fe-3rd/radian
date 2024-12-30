//3차피드백 1번//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as THREE from 'three';

declare module 'three' {
  interface MeshStandardMaterialParameters {
    clearcoat?: number;
    clearcoatRoughness?: number;
    refractionRatio?: number;
  }
}