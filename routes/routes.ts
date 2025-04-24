import {Router} from 'express';
import GetAlumnosController from '../Alumnos/controllers/GetAlumnos.controller';

const router = Router();
const getAlumnosController = new GetAlumnosController();

router.get('/',(req,res)=>{
    res.send('Bienvenido al backend de Nodejs👋');
})

router.get('/getAlumnos',(req,res) => {getAlumnosController.index(req,res)})

export default router;