import * as React from 'react';
import { robots } from "../data/robots";
import Card from "./Card";
import ICardListProps from "./ICardListProps";

const CardList = (props: ICardListProps) => {
    const cardList = props.robots.map(current => {
        return <Card key={robots[0].id} id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username}/>;
    });
    return (
        <div>
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username}/>
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username}/>
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} username={robots[1].username}/>
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} username={robots[2].username}/>
            <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} username={robots[3].username}/>
            <Card id={robots[4].id} name={robots[4].name} email={robots[4].email} username={robots[4].username}/>
        </div>
    );
};

export default CardList;