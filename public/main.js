const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
 
// const text = 'Hello RSA!';






const originalMessage = document.getElementById("originalMessage");
const encryptedMessage = document.getElementById("encryptedMessage");

const mypublickey = document.getElementById("mypublickey");
const myprivatekey = document.getElementById("myprivatekey");

const thirdpartypublickey = document.getElementById("thirdpartypublickey");



// self.encMessage=()=>{
    
//     let msg = secretmsg.value;
//     encmsg.innerHTML = msg;

// }
let key_public_value = key.exportKey('public');
let key_public_obj = new NodeRSA(key_public_value);





let key_private_value = key.exportKey('private');
let key_private_obj = new NodeRSA(key_private_value);

mypublickey.innerText = key_public_value;
myprivatekey.innerText = key_private_value;


self.encryptString =()=>{
    let key_thirdparty_public_value = thirdpartypublickey.value;
    let key_thirdparty_public_obj = new NodeRSA(key_thirdparty_public_value);
    let orgMsg = originalMessage.value;
    const encrypted = key_thirdparty_public_obj.encrypt(orgMsg, 'base64');
    console.log('encrypted: ', encrypted);
    encryptedMessage.value = encrypted;
}

self.decryptString =()=>{
    let encMsg = encryptedMessage.value;
    const decrypted = key_private_obj.decrypt(encMsg, 'utf8');
    console.log('decrypted: ', decrypted);
    originalMessage.value = decrypted;
}

self.encryptStringWithMypublicKey = () =>{
    let orgMsg = originalMessage.value;
    const encrypted = key_public_obj.encrypt(orgMsg, 'base64');
    console.log('encrypted: ', encrypted);
    encryptedMessage.value = encrypted;
}

