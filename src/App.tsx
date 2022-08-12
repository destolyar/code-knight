import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Welcome } from './components/Welcome';
import {
  Routes,
  Route,
} from "react-router-dom";
import { ClockContainer } from './components/ClockContainer';
import { Semicircle } from './components/Semicircle';

const App: React.FC = () => {
  return (
    <div className="App"> 
      <Header/> 
      <Layout>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/clock' element={<ClockContainer/>}/>
            <Route path='/semicircle' element={<Semicircle/>}/>
        </Routes>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
