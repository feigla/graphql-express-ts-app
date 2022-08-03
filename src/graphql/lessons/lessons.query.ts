import {GraphQLID, GraphQLList} from "graphql";
import LessonsType from "../types/lessons.type";
import LessonsRepo from "./lessons.repo";


class LessonsQuery {
    public getAllLessons() {
        const type = new GraphQLList(LessonsType)

        return {
            type,
            async resolve() {
                const lessons = await LessonsRepo.findAll()
                return lessons
            }
        }
    }

    public getLessonById() {
        const type = LessonsType
        const args = {id: {type: GraphQLID}}

        return {
            type,
            args,
            async resolve(parent: any, args: {[p: string]: any}) {
                const lesson = await LessonsRepo.findById(args.id)
                return lesson
            }
        }
    }
}

export default new LessonsQuery()