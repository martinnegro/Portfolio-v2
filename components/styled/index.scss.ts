import styled from 'styled-components';

export const Titleh1 = styled.h1`
    font-family: 'Questrial', sans-serif;
    margin: 0;
    bottom: 0px;
    @keyframes jump {
        0% {
            bottom: 0px;
        }
        50% {
            bottom: 0px;
        }
        75% {
            bottom: 0px;
        }
        80% {
            bottom: 10px;
        }
        85% {
            bottom: 0px;
        }
        90% {
            bottom: 10px;
        }
        95% {
            bottom: 0px;
        }
    }
    
    & > span {
        font-size: 6rem;
        position: relative;
        transition: bottom 250ms ease;
        bottom: 0px;
        &:hover {
            bottom: 10px;
        }
        @media (max-width: 600px) {
            font-size: 4rem;
            &:hover {
                bottom: 0px;
            }
            animation: jump 5s infinite 3s;
        }
    }
`