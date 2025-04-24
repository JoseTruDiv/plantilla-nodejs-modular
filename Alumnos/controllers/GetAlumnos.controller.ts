import AlumnosModel from "../models/Alumnos.models";

class GetAlumnosController{
   async index(req: Request, res: Response){
        const alumnosModel = new AlumnosModel();
        const alumnos = await alumnosModel.getAlumnos();
        res.json(alumnos[0]);
    }
}


export default GetAlumnosController;