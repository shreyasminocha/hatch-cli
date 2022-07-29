import { gql } from 'graphql-request';

const addCourse = gql`
	mutation AddDraftSession($scheduleID: ID!, $sessionID: ID!) {
		scheduleAddSession(scheduleID: $scheduleID, sessionID: $sessionID) {
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
