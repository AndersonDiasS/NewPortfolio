import styled from 'styled-components';


export const Title = styled.h2`
    color: #000;
    font-size:3rem;
    margin: 0px;
    padding:0px;
    width:100%;
    text-align:center;
    padding-top:20px
`;
export const Container = styled.div`
    height: 100vh;
    background: #ffff;
    padding-left: 10vw;
    padding-right: 10vw;
`;

 

export const Card = styled.div`
    
  width: 250px;
  height:250px;
  margin-top:80px;
    
    perspective: 1000px;
    position:relative;
    margin-left:10px;
    margin-right:10px


`;

export const CardFlipper = styled.div`
        width:100%;
        height:100%;
        transition: transform 0.8s;
	     background-color: #fff;;
        transform-style: preserve-3d;
        position: relative;
        box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
        border-radius: 5px;
        background: #fff;
        color: #8D18f2;
        &:hover{
            transform: rotateY(180deg);
        }

      
`;

export const CardFlipperFront = styled.div`
position: absolute;
	width: 100%;
	height: 100%;
    backface-visibility: hidden;
    padding:25px;

`;

export const CardFlipperBack = styled.div`
position: absolute;
	width: 100%;
    transform: rotateY(180deg);
	height: 100%;
    backface-visibility: hidden;

`;

export const Row = styled.div `
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
 `;


export const Wave = styled.div`
    margin-top: -1px;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg{
        fill:#42106E;
        display: block;
        width: calc(118% + 1.3px);
        height: 53px;
    }

 
`;

 