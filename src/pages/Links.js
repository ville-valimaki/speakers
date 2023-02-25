import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/links" });
function Links() {
  return (

    <div className="ContentContainer MarginedSmall">
        <div className="ContentFull Margined PaddedOnSmall">
            <h2 className="paddingMedium">Links and resources</h2>
            <p>Since this site is nothing else but a small glimpse of what is related to speaker designing, how to address correct frequencies to right elements and give enough power for the elements; we have here a list of hopefully helpful links related to diy hifi.</p>
        </div>
        <div className="ContentQuarter Margine
        dSmall PaddedOnSmall">
            <h4>Crossover calculator</h4>
        </div>
        <div className="ContentQuarter MarginedSmall PaddedOnSmall">
            <a target="_blank" rel="noreferrer" href="https://www.v-cap.com/speaker-crossover-calculator.php">V-cap</a>
        </div>
        <div className="ContentQuarter MarginedSmall PaddedOnSmall">
            <h4>Enclosure theory</h4>
        </div>
        <div className="ContentQuarter MarginedSmall PaddedOnSmall">
            <a target="_blank" rel="noreferrer" href="http://www.quarter-wave.com/">Quarter wave</a>
        </div>
        <div className="ContentQuarter MarginedSmall PaddedOnSmall">
            <h4>Rectifying basics</h4>
        </div>
        <div className="ContentQuarter MarginedSmall PaddedOnSmall">
            <a target="_blank" rel="noreferrer" href="https://www.electronicsforu.com/technology-trends/learn-electronics/half-full-wave-rectifier-basics">Electronics forum</a>
        </div>
    </div>
  );
}

export default Links;
