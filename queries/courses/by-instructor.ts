import { gql } from 'graphql-request';

const coursesByInstructor = gql`
	query InstructorQuery(
		$firstName: String!
		$lastName: String!
		$term: Float!
	) {
		instructorOne(filter: { firstName: $firstName, lastName: $lastName }) {
			sessions(filter: { term: $term }) {
				_id
				term
				course {
					subject
					courseNum
					longTitle
					distribution
					prereqs
					coreqs
					__typename
				}
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
				crn
				enrollment
				maxEnrollment
				crossEnrollment
				maxCrossEnrollment
				waitlisted
				maxWaitlisted
				instructionMethod
				__typename
			}
			__typename
		}
	}
`;

export default coursesByInstructor;
