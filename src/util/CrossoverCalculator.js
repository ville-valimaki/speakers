export class CrossoverCalculator {

    constructor() {
        this.firstDegree = {
            l1: null,
            c1: null,
        }
        this.secondDegree = {
            l1: null,
            l2: null,
            c1: null,
            c2: null,
        }
    }

    /**
     * Inductance returned in mH and capacitance in uF
     *
     * @param driverImpendance ohm
     * @param tweeterImpendance ohm
     * @param frequencyLow hz
     * @param frequencyHigh hz
     * @returns {{secondDegree: {l1: number, l2: number, c1: number, c2: number}, firstDegree: {l1: number, c1: number}}}
     */
    calculate = (driverImpendance: number, tweeterImpendance: number, frequencyLow: number, frequencyHigh: number) => {
        return {
            firstDegree: this.calculateFirstDegree(driverImpendance, tweeterImpendance, frequencyLow, frequencyHigh),
            secondDegree: this.calculateSecondDegree(driverImpendance, tweeterImpendance, frequencyLow, frequencyHigh),
        }
    }

    /**
     * @param driverImpendance ohm
     * @param tweeterImpendance ohm
     * @param frequencyLow hz
     * @param frequencyHigh hz
     * @returns {{l1: number, c1: number}}
     */
    calculateFirstDegree = (driverImpendance: number, tweeterImpendance: number, frequencyLow: number, frequencyHigh: number) => {
        return {
            l1: ((159 * driverImpendance) / frequencyLow),
            c1: (159000 / (tweeterImpendance * frequencyHigh)),
        }
    }

    /**
     * @param driverImpendance ohm
     * @param tweeterImpendance ohm
     * @param frequencyLow hz
     * @param frequencyHigh hz
     * @returns {{l1: number, l2: number, c1: number, c2: number}}
     */
    calculateSecondDegree = (driverImpendance: number, tweeterImpendance: number, frequencyLow: number, frequencyHigh: number) => {
        return {
            l1: ((225 * driverImpendance) / frequencyLow),
            l2: ((225 * tweeterImpendance) / frequencyHigh),
            c1: (113000 / (driverImpendance * frequencyHigh)),
            c2: (113000 / (tweeterImpendance * frequencyLow)),
        }
    }

}
