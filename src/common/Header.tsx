import React from "react";

import '../styles/Header.css';

interface IProps {}
interface IState {}

export class Header extends React.Component<IProps, IState> {

    render() {
        return (
            <div className="ContentContainer">
                <div className="V2ContentFull V2HPaddedOnSmall Header">
                    <h1 className="Header1">Speaker design <span>Enclosures and Crossovers</span></h1>
                </div>
            </div>
        );
    }
}
