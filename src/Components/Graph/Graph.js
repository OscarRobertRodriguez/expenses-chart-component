import styled from "styled-components";
import {QUERIES} from "../../constants";
import data from '../../data.json';
import Bar from "../Bar";

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  grid-column-gap: 12px;
  align-items: end;
  padding-top: 52px;
  padding-bottom: 40px;

  @media ${QUERIES.laptopAndUp} {
    grid-column-gap: 17px;
    padding-bottom: 55px;
  }
`;



const Graph = () => {
    return (
        <Wrapper>
            {
               data.map(item => {
                   return <Bar height={item.height} amount={item.amount} day={item.day} />
               })
            }
        </Wrapper>
    )
};

export default Graph;