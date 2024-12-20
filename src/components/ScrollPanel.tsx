import '../styles/ProductDetail.css';
import { Car } from '../types/modelsTypes';

interface ScrollPanelProps {
  carData: Car;  // 타입을 Car로 지정
}

const ScrollPanel = ({ carData }: ScrollPanelProps) => {

  // 모델 목록
  const models = ['Radian RD6', 'Radian Rover', 'Radian Cooper'];
  
  // 원하는 모델을 두 번째로 고정
  const secondModel = 'Radian Rover';

  // 배열을 재정렬하여 원하는 모델을 두 번째로 위치시킴
  const sortedModels = models
    .filter(model => model !== secondModel) // 'Radian Rover'를 제외한 나머지 모델
    .reduce((acc, model, index) => {
      if (index === 1) {
        acc.push(secondModel); // 두 번째 인덱스에 'Radian Rover' 삽입
      }
      acc.push(model); // 나머지 모델들 추가
      return acc;
    }, [] as string[]);
    
  return (
    <>
      <div className="panel">
        <div className="intro" id="intro">
          <img id="logo" src="/images/common/logo.svg" alt="logo-icon" />
          <h1 id="intro-h1">Ready to Cruise</h1>
          <h3 id="intro-h3">Relax and enjoy the drive</h3>
        </div>
        <img id="radian-model" src={carData.image} alt={carData.name} />
        <h1 id="panel-h1">{carData.name}</h1>
        <ul className="models">
          {sortedModels.map((model, index) => (
            <li key={index}>{model}</li>
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
        <div className="specs">
          <h2>Engine</h2>
          <dl>
            <dt>Bore x Stroke</dt>
            <dd>58mm x 58.6mm</dd>
            <dt>Clutch</dt>
            <dd>Automatic centrifugal dry clutch</dd>
            <dt>Consumption</dt>
            <dd>36.8 Km/I (WMTC cycle)</dd>
            <dt>Cooling</dt>
            <dd>Air</dd>
            <dt>CO2 Emissions</dt>
            <dd>65 g/Km</dd>
            <dt>Distribution</dt>
            <dd>Single overhead camshaft, 3 valves (2 input, 1 output)</dd>
            <dt>Engine</dt>
            <dd>Single cylinder 4-stroke -i-get</dd>
          </dl>
          <dl>
            <dt>Engine Capacity</dt>
            <dd>155c</dd>
            <dt>Fuel system</dt>
            <dd>Electronic injection</dd>
            <dt>Lubrication</dt>
            <dd>Oil with wet sump</dd>
            <dt>Max Power</dt>
            <dd>12.9hp (9.6kW) @ 7,750 rpm</dd>
            <dt>Max Torque</dt>
            <dd>9.58 ft-lbs (13 Nm) @ 5250 rpm</dd>
            <dt>Transmission</dt>
            <dd>Automatic CVT</dd>
            <dt>Starter</dt>
            <dd>Electric</dd>
          </dl>
        </div>
        <div className="chars">
          <h2>Characteristics</h2>
          <dl>
            <dt>Frame</dt>
            <dd>High resistance tubular steel</dd>
            <dt>Front tyre</dt>
            <dd>Tubeless 90/80 - 16", 51J</dd>
            <dt>Rear brake</dt>
            <dd>Tamburo 140mm</dd>
            <dt>Seat height</dt>
            <dd>31.1" (790mm)</dd>
            <dt>Front suspension</dt>
            <dd>Telescopic hydraulic fork, 76mm stroke</dd>
            <dt>Rear tyre</dt>
            <dd>Tubeless 100/80 - 14", 54J</dd>
            <dt>ABS</dt>
            <dd>Front wheel standard ABS</dd>
          </dl>
          <dl>
            <dt>Fuel Tank Capacity</dt>
            <dd>1.58 gal (6 liters)</dd>
            <dt>Rear suspension</dt>
            <dd>Single hydraulic shock absorber with 5-position preload adjustment</dd>
            <dt>Front brake</dt>
            <dd>Single disk 240mm</dd>
            <dt>Length/Width/Wheelbase</dt>
            <dd>76.5" / 27.1" / 52.7"</dd>
            <dt>Emission compliance</dt>
            <dd>EPA, CARB, Transport Canada</dd>
          </dl>
        </div>
        <div className="outro">
          <h2>{carData.name}</h2>
          <p>{carData.price}</p>
          <button className='outro-btn'>Build Now</button>
        </div>
      </div>
    </>
  );
};

export default ScrollPanel;

