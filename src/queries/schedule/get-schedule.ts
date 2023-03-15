import { gql } from 'graphql-request';

const getUserSchedule = gql`
	query GetUserSchedule($term: String!) {
		scheduleOne(filter: { term: $term }) {
			_id
			draftSessions {
				_id
				visible
				session {
					_id
					crn
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
					enrollment
					maxEnrollment
					waitlisted
					maxWaitlisted
					instructionMethod
					instructors {
						firstName
						lastName
						__typename
					}
					course {
						creditsMin
						creditsMax
						longTitle
						subject
						courseNum
						distribution
						coreqs
						prereqs
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

export default getUserSchedule;
