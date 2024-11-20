import { JSONObject } from "./base-types";

export interface Profile extends JSONObject {
	name: string;
	profile: {
		image_original: string;
	};
}

export interface Emoji extends JSONObject {
	name: string;
	url: string;
	created: number;
	alias_for: string;
}

export interface Message extends JSONObject {
	user: string;
	username: string;
}

export interface Item extends JSONObject {
	messages: Message[];
}

export interface Stat extends JSONObject {
	name: string;
	url: string;
	createdAt: number;
	items: Item[];
	count: number;
}

export interface User extends JSONObject {
	username: string;
	emoji: string[];
}
