import { gql } from 'graphql-request';

const LIST_SCHEDULES = gql`
	query scheduleMany {
		scheduleMany {
			_id
			term
			__typename
		}
	}
`;

export default LIST_SCHEDULES;
