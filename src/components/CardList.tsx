import * as React from 'react';
import { robots } from "../data/robots";
import Card from "./Card";
import ICardListProps from "./ICardListProps";

const CardList = (props: ICardListProps) => {
    const cardList = props.robots.map((current, i) => {
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username}/>;
    });
    return (
        <div>
            {cardList}
        </div>
    );
};

export default CardList;