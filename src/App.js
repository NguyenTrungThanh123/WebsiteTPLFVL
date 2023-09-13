import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
function App() {
  
  return (
         <BrowserRouter>
            <Header />
         </BrowserRouter>
  );
}

export default App;
