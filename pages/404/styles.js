import styled from 'styled-components'


export const StyledMain = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 20px;

      background-size: cover;
      background: rgb(125,185,232); 
      background: -moz-linear-gradient(-45deg,  rgba(125,185,232,1) 0%, rgba(41,137,216,1) 29%, rgba(30,87,153,1) 100%); 
      background: -webkit-linear-gradient(-45deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 
      background: linear-gradient(135deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 


    h1 {
        font-size: 50px;
        font-weight: bold;
    }

    h1>span {
        font-size: 30px;

    }
    

    a {
        color: var(--black);
        font-weight: bold;
       border: 2px solid black;
       padding: 10px;
       border-radius: 8px;
       background-color: var(--white);
    }

    a:hover {
        color: var(--white);
       border: 2px solid var(--white);
       background-color: var(--black);
    }
`