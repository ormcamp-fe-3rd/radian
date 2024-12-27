import '../../styles/ProductDetail.css';

const ProductDetailIntro = () => {
  return (
    <>
      <header className="newspaper-topheader">
        <hr className="hr-double-top"/>
            <figcaption>Technical Revolutions in Classic Mood</figcaption>
        <hr className="hr-double-bottom"/>
      </header>

      <section className="newspaper-exclusive box-wrapper">
        <p className="newspaper-exclusive-box"><span>ABOUT : </span></p>
      </section>

      <footer className="newspaper-menu">
        <ul className="newspaper-menu-index box-wrapper">
          <li><a href="#menu1" title="Introduce">INTRODUCE <span>1</span></a></li>
          <li><a href="#detail-container" title="Hilight">HILIGHT <span>2</span></a></li>
          <li><a href="#menu3" title="Safety">SAFETY <span>3</span></a></li>
        </ul>
      </footer>
    </>
  );
};

export default ProductDetailIntro;
