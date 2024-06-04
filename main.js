import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import * as JsEncryptModule from 'jsencrypt';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

const encrypt = new JsEncryptModule.JSEncrypt({});
encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApcUc0Z8p/ZovOXW9gcX2\nru2HLLd4DgyHcK6SwwqY5nbs83Wu66tPJ5fKrevSeZtGOeo6RvBA1ylraomyDCM1\neMsBb/qhamWZC6oyssmvpLcsIbFukA9KA7shaUzql6TcVtE0CjBae7qm9ery/nm4\n1AbPvlhyEgmpiLYOHNLQBQ/BIs7/VA3Ck4uWTCK4Rh9rfubxIpe+Z3yx2C5pNYFV\nAGI8r0CF8iCmoTrwVYOBnYkqDxzn1VgSWrlsFU1X8ixeLv9UlOpzQkWN/CgkCvfx\noPvBskvZEoGuyIdzdtFU3fb0qREOvQ1uN9Wsn3+QEzTA+puoHbscqrjAec/3de7k\nbwIDAQAB\n-----END PUBLIC KEY-----\n');
const respclienteToEncrypt = JSON.stringify({ respcliente: this.challengerValue });
const respcliente = this.encrypt.encrypt(respclienteToEncrypt);


setupCounter(document.querySelector('#counter'))
