import styled from "styled-components";
import Card from "../Body/Card";

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

const StyledFavorite = styled.div`
`;

const FavoriteTitle = styled.div`
    margin: 0;
    padding: 10px 20px;
    font-size: 1.3em;
    font-weight: bold; 
`;

const FavoriteElements = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px;
    gap: 20px;
`;

function Favorite(props) {
    return (
        <StyledFavorite>
            <FavoriteTitle>
                <span>Избранное</span>
            </FavoriteTitle>
            <FavoriteElements>
            {arr.map((obj) =>
                    (
                        <Card   
                            favoriteEnabled={false}
                            name = {obj.name}
                            key = {obj.id}
                            id = {obj.id}
                            price = {obj.price} 
                        />
                    )
                )}
            </FavoriteElements>
        </StyledFavorite>
    );
};

export default Favorite;
