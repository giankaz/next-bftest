import styled from 'styled-components'


export const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

    .mobile__logo {
      width: 200px;
      display: none;
    }

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .figure__container {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;

      background-repeat: repeat-x;
      background-size: cover;
      background: rgb(125,185,232); 
      background: -moz-linear-gradient(-45deg,  rgba(125,185,232,1) 0%, rgba(41,137,216,1) 29%, rgba(30,87,153,1) 100%); 
      background: -webkit-linear-gradient(-45deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 
      background: linear-gradient(135deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 

      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );  
    }

    .figure__logo {
      width: 200px;

      align-self: flex-start;
      margin-left: 10%;
    }

    .figure__logo:hover {
      filter: brightness(120%);
      cursor: pointer;
    }

    .form__container {
      justify-content: center;
      align-items: center;

      padding: 20px 0;
    }

    .form__innerBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    label {
      color: var(--blue1) ;
      font-weight: 400;
      font-size: 14px;
    }

    h2 {
      font-size: 20px;
      color: var(--blue1);
      font-weight: 700;
    }

    .login__info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }

    .form__toRegister {
      margin-top: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .form__toRegister>p {
      color: var(--grey2);
      font-size: 14px;
    }

    .form__toRegister>a {
      font-weight: bold;
      font-size: 16px;
    }

    .form__toRegister>a:hover {
      filter: brightness(110%);
    }

    .register__notify {
      width: 93%;

      font-size: 13px;
      text-align: start;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .register__notify>span {
      font-size: 13px;
      color: var(--grey2);
    }

    .register__notify>.error {
      color: var(--red);
    }
  
  @media (max-width: 768px) {
    & {
        height: auto;

        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-size: cover;
        background: rgb(125,185,232); 
        background: -moz-linear-gradient(-45deg,  rgba(125,185,232,1) 0%, rgba(41,137,216,1) 29%, rgba(30,87,153,1) 100%); 
        background: -webkit-linear-gradient(-45deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 
        background: linear-gradient(135deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 

        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );   
    }

     .mobile__logo {
        width: 200px;

        display: block;
        justify-self: flex-start;
     }

      .figure__container {
        display: none;
      }
  }

  @media (max-height: 600px) {
    & {
        height: auto;

        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-size: cover;
        background: rgb(125,185,232); 
        background: -moz-linear-gradient(-45deg,  rgba(125,185,232,1) 0%, rgba(41,137,216,1) 29%, rgba(30,87,153,1) 100%); 
        background: -webkit-linear-gradient(-45deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 
        background: linear-gradient(135deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 

        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );  
    }

    .mobile__logo {
        display: block;
    }

    .figure__container {
        display: none;
    }
}

@media (max-width: 400px) {
  .form__container {
       background-color: var(--white);
  }

  .mobile__logo {
        display: block;
  }

  .form__container {
         width: 100%;
  }
}
`