import styled, {keyframes} from "styled-components"


const spinner = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled.button`
    height: 40px;
    width: 40px;
    background: rgba(51, 51, 51, 0);
    border-radius: 50%;
    border-top: 2px solid var(--accent-dark-400);
    border-right: 2px solid transparent;
    border-bottom:none;
    border-left:none;
    animation: ${spinner} 700ms linear infinite;
`;


export default LoadingSpinner;