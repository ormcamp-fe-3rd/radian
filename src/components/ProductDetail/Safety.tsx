import '../../styles/ProductDetail.css';
import { Link } from 'react-router-dom';
import { Car } from '../../types/modelsTypes';

interface SafetyProps {
  carData: Car; // 타입을 Car로 지정
}

const Safety = ({ carData }: SafetyProps) => {

  return (

    <section id='menu3' className="newspaper-toparticle-final">
        <h1>Check your Assistance Systems <span>safety</span></h1>
        <p className="newspaper-articles-safety">Experience seamless driving with our advanced Distance Keeping feature, ensuring a safe and comfortable ride by maintaining a steady gap between you and the vehicle ahead.</p>
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <img src={carData.safetyImages1} alt="safety1" />
          </div>
        </div>   

        <Link to={`/product-reservation/${carData.id}`}>
          <button className="safety-build-btn">Build Now</button>
        </Link>
        <hr/>
    </section>
  );
};

export default Safety;