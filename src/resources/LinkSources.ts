interface Source {
    title: string,
    text: string,
    link: string,
}

interface SourceList extends Array<Source> {};

const LinkSources: SourceList = [
    {title: 'Crossover calculator', text: 'V.Cap', link: 'https://www.v-cap.com/speaker-crossover-calculator.php'},
    {title: 'Enclosure theory', text: 'Quarter wave theory', link: 'http://www.quarter-wave.com/'},
    {title: 'Rectifying basics', text: 'Electronics forum', link: 'https://www.electronicsforu.com/technology-trends/learn-electronics/half-full-wave-rectifier-basics'},
];

export default LinkSources;