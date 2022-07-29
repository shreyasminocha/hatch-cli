import { gql } from 'graphql-request';

const coursesByName = gql`
	query GetCourseByName($inputName: String!, $term: Float!) {
		courseMany(filter: { courseNameRegExp: $inputName }, sort: COURSE_NUM_ASC) {
			_id
			subject
			courseNum
			longTitle
			sessions(filter: { term: $term }) {
				_id
				term
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
