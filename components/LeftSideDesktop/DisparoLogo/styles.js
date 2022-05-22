import styled from 'styled-components'

export const StyledDiv = styled.div`
    width: 200px;
    align-self: ${props => props.className === 'mobile__logo' ? 'center' : 'flex-start'};
    margin-left: ${props => props.className === 'mobile__logo' ? '0' : '10%'};
    justify-self: center;

`