import styled from 'styled-components';

export const Titleh1 = styled.h1`
    font-family: 'Questrial', sans-serif;
    margin: 0;
    
    & > span {
        position: relative;
        transition: bottom 250ms ease;
        bottom: 0px;
        &:hover {
            bottom: 10px;
        }
    }    
`