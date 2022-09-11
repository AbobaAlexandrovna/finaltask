import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const BodyConteiner = styled.div`
    
`;

const BodyTitle = styled.div`
    margin: 0;
    padding: 10px 20px;
    font-size: 1.3em;
    font-weight: bold; 
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    gap: 20px;
`;

// const CardSkeleton = styled.div`
//     outline: 1px solid #df6ca2;
//     background-color: pink;
//     width: 200px;
//     height: 240px;
//     box-shadow: 0px 10px 20px 2px rgba(179, 26, 26, 0.25);
//     border-radius: 20px;
//     &:hover{
//         transform: scale(1.1);
//     };
// `;

const items = [
    {
        name: "name 1",
        id: 1,
        price: 5000
    },
    {
        name: "name 2",
        id: 2,
        price: 5000
    },
    {
        name: "name 3",
        id: 3,
        price: 5000
    },
    {
        name: "name 4",
        id: 4,
        price: 5000
    },
]

function Body(props) {
    return (
        <BodyConteiner>
            <BodyTitle>
                <span>Коллекция букетов</span>
            </BodyTitle>
            <Cards>
                {/* <Card favoriteEnabled={true}></Card>
                <Card favoriteEnabled={true}></Card>
                <Card favoriteEnabled={true}></Card>
                <Card favoriteEnabled={true}></Card>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton> */}
                {items.map((obj) =>
                    (
                        <Card   
                            favoriteEnabled={true}
                            name = {obj.name}
                            key = {obj.id}
                            id = {obj.id}
                            price = {obj.price} 
                        />
                    )
                )}
            </Cards>
            
        </BodyConteiner>
    );
};

export default Body;
