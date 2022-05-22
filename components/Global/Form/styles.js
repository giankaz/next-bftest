import styled from 'styled-components'


export const StyledForm = styled.form`
    width: 100%;
    max-width: 370px;
    min-height: 400px;
    
    padding: 20px;
    
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--white);
    -webkit-box-shadow: 8px 10px 21px -10px rgba(0,0,0,0.2);
    -moz-box-shadow: 8px 10px 21px -10px rgba(0,0,0,0.2);
    box-shadow: 8px 10px 21px -10px rgba(0,0,0,0.2);

    @media (max-width: 500px) {
      & {
        margin-top: 10px;
        width: 100%;
      }
    }

`