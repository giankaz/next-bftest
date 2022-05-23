import styled from 'styled-components'



export const StyledButton = styled.button`
    width: ${props => props.width};
    
    border: none;
    border-radius: 6px;

    margin-top: 10px;

    font-size: 16px;
    font-weight: 500;
    color: var(--white);
    background-image: linear-gradient(
  145deg,
  hsl(206deg 90% 59%) 0%,
  hsl(207deg 89% 55%) 8%,
  hsl(207deg 86% 52%) 15%,
  hsl(207deg 84% 48%) 23%,
  hsl(208deg 81% 44%) 31%,
  hsl(208deg 79% 40%) 40%,
  hsl(209deg 77% 36%) 50%,
  hsl(209deg 75% 32%) 61%,
  hsl(209deg 73% 28%) 74%,
  hsl(210deg 70% 24%) 100%
);

    padding: 15px;
      
    &:hover {
        filter: brightness(108%);
    }
`