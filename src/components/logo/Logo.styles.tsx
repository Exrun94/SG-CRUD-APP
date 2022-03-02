import styled from 'styled-components';

interface styledProps {
    animationDelay: string;
}

export const Header = styled.header`
    grid-area: head;
`;


export const Span = styled('span')`
    position: relative;
    font-family: 'Orbitron', sans-serif;
    font-size: 4em;
    animation: wave 1s forwards;
    bottom: -1em;
    opacity: 0;
    animation-delay: ${(props: styledProps) => props.animationDelay};

    @keyframes wave {
        0% {
            bottom: -0.2em;
            opacity: 1;
            color: var(--accent1);
        }
        
        50% {
            bottom: 0.2em;
            color: var(--primary-light);
        }

        100% {
            bottom: 0;
            opacity: 1;
            color: var(--primary);
        }
}
`