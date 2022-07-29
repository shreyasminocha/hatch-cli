import { gql } from 'graphql-request';

const toggleCourse = gql`
	mutation ToggleCourse($scheduleID: ID!, $sessionID: ID!) {
		scheduleToggleSession(scheduleID: $scheduleID, sessionID: $sessionID) {
			_id
			term
			draftSessions {
				_id
				session {
					_id
					__typename
				}
				visible
				__typename
			}
			__typename
		}
	}
`;
