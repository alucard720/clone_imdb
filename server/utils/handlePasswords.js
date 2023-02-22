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
  const compare = async (password , passwordhash) => {
    return await bcrypt.compare(password, passwordhash);
  };


 

  

  module.exports = {  encrypt,compare, };
