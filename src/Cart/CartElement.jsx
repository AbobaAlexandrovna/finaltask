import styled from "styled-components";
import deleteCart from '../assets/delete.svg';

const StyledCartElement = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
    border-top: 1px solid #df6ca2;
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
    return (
        <StyledCartElement>
           <img src={process.env.PUBLIC_URL + `/${props.id}.png`} width="100" height="100" alt="bouquet1"/>
           <Description>
               <NameCartElement>
                    <span>{props.name}</span>
                    <PriceCartElement>
                        <span>{props.price}</span>
                    </PriceCartElement>
                </NameCartElement>
                <StyledDelete>
                <img src={deleteCart} width="30" height="30" alt="deleteCart"/>
                </StyledDelete>
            </Description>
        </StyledCartElement>
    );
};

export default CartElement;
