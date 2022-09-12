import styled from "styled-components";
import CartElement from "./CartElement";
import CartFooter from "./CartFooter";

const StyledCart = styled.div`
    
`;

const CartTitle = styled.div`
    margin: 0;
    padding: 10px 20px;
    font-size: 1.3em;
    font-weight: bold; 
`;

const CartElements = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
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
    width: 100%;
    height: 100px;
    box-shadow: 0px 10px 20px 2px rgba(179, 26, 26, 0.25);
    border-radius: 20px;
    &:hover{
        transform: scale(1.1);
    };
`;

// const SkeletonContainer = ``

function Cart(props) {
    return (
        <StyledCart>
            <CartTitle>
                <span>Корзина</span>
            </CartTitle>
            <CartElements>
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
                        (
                            <CartElement   
                            key={obj.id}
                            item={obj}
                            />
                        )
                    )
                )
            }
            </CartElements>
            <CartFooter></CartFooter>
        </StyledCart>
    );
};

export default Cart;
