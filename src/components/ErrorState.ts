import { html } from "htm/preact";

export const ErrorState = () => {
	return html`
		<div className="app-error-state">
			<p className="app-error">Failed to load emoji stats 🥺</p>
		</div>
	`;
};
