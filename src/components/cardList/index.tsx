import * as React from 'react';
import Card from "../card";
import ICardListProps from "./ICardListProps";

const CardList = (props: ICardListProps) => {
    return (
        <div>
            {
                props.robots.map((current, i) => {
                    return (
                        <Card
                            key={props.robots[i].id}
                            id={props.robots[i].id}
                            name={props.robots[i].name}
                            email={props.robots[i].email}
                            username={props.robots[i].username}
                        />
                    );
                })
        }
        </div>
    );
};

export default CardList;