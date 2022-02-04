import './styles/Layout.css';
import { Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga';

import Header from './Header';
import Navigation from './Navigation';
import Speakers from "./pages/Speakers";
import Amplifiers from "./pages/Amplifiers";
import Crossovers from "./pages/Crossovers";
import Links from "./pages/Links";

const TRACKING_ID = "G-WZSCWBEWC7";
ReactGA.initialize(TRACKING_ID);

function App() {
    return (
      <div className="Content">
        <Header/>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Speakers />} />
            <Route path="/crossovers" element={<Crossovers />} />
            <Route path="/amplifiers" element={<Amplifiers />} />
            <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    );
}

export default App;
