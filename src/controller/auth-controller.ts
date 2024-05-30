import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
    res.send('Login page');
});

router.get('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).send('Missing required fields');
    }
    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        res.status(400).send('Invalid field types');
    }
});

export default router;