import { Routes, Route } from "react-router-dom";

import './styles/Layout.css';
import './styles/LayoutV2.css';
import { Header } from './common/Header';
import Navigation from './common/Navigation';
import Speakers from './pages/Speakers';
import Amplifiers from './pages/Amplifiers';
import Crossovers from './pages/Crossovers';
import Links from './pages/Links';
import { useAnalytics } from './common/useAnalytics';

function App() {
    useAnalytics();
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
