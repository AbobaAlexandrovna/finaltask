import styled from 'styled-components';
import deleteCart from '../assets/delete.svg';
import React from 'react';
import { useDispatch } from 'react-redux';
import {onDeleteCart} from '../state/slice';

const StyledCartElement = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
    border-top: 1px solid #df6ca2;
    width: 100%;
`;

const NameCartElement = styled.div`
    font-size: 1em;
    font-style: oblique;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
`;

const PriceCartElement = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    font-style: normal;
    display: flex;
    gap: 10px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const StyledDelete = styled.div`
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    };
`;

function CartElement(props) {
    const dispatch = useDispatch();

    const OnDelete = () => {
        dispatch(onDeleteCart(props.item.id))
    };

    return (
        <StyledCartElement>
           <img src={props.item.imgUrl} width="100" height="100" alt={props.item.name}/>
           <Description>
               <NameCartElement>
                    <span>{props.item.name}</span>
                    <PriceCartElement>
                        <span>{props.item.price}</span>
                    </PriceCartElement>
                </NameCartElement>
                <StyledDelete onClick={OnDelete}>
                <img src={deleteCart} width="30" height="30" alt="deleteCart"/>
                </StyledDelete>
            </Description>
        </StyledCartElement>
    );
};

export default CartElement;
