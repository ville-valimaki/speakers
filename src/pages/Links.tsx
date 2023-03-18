import React from 'react';
import LinkSources from '../resources/LinkSources';
import { ISourceList, ISource } from  '../resources/LinkSources';

interface IProps {}

interface IState {
    links?: ISourceList;
}

class Links extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            links: LinkSources
        };
    }

    render () {
        return (
            <div className="ContentContainer MarginedSmall">
                <div className="V2ContentFull V2HPaddedOnSmall V2VPaddingMedium">
                    <h2 className="PaddingMedium">Links and resources</h2>
                    <p>Since this site is nothing else but a small glimpse of what is related to speaker designing, how to address correct frequencies to right elements and give enough power for the elements; we have here a list of hopefully helpful links related to diy hifi.</p>
                </div>
                <div className="V2ContentFull V2HPaddedOnSmall">
                {
                    this.state.links?.map((link: ISource, index: number) => {
                        return (
                            <div className="V2ContentHalf V2VPaddingMedium" key={index}>
                                <div className="V2ContentHalfFixed">
                                    <h4>{link.title}</h4>
                                </div>
                                <div className="V2ContentHalfFixed">
                                    <a target="_blank" rel="noreferrer" href="https://www.v-cap.com/speaker-crossover-calculator.php">{link.text}</a>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default Links;