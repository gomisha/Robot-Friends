import * as React from 'react';

export interface IProps {
    name: string;
    id: number;
    email: string;
}

const Card = ({ name, id, email}: IProps) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email} + foo</p>
            </div>
        </div>
    );
};

export default Card;