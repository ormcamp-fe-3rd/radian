import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // react-query 개발 툴 사용 시

/**page */
import Login from '/src/pages/Login';

const queryClient = new QueryClient(); //추가

const App = (): JSX.Element => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Hello, Radian!</h1>
          <Routes>
            <Route path="/login" element={Login} />
          </Routes>
        </div>

        {/* react-query 개발 툴 사용 시 가장 하위에 위치하게 작성 */}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
