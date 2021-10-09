import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body {
    margin: 0;
    background-color: #14213d;
    @media(max-width: 760px){
      width: 550px;
      height: 100%;
      overflow: hidden;
    }
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`