// import the react and reactDOM methods
import React, { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import App from './App';

//get a reference to the div with ID root
const rootElement = document.querySelector("#root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// tell react to take control con the element


// create a component

//Show the component on the scrren