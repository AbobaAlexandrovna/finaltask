import styled from 'styled-components';
import plus from '../assets/plus.svg';
import like from '../assets/like.svg';
import React from 'react';
import checkMark from '../assets/check-mark.svg'



const CardConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 0;
    width: 160px;
    outline: 1px solid #df6ca2;
    box-shadow: 0px 10px 20px 2px rgba(179, 26, 26, 0.25);
    border-radius: 20px;
    &:hover{
        transform: scale(1.1);
    };
`;


const NameCard = styled.div`
    font-size: 1em;
    font-style: oblique;
    margin: 5px 0;
    display: flex;
    justify-content: center;
`;

const Description = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const PriceCard = styled.div`
    font-size: 0.8em;
    display: flex;
    gap: 10px;
`;

const StyledPlus = styled.div`
    padding: 5px;
    display: flex;
    cursor: pointer;
    height: auto;
    cursor: pointer;
    border-radius: 50%;
    &:hover{
        background-color: #f0b7d2;
    };
    &:active{
        background-color: #df6ca2;
    }
`;

const StyledLike = styled.div`
    display: flex;
    padding: 5px;
    cursor: pointer;
    height: auto;
    border-radius: 50%;
    &:hover {
        background-color: #f0b7d2;
    }
    &:active {
        background-color: #df6ca2;
    }
`;

const StyledDislike = styled(StyledLike)`
    background-color: #df6ca2;
    &:active {
        background-color: transparent;
    }
`

const StyledLikeImg = styled.img`
    transform: translate(0px,2px);
`

function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false);

    const OnPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <CardConteiner>
            {/* <img src={bouquet1} width="140" height="140" alt="bouquet1"/> */}
            <img src={process.env.PUBLIC_URL + `/${props.id}.png`} width="140" height="140" alt="bouquet1"/>
            <NameCard>
                {/* <span>Бабушкин сад</span> */}
                <span>{props.name}</span>
            </NameCard> 
            <Description>
                <PriceCard>
                    <span>Цена:</span>
                    {/* <span>3465</span> */}
                    <span>{props.price}</span>
                </PriceCard>
                {props.favoriteEnabled ? 
                    <StyledLike>
                        <StyledLikeImg src={like} width="24" height="24" alt="Like"/>
                    </StyledLike>
                    : 
                    <StyledDislike>
                        <StyledLikeImg src={like} width="24" height="24" alt="Like"/>
                    </StyledDislike>
                }
                <StyledPlus onClick={OnPlus}>
                    <img src={isAdded ? checkMark : plus} width="24" height="24" alt="Plus"/>
                </StyledPlus>
            </Description>
        </CardConteiner>
    );
};

export default Card;
