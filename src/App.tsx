import './App.css';
import { Container } from './App.style';
import MainLayout from './layout/MainLayout';
import DashboardPage from './pages/dashboard';

function App() {
  return (
    <Container>
      <MainLayout>
        <DashboardPage></DashboardPage>
      </MainLayout>
    </Container>
  );
}

export default App;
