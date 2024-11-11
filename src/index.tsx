import { App } from './App'
import './index.css'

const root = document.getElementById('root') as HTMLElement

const app = new App()
root.innerHTML = app.render()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
