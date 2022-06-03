import styled from 'styled-components';
import {QUERIES} from "../../constants";
import GlobalStyles from "../../GlobalStyles";
import Header from "../Header";
import Main from "../Main";


const Wrapper = styled.div`
  --soft-red: hsl(10, 79%, 65%); 
  --cyan: hsl(186, 34%, 60%);
  --dark-brown: hsl(25, 47%, 15%);
  --medium-brown: hsl(28, 10%, 53%);
  --cream: hsl(27, 66%, 92%); 
  --very-pale-orange: hsl(33, 100%, 98%);
  --bridal: hsl(33, 100%, 98%);
  --white: #fff;
    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
    place-items: center;
    min-height: 100%;
    background-color: var(--cream);
`;

const GraphWrapper = styled.div`
  width: min(343px, 100%);
  display: grid;
  grid-row-gap: 16px;

  @media ${QUERIES.laptopAndUp} {
    width: 540px;
    grid-row-gap: 24px;
  }
`;

const Footer = styled.footer`
`;

function App() {
  return (
    <Wrapper>
        <GraphWrapper>
          <Header />
          <Main />
       </GraphWrapper>
      <Footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="src/Components/App/App#">Oscar Rodriguez</a>.
      </Footer>
     <GlobalStyles />
    </Wrapper>
  );
}

export default App;
