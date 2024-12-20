import './styles/reset.css';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // react-query 개발 툴 사용 시

/**페이지 컴포넌트 */
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ProductReservation from './pages/ProductReservation';

/**공용 컴포넌트 */
import Header from './components/Header';
import Footer from './components/Footer';

// const queryClient = new QueryClient(); //추가

const App = (): JSX.Element => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register/*" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product-list" element={<ProductList />}></Route>
        <Route path="/product-detail/:carId" element={<ProductDetail />}></Route>
        <Route path="/product-reservation/*" element={<ProductReservation />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
