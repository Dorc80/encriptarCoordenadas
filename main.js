import './style.css'
import * as JsEncryptModule from 'jsencrypt';

document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <label for="llavePublica">Llave Publica</label>
      <input id="llavePublica" type="text"></button>
    </div>
    <div>
      <label for="coor">Coordenadas</label>
      <input id="coor" type="text"></button>
    </div>
    <div class="card">
    <button id="enviarBtn" type="button">Encriptar</button>
    </div>
    <div>
      <textarea id="coordenadasEncriptadas" name="textarea" rows="10" cols="50"></textarea>
    </div>
  </div>
`

const llavePublica = document.querySelector('#llavePublica');
const coor = document.querySelector('#coor');
const coordenadasEncriptadas = document.querySelector('#coordenadasEncriptadas');

const enviarBtn = document.querySelector('#enviarBtn');
enviarBtn.addEventListener('click', (ev) => {
  console.log({ ev });
  encryptCoor(llavePublica.value, coor.value);
});

const encryptCoor = (llavePublica, coor) => {
  console.log({ llavePublica, coor });
  const encrypt = new JsEncryptModule.JSEncrypt({});
  // encrypt.setPublicKey(llavePublica);
  encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApcUc0Z8p/ZovOXW9gcX2\nru2HLLd4DgyHcK6SwwqY5nbs83Wu66tPJ5fKrevSeZtGOeo6RvBA1ylraomyDCM1\neMsBb/qhamWZC6oyssmvpLcsIbFukA9KA7shaUzql6TcVtE0CjBae7qm9ery/nm4\n1AbPvlhyEgmpiLYOHNLQBQ/BIs7/VA3Ck4uWTCK4Rh9rfubxIpe+Z3yx2C5pNYFV\nAGI8r0CF8iCmoTrwVYOBnYkqDxzn1VgSWrlsFU1X8ixeLv9UlOpzQkWN/CgkCvfx\noPvBskvZEoGuyIdzdtFU3fb0qREOvQ1uN9Wsn3+QEzTA+puoHbscqrjAec/3de7k\nbwIDAQAB\n-----END PUBLIC KEY-----\n');
  const respclienteToEncrypt = JSON.stringify({ respcliente: coor });
  const respcliente = encrypt.encrypt(respclienteToEncrypt);
  coordenadasEncriptadas.textContent = respcliente;
  console.log({ respcliente });
}
