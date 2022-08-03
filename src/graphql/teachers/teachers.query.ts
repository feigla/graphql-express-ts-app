import {GraphQLID, GraphQLList} from "graphql";
import TeachersType from "../types/teachers.type";
import TeachersRepo from "./teachers.repo";


class TeachersQuery {
    public getAllTeachers() {
        const type = new GraphQLList(TeachersType)

        return {
            type,
            async resolve() {
                const teachers = await TeachersRepo.findAll()
                return teachers
            }
        }
    }

    public getTeacherById() {
        const type = TeachersType
        const args = {id: {type: GraphQLID}}

        return {
            type,
            args,
            async resolve(parent: any, args: {[p: string]: any}) {
                const teacher = await TeachersRepo.findById(args.id)
                return teacher
            }
        }
    }
}

export default new TeachersQuery()