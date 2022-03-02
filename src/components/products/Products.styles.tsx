import styled from 'styled-components';
import iconFavorite from '../../images/favorite.svg';
import iconFavoriteFill from '../../images/favorite-filled.svg';
import iconEdit from '../../images/edit.svg';
import iconDelete from '../../images/delete.svg';

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background: #fff;
`;

export const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
    background-color: var(--light-2);
`;

export const Thead = styled.thead`
    border-bottom: 2px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    height: 1em;

    tr { 
        background-color: var(--light-1);
    }
`;


export const Tr = styled.tr`
    height: 3em;
    border-bottom: 1px solid #e0e0e0;
    
    & .id {
        text-align: center;
    }
`;

export const Tbody = styled.tbody`

& .row {
       &:hover {
            background-color: var(--light-3);
       }
    }
`;

export const Td = styled.td`
    max-width: 6em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;


export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const IconFavorite = styled.img`
    width: 20px;
    height: 20px;
    content: url(${iconFavorite});

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

    &:before {
        display: absolute;
        top:0;
        content: 'Delete';
    }

`;

