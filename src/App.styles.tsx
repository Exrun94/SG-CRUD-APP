import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid; 
    height: 100vh;
    grid-template-columns: 60px 1fr; 
    grid-template-rows: 0.2fr 0.2fr 1fr; 
    gap: 2em 4em; 
    grid-template-areas: 
        "sidebar head"
        "sidebar search"
        "sidebar main";
`;

export const MidContainer = styled.div`
    display: flex;
    width: 80%;
    grid-area: search;
    align-items: center;
`;;