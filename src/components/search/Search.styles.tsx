import styled from 'styled-components';

export const SearchInput = styled.input`
    background-color: transparent;
    border: 1px solid var(--accent-dark-400);
    border-radius: 4px;
    outline: none;
    padding: 8px;
    width: 30%;
    color: var(--primary-dark-200);

    &:focus {
        border-color: var(--accent-dark-100);
    }
`;