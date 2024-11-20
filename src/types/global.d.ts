import { APIEndpoint, APIResponseTypeMap } from "./api-types";

type TSWindowData = {
	boot_data:
		| {
				api_token: string;
				enterprise_api_token: string;
				team_id: string;
				enterprise_id: string;
		  }
		| undefined;
	model:
		| {
				team:
					| {
							domain: string;
					  }
					| undefined;
		  }
		| undefined;
	members:
		| {
				fetchAndUpsertMembersWithQuery: (params: {
					query: string;
				}) => Promise<APIResponseTypeMap[APIEndpoint.Profile]> | undefined;
		  }
		| undefined;
};

declare global {
	interface Window {
		TS: TSWindowData | undefined;
	}
}
