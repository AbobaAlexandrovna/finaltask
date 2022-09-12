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

const StyledCardSkeleton = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const CardSkeleton = styled.div`
    outline: 1px solid #df6ca2;
    background-color: pink;
    width: 200px;
    height: 240px;
    box-shadow: 0px 10px 20px 2px rgba(179, 26, 26, 0.25);
    border-radius: 20px;
    &:hover{
        transform: scale(1.1);
    };
`;

function Body(props) {

    return (
        <BodyConteiner>
            <BodyTitle>
                <span>Коллекция букетов</span>
            </BodyTitle>
            <Cards>
            {
                props.isLoading ?
                (
                    <StyledCardSkeleton>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </StyledCardSkeleton>
                )
                 :
                (
                    props.items.map((obj) =>
                        <Card
                            key={obj.id}
                            item={obj}
                        />
                    )

               )
            }
            </Cards>
            
        </BodyConteiner>
    );
};

export default Body;
