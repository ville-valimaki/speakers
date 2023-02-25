import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { createBrowserHistory } from "history";
// import {useEffect } from 'react';

import './styles/Layout.css';
import Header from './Header';
import Navigation from './Navigation';
import Speakers from './pages/Speakers';
import Amplifiers from './pages/Amplifiers';
import Crossovers from './pages/Crossovers';
import Links from './pages/Links';

ReactGA.initialize("G-VM70XJBYK1");
const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send(location.pathname);
});

function App() {
//    useEffect(() => {
//        ReactGA.pageview(window.location.pathname + window.location.search);
//    }, []);
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
