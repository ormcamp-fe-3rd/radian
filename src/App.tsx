import './styles/reset.css';
import './styles/App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // react-query 개발 툴 사용 시

import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';


const queryClient = new QueryClient(); //추가

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/product-list" element={<ProductList />}></Route>
      </Routes>
      <Footer />
      {/* react-query 개발 툴 사용 시 가장 하위에 위치하게 작성 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
