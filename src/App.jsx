import Navbar from './components/Navbar/Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nosotros from "./components/Pages/Nosotros";
import Tecnicos from "./components/Pages/Tecnicos/";
import Cursos from "./components/Pages/Cursos";
import CampusVirtual from "./components/Pages/CampusVirtual";
import Noticias from "./components/Pages/Noticias";
import Inicio from "./components/Pages/inicio";

function App() {

  return (
    <Router>

      <head> 
        <title>ASATEC</title>
        <link rel="icon" type='image/x-icon' href='./public/img/ASATEC-logo.png' />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>

      <body>
      <Navbar />

      <Routes>
        <Route path='/' element={<Inicio />}/>
        
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/tecnicos" element={<Tecnicos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/campusVirtual" element={<CampusVirtual />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
      </body>


    </Router>
  )
}

export default App;