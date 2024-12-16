import './styles/App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // react-query 개발 툴 사용 시
import ProductReservation from './pages/ProductReservation';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const queryClient = new QueryClient(); //추가

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/product-reservation/*" element={<ProductReservation />} />{' '}
        {/* 첫째주 피드백 (1/8) */}
      </Routes>
      <Footer />
      {/* react-query 개발 툴 사용 시 가장 하위에 위치하게 작성 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
