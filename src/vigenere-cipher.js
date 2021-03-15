const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type_machine=true){
    this.type_machine = true;
  }

  encrypt(message,key) {
    if (!(arguments[0] || arguments[1])){
      throw new Error;
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let reg = /[A-Z]/;
    let index_key = 0;
    let count_key = key.length-1;
    let cipher = [];
    for (let i in message){
      if(reg.test(message[i])){
        let key_code = key[index_key].charCodeAt() - 65;
        index_key === count_key? index_key = 0 : index_key++;
        let m_code = message[i].charCodeAt() - 65;
        m_code = ((m_code + key_code)%26)+65;      
        cipher.push(String.fromCharCode(m_code));
      } else {
        cipher.push(message[i]);
      }      
    }
    return this.type_machine ? cipher.join('') : cipher.reverse().join('');
  }    
  decrypt(message,key) {
    if (!(arguments[0] || arguments[1])){
      throw new Error;
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let reg = /[A-Z]/;
    let index_key = 0;
    let count_key = key.length-1;
    let un_cipher = [];
    for (let i in message){
      if(reg.test(message[i])){
        let key_code = key[index_key].charCodeAt() - 65;
        index_key === count_key? index_key = 0 : index_key++;
        let m_code = message[i].charCodeAt() - 65;
        m_code = (((m_code - key_code)+26) % 26) + 65;
        un_cipher.push(String.fromCharCode(m_code));
      } else {
        un_cipher.push(message[i]);
      }     
    }
    return this.type_machine ? un_cipher.join('') : un_cipher.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
