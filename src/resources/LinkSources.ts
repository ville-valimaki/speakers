export interface ISource {
    title: string,
    text: string,
    link: string,
}

export interface ISourceList extends Array<ISource> {}

const LinkSources: ISourceList = [
    {title: 'Crossover calculator', text: 'V.Cap', link: 'https://www.v-cap.com/speaker-crossover-calculator.php'},
    {title: 'Enclosure theory', text: 'Quarter wave theory', link: 'http://www.quarter-wave.com/'},
    {title: 'Rectifying basics', text: 'Electronics forum', link: 'https://www.electronicsforu.com/technology-trends/learn-electronics/half-full-wave-rectifier-basics'},
];

export default LinkSources;