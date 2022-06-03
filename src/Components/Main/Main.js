import styled from 'styled-components';
import Line from "../Line";
import Graph from "../Graph/Graph";

import {QUERIES} from "../../constants";


const Wrapper = styled.div`
  width: 100%;
  background-color: var(--bridal);
  border-radius: 10px;
  display: grid;
  padding: 20px;   
  
  @media ${QUERIES.laptopAndUp} {
    padding: 40px;
     padding-top :32px;
    border-radius: 20px;
}


`;

const Heading = styled.h2`
 font-size: 24px;
 color: var(--dark-brown);
  font-weight: 700;


  @media ${QUERIES.laptopAndUp} {
    font-size: 32px;
  }
`


const ContentWrapper = styled.div`
     display: flex;
`;


const TotalWrapper = styled.div`
   margin-right: auto; 
  padding-top: 24px;
  
  & p {
     font-size: 15px;
    color: var(--medium-brown);

    @media ${QUERIES.laptopAndUp} {
      font-size: 18px;
    }
  }
  
  & h2 {
    font-size: 30px;
    font-weight: 700;

    @media ${QUERIES.laptopAndUp} {
      font-size: 48px;
    }
  }
`

const Percentage = styled.div`
  align-self: end;
  
  & span {
    display: block;
    text-align: right;
    font-size: 15px;


    @media ${QUERIES.laptopAndUp} {
      font-size: 18px;
    }
  }
  
 & p {
   color: var(--medium-brown);
   font-weight: 400;
   font-size: 15px;


   @media ${QUERIES.laptopAndUp} {
     font-size: 18px;
   }
 }
`;




const Main  = () => {
    return (
        <Wrapper>
            <Heading>Spending - Last 7 days</Heading>
            <Graph />

            <div>
                <Line />
                <ContentWrapper>
                    <TotalWrapper>
                        <p>Total this month</p>
                        <h2>$478.33</h2>
                    </TotalWrapper>

                    <Percentage>
                        <span>+2.4%</span>
                        <p>from last month</p>
                    </Percentage>
                </ContentWrapper>
            </div>
        </Wrapper>
    )
}


export default Main;