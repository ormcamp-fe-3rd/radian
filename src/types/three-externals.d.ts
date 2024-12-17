declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, Scene, WebGLRenderer } from 'three';
  export class OrbitControls {
    constructor(camera: Camera, renderer: WebGLRenderer);
    update(): void;
    dispose(): void;
  }
}

declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Loader } from 'three';
  export class GLTFLoader extends Loader {
    constructor();
    load(
      url: string,
      onLoad: (gltf: any) => void,
      onProgress?: (event: any) => void,
      onError?: (error: any) => void,
    ): void;
  }
}

declare module 'three/examples/jsm/loaders/RGBELoader' {
  export class RGBELoader {
    load(
      url: string,
      onLoad: (texture: any) => void,
      onProgress?: (event: any) => void,
      onError?: (error: any) => void,
    ): void;
  }
}
