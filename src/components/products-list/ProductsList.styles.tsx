import styled from 'styled-components';
import iconFavorite from '../../images/favorite.svg';
import iconFavoriteFill from '../../images/favorite-filled.svg';
import iconEdit from '../../images/edit.svg';
import iconDelete from '../../images/delete.svg';

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-row-gap: 2em;
    grid-template-columns: repeat(auto-fill, 23em);
    padding-top: 5em;
`;


export const DescriptionContainer = styled.div`
    position: relative;
    top: -8em;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
    
`;


export const Card = styled.div`
    position: relative;
    width: 20em;
    height: 15em;  
    background-color: var(--primary-dark-700);
    margin: 2em 0;
    padding: 1.5em .7em;

    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;
    border-radius: 1em;

    &:hover {
        height: 20em;
        
        ${DescriptionContainer} {
            margin-top: 2em;
            visibility: visible;
            opacity: 1;
            transition-delay: 0.2s;
        }
    }
`;

export const ImgContainer = styled.div`
    position: relative;
    width: 16em;
    height: 16em;
    top: -40%;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    
`;

export const Image = styled.img`
    max-width: 100%;
    border-radius: 1em;
`;

export const MainInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1.5em .5em .5em .5em;
    transition: 0.5s;

`;


export const ProductPrice = styled.h3`
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    align-self: flex-end;
    background-color: var(--accent-dark-400);
    width: 100%;
    padding: .5em 0;
    margin-bottom: .5em;
    border-radius: .7em;

    sup {
        font-size: 0.5em;
    }
`;

export const ProductName = styled.h3`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: .5em;
    color: var(--accent-dark-400);
`;

export const Description = styled.p`
    font-size: .7em;
    color: var(--primary-dark-100);

`;


export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
`;

export const IconFavorite = styled.img<{isFavorite: boolean}>`
    width: 20px;
    height: 20px;
    content: url(${(props) => props.isFavorite ? iconFavoriteFill : iconFavorite});
    

    &:hover {
        cursor: pointer;
        content: url(${iconFavoriteFill});
        fill: yellow
    }

`;

export const IconEdit = styled.img`
    width: 20px;
    height: 20px;
    content: url(${iconEdit});

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;


export const IconDelete = styled.img`
    width: 20px;
    height: 20px;
    content: url(${iconDelete});
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
        cursor: pointer;
        transform: rotate(90deg);
    }


`;