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
    color: inherit;
    margin: 1rem 0;
    width: 60%;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
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
    justify-content: space-between;
    flex-direction: column; 
    align-items: flex-start;
    width: 100%;
    margin-bottom: 10px;
    flex-wrap: wrap;

    h2 {
        margin-bottom:15px
    }
    
    
    p,
    h3 {
      font-size: 18px;
      width: 100%;
      line-height: 18px;
      text-align: justify
    }

    h3 {
      font-weight: normal;
      line-height: 25px;
    }

    span {
      color: var(--color-red);
    }
  }
  
   
  @media (min-width: 58.125rem) {
  div {
    flex-direction: row;
    align-items: center;
    
    h2 {
        margin-bottom:0px
    }
    
    p,
    h3 {
      font-size: 14px;
      width: 50%;
      line-height: 18px;
    }
  }
  }
`;
