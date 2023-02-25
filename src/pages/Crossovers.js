import React, { Component } from 'react';
import { CrossoverCalculator } from "../util/CrossoverCalculator";
import ReactGA from "react-ga4";

import crossover1 from '../img/crossover1.png';
import crossover2 from '../img/crossover2.png';

import '../styles/Inputs.css';
import '../styles/Crossovers.css';

ReactGA.send({ hitType: "pageview", page: "/crossovers" });

class Crossovers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            r1: null,
            r2: null,
            fLow: null,
            fHigh: null,

            firstL1: '-',
            firstC1: '-',
            secondL1: '-',
            secondC1: '-',
            secondL2: '-',
            secondC2: '-',
        };
    }

    updateCrossover = () => {
        if (this.state.r1 && this.state.r2 && this.state.fLow && this.state.fHigh) {
            const calculator = new CrossoverCalculator();
            const result = calculator.calculate(this.state.r1, this.state.r2, this.state.fLow, this.state.fHigh);
            this.setState({
                firstL1: result.firstDegree.l1,
                firstC1: result.firstDegree.c1,
                secondL1: result.secondDegree.l1,
                secondC1: result.secondDegree.c1,
                secondL2: result.secondDegree.l2,
                secondC2: result.secondDegree.c2,
            });
        }
    }

    render () {
        return (
            <div className="ContentContainer MarginedSmall">
                <div className="ContentFull Margined PaddedOnSmall">
                  <h2 className="paddingMedium">Crossovers</h2>
                  <p className="paddingSmall">With this calculator you can calculate the wanted capacitor and inductor values for creating an
                      crossover circuit for first or second degree crossover. The same values for the cutoff frequency apply
                      whether you are doing a low-, high- or bandpass crossover.</p>
                    <p>This example contains a setup of one driver and one tweeter, but by doing multiple calculations you can define as many elements as wanted.</p>
                </div>
                <div className="ContentQuarter MarginedSmall PaddedOnSmall">
                    <label className="Label">
                        <span>Driver ohm</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { r1: event.target.value },
                            this.updateCrossover
                        )} />
                    </label>
                </div>
                <div className="ContentQuarter MarginedSmall PaddedOnSmall">
                    <label className="Label">
                        <span>Tweeter ohm</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { r2: event.target.value },
                            this.updateCrossover
                        )} />
                    </label>
                </div>
                <div className="ContentQuarter MarginedSmall PaddedOnSmall">
                    <label className="Label">
                        <span>Lowpass Freq</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { fLow: event.target.value },
                            this.updateCrossover
                        )} />
                    </label>
                </div>
                <div className="ContentQuarter MarginedSmall PaddedOnSmall">
                    <label className="Label">
                        <span>Highpass Freq</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { fHigh: event.target.value },
                            this.updateCrossover
                        )} />
                    </label>
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <h3>First degree</h3>
                    <p className="ResultElement FloatOnSmall">L1: {this.state.firstL1}</p>
                    <p className="ResultElement FloatOnSmall">C1: {this.state.firstC1}</p>
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <img className="CrossoverImg" src={crossover1} alt="First degree crossover" />
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <h3>Second degree</h3>
                    <p className="ResultElement FloatOnSmall">L1: {this.state.secondL1}</p>
                    <p className="ResultElement FloatOnSmall">L2: {this.state.secondL2}</p>
                    <p className="ResultElement FloatOnSmall">C1: {this.state.secondC1}</p>
                    <p className="ResultElement FloatOnSmall">C2: {this.state.secondC2}</p>
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <img className="CrossoverImg" src={crossover2} alt="Second degree crossover" />
                </div>
            </div>
        );
    }
}

export default Crossovers;
