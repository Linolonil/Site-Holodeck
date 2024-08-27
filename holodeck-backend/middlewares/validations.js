const validator = require("validator");
const CPFValidator = require("cpf-cnpj-validator");
const fs = require('fs');

const validations = (req, res, next) => {
  const { name, email, password, cpf, username } = req.body;

  // Função para deletar a imagem se houver um erro
  const deleteImage = () => {
    if (req.file) {
      const path = `uploads/${req.file.filename}`;
      fs.unlink(path, (err) => {
        if (err) {
          console.error('Erro ao deletar a imagem:', err);
        }
      });
    }
  };

  // Validações
  if (!name || !email || !password || !cpf || !username) {
    deleteImage();
    return res
      .status(400)
      .json({ success: false, message: "Todos os campos são obrigatórios!" });
  }

  if (!CPFValidator.cpf.isValid(cpf)) {
    deleteImage();
    return res.status(400).json({ success: false, message: "CPF é inválido" });
  }

  if (!validator.isEmail(email)) {
    deleteImage();
    return res
      .status(400)
      .json({ success: false, message: "Por favor, insira um email válido" });
  }

  if (password.length < 8) {
    deleteImage();
    return res
      .status(400)
      .json({
        success: false,
        message: "Por favor, insira uma senha com no mínimo 8 caracteres",
      });
  }

  next();
};

module.exports = validations;
