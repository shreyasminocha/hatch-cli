import { gql } from 'graphql-request';

const GET_EVALS = gql`
	query getEvaluationChartByCourse($course: String!) {
		getEvaluationChartByCourse(course: $course) {
			courseName
			term
			enrolled_amount
			organization {
				class_mean
				responses
				score_1
				score_2
				score_3
				score_4
				score_5
				__typename
			}
			assignments {
				class_mean
				responses
				score_1
				score_2
				score_3
				score_4
				score_5
				__typename
			}
			overall {
				class_mean
				responses
				score_1
				score_2
				score_3
				score_4
				score_5
				__typename
			}
			challenge {
				class_mean
				responses
				score_1
				score_2
				score_3
				score_4
				score_5
				__typename
			}
			workload {
				class_mean
				responses
				score_1
				score_2
				score_3
				score_4
				score_5
				__typename
			}
			why_taking {
				class_mean
				responses
				score_1
				score_2
				score_3
				score_4
				score_5
				__typename
			}
			expected_grade {
				class_mean
				responses
				score_1
				score_2
				score_3
				score_4
				score_5
				__typename
			}
			expected_pf {
				class_mean
				responses
				score_1
				score_2
				score_3
				score_4
				score_5
				__typename
			}
			comments {
				text
				time
				__typename
			}
			__typename
		}
	}
`;

export default GET_EVALS;
