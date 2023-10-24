import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Projects } from './layout/section/projects/Projects';
import { Contacts } from './layout/section/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { Map } from './layout/section/contacts/map/Map';

function App() {
    return (
        <div className="App">
          <Header />
          <Main />
          <Skills />
          <Projects />
          <Contacts />
          <Map /> 
          <Footer />
        </div>
    );
}

export default App;



