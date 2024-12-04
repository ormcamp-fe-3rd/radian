import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // react-query 개발 툴 사용 시

const queryClient = new QueryClient(); //추가

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Hello, Radian!</h1>
      </div>
      {/* react-query 개발 툴 사용 시 가장 하위에 위치하게 작성 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
