import styled from "styled-components";
import LogoShop from "./LogoShop";
import NavButtons from "./NavButtons";

const ToolbarContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid;
    border-bottom-color: #df6ca2;
`

function Toolbar(props) {
    return (
        <ToolbarContainer>
            <LogoShop></LogoShop>
            <NavButtons></NavButtons>
        </ToolbarContainer>
    );
}

export default Toolbar;
