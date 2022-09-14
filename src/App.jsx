import Cart from './Cart/Cart';
import styled from 'styled-components';
import Toolbar from './Toolbar/Toolbar';
import Body from './Body/Body';
import { Route, Routes } from 'react-router-dom';
import Favorite from './Favorite/Favorite';
import React from 'react';
import { useDispatch } from 'react-redux';
import {fetchFlowers} from './state/slice';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
background-color: #ffffff;
min-width: 500px;
max-width: 1080px;
margin: 30px auto;
border-radius: 20px;
box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`;

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.shop.isLoading);

    React.useEffect(() => {
        dispatch(fetchFlowers());
    }, [dispatch]);
   
    return (

        <Wrapper>
            <Toolbar></Toolbar>
            <Routes>
                <Route path="" element={<Body isLoading={isLoading} />} />
                <Route path="/cart" element={<Cart isLoading={isLoading} />} />
                <Route path="/personalArea" element={<Favorite isLoading={isLoading}/>} />
            </Routes>
        </Wrapper>

    );
};

export default App;
