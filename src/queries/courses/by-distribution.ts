import { gql } from 'graphql-request';

const COURSES_BY_DISTRIBUTION = gql`
	query CourseQuery($distribution: String!, $term: Float!) {
		courseMany(
			filter: { distribution: $distribution }
			sort: SUBJECT_AND_COURSE_NUM_ASC
		) {
			_id
			subject
			courseNum
			longTitle
			distribution
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

export default COURSES_BY_DISTRIBUTION;
