import '../styles/ProductDetail.css';
import { useState, useEffect } from 'react';
import modelsData from '../data/modelsData.json';



interface CarModel {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  specs: string[];
  chars: string[];
}

// `modelsData`의 각 모델에 대한 타입을 명시
interface modelsData {
  RD6: CarModel;
  Rover: CarModel;
  Cooper: CarModel;
}

interface ScrollPanelProps {
  match: {
    params: {
      model: string;
    };
  };
}

const ScrollPanel = ({ match }: ScrollPanelProps) => {
  const [selectedModel, setSelectedModel] = useState<CarModel | null>(null);

  useEffect(() => {
    const modelName = match.params.model;  // URL에서 모델 이름을 가져옴
    const data = modelsData[0];  // 첫 번째 객체를 사용
    const model = data[modelName as keyof typeof data];  // 모델 이름을 기반으로 데이터 접근
    setSelectedModel(model);
  }, [match.params.model]);

  if (!selectedModel) return <div>Loading...</div>;

    return (
        <div className="panel">

            <div className="panel-intro" id="intro">
              <img id="logo" src="/images/common/logo.svg" alt="logo-icon" />
              <h1 id="intro-h1">Ready to Cruise</h1>
              <h3 id="intro-h3">Relax and enjoy the drive</h3>
            </div>

            <img id="radian-model" src={selectedModel.image} alt={`${selectedModel.name} side view`} />
            
            <h1 id="panel-h1">Radian Rover</h1>
            
            <ul className="models">
              {/* <li>Radian RD6</li>
                  <li>Radian Rover</li>
                  <li>Radian Cooper</li> */}
              {/* 배열을 직접 순회하면서 모델 이름 출력 */}
        {Object.keys(modelsData[0]).map((modelKey) => (
          <li key={modelKey}>{modelsData[0][modelKey as keyof typeof modelsData[0]].name}</li>
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

            

            <div className="panel-outro">
                <h2>Radian Rover</h2>
                <p>$2999.00</p>
                <button>Build Now</button>
            </div>
        </div>
    );
};

export default ScrollPanel;

