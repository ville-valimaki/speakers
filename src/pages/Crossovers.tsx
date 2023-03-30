import React from 'react';
import CrossoverCalculator from "../util/CrossoverCalculator";

import crossover1 from '../img/crossover1.png';
import crossover2 from '../img/crossover2.png';

import '../styles/Inputs.css';
import '../styles/Crossovers.css';

interface IProps {}

interface IState {
    r1: number | null,
    r2: number | null,
    fLow: number | null,
    fHigh: number | null,

    firstL1: number | null,
    firstC1: number | null,
    secondL1: number | null,
    secondC1: number | null,
    secondL2: number | null,
    secondC2: number | null,
}

class Crossovers extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            r1: null,
            r2: null,
            fLow: null,
            fHigh: null,

            firstL1: null,
            firstC1: null,
            secondL1: null,
            secondC1: null,
            secondL2: null,
            secondC2: null,
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
                  <h2 className="PaddingMedium">Crossovers</h2>
                  <p className="PaddingSmall">With this calculator you can calculate the wanted capacitor and inductor values for creating an
                      crossover circuit for first or second degree crossover. The same values for the cutoff frequency apply
                      whether you are doing a low-, high- or bandpass crossover.</p>
                    <p>This example contains a setup of one driver and one tweeter, but by doing multiple calculations you can define as many elements as wanted.</p>
                </div>
                <div className="ContentQuarter MarginedSmall PaddedOnSmall">
                    <label className="Label">
                        <span>Driver ohm</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { r1: Number(event.target.value) },
                            this.updateCrossover
                        )} />
                    </label>
                </div>
                <div className="ContentQuarter MarginedSmall PaddedOnSmall">
                    <label className="Label">
                        <span>Tweeter ohm</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { r2: Number(event.target.value) },
                            this.updateCrossover
                        )} />
                    </label>
                </div>
                <div className="ContentQuarter MarginedSmall PaddedOnSmall">
                    <label className="Label">
                        <span>Lowpass Freq</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { fLow: Number(event.target.value) },
                            this.updateCrossover
                        )} />
                    </label>
                </div>
                <div className="ContentQuarter MarginedSmall PaddedOnSmall">
                    <label className="Label">
                        <span>Highpass Freq</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { fHigh: Number(event.target.value) },
                            this.updateCrossover
                        )} />
                    </label>
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <h3>First degree</h3>
                    <p className="ResultElement FloatOnSmall">L1 (mH): {this.state.firstL1}</p>
                    <p className="ResultElement FloatOnSmall">C1 (µF): {this.state.firstC1}</p>
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <img className="CrossoverImg" src={crossover1} alt="First degree crossover" />
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <h3>Second degree</h3>
                    <p className="ResultElement FloatOnSmall">L1 (mH): {this.state.secondL1}</p>
                    <p className="ResultElement FloatOnSmall">L2 (mH): {this.state.secondL2}</p>
                    <p className="ResultElement FloatOnSmall">C1 (µF): {this.state.secondC1}</p>
                    <p className="ResultElement FloatOnSmall">C2 (µF): {this.state.secondC2}</p>
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <img className="CrossoverImg" src={crossover2} alt="Second degree crossover" />
                </div>
            </div>
        );
    }
}

export default Crossovers;
