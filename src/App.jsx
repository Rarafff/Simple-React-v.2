import { Routes, Route } from 'react-router-dom'

import InputPage from './pages/InputPage';
import DetailPage from './pages/DetailPage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <NavbarComponent/>

    <Routes>
      <Route path='/' Component={InputPage}/>
      <Route path='detail' Component={DetailPage}/>
    </Routes>

    <FooterComponent/>
  </div>
}
export default App
