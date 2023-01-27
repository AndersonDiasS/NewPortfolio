import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background:${props => props.theme.colors.seccundary};
    padding: 0 8vw;
    display:flex;
    flex-direction: column;
    justify-content:center;
   
`;

export const Title = styled.h1`
    font-size:${props => props.theme.sizeFonts.title};
    margin: unset!Important;
    color: ${props => props.theme.colors.primary};


`; 
export const Content = styled.p`
    color: ${props => props.theme.colors.primary };
    font-size:${props => props.theme.sizeFonts.subTitle}
`;
