import React, { Component } from 'react';

class Amplifiers extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ContentContainer MarginedSmall">
                <div className="ContentFull Margined PaddedOnSmall">
                    <h2 className="paddingMedium">Amplifiers</h2>
                    <p className="paddingSmall">With these introductions you will gain some basic understanding of concepts that are related in designing and building your own amplifier. Questions answered are:</p>
                    <ul>
                        <li>How to rectify AC to DC</li>
                        <li>Rectifying basics</li>
                        <li>Understanding the capacitor need</li>
                    </ul>
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <h3 className="MarginedSmall">Rectifying alternate current</h3>
                    <p className="MarginedSmall">When converting AC to DC for amplifier usage there are two common ways to achive this.</p>
                    <h4 className="MarginedMini">Half wave rectifiers</h4>
                    <p className="MarginedSmall">Half wave rectifiers require only one diode and one capacitor. Downside is that you will get more voltage ripple and require a larger capacitor to combat it.</p>
                    <h4 className="MarginedMini">Full wave rectifiers</h4>
                    <p className="MarginedSmall">Full wave rectifiers require at least two diodes or optionally an diode bridge which is however a common component. Upside is that you will get less voltage ripple and require a smaller capacitor. It also however introduces requirements for the secondary AC coil of you transformer, most commonly a two secondary coil alignment where you can join the middle of the secondary coils together and route the other ends of the coil separately via the diodes.</p>
                </div>
                <div className="ContentHalf MarginedSmall PaddedOnSmall">
                    <h3 className="MarginedSmall">Capacitors</h3>
                    <p className="MarginedMini">Having correct sized capacitors is a very crucial part of having great sounding setup. Many hifi enthusiasts even improve commercial amplifiers by upgrading the capacitors in the amplifier.</p>
                    <p className="MarginedMini">To underline their biggest responsibility in the power supply chain: it is their responsibility to cope with the sudden power surges your system might require. If this drain for power is not sufficiently met your system can sound weak, lacking or muddy.</p>
                </div>
            </div>
        );
    }
}
export default Amplifiers;
