import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
  min-height:100%;/* make sure it is at least as tall as the viewport */
  position:relative;
}
body {
  margin: 0;
  height:100%;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`

export default GlobalStyle;