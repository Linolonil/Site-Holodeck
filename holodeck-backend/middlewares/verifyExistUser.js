const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Função para verificar se um usuário já existe
const verifyExistUser = async (req, res, next) => {
  const { username, email, cpf } = req.body;

  try {
    // Inicia uma transação
    const [userByUsername, userByEmail, userByCpf] = await prisma.$transaction([
      prisma.user.findUnique({ where: { username } }),
      prisma.user.findUnique({ where: { email } }),
      prisma.user.findUnique({ where: { cpf } }),
    ]);

    // Verifica se já existe um usuário com o mesmo username, email ou cpf
    if (userByEmail && userByCpf ) {
      return res.status(400).json({ success: false, message: "Usuário já cadastrado" });
    }
    if (userByUsername) {
      return res.status(400).json({ success: false, message: "Nome de usuário indisponível" });
    }

    // Se não houver conflitos, continua com a requisição
    next();
  } catch (error) {
    console.error("Erro ao verificar existência do usuário:", error);
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
  }
};

const verifyConflictOnUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, cpf } = req.body;

  try {
    // Encontra o usuário atual
    const currentUser = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!currentUser) {
      return res.status(404).json({ success: false, message: "Usuário não encontrado" });
    }

    // Verifica se outro usuário já possui os mesmos dados
    const conflicts = await prisma.user.findMany({
      where: {
        AND: [
          { id: { not: parseInt(id) } }, // Ignora o usuário atual
          {
            OR: [
              { username: username || null },
              { email: email || null },
              { cpf: cpf || null },
            ],
          },
        ],
      },
    });

    if (conflicts.length > 0) {
      // Identifica qual campo causou o conflito
      let conflictMessage = [].filter(conflict => conflict);

      conflicts.forEach(conflict => {
        if (conflict.username === username) {
          conflictMessage.push("Nome de usuário já existe.");
        }
        if (conflict.email === email) {
          conflictMessage.push("Email já cadastrado.");
        }
        if (conflict.cpf === cpf) {
          conflictMessage.push("CPF já cadastrado.");
        }
      });

      return res.status(400).json({ success: false, message: conflictMessage[0] });
    }

    next();
  } catch (error) {
    console.error("Erro ao verificar conflitos:", error);
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
  }
};

module.exports = verifyConflictOnUpdate;



module.exports = { verifyExistUser, verifyConflictOnUpdate };
