import styled from 'styled-components'


export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  min-height: 100vh;

  section {
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  .mobile__logo {
    display: none;
  }

  .figure__container {
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: linear-gradient(
  130deg,
  hsl(206deg 90% 59%) 0%,
  hsl(207deg 77% 55%) 21%,
  hsl(207deg 67% 51%) 30%,
  hsl(208deg 65% 47%) 39%,
  hsl(208deg 66% 43%) 46%,
  hsl(208deg 66% 39%) 54%,
  hsl(209deg 67% 35%) 61%,
  hsl(209deg 68% 32%) 69%,
  hsl(210deg 69% 28%) 79%,
  hsl(210deg 70% 24%) 100%
);

    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );  
  }


  .figure__logo:hover {
    filter: brightness(120%);

    cursor: pointer;
  }


  .form__container {
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .form__innerBox {
    width: 100%;


    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  label {
    color: var(--blue1) ;
    font-weight: 400;
  }

  h2 {
    font-size: 24px;
    color: var(--blue1);
    font-weight: 700;
  }


  .login__info {
    width: 95%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .form__toRegister {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .form__toRegister>p {
    color: var(--grey2)
  }
  .form__toRegister>a {
    font-weight: bold;
  }
  .form__toRegister>a:hover {
    filter: brightness(110%);
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-image: linear-gradient(
                        130deg,
                        hsl(206deg 90% 59%) 0%,
                        hsl(207deg 77% 55%) 21%,
                        hsl(207deg 67% 51%) 30%,
                        hsl(208deg 65% 47%) 39%,
                        hsl(208deg 66% 43%) 46%,
                        hsl(208deg 66% 39%) 54%,
                        hsl(209deg 67% 35%) 61%,
                        hsl(209deg 68% 32%) 69%,
                        hsl(210deg 69% 28%) 79%,
                        hsl(210deg 70% 24%) 100%
                      );

      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );  
    }
    .mobile__logo {
      display: block;
      width: 200px;
      justify-self: flex-start;
    }

    .figure__container {
      display: none;
    }

  }

  @media (max-height: 500px) {
  
   & {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(
                    130deg,
                    hsl(206deg 90% 59%) 0%,
                    hsl(207deg 77% 55%) 21%,
                    hsl(207deg 67% 51%) 30%,
                    hsl(208deg 65% 47%) 39%,
                    hsl(208deg 66% 43%) 46%,
                    hsl(208deg 66% 39%) 54%,
                    hsl(209deg 67% 35%) 61%,
                    hsl(209deg 68% 32%) 69%,
                    hsl(210deg 69% 28%) 79%,
                    hsl(210deg 70% 24%) 100%
                  );

    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );  
  }



  .figure__container {
    display: none;
  }
    
}
`

export const StyledErrorContainer = styled.div`
    width: 95.5%;
    height: 50px;

    padding: 5px 10px 5px 10px;
    border: 2px solid #f8c0c4;
    border-radius: 6px;

    display: ${props => props.display};
    justify-content: flex-start;
    align-items: center;

    background-color: #FBDBDD;

    .error__container {
      width: 13%;
      height: 100%;

      border-left: 3px solid #f06b77;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .error__msg {
      text-align: start;
    }

    img {
      width: 20px;

      color: red;
    }

    span {
      width: 100%;

      font-size: 12px;
      text-align: start;
      color: #f06b77;
    }
  `