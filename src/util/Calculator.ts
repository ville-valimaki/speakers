interface IClosedResult {
    fr: number|null,
    vb: number|null
}

interface IReflexResult {
    fb: number|null,
    f3: number|null,
    vb: number|null,
}

interface ICalculator {
    qtot: number,
    closed: IClosedResult,
    reflex: IReflexResult,
    calculate(qts: number, vas: number, fs: number): {closed: IClosedResult, reflex: IReflexResult},
}

export default class Calculator implements ICalculator {

    qtot: number
    closed: IClosedResult
    reflex: IReflexResult


    constructor() {
        this.qtot = 0.707;
        this.closed = {
            fr: null,
            vb: null,
        }
        this.reflex = {
            fb: null,
            f3: null,
            vb: null,
        }
    }

    /**
     * @param qts
     * @param vas
     * @param fs
     * @returns {{closed: {fr: number, vb: number}, reflex: {fb: number, vb: number, f3: number}}}
     */
    calculate = (qts: number, vas: number, fs: number) => {
        return {
            closed: this.calculateClosed(qts, vas, fs),
            reflex: this.calculateReflex(qts, vas, fs),
        }
    }

    /**
     * @param qts
     * @param vas
     * @param fs
     * @returns {{fr: number, vb: number}}
     */
    calculateClosed = (qts: number, vas: number, fs: number) => {
        const alpha = (Math.pow(this.qtot, 2) / Math.pow(qts, 2)) - 1;
        const vb = vas / alpha;
        const fr = (Math.pow((alpha + 1), 0.5)) * fs;

        return {
            fr: fr,
            vb: vb,
        }
    }

    /**
     * @param qts
     * @param vas
     * @param fs
     * @returns {{fb: number, vb: number, f3: number}}
     */
    calculateReflex = (qts: number, vas: number, fs: number) => {

        const helperValues = this._getHelperValuesByQts(qts);

        const vb = vas / helperValues.alpha;
        const fb = helperValues.h * fs;
        const f3 = helperValues.ratio * fs;

        return {
            fb: fb,
            f3: f3,
            vb: vb,
        }
    }

    /**
     * @param qts
     * @returns {{alpha: number, h: number, ratio: number}}
     * @private
     */
    _getHelperValuesByQts(qts: number) {
        const data = [
            {qts: 0.20, values: {alpha: 7.78, h: 1.94, ratio: 2.53}},
            {qts: 0.21, values: {alpha: 6.95, h: 1.85, ratio: 2.4}},
            {qts: 0.22, values: {alpha: 6.24, h: 1.77, ratio: 2.28}},
            {qts: 0.23, values: {alpha: 5.61, h: 1.69, ratio: 2.16}},
            {qts: 0.24, values: {alpha: 5.07, h: 1.63, ratio: 2.06}},
            {qts: 0.25, values: {alpha: 4.58, h: 1.56, ratio: 1.97}},
            {qts: 0.26, values: {alpha: 4.15, h: 1.51, ratio: 1.88}},
            {qts: 0.27, values: {alpha: 3.77, h: 1.45, ratio: 1.79}},
            {qts: 0.28, values: {alpha: 3.43, h: 1.4, ratio: 1.72}},
            {qts: 0.29, values: {alpha: 3.12, h: 1.36, ratio: 1.64}},
            {qts: 0.30, values: {alpha: 2.85, h: 1.31, ratio: 1.57}},
            {qts: 0.31, values: {alpha: 2.59, h: 1.27, ratio: 1.51}},
            {qts: 0.32, values: {alpha: 2.37, h: 1.24, ratio: 1.44}},
            {qts: 0.33, values: {alpha: 2.16, h: 1.2, ratio: 1.38}},
            {qts: 0.34, values: {alpha: 1.97, h: 1.17, ratio: 1.33}},
            {qts: 0.35, values: {alpha: 1.8, h: 1.14, ratio: 1.27}},
            {qts: 0.36, values: {alpha: 1.64, h: 1.11, ratio: 1.22}},
            {qts: 0.37, values: {alpha: 1.49, h: 1.08, ratio: 1.17}},
            {qts: 0.38, values: {alpha: 1.36, h: 1.06, ratio: 1.12}},
            {qts: 0.39, values: {alpha: 1.23, h: 1.06, ratio: 1.07}},
            {qts: 0.40, values: {alpha: 1.11, h: 1.03, ratio: 1.02}},
            {qts: 0.41, values: {alpha: 1.0, h: 0.99, ratio: 0.98}},
            {qts: 0.42, values: {alpha: 0.91, h: 0.97, ratio: 0.94}},
            {qts: 0.43, values: {alpha: 0.83, h: 0.94, ratio: 0.9}},
            {qts: 0.44, values: {alpha: 0.75, h: 0.92, ratio: 0.87}},
            {qts: 0.45, values: {alpha: 0.69, h: 0.9, ratio: 0.83}},
            {qts: 0.46, values: {alpha: 0.63, h: 0.88, ratio: 0.81}},
            {qts: 0.47, values: {alpha: 0.58, h: 0.86, ratio: 0.78}},
            {qts: 0.48, values: {alpha: 0.54, h: 0.84, ratio: 0.76}},
            {qts: 0.49, values: {alpha: 0.5, h: 0.82, ratio: 0.74}},
            {qts: 0.50, values: {alpha: 0.46, h: 0.8, ratio: 0.72}},
            {qts: 0.51, values: {alpha: 0.43, h: 0.79, ratio: 0.7}},
            {qts: 0.52, values: {alpha: 0.41, h: 0.77, ratio: 0.68}},
            {qts: 0.53, values: {alpha: 0.38, h: 0.76, ratio: 0.67}},
            {qts: 0.54, values: {alpha: 0.36, h: 0.74, ratio: 0.65}},
            {qts: 0.55, values: {alpha: 0.35, h: 0.73, ratio: 0.64}},
            {qts: 0.56, values: {alpha: 0.33, h: 0.72, ratio: 0.63}},
            {qts: 0.57, values: {alpha: 0.31, h: 0.71, ratio: 0.62}},
            {qts: 0.58, values: {alpha: 0.30, h: 0.70, ratio: 0.61}},
            {qts: 0.59, values: {alpha: 0.29, h: 0.69, ratio: 0.60}},
            {qts: 0.60, values: {alpha: 0.27, h: 0.68, ratio: 0.59}},
        ];

        const result = data.find(content => content.qts === qts);

        return result ? result.values : {alpha: 0, h: 0, ratio: 0};
    }

}
