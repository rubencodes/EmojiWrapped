import { html } from "htm/preact";
import { Stat } from "../types/entity-types";

export const Emoji = ({ name, url, count }: Stat) => {
	return html`
		<div className="emoji">
			<span className="emoji-name">:${name}:</span>
			<img className="emoji-img" src=${url} />
			<span className="emoji-footer">
				<span className="emoji-count">${count}</span>
				<br />
				${count === 1 ? "time" : "times"}
			</span>
		</div>
	`;
};
