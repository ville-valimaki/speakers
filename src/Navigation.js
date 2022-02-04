import './styles/Navigation.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();
    return (
    <div className="ContentContainer MarginedSmall NavItems">
        <div className="ContentQuarter MarginedSmall">
            <div className="NavItem">
                <a className="NavLink" onClick={() => navigate('/', { replace: true })}>Enclosures</a>
            </div>
        </div>
        <div className="ContentQuarter MarginedSmall">
            <div className="NavItem">
                <a className="NavLink" onClick={() => navigate('/crossovers', { replace: true })}>Crossovers</a>
            </div>
        </div>
        <div className="ContentQuarter MarginedSmall">
            <div className="NavItem">
                <a className="NavLink"onClick={() => navigate('/amplifiers', { replace: true })}>Amplifiers</a>
            </div>
        </div>
        <div className="ContentQuarter MarginedSmall">
            <div className="NavItem">
                <a className="NavLink"onClick={() => navigate('/links', { replace: true })}>Links</a>
            </div>
        </div>
    </div>
  );
}

export default Navigation;
