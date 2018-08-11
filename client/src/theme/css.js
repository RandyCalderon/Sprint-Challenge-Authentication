import styled from 'react-emotion';

const AppWrapper = styled('div')`
    display: flex;
    max-width: 1200px;
    margin: 0 200px;
    width: 100%;
`

const Header = styled('h2')`
    font-size: ${props => props.theme.fontStyles.header};
    font-family: ${props => props.theme.fontStyles.headerFont};
    color: white;
`

const JokeWrapper = styled('div')`
    width: 500px;
    heigth: 200px;
    background: ${props => props.theme.colorPalette.primaryColorone};
`

export { Header, JokeWrapper, AppWrapper };