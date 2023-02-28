import './App.css';
import LandingPage from './componentes/landing/landingPage';
import { Route, Routes } from 'react-router-dom'
import Home from './componentes/homePage/home';
import Detail from './componentes/detailPage/DetailPage';
import Form from './componentes/formPage/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
