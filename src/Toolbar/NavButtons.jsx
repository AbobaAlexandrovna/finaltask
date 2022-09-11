import styled from 'styled-components'
import cart from '../assets/cart.svg';
import personalArea from '../assets/personal-area.svg';
import { Link } from "react-router-dom";

const NavButtonsContainer = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    gap: 20px;
`
const NavButton = styled.button`
    background: none;
    border: none;
    margin: 0;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    &:hover{
        /* transform: scale(1.2); */
        background-color: #df6ca25e;
    };
    &:active{
        /* outline: 1px solid #df6ca2; */
        background-color: #df6ca299;
        
    };
`;

function NavButtons(props) {
    return (
        <NavButtonsContainer>
            <Link to="/cart">
                <NavButton>
                    <img src={cart} width="30" height="30" alt="Cart"/>
                </NavButton>
            </Link>
            <span>2122p</span>
            <Link to="/personalArea">
                <NavButton>
                    <img src={personalArea} width="25" height="25" alt="Personal"/>
                </NavButton>
            </Link>
        </NavButtonsContainer>
    );
};

export default NavButtons;
