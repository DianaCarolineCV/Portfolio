import styled from 'styled-components';


export const Header = styled.div `
    display: flex;
    flex-direction: column;
    padding: 2rem;
    
    div{
        
        display: flex;
        justify-content: space-between;
        
        p {
            color: var(--color-white);
            font-size: 4rem;
        
        }
        
        a{
            
            display: flex;
            align-items:center;
          
            img{
            width: 50px;
            height: 50px; 
            }
         

        }
        
    }
    
    hr{
    border-color: var(--color-grey-1);
    border-top: 1px solid;
    margin: 1rem 0;
    width: 60%
}

    `

export const Main = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 2rem;
   color: var(--color-white);
   
   section {
    display: flex;
    flex-direction:column;
    gap: 40px;
    
    div {
    display: flex;
    flex-direction:column;
    gap: 15px;
    section{
    display: flex;
    flex-direction: row;
    gap: 10px;
    
    span{
        font-weight: bold
    }
             
    }
    }
   }
   

` 


export const FormStyle = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    width: 50%;
       
    form {      
    display: flex;
    flex-direction:column;
    gap: 10px;

        div {
            display: flex;
            gap: 10px;
            input{
                width: 300px;
                height: 50px; 
                border: 1px solid white;
                padding: 20px;
                color: var(--color-white);

            }
        }
        
        textarea {
                width: 610px;
                border: 1px solid white;
                height: 200px; 
                padding: 20px;
                color: var(--color-white);      
            }
            
            section {
                input{
                height: 30px; 
                border: 1px solid white;
                width: 100px; 
                color: var(--color-white);  
                font-weight: bold;
                
                     
                
                &:hover {
                    background-color: var(--color-white);      
                    color: var(--color-black);  
                    font-weight: bold
                        
                    
                }
 }
            }
    }    
` 