import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/recustomization.css';
import './styles/main.css';

import NavigationBar from './layout/NavigationBar'

import Scheduling from './pages/Scheduling';

function App() {
  return (
    <div id="main">
    <NavigationBar/>
      <div id="woop-body">
        <Routes>
          <Route path="/scheduling" element={<Scheduling/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
