import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  div {
    display: flex;
    justify-content: space-between;

    p {
      color: var(--color-white);
      font-size: 4rem;
    }

    a {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  hr {
    border-color: var(--color-grey-1);
    border-top: 1px solid;
    margin: 1rem 0;
    width: 60%;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 2rem;
  color: var(--color-white);
 
  hr {
    border-color: var(--color-grey-1);
    border-top: -1px solid;
    margin: 1rem 0;
    width: 60%;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: start;
    width: 100%;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1.25rem;

    section{
      width: 100%;
      height: 30rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border: 2px solid var(--color-grey-1);
      border-radius: 1.25rem;
      padding: 1.25rem; 
      
      h2{
        text-align:center;
        font-size: 1.25rem      
      }
      
      h3 {
        font-size: 1rem;
        font-weight: normal;
        line-height: 25px;
        text-align: justify;  
        
      }
      
      p{
        text-align: justify; 
        margin: 15px 0;
        
        span{
          color: var(--color-red);
          font-weight: bold;   
        }
        
      }
      
      a { 
      border-bottom: 1px solid transparent; 
      background: var(--color-white);
      color: var(--color-black-2);
      height: 50px;
      padding: 10px;
      font-size: 0.90rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      margin: 0 auto;
        
        &:hover{
          color: var(--color-white);
          background: var(--color-grey-1);
          } 
        }
      }
    }
    
     
    @media (min-width: 86.0625rem) {
  
      div{
        flex-direction: row;
        align-items: center;
        
        section{
        width: 30%;
        height: 20rem;
      }
        
      }
  }
    
    
`;
