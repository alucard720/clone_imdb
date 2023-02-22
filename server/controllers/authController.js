const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handeljwt");
const { encrypt, compare } = require("../utils/handlePasswords");
const { handleHttpError } = require("../utils/handleErrors");

//para registrar usuario

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    // const data = await usersModel.findOne({email:"mike@hotmail.com"});
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "CANT REGISTER USER");
  }
};

//para darle acceso a usuario
const loginCtrl = async (req, res) => {
const {Email, password} = req.body

 //validate user
  const loguser = await usersModel.findOne({Email})
  .select("password");
  if(!loguser) {
    handleHttpError(res, "USER NOT EXTIST", 404)
  };

//compare password
const check = await compare(password, loguser.password);
if(!check){
  handleHttpError(res, "password invalid", 401)
}



    const data = {
      token: tokenSign(loguser),
      loguser,
    };

    res.send({ data });
}


// if(await compare(password,loguser.password )){
//   res.status(200).send({
//     _id:loguser._id,
//     email:loguser.Email,

//   })
// }
  
  // try {
  //   const {Email, password} = req.body
  //   req = matchedData(req);
  //   const user = await usersModel
  //     .findOne({ Email:req.Email})
  //     .select('password');
  //   if (!user) {
  //     handleHttpError(res, "USER NOT EXISTS", 404);
  //     return;
  //   }
  //   const passwordhash = user.get("password");
  //   console.log({ passwordhash });
  //   const check = await compare(req.password, passwordhash);

  //   if (!check) {
  //     handleHttpError(res, "PASSWORD INVALID", 401);
  //     return;
  //   }

  //   const data = {
  //     token: tokenSign(user),
  //     user,
  //   };

  //   res.send({ data });
  // } catch (e) {
  //   handleHttpError(res, "ERROR_LOGIN_USER");
  //   console.log(e);
  // }
//};

module.exports = { registerCtrl, loginCtrl };
