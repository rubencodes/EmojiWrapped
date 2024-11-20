import { html } from "htm/preact";
import { Stat } from "../types/entity-types";
import { Emoji } from "./Emoji";

export const Emojis = ({ emojis }: { emojis: Stat[] }) => {
	return html`
		<div className="emojis">
			<div className="emojis-scroll-wrapper">
				${emojis.map(
					(emoji) => html`<${Emoji} key=${emoji.name} ...${emoji} />`
				)}
			</div>
		</div>
	`;
};
