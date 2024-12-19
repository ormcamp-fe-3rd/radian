export interface CarModel {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  specs: string[];
  chars: string[];
}

// modelsData 타입 정의: 배열 형태로 여러 모델을 담는 배열
export type ModelsData = CarModel[];
