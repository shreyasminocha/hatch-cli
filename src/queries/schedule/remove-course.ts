import { gql } from 'graphql-request';

const removecourse = gql`
	mutation RemoveDraftSession($scheduleID: ID!, $sessionID: ID!) {
		scheduleRemoveSession(scheduleID: $scheduleID, sessionID: $sessionID) {
			_id
			__typename
			term
			draftSessions {
				_id
				__typename
				session {
					_id
					__typename
				}
				visible
			}
		}
	}
`;
