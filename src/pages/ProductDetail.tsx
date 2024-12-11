import '../styles/ProductDetail.css';

/** 컴포넌트 */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';

const ProductDetail: React.FC = () => {
    return (
        <>
            <Header />

            <Timeline />
        
            <Footer />
        </>
    );
};

export default ProductDetail;