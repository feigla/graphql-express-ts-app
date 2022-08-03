import db from "../../../config/db";


class LessonsRepo {
    public async findAll() {
        const {rows} = await db.query('SELECT * FROM lessons')
        return rows
    }

    public async findById(id: string) {
        const {rows} = await db.query('SELECT * FROM lessons WHERE id = $1', [id])
        return rows[0]
    }

    public async create(subject: string, teacher_id: number) {
        const {rows} = await db.query('INSERT INTO lessons (subject, teacher_id) values ($1, $2) returning *',
            [subject, teacher_id])
        return rows[0]
    }

    public async update (subject: string, teacher_id: number, id: string) {
        const {rows} = await db.query('UPDATE lessons SET subject = $1, teacher_id = $2 where id = $3 RETURNING *',
            [subject, teacher_id, id])
        return rows[0]
    }

    public async delete(id: string) {
        const {rows} = await db.query('DELETE FROM lessons WHERE id = $1 returning *', [id])
        return rows[0]
    }
}

export default new LessonsRepo()