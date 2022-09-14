import styled from 'styled-components';
import Card from '../Body/Card';
import { useSelector } from 'react-redux';

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

const StyledCardSkeleton = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const CardSkeleton = styled.div`
    outline: 1px solid #df6ca2;
    background-color: pink;
    width: 200px;
    height: 240px;
    box-shadow: 0px 10px 20px 2px rgba(179, 26, 26, 0.25);
    border-radius: 20px;
    &:hover{
        transform: scale(1.1);
    };
`;

function Favorite(props) {
    const items = useSelector((state) => state.shop.items.filter((item) => item.inFavorite));
    return (
        <StyledFavorite>
            <FavoriteTitle>
                <span>Избранное</span>
            </FavoriteTitle>
            <FavoriteElements>
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
                    items.length > 0 ?
                    items.map((obj) =>
                        (
                            <Card   
                                key={obj.id}
                                item={obj}
                            />
                        )
                    )
                    :
                    <span>В избранном пока пусто =)</span>
                )
            }
            </FavoriteElements>
        </StyledFavorite>
    );
};

export default Favorite;
