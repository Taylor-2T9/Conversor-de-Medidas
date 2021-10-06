import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './global'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)