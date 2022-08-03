import {GraphQLID, GraphQLInt, GraphQLString,} from "graphql";
import LessonsType from "../types/lessons.type";
import TeachersRepo from "../teachers/teachers.repo";
import LessonsRepo from "./lessons.repo";

class LessonsMutation {

    public createLesson() {
        const type = LessonsType
        const args = {subject: {type: GraphQLString}, teacher_id: {type: GraphQLInt}}

        return {
            type,
            args,
            async resolve(parent: any, args: {[p: string]: any}) {
                const teacher = await TeachersRepo.findById(args.teacher_id)
                if (teacher) {
                    const lessons = await LessonsRepo.create(args.subject, args.teacher_id)
                    return lessons
                }
            }
        }
    }

    public updateLesson() {
        const type = LessonsType
        const args = {subject: {type: GraphQLString}, teacher_id: {type: GraphQLInt}, id: {type: GraphQLID}}

        return {
            type,
            args,
            async resolve(parent: any, args: {[p: string]: any}) {
                const teacher = await TeachersRepo.findById(args.teacher_id)
                if (teacher) {
                    const lessons = await LessonsRepo.update(args.subject, args.teacher_id, args.id)
                    return lessons
                }
            }
        }
    }

    public deleteLesson() {
        const type = LessonsType
        const args = {id: {type: GraphQLID}}

        return {
            type,
            args,
            async resolve(parent: any, args: {[p: string]: any}) {
                const lesson = await LessonsRepo.delete(args.id)
                return lesson
            }
        }
    }
}

export default new LessonsMutation()