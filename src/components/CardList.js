import React from "react";
import Card from "./Card";



const CardList = ({robotsArr}) => {
    return (
        <div>
            {robotsArr.map((robot, i) => {
                return (
                    <Card
                        key={i}
                        hash={robot.hash}
                        name={robot.name}
                        email={robot.email}/>
                )
            })
            }
        </div>
    );
}

export default CardList