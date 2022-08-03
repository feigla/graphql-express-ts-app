import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString,} from "graphql";

class Lesson {
    public name = 'Lesson'

    public fields = () => ({
        id: {type: GraphQLID},
        subject: {type: GraphQLString},
        teacher_id: {type: GraphQLInt}
    })
}

export default new GraphQLObjectType(new Lesson())