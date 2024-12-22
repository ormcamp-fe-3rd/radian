import '../styles/ProductDetail.css';
import { Car } from '../types/modelsTypes';

interface ProductDetailIntroProps {
  carData: Car;  // 타입을 Car로 지정
}

const ProductDetailIntro = ({ carData }: ProductDetailIntroProps) => {
    return (
        <section className="detail-intro">
          <div className='detail-intro-img'>
          <img src={carData.introImage} alt={carData.name} />
          </div>
          <h1 className='detail-intro-title'>{carData.name},<br />{carData.description}</h1>
        </section>
    );
};

export default ProductDetailIntro; 