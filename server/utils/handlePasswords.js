const bcrypt = require('bcryptjs');
/**
 * Encrypt textplain
 * @param {*} textPlain 
 * @returns 
 */

  
  /**
   * Compara password with hash
   * @param {*} passwordPlain 
   * @param {*} hashPassword 
   * @returns 
   */
  const compare = async (password , passwordhash) => {
    return await bcrypt.compare(password, passwordhash);
  };
  
  module.exports = {  compare };
