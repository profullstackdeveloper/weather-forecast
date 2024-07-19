import { Provider } from 'react-redux';
import './App.css';
import { MainLayout } from './layout';
import DashboardPage from './pages/dashboard';
import { store } from './store';

function App() {
  return (
    <div className='w-screen h-screen'>
      <Provider store={store}>
        <MainLayout>
          <DashboardPage></DashboardPage>
        </MainLayout>
      </Provider>
    </div>
  );
}

export default App;
