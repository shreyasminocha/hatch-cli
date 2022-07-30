import { gql } from 'graphql-request';

const coursesByTime = gql`
	query GetTimeIntervalCourses(
		$startTime: String!
		$endTime: String!
		$term: Float!
	) {
		sessionByTimeInterval(
			startTime: $startTime
			endTime: $endTime
			term: $term
		) {
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

export default coursesByTime;
