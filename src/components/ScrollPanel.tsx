import '../styles/ProductDetail.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import modelsData from '../data/modelsData.json'; // 데이터
import { CarModel } from '../types/modelsData';  // 타입
import ScrollPanelSpecs from './ScrollPanelSpecs';// 컴포넌트
import ScrollPanelChars from './ScrollPanelChars';

interface ScrollPanelProps {
  selectedModel: CarModel;  // selectedModel prop에 CarModel 타입을 지정합니다.
}

const ScrollPanel: React.FC<ScrollPanelProps> = ({ selectedModel }) => {
  const [currentModel, setCurrentModel] = useState<CarModel | null>(selectedModel);  // 상태 변수로서의 selectedModel
  const { model } = useParams<{ model: string }>();  // URL 파라미터에서 모델 이름 가져오기

  // `modelsData[0]`을 사용해서 모델을 순회
  const modelKeys = Object.keys(modelsData[0]);

  // 원하는 모델을 두 번째로 이동 (예: "Rover"가 두 번째로 오게)
  const targetModel = "rover"; // 두 번째로 올 모델 이름
  const reorderedModels = [
    modelsData[0][targetModel],  // 원하는 모델을 배열 첫 번째에 넣기
    ...modelKeys.filter(key => key !== targetModel).map(key => modelsData[0][key as keyof typeof modelsData[0]])  // 나머지 모델들
  ];

  // URL 파라미터로 모델을 변경할 때마다 상태를 업데이트
  useEffect(() => {
    if (model) {
      const selectedModelFromData = modelsData[0][model as keyof typeof modelsData[0]];  // URL 파라미터로 모델 데이터를 찾음
      setCurrentModel(selectedModelFromData);  // 해당 모델 데이터를 상태에 저장
    }
  }, [model]);

  // selectedModel이 null일 경우 로딩 화면 표시
  if (!currentModel) return <div>Loading...</div>;

    return (
        <div className="panel">

            <div className="panel-intro" id="intro">
              <img id="logo" src="/images/common/logo.svg" alt="logo-icon" />
              <h1 id="intro-h1">Ready to Cruise</h1>
              <h3 id="intro-h3">Relax and enjoy the drive</h3>
            </div>

            <img id="radian-model" src={selectedModel.image} alt={`${selectedModel.name} side view`} />
            
            <h1 id="panel-h1">{selectedModel.name}</h1>
            
            <ul className="models">
              {/* <li>Radian RD6</li>
                  <li>Radian Rover</li>
                  <li>Radian Cooper</li> */}
              {/* 배열을 직접 순회하면서 모델 이름 출력 */}
              {reorderedModels.map((model, index) => (
                <li key={index}>{model.name}</li>
              ))}
            </ul>

            <div className="rotator">
              <p>0&deg;</p>
              <svg version="1.1" viewBox="0 0 10 30">
                <path d="M5 5.663V40" fill="none" stroke="#999" strokeWidth="0.92" transform="matrix(1 0 0 1.16492 0 -6.597)" />
                <circle cx="7.423" cy="7.159" r="2.577" fill="#fff" transform="translate(-2.423 -4.582)" />
              </svg>
              <p>360&deg;</p>
            </div>

            <ScrollPanelSpecs />

            <ScrollPanelChars />

            <div className="panel-outro">
            <h2>{currentModel.name}</h2> {/* 선택된 모델 이름 */}
        <p>${currentModel.price}</p>
                <button>Build Now</button>
            </div>
        </div>
    );
};

export default ScrollPanel;

