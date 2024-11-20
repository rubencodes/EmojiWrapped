import { Emoji, Item, Profile } from "../types/entity-types";

export enum APIEndpoint {
	EmojiList = "emoji.adminList",
	EmojiUsage = "search.modules.messages",
	Profile = "__profile_placeholder__",
}

export type APIResponseTypeMap = {
	[APIEndpoint.EmojiList]: {
		emoji: Emoji[];
		paging: {
			pages: number;
		};
		error: string;
	};
	[APIEndpoint.EmojiUsage]: {
		items: Item[];
		pagination: {
			total_count: number;
			pages: number;
		};
		error: string;
	};
	[APIEndpoint.Profile]: {
		objects: Profile[];
		error: string;
	};
};
