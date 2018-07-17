import * as React from 'react';
import "./Card.css";

export interface IProps {
    name: string;
    id: number;
    email: string;
}

const Card = (props: IProps) => {
// class Card extends React.Component<IProps> {
//    public render() {
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="robots" src={`https://robohash.org/${props.id}?200x200`}/>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>
        );
    };
// }

export default Card;