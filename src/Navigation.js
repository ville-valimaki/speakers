import './styles/Navigation.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();
    return (
    <div className="ContentContainer MarginedSmall NavItems">
        <div className="ContentQuarter MarginedSmall">
            <div className="NavItem">
                <a href="/" className="NavLink" onClick={(event) => {event.preventDefault(); navigate('/', { replace: true })}}>Enclosures</a>
            </div>
        </div>
        <div className="ContentQuarter MarginedSmall">
            <div className="NavItem">
                <a href="/crossovers" className="NavLink" onClick={(event) => {event.preventDefault(); navigate('/crossovers', { replace: true })}}>Crossovers</a>
            </div>
        </div>
        <div className="ContentQuarter MarginedSmall">
            <div className="NavItem">
                <a href="/amplifiers" className="NavLink"onClick={(event) => {event.preventDefault(); navigate('/amplifiers', { replace: true })}}>Amplifiers</a>
            </div>
        </div>
        <div className="ContentQuarter MarginedSmall">
            <div className="NavItem">
                <a href="/links" className="NavLink"onClick={(event) => {event.preventDefault(); navigate('/links', { replace: true })}}>Links</a>
            </div>
        </div>
    </div>
  );
}

export default Navigation;
