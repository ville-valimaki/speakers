import React from 'react';

import '../styles/Inputs.css';

import Calculator from "../util/Calculator";

interface IProps {}

interface IState {
    qts: number | null,
    qms: number | null,
    vas: number | null,
    fs: number | null,

    vbClosed: string,
    frClosed: string,
    vbReflex: string,
    fbReflex: string,
    f3Reflex: string,
}

class Speakers extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            qts: null,
            qms: null,
            vas: null,
            fs: null,

            vbClosed: '-',
            frClosed: '-',
            vbReflex: '-',
            fbReflex: '-',
            f3Reflex: '-',
        };
    }

    updateEnclosureCalculation = () => {
        if (this.state.qts && this.state.vas && this.state.fs) {
            const calculator = new Calculator();
            const result = calculator.calculate(this.state.qts, this.state.vas, this.state.fs);

            this.setState({
                vbClosed: Math.ceil(result.closed.vb) + ' litre',
                frClosed: Math.ceil(result.closed.fr) + ' hz',
                vbReflex: Math.ceil(result.reflex.vb) + ' litre',
                fbReflex: Math.ceil(result.reflex.fb) + ' hz',
                f3Reflex: Math.ceil(result.reflex.f3) + ' hz',
            });
        }
    }

    render () {
        return (
        <div className="ContentContainer">
            <div className="V2ContentFull V2HPaddedOnSmall V2VPaddingLarge">
                <h2 className="V2VPaddingMedium">Speaker enclosures</h2>
                <p className="V2VPaddingSmall">With this calculator you can calculate cabinet sizes and tuning frequencies based on the given speaker Thiele-Small parameters for closed and reflex cabinets.</p>
                <p>Closed enclosure will provide a neutral Butterworth 2nd degree style rolloff and reflex cabinet a steep Butterworth 4th degree style rolloff.</p>
            </div>
            <div className="V2ContentFull V2HPaddedOnSmall V2VPaddingSmall">
                <h3>Speaker parameters</h3>
            </div>
            <div className="V2ContentFull V2HPaddedOnSmall V2VPaddingLarge">
                <div className="V2ContentQuarter">
                    <label className="Label">
                        <span>Qts</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { qts: Number(event.target.value) },
                            this.updateEnclosureCalculation
                            )} />
                    </label>
                </div>
                <div className="V2ContentQuarter">
                    <label className="Label">
                        <span>Qms</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { qms: Number(event.target.value) },
                            this.updateEnclosureCalculation
                            )} />
                    </label>
                </div>
                <div className="V2ContentQuarter">
                    <label className="Label">
                        <span>Vas</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { vas: Number(event.target.value) },
                            this.updateEnclosureCalculation
                            )}/>
                    </label>
                </div>
                <div className="V2ContentQuarter">
                    <label className="Label">
                        <span>Fs</span>
                        <input className="Input" type="text" onChange={(event) => this.setState(
                            { fs: Number(event.target.value) },
                            this.updateEnclosureCalculation
                            )}/>
                    </label>
                </div>
            </div>
            <div className="V2ContentFull V2HPaddedOnSmall V2VPaddingLarge">
                <div className="V2ContentHalfFixed Column">
                    <h3>Closed cabinet</h3>
                    <p className="ResultElement">Resonance Frequency (Fr): {this.state.frClosed}</p>
                    <p className="ResultElement">Cabinet Volume (Vb): {this.state.vbClosed}</p>
                </div>
                <div className="V2ContentHalfFixed Column">
                    <h3>Reflex cabinet</h3>
                    <p className="ResultElement">Tuning Frequency (Fb): {this.state.fbReflex}</p>
                    <p className="ResultElement">3 Db dampening (F3): {this.state.f3Reflex}</p>
                    <p className="ResultElement">Cabinet Volume (Vb): {this.state.vbReflex}</p>
                </div>
            </div>
            <div className="V2ContentFull V2HPaddedOnSmall">
                <h3 className="V2VPaddingSmall">Transmission line</h3>
                <p className="V2VPaddingSmall">Transmission line enclosures can offer you an effective way of extending the elements capability to produce low ends. It however requires a lot of cabinet volume due to the fact that you should relate the length of the sound channel from the speaker related to the wanted frequency extension.</p>
                <p className="V2VPaddingSmall">Most commonly quarter or half of the wavelength is used. You can drop the required length significantly by stuffing the channel with dampening material. General rule of thumb is that you should start from around two times the surface area of the driver and exit the enclosure with an opening the size around three quarters of the drivers surface area.</p>
                <p className="V2VPaddingSmall">There are some recommendations for the Thiele-Small parameters of an driver that benefits the most of this type of enclosure: Qts 0.25 - 0.4, Qes 0.3 - 0.4. The setup also benefits of an low element Fs value.</p>
            </div>
        </div>
        );
    }
}

export default Speakers;
