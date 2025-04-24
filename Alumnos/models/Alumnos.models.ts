import pool from "../../config/Database";

class AlumnosModel {

    async getAlumnos(){
        let connection;
        try {
            connection = await pool.getConnection();
            const rows = await connection.execute('SELECT * FROM alumnos');
            return rows;
        } catch (error) {
            return 0;
        }
    }

}

export default AlumnosModel;