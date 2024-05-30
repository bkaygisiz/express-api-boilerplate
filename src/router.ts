import authRouter from './controller/auth-controller';
import { Router } from 'express';

const router = Router();

router.use('/auth', authRouter);

export default router;