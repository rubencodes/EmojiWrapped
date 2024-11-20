import { html } from "htm/preact";

export const ProgressBar = ({
	title,
	percent,
}: {
	title: string;
	percent: number;
}) => {
	return html`
		<div className="progress">
			<progress className="progress-bar" value=${percent * 100} max="100">
				${percent * 100}
			</progress>
			<span className="progress-title">${title}</span>
		</div>
	`;
};
