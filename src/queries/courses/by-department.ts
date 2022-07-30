import { gql } from 'graphql-request';

const coursesByDepartment = gql`
	query GetDeptCourses($subject: String!, $term: Float!) {
		courseMany(filter: { subject: $subject }, sort: COURSE_NUM_ASC) {
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

export default coursesByDepartment;
