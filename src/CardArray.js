import React from 'react';
import Card from './Card';

const CardArray = ({robots}) => {
    return(
        robots.map((user,i)=> <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)
    )
}

export default CardArray;