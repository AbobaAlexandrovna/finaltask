import styled from "styled-components";
import CartElement from "./CartElement";
import CartFooter from "./CartFooter";

const arr = [
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

function Cart(props) {
    return (
        <StyledCart>
            <CartTitle>
                <span>Корзина</span>
            </CartTitle>
            <CartElements>
            {arr.map((obj) =>
                    (
                        <CartElement   
                            favoriteEnabled={true}
                            name = {obj.name}
                            key = {obj.id}
                            id = {obj.id}
                            price = {obj.price} 
                        />
                    )
                )}
            </CartElements>
            <CartFooter></CartFooter>
        </StyledCart>
    );
};

export default Cart;
