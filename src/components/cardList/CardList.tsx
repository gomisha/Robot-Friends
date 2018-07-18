import * as React from 'react';
import robots from "../../data/robots";
import Card from "../card/Card";
import ICardListProps from "./ICardListProps";

const CardList = (props: ICardListProps) => {
    return (
        <div>
            {
                props.robots.map((current, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                            username={robots[i].username}
                        />
                    );
                })
        }
        </div>
    );
};

export default CardList;