import React from 'react'
import ReactDOM from 'react-dom/client'
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


const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://goggle.com', target: '_blank'},
    'Click me to visit goggle',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).

render(
    <App />
)
