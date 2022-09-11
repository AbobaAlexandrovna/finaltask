import styled from 'styled-components';
import mainLogo from '../assets/mainLogo.png';
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
    display: flex;
    margin: 20px;
    align-items: center;
`;

const NameShop = styled.div`
    margin-left: 20px;
    color: black;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function LogoShop(props) {
    return (
        <StyledLink to="">
            <LogoContainer>
                    <img src={mainLogo} width="70" height="70" alt="Logo"/>
                <NameShop>
                    <h3>A day without tantrums</h3>
                    <span>Самые красивые букеты</span>
                </NameShop>
            </LogoContainer>
        </StyledLink>
    );
};

export default LogoShop;
