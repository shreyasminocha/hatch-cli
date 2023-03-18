import { gql } from 'graphql-request';

const COURSE_BY_NUMBER = gql`
	query GetCourse($subject: String!, $number: Float!, $term: Float!) {
		courseOne(filter: { subject: $subject, courseNum: $number }) {
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

export default COURSE_BY_NUMBER;
