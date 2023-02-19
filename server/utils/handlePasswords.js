const bcrypt = require('bcryptjs');
/**
 * Encrypt textplain
 * @param {*} textPlain 
 * @returns 
 */
const encrypt = async (textPlain) => {
    let salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(textPlain, salt)
    return hash
  };
  
  
  /**
   * Compara password with hash
   * @param {*} passwordPlain 
   * @param {*} hashPassword 
   * @returns 
   */
  const compare = async (passwordPlain , hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword);
  };
  
  module.exports = { encrypt, compare };
