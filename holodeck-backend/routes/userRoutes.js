const express = require('express');
import authMiddleware from './../middlewares/authMiddleware';
const router = express.Router();
const userController = require('../controllers/userController.js');
const validations = require('../middlewares/validations.js');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`);
    },
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // Limita o tamanho do arquivo a 2MB (2 * 1024 * 1024 bytes) = 2097152 bytes
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(file.mimetype);
        const mimetype = allowedTypes.test(file.originalname.split('.').pop());
        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Arquivo não suportado'), false);
        }
    },
});

// Rota para listar todos os usuários
router.get('/list-users', userController.listUsers);

// Rota para listar um usuário específico pelo ID
router.get('/list-users/:id', userController.listUserById);

// Rota para deletar um usuário pelo ID
router.delete('/delete-user/:id',authMiddleware, userController.deleteUser);

// Rota para atualizar um usuário existente
router.put('/update-user/:id', upload.single('image'), authMiddleware, validations, userController.updateUser);

// Rota para criar um novo usuário
router.post('/create-user', upload.single('image'), validations,  userController.createUser);

module.exports = router;
