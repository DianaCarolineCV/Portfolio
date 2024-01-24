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
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  color: var(--color-white);

  section {
    display: flex;
    flex-direction: column;
    gap: 40px;

    div {
      display: flex;
      flex-direction: column;
      gap: 15px;
      section {
        display: flex;
        flex-direction: row;
        gap: 10px;

        span {
          font-weight: bold;
        }

        a {
          position: relative;
          display: inline-block;
          color: var(--color-white);

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--color-grey-0);
            transition: width 0.3s ease-in-out;
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }
  
   
  @media (min-width: 81.25rem) {
    flex-direction: row
  }
  
`;

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  margin-top: 50px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        width: 100%;
        height: 80px;
        border: 1px solid white;
        padding: 20px;
        color: var(--color-white);
      }
    }

    textarea {
      width: 100%;
      border: 1px solid white;
      height: 200px;
      padding: 20px;
      color: var(--color-white);
    }

    section {
      input {
        height: 40px;
        border: 1px solid white;
        width: 100px;
        color: var(--color-white);
        font-weight: bold;
        margin-bottom: 20px;

        &:hover {
          background-color: var(--color-white);
          color: var(--color-black);
          font-weight: bold;
        }
      }
    }
  }
  
   
  @media (min-width: 81.25rem) {
    gap: 40px;
    width: 50%;
    margin-top: 0px;
    
    form {
    div {
      display: flex;
      flex-direction: row;
      gap: 10px;
      input {
        width: 50%;
        height: 50px;
      }
    }
    
    section {
      input {
        height: 40px;
    }
  }
}
}
`;
