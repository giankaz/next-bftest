import styled from 'styled-components'



export const StyledButton = styled.button`
    width: ${props => props.width};
    
    border: none;
    border-radius: 6px;

    margin-top: 10px;

    font-size: 16px;
    font-weight: 500;
    color: var(--white);

    background: rgb(125,185,232); 
    background: -moz-linear-gradient(top,  rgba(125,185,232,1) 0%, rgba(41,137,216,1) 37%, rgba(30,87,153,1) 100%);
    background: -webkit-linear-gradient(top,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 37%,rgba(30,87,153,1) 100%); 
    background: linear-gradient(to bottom,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 37%,rgba(30,87,153,1) 100%);
    
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 );

    padding: 15px;
      
    &:hover {
        filter: brightness(108%);
    }
`