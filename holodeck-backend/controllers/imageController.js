const path = require('path');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createImage = async (req, res) => {
    const id = req.userId;
    const userId = parseInt(id, 10);
        
    const deleteImage = async () => {
        if (req.file) {
            const filePath = path.join('uploads', req.file.filename);
            try {
                await fs.promises.unlink(filePath);
            } catch (err) {
                console.error('Erro ao deletar a imagem:', err);
            }
        }
    };
    
    if (!userId) {
        await deleteImage();
        return res.status(400).json({ success: false, message: "ID do usuário não fornecido." });
    }

    try {
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });

        if (!existingUser) {
            await deleteImage(); // Certifique-se de aguardar a exclusão se necessário
            return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
        }

        if (req.file) {
            if (existingUser.profilePicture) {
                const oldImagePath = path.join('uploads', existingUser.profilePicture);
                try {
                    await fs.promises.unlink(oldImagePath);
                } catch (err) {
                    console.error('Erro ao deletar a imagem antiga:', err);
                }
            }
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { 
                profilePicture: req.file ? req.file.filename : existingUser.profilePicture,
            },
        });

        res.status(200).json({ success: true, message: "Imagem atualizada com sucesso!", updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro interno do servidor" });
        console.error(error.message);
    }
};

const deleteImage = async (req, res) => {
    const id = req.userId;
    const userId = parseInt(id, 10);
    
    try {
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });

        if (!existingUser) {
            return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
        }

        if (existingUser.profilePicture) {
            const oldImagePath = path.join('uploads', existingUser.profilePicture);
            try {
                await fs.promises.unlink(oldImagePath);
            } catch (err) {
                console.error('Erro ao deletar a imagem antiga:', err);
                return res.status(500).json({ success: false, message: "Erro ao deletar a imagem" });
            }
        }
        if(existingUser.profilePicture === null){
            return res.status(404).json({ success: false, message: "O usuário não possui uma imagem de perfil!" });
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { profilePicture: null },
        });

        res.status(200).json({ success: true, message: "Imagem deletada com sucesso!", updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro interno do servidor" });
        console.error(error.message);
    }
};

module.exports = {
    createImage,
    deleteImage,
};
