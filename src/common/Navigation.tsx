import React from "react";

import '../styles/Navigation.css';
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();
    return (
    <div className="ContentContainer">
        <div className="V2ContentFull V2VPaddingLarge">
            <div className="V2ContentQuarter V2VPaddingMediumOnSmall">
                <div className="NavItem">
                    <a href="/" className="NavLink" onClick={(event) => {event.preventDefault(); navigate('/', { replace: true })}}>Enclosures</a>
                </div>
            </div>
            <div className="V2ContentQuarter V2VPaddingMediumOnSmall">
                <div className="NavItem">
                    <a href="/speakers/src/pages/Crossovers.tsx" className="NavLink" onClick={(event) => {event.preventDefault(); navigate('/crossovers', { replace: true })}}>Crossovers</a>
                </div>
            </div>
            <div className="V2ContentQuarter">
                <div className="NavItem">
                    <a href="/speakers/src/pages/Amplifiers.tsx" className="NavLink" onClick={(event) => {event.preventDefault(); navigate('/amplifiers', { replace: true })}}>Amplifiers</a>
                </div>
            </div>
            <div className="V2ContentQuarter">
                <div className="NavItem">
                    <a href="/speakers/src/pages/Links.tsx" className="NavLink" onClick={(event) => {event.preventDefault(); navigate('/links', { replace: true })}}>Links</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navigation;
