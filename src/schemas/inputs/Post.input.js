import {GraphQLInputObjectType, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
	name: "PostInputType",
	fields: {
		_id: {
			type: GraphQLString
		},
		author_id: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		content: {
			type: GraphQLString
		}
	}
});