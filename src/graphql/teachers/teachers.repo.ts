import db from "../../../config/db";


class TeachersRepo {
    public async findAll() {
        const {rows} = await db.query('SELECT * FROM teachers')
        return rows
    }

    public async findById(id: string) {
        const {rows} = await db.query('SELECT * FROM teachers WHERE id = $1', [id])
        return rows[0]
    }

    public async create(username: string) {
        const {rows} = await db.query('INSERT INTO teachers (username) values ($1) returning *',
            [username])
        return rows[0]
    }

    public async delete(id: string) {
        const {rows} = await db.query('DELETE FROM teachers WHERE id = $1 returning *', [id])
        return rows[0]
    }
}

export default new TeachersRepo()