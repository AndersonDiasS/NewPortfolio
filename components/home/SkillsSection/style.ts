import styled from 'styled-components';



export const Title = styled.h2`
    color: ${props => props.theme.colors.dark};
    font-size:${props => props.theme.sizeFonts.title};
    margin: 0px;
    padding:0px;
    width:100%;
    text-align:center;
    padding-top:20px
`;
export const Container = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.light};
    padding-left: 10vw;
    padding-right: 10vw;
`;

 
 export const TextContainer = styled.div`
    width:50%;
    border:1px solid ${props => props.theme.colors.dark};
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
 `;

 export const Text = styled.div`
    font-size: ${props => props.theme.sizeFonts.text};
 
 `;

 export const IconsContainer = styled.div`
    width:50%;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
 `;

 export const iconCard = styled.div`
    width: 115px;
    border: 1px solid ${props => props.theme.colors.dark};
    align-items:center;
    display:flex;
    margin: 10px 10px;
    border-radius: 5px;
    img{
        width:60px;
        height:60px;
        margin: 0 auto;
    }
 `;

export const Row = styled.div `
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top:100px;
 `;


export const Wave = styled.div`
    margin-top: -1px;
    top: 0;
    left: 0;
    background: ${props => props.theme.colors.light};
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg{
        fill:${props => props.theme.colors.dark};
        display: block;
        width: calc(118% + 1.3px);
        height: 53px;
    }

 
`;

 