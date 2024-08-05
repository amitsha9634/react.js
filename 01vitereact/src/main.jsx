import React from 'react'
import ReactDOM from 'react-dom/client'
import { render } from 'preact'
import { App } from './app.jsx'

function MyApp() {
    return(
        <div>
           <h1>
            Custom App !
           </h1>
        </div>
    )
}

/* const reactElement = {
    type: 'a',
    props: {
        href: 'https://goggle.com',
        target: '_blank'
    } ,
    children: 'Click me to visit goggle'
} */

const anotherElement = (
    <a href="https://goggle.com" target='_blank'>Visit goggle</a>
)

ReactDOM.createRoot(document.getElementById('root')).

render(
    <App />
)
