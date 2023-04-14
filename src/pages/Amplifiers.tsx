import React from 'react';

interface IProps {}

interface IState {}

class Amplifiers extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ContentContainer">
                <div className="V2ContentFull V2HPaddedOnSmall V2VPaddingLarge">
                    <h2 className="V2VPaddingMedium">Amplifiers</h2>
                    <p className="V2VPaddingSmall V2HRightPaddingOnLarge">With these introductions you will gain some basic understanding of concepts that are related in designing and building your own amplifier. Questions answered are:</p>
                    <ul>
                        <li>How to rectify AC to DC</li>
                        <li>Rectifying basics</li>
                        <li>Understanding the capacitor need</li>
                    </ul>
                </div>
                <div className="V2ContentHalf V2HPaddedOnSmall Column">
                    <h3 className="V2VPaddingMedium V2HRightPaddingOnLarge">Rectifying alternate current</h3>
                    <p className="V2VPaddingMedium V2HRightPaddingOnLarge">When converting AC to DC for amplifier usage there are two common ways to achive this.</p>
                    <h4 className="V2VPaddingSmall V2HRightPaddingOnLarge">Half wave rectifiers</h4>
                    <p className="V2VPaddingMedium V2HRightPaddingOnLarge">Half wave rectifiers require only one diode and one capacitor. Downside is that you will get more voltage ripple and require a larger capacitor to combat it.</p>
                    <h4 className="V2VPaddingSmall V2HRightPaddingOnLarge">Full wave rectifiers</h4>
                    <p className="V2VPaddingSmall V2VPaddingMedium V2HRightPaddingOnLarge">To achieve smoother voltage output with a smaller capacitor, a full wave rectifier necessitates the use of two diodes or a diode bridge, which is a widely available component. However, this method requires a specific alignment of the secondary AC coil in your transformer.</p>
                    <p className="V2VPaddingLarge V2HRightPaddingOnLarge"> Typically, this involves using a two-secondary coil alignment and connecting the middle of the secondary coils together while routing the other ends of the coil separately via the diodes.</p>
                </div>
                <div className="V2ContentHalf V2HPaddedOnSmall Column">
                    <h3 className="V2VPaddingMedium V2HRightPaddingOnLarge">Capacitors</h3>
                    <p className="V2VPaddingSmall V2VPaddingMedium V2HRightPaddingOnLarge">Having correct sized capacitors is a very crucial part of having great sounding setup. Many hifi enthusiasts even improve commercial amplifiers by upgrading the capacitors in the amplifier.</p>
                    <p className="V2VPaddingSmall V2HRightPaddingOnLarge">To underline their biggest responsibility in the power supply chain: it is their responsibility to cope with the sudden power surges your system might require. If this drain for power is not sufficiently met your system can sound weak, lacking or muddy.</p>
                </div>
            </div>
        );
    }
}
export default Amplifiers;
