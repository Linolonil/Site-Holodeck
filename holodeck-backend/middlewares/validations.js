const validator = require("validator");
const CPFValidator = require("cpf-cnpj-validator");

//validar se os campos estão vazios
const validateEmptyFields = (fields) => {
  for (const [key, value] of Object.entries(fields)) {
    if (validator.isEmpty(value.trim())) {
      return `O campo ${key} não pode ser vazio!`;
    }
  }
  return null;
};

// Função para validar o CPF
const validateCpf = (cpf) => {
  return CPFValidator.cpf.isValid(cpf) ? null : "CPF inválido";
};

// Função para validar o email
const validateEmail = (email) => {
  return validator.isEmail(email) ? null : "Por favor, insira um email válido";
};

// Função para validar a senha
const validatePassword = (password) => {
  return password.length >= 8 ? null : "Por favor, insira uma senha com no mínimo 8 caracteres";
};

// Função principal de validação
const validations = async (req, res, next) => {
  const { name, email, password, cpf, username } = req.body;
  try {
  // Validações básicas
  const errors = [
    validateEmptyFields({ nome:name, email, senha: password, cpf, login:username }),
    validateCpf(cpf),
    validateEmail(email),
    validatePassword(password),
  ].filter(error => error);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors[0] });
  }
    // Se não houver conflitos, continua com a requisição
    next();
  } catch (error) {
    console.error("Erro ao validar campos:", error);
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
  }
};

module.exports = validations;
