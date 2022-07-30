import { gql } from 'graphql-request';

const instructors = gql`
	query getInstructors($term: Int!) {
		instructors(term: $term) {
			firstName
			lastName
			__typename
		}
	}
`;
