import './layouts'
import { setupExtendDom } from './utils/extend-dom'
import { setupStyles } from './styles'

setupExtendDom()
setupStyles()

document.querySelector('#app')!.innerHTML = `
    <north-header></north-header>
    <div class="container">
        <north-main>
            <div slot="default">
                <north-content height="calc(100vh - 450px);" mh="500px">
                <div slot="default">
                    <video id="north-video"></video>
                </div>
                </north-content>
                <div style="margin-top: 20px">
                    <north-content height="160px;" mh="160px"></north-content>
                </div>
            </div>
        </north-main> 
    </div>
`
