import styled from 'styled-components'


export const StyledForm = styled.form`
    width: 100%;
    max-width: 370px;
    min-height: 400px;
    border: 1px solid rgba(202, 203, 204, 1);
    
    padding: 20px;
    
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--white);
    box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.15);


    @media (max-width: 500px) {
      & {
        margin-top: 10px;
        width: 100%;
      }
    }

`