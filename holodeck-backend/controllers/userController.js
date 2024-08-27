const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt'); 

// Lista todos os usuários
const listUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Lista um usuário específico pelo ID
const listUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ success: false, message: "ID inválido fornecido!" });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Deleta um usuário pelo ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);
 // Verifica se o usuário é o dono do artigo
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ success: false, message: "ID inválido fornecido!" });
  }

  if (userId !== req.userId) {
    return res.status(403).json({ success: false, message: "Você não tem permissão para deletar este usuário!" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { articles: true },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
    }

    // Deleta a imagem de perfil do usuário
    if (user.profilePicture) {
      const imagePath = path.join(__dirname, '../uploads', user.profilePicture);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Erro ao deletar a imagem:', err);
        }
      });
    }
    // Deleta todos os artigos do usuário e o usuário
    await prisma.$transaction([
      prisma.article.deleteMany({ where: { userId } }),
      prisma.user.delete({ where: { id: userId } }),
    ]);

    res.status(200).json({ success: true, message: "Usuário e artigos deletados com sucesso!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Cria um novo usuário
const createUser = async (req, res) => {
  const { name, email, password, cpf, username } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { cpf } });

    if (existingUser) {
      return res.status(409).json({ success: false, message: "Usuário com esse CPF já existe!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: { 
        name, 
        email, 
        password: hashedPassword, 
        cpf, 
        username, 
        profilePicture: null 
      },
    });

    const token = createToken(user.id);

    res.status(201).json({ success: true, user, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};


// Função para criar um token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Atualiza um usuário pelo ID
const updateUser = async (req, res) => {
  const { name, email, password, cpf, username, bio, website, github, linkedin, twitter } = req.body;
  const { id } = req.params;
  const userId = parseInt(id, 10);
  
  // Função para deletar a imagem temporária
  const deleteImage = (filename) => {
    if (filename) {
      const filePath = path.join(__dirname, '../uploads', filename);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Erro ao deletar a imagem:', err);
        }
      });
    }
  };

  if (isNaN(userId) || userId <= 0) {
    // Deletar a imagem se estiver presente e retornar erro
    deleteImage(req.file?.filename);
    return res.status(400).json({ success: false, message: "ID inválido fornecido!" });
  }
  if (userId !== req.userId) {
    deleteImage(req.file?.filename);
    return res.status(403).json({ success: false, message: "Você não tem permissão para atualizar este usuário!" });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { id: userId } });

    if (!existingUser) {
      deleteImage(req.file?.filename);
      return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
    }

    // Verifica se o CPF foi alterado
    if (cpf && cpf !== existingUser.cpf) {
      const cpfExists = await prisma.user.findUnique({ where: { cpf } });
      if (cpfExists) {
        // Deletar a imagem se estiver presente e retornar erro
        deleteImage(req.file?.filename);
        return res.status(409).json({ success: false, message: "CPF já está em uso!" });
      }
    }

    // Atualiza a senha se fornecida
    const hashedPassword = password ? await bcrypt.hash(password, 10) : existingUser.password;

    // Remove a imagem antiga se houver uma nova
    if (req.file) {
      if (existingUser.profilePicture) {
        const oldImagePath = path.join(__dirname, '../uploads', existingUser.profilePicture);
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error('Erro ao deletar a imagem antiga:', err);
          }
        });
      }
    }

    // Atualiza o usuário com todos os campos, considerando os opcionais
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { 
        name,
        email,
        password: hashedPassword,
        cpf,
        username,
        bio,
        profilePicture: req.file ? req.file.filename : existingUser.profilePicture,
        website,
        github,
        linkedin,
        twitter
      },
    });

    res.status(200).json({ success: true, message: "Usuário atualizado com sucesso!", updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};


module.exports = {
  listUsers,
  listUserById,
  deleteUser,
  createUser,
  updateUser,
};