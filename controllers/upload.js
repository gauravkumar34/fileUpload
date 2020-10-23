const upload = require("../middleware/upload");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);


    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    return res.json({msg : 'File has been uploaded', user : req.user.name} );
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  uploadFile: uploadFile
};