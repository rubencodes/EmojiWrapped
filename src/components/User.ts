import { html } from "htm/preact";
import { useState, useEffect } from "preact/hooks";
import { API } from "../utilities/API";
import { Loader } from "./Loader";
import type { User as UserEntity } from "../types/entity-types";

export const User = ({ username, emoji }: UserEntity) => {
	const [url, setUrl] = useState("") as [string, (value: string) => void];
	useEffect(() => {
		const fetchProfile = async () => {
			const user = await API.fetchProfile({ username });
			setUrl(user?.profile?.image_original ?? "");
		};
		fetchProfile();
	}, []);

	return html`
		<div className="user">
			<div className="user-img-wrapper">
				${url && html`<img className="user-img" src=${url} />`}
				${!url && html`<${Loader} />`}
			</div>
			<span className="user-footer">
				<span className="user-count">${emoji.length}</span>
				<br />
				${emoji.length === 1 ? "reaction" : "reactions"}
			</span>
		</div>
	`;
};
