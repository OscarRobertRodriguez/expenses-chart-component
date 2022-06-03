import styled from 'styled-components';
import Logo from '../../images/logo.svg';
import {QUERIES} from "../../constants";

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--soft-red);
    border-radius: 10px;
    display: flex;
    padding: 20px 16px;  
  
  @media ${QUERIES.laptopAndUp} {
  border-radius: 20px;
    padding: 25px 32px;

}
  
  
`;

const Balance = styled.div`
   margin-right: auto;
   color: var(--white);
  
  & p {
    font-size: 15px;


    @media ${QUERIES.laptopAndUp} {
      font-size: 18px;
        
    }    
    
  }
  
  & h2 {
    font-size: 24px;
    font-weight: 700;
    @media ${QUERIES.laptopAndUp} {
      font-size: 32px;
    }
  }
`;

const Img = styled.img`
    display: block;
    width: 60px;
    height: 40px;
  align-self: center;


  @media ${QUERIES.laptopAndUp} {
    width: 72px;
    height: 48px;
  }
`;


const Header = () => {
    return (
        <Wrapper>
           <Balance>
               <p>My balance</p>
               <h2>$921.48</h2>
           </Balance>
                <Img  src={Logo} alt={'logo'} />
        </Wrapper>
    )
};


export default Header;