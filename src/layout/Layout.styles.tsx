import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid; 
    height: 100vh;
    overflow: auto;
    background-color: var(--primary-dark-800);
    grid-template-columns: 60px 1fr; 
    grid-template-rows: 0.2fr 0.2fr 1fr; 
    /* grid-template-columns: minmax(60px, 1fr);  */
    gap: 2em 4em; 
    grid-template-areas: 
        "sidebar head"
        "sidebar search"
        "sidebar main";
`;

export const UtilsContainer = styled.div`
    display: flex;
    width: 80%;
    grid-area: search;
    align-items: center;
    padding-bottom: 5em;
    border-bottom: 1px solid var(--primary-dark-400);
`;;