import './layouts'
import { setupExtendDom } from './utils/extend-dom'
import { setupStyles } from './styles'

setupExtendDom()
setupStyles()

document.querySelector('#app')!.innerHTML = `
    <north-header></north-header>
`
