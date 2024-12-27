export interface Car {
  id: string;
  name: string;
  title: string;
  description: string;
  text: string;
  introImage: string;
  modelImage: string;
  safetyImages1: string;
  safetyImages2: string;
  safetyImages3: string;
  safetyImages4: string;
  safetyImages5: string;
  safetyImages6: string;
  safetyImages7: string;
  safetyImages8: string;
  safetyImages9: string;
  price: string;
  specs: string[];
  chars: string[];
  models: string[]; // 모델 목록 추가
  selectedModel: string; // 선택된 모델 추가
}

export type ModelsData = Car[]; // 배열로 변경