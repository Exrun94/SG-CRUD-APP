import styled from 'styled-components';

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: sidebar;
    background-color: var(--accent-dark-600);
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;

    &:hover {
        background-color: var(--accent-dark-400);
    }

`

export const Icon = styled.img<{icon: string}>`
    width: 30px;
    height: 30px;
    fill: white;
    content: url(${props => props.icon});
`;

