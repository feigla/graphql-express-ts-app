import UserType from "../types/teachers.type";
import {GraphQLID, GraphQLString,} from "graphql";
import TeachersType from "../types/teachers.type";
import TeachersRepo from "./teachers.repo";

class TeachersMutation {

    public HireTeacher() {
        const type = TeachersType
        const args = {username: {type: GraphQLString}}

        return {
            type,
            args,
            async resolve(parent: any, args: {[p: string]: any}) {
                const teacher = TeachersRepo.create(args.username)
                return teacher
            }
        }
    }

    public fireTeacher() {
        const type = UserType
        const args = {id: {type: GraphQLID}}

        return {
            type,
            args,
            async resolve(parent: any, args: {[p: string]: any}) {
                const teacher = await TeachersRepo.delete(args.id)
                return teacher
            }
        }
    }
}

export default new TeachersMutation()