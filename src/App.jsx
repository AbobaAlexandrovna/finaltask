import Cart from './Cart/Cart';
import styled from 'styled-components';
import Toolbar from './Toolbar/Toolbar';
import Body from './Body/Body';
import { Route, Routes } from 'react-router-dom';
import Favorite from './Favorite/Favorite';
import React from 'react';
import http from './API';

const Wrapper = styled.div`
background-color: #ffffff;
min-width: 500px;
max-width: 1080px;
margin: 30px auto;
border-radius: 20px;
box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`

function App() {

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        http.get('flowers').then(response => {
            setItems(response.data);
            setIsLoading(false);
        })
        
    }, []);
   
    return (

        <Wrapper>
            <Toolbar></Toolbar>
            <Routes>
                <Route path="" element={<Body isLoading={isLoading} items={items}/>} />
                <Route path="/cart" element={<Cart isLoading={isLoading} items={items.filter(items => items.inCart === true)}/>} />
                <Route path="/personalArea" element={<Favorite isLoading={isLoading} items={items.filter(items => items.inFavorite === true)}/>} />
            </Routes>
        </Wrapper>

    );
}

export default App;
