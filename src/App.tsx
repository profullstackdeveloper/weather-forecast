import { Provider } from 'react-redux';
import './App.css';
import { MainLayout } from './layout';
import DashboardPage from './pages/dashboard';
import { store } from './store';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <div className='w-screen h-screen'>
      <Provider store={store}>
        <AppContextProvider>
          <MainLayout>
            <DashboardPage></DashboardPage>
          </MainLayout>
        </AppContextProvider>
      </Provider>
    </div>
  );
}

export default App;
