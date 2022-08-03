import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import TeachersQuery from "./teachers/teachers.query";
import TeachersMutation from "./teachers/teachers.mutation";
import LessonsMutation from "./lessons/lessons.mutation";
import LessonsQuery from "./lessons/lessons.query";

class Mutation {
    public name = "MutationType"

    public fields = () => ({
        hireTeacher: TeachersMutation.HireTeacher(),
        fireTeacher: TeachersMutation.fireTeacher(),

        createLesson: LessonsMutation.createLesson(),
        deleteLesson: LessonsMutation.deleteLesson(),
        updateLesson: LessonsMutation.updateLesson()
    })
}

class Query {
    public name = "QueryType"

    public fields = () => ({
        getAllTeachers: TeachersQuery.getAllTeachers(),
        getTeacherById: TeachersQuery.getTeacherById(),

        getAllLessons: LessonsQuery.getAllLessons(),
        getLessonById: LessonsQuery.getLessonById()
    })
}

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType(new Query()),
    mutation: new GraphQLObjectType(new Mutation())
})