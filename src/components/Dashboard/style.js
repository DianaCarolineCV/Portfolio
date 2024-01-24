import styled from 'styled-components';

export const Header = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: var(--color-black-2);
    
    ul {
    display: flex;
    gap: 25px; 
    
    }
    
    li {
    position: relative;
    display: inline-block;

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
    
    li > a {
    color: var(--color-white);
    font-size: .875rem;
   
    }
     
    
    h2 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-white);
    }
    
    
    @media (min-width: 53.125rem) {
        
    ul {
        gap:100px;  
    }  
      
    h2 {
        font-size: 2rem;
        height: 50px; 
    } 
     
    li > a {
    font-size: 1.25rem;
   
    }    
}   
`


export const Main = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 2rem;
    background-color: var(--color-black-2);
    
    img {
        display: none;
    }
  
    
    @media (min-width: 58.125rem) {
    img {
        display: block;
        width: 200px;
        border-radius: 50%
    }
        
}
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap:50px;
    height: 100%;
    width: 100%;
    
    
    h2{
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-white);
    }

`
export const ContainerText = styled.div `
    font-size: 1rem;
    font-weight:400;
    color: var(--color-white);
    min-height: 60px;
`

export const Buttons = styled.div `
    display: flex;
    gap:30px;
    
    
    h2 > a{
        background: var(--color-white);
        color: var(--color-black-2);
        height: 40px;
        width: 120px;
        font-size: 0.85rem;
        font-weight:600;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid transparent;
        
        
        
        &:hover{
        background: var(--color-grey-1);
        color: var(--color-white);
        border: 1px solid var(--color-white);
        
        }
    }
    
    p > a {
        background:var(--color-black-2) ;
        color: var(--color-white);
        height: 40px;
        width: 120px;
        font-size: 0.85rem;
        font-weight:600;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid var(--color-white);
        
        &:hover{
        background: var(--color-grey-1) ;
        color: var(--color-black-2);
        border: 1px solid transparent;
        
        }
    }
`


export const Footer = styled.ul `
    display: flex;
    gap:30px; 
    color: var(--color-white);
    padding: 0 2rem;
    margin-top: 30px;
     
    li>a>img{
        height: 25px;
        width: 25px;
    } 
    
    span {
        color: var(--color-red);    
    }
             
    
` 
    
    
    