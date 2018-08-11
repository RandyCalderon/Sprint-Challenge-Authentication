import styled from 'react-emotion';

// App Wrapper

const AppWrapper = styled('div')`
    position: relative;
    top: -22px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    font: inherit;
    vertical-align: baseline;
`

// Jokes Component
const JokesWrapper = styled('div')`
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    background: ${props => props.theme.colorPalette.secondaryColor};
    height: 100vh;
`

const JokesBanner = styled('div')`
    width: 100%;
    height: 60px;
    background: ${props => props.theme.colorPalette.primaryColortwo};
`
const JokesHeader = styled('h1')`
    color: white;
    text-align: center;
    font-size: 22px;
    padding-top: 15px;
`

const Header = styled('h2')`
    font-size: ${props => props.theme.fontStyles.header};
    font-family: ${props => props.theme.fontStyles.headerFont};
    color: white;
    text-align: center;
`

const Body = styled('p')`
    font-size: ${props => props.theme.fontStyles.paragraph};
    font-family: ${props => props.theme.fontStyles.bodyFont};
`
const JokesFlex = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const JokeWrapper = styled('div')`
    width: 400px;
    height: 100px;
    margin-top: 20px;
    background: ${props => props.theme.colorPalette.primaryColorone};
    text-align: center;
    color: white;
`

export {AppWrapper, JokesWrapper, JokesBanner, JokesHeader, JokesFlex, JokeWrapper, Header, Body };