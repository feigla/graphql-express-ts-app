import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString,} from "graphql";
import db from "../../../config/db";
import LessonsType from "./lessons.type";

class Teacher {
    public name = 'Teacher'

    public fields = () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        subjects: {
            type: GraphQLList(LessonsType),
            async resolve(parent: any, args: {[p: string]: any }) {
                const {rows} = await db.query('SELECT * FROM lessons WHERE teacher_id = $1', [parent.id])
                const lessons = rows
                return lessons
            }
        }
    })
}

export default new GraphQLObjectType(new Teacher())