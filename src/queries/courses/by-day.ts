import { gql } from 'graphql-request';

const COURSES_BY_DAY = gql`
	query GetDaysCourses($days: [String!], $term: Float!) {
		sessionByDay(days: $days, term: $term) {
			course {
				_id
				subject
				courseNum
				longTitle
				distribution
				sessions(filter: { term: $term }) {
					_id
					crn
					instructionMethod
					class {
						days
						startTime
						endTime
						__typename
					}
					lab {
						days
						startTime
						endTime
						__typename
					}
					instructors {
						firstName
						lastName
						__typename
					}
					course {
						distribution
						prereqs
						coreqs
						__typename
					}
					__typename
				}
				__typename
			}
			__typename
		}
	}
`;

export default COURSES_BY_DAY;
