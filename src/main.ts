import './layouts'
import { setupExtendDom } from './utils/extend-dom'
import { setupStyles } from './styles'
import videoBgImg from './assets/images/bg.png'

setupExtendDom()
setupStyles()

document.querySelector('#app')!.innerHTML = `
    <north-header></north-header>
    <div class="container">
        <north-main>
            <div slot="default">
                <north-content height="calc(100vh - 450px);" mh="500px">
                <div slot="default" class="full">
                    <video id="north-video" class="full" poster=${videoBgImg}></video>
                </div>
                </north-content>
                <div style="margin-top: 20px">
                    <north-content height="160px;" mh="160px"></north-content>
                </div>
            </div>
        </north-main> 
    </div>
`
