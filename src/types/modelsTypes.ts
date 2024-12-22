export interface Car {
  id: string;
  name: string;
  description: string;
  image: string;
  rotatorImages: string[];
  price: string;
  specs: string[];
  chars: string[];
  models: string[]; // 모델 목록 추가
  selectedModel: string; // 선택된 모델 추가
}

export type ModelsData = Car[]; // 배열로 변경