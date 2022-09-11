import styled from "styled-components";

const StyledCartFooter = styled.div`
    border-top:2px solid red;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 40px;
    background-color: #f1c3df;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    flex-direction: column;
    gap: 10px;
`;

const StyledCost = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;

const TotalCost = styled.div`
    font-size: 1.3em;
    font-weight: normal;
`;

const AmountCost = styled.div`
    font-size: 1.3em;
    font-weight: bold; 
`;

const Ordering = styled.div`
    font-size: 1.3em;
    font-weight: bold;
    width: 450px;
    background-color: #81e998;
    border-radius: 10px 40px;
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    &:hover{
        transform: scale(0.9);
    };
    &:active{
        background-color: #5ece76;
    }

`;

function CartFooter(props) {
    return (
        <StyledCartFooter>
            <StyledCost>
                <TotalCost>
                    <span>Общая стоимость:</span>
                </TotalCost>
                <AmountCost>
                    <span>2345</span>
                </AmountCost>
            </StyledCost>
            <Ordering>
                <span>Перейти к оформлению</span>
            </Ordering>
        </StyledCartFooter>
    );
};

export default CartFooter;
