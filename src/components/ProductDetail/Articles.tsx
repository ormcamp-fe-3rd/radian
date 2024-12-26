import '../../styles/ProductDetail.css';
import { Car } from '../../types/modelsTypes';

/** 컴포넌트 */
import ScrollHeader from './ScrollHeader';
import ScrollPanel from './ScrollPanel';
import WrapMaskImg from './WrapMaskImg';
import Safety from './Safety';

interface ArticlesProps {
  carData: Car; // 타입을 Car로 지정
}

const Articles = ({ carData }: ArticlesProps) => {
  return (
    <section className="newspaper-articles">
        <article className="newspaper-toparticle box-wrapper">
          <h1 id='menu1' className="fittext-toparticle-h1-1"><span>{carData.name}</span> <span className="fittext-toparticle-h1-2">{carData.title}</span></h1>

          <section className="newspaper-toparticle-starttext">
              <p className="newspaper-articles-ingress">{carData.description}</p>
              <div className="helper-colsplit-2">
                  <p className="newspaper-articles-anfang">{carData.text}</p>
              </div>
          </section>

          <section className="newspaper-toparticle-story">
              <figure>
                  <img className='introduce-img' alt="model img" src={carData.introImage} width="508" height="188" />
              </figure>
              <hr className="hr-double-top"/>
              <h2><span>HILIGHT</span> ENJOY OUR {carData.name}</h2>
              <hr className="hr-double-bottom"/>
              <div className="detail-container" id="detail-container">
                <div className="wrapper" id="wrapper">
                  <ScrollHeader carData={carData} />
          
                  <ScrollPanel carData={carData} />
          
                  <div className="bkg"></div>
                </div>
          
                <WrapMaskImg />
              </div>
          </section>

          <Safety />
        </article>
      </section>
  );
};

export default Articles;