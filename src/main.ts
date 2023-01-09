import './layouts'
import { setupExtendDom } from './utils/extend-dom'
import { setupStyles } from './styles'

setupExtendDom()
setupStyles()

document.querySelector('#app')!.innerHTML = `
    <north-header></north-header>
    <div class="flex-around">
        <north-main width="200px" height="200px"></north-main>
        <north-main width="200px" height="200px"></north-main>
        <north-main width="200px" height="200px"></north-main>
        <north-main width="200px" height="200px"></north-main>
    </div>
`
