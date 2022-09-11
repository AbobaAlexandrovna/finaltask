import Cart from './Cart/Cart';
import styled from 'styled-components';
import Toolbar from './Toolbar/Toolbar';
import Body from './Body/Body';
import { Route, Routes } from 'react-router-dom';
import Favorite from './Favorite/Favorite';
import React from 'react';

const Wrapper = styled.div`
background-color: #ffffff;
min-width: 500px;
max-width: 1080px;
margin: 30px auto;
border-radius: 20px;
box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`

function App() {
    const [items, setItems] = React.useState([])

    return (

        <Wrapper>
            <Toolbar></Toolbar>
            <Routes>
                <Route path="" element={<Body />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/personalArea" element={<Favorite />} />
            </Routes>
        </Wrapper>

    );
}

export default App;
