import styled from 'styled-components'


export const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

    label {
      margin-left: 8px ;
    }

    .error {
      color: var(--red);
    }
`