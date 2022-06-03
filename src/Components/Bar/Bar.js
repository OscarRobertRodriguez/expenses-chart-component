import styled from 'styled-components';
import {QUERIES} from "../../constants";

const Wrapper = styled.div`
  width: 33px;
  height: ${props => `${props.height}px` || '20px'};
  border-radius: 3px;
  position: relative;
  isolation: isolate;
  cursor: pointer;
  background-color: ${props => props.height === 150 ? ` var(--cyan) `: ` var(--soft-red)`}; 
}
  
  

  @media ${QUERIES.laptopAndUp} {
    width: 50px;
    border-radius: 5px;
  }

  &::before {
    content: ${props => `"$${props.amount}"` || "$20.00"};
    position: absolute;
    display: grid;
    color: var(--cream);
    place-content: center;
    top: -20px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--dark-brown);
    width: 50px;
    height: 25px;
    border-radius: inherit;
    visibility: hidden;
    z-index: 99;
    font-size: 14px;
    font-weight: 700;
    transition: opacity .2s ease-in-out;
    padding: 4px;
    opacity: 1;
    

    @media ${QUERIES.laptopAndUp} {
      padding: 8px;
      font-size: 18px;
      width: 75px;
      height: 40px;
      top: -25px;
   
     
    }
    
  }

  &::after {
    content: ${props => `"${props.day}"` || "sun"};;
    color: red;
    font-size: 10px;
    position: absolute;
    bottom: -33px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--medium-brown);
    text-align: center;
    font-size: 12px;

    @media ${QUERIES.laptopAndUp} {
      font-size: 15px;
      bottom: -40px;

    }
  }
  

  
  &:hover {
    background-color: ${props => props.height === 150 ?  `rgba(180, 224, 229, 1.00)` : `rgba(255, 155, 134, 1.00)`};
  }

  &:hover:before {
    visibility: visible;
  }
`;



const Bar = ({height, amount, day}) => {
    return (
         <Wrapper height={height} amount={amount} day={day} >

         </Wrapper>
    )
}

export default Bar;