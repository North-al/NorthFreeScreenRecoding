import './style.css'
import './layouts'
import { setupExtendDom } from './utils/extend-dom'

setupExtendDom()

document.querySelector('#app')!.innerHTML = `<north-header text="hello world"></north-header>`
