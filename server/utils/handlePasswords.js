const bcrypt = require('bcryptjs');
/**
 * Encrypt textplain
 * @param {*} textPlain 
 * @returns 
 */
const encrypt = async (textPlain)=>{
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(textPlain, salt)
  return hash;
}
  
  /**
   * Compara password with hash
   * @param {*} textPlain
   * @param {*} hashPassword 
   * @returns 
   */
  const compare = async (textPlain , passwordhash) => {
    return await bcrypt.compare(textPlain, passwordhash);
  };
  
  module.exports = {  encrypt,compare };
