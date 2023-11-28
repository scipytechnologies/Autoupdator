import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}> 
    <MemoryRouter>
      <App />
    </MemoryRouter>
    </Provider>
  </React.StrictMode>
)
