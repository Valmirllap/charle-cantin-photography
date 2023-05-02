import './App.css';
import Layout from 'components/UI/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from 'components/Accueil';
import Galerie from 'components/Gallerie';
import Tarifs from 'components/Tarifs';
import Contact from 'components/Contact';



function App() {
  return(
    <Router>
      <Layout>
        <Routes>
          <Route element={<Contact/>} path='/contact'/>
          <Route element={<Tarifs/>} path='/tarifs'/>
          <Route element={<Galerie/>} path='/galerie'/>
          <Route element={<Accueil/>} exact path='/'/>
        </Routes>
      </Layout>
    </Router>
      
  )
}

export default App;
