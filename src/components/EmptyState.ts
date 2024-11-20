import { html } from "htm/preact";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { ProgressBar } from "./ProgressBar";
import { State } from "../types/app-state";

export const EmptyState = ({
	state,
	percentLoaded,
	loadEmoji,
}: {
	state: State;
	percentLoaded: number;
	loadEmoji: (forced?: boolean) => void;
}) => {
	const isLoading =
		state === State.LoadingEmoji || state === State.LoadingStats;
	return html`
		<div className="app-empty-state">
			<p className="app-description">View a report of your top used emoji.</p>
			<${Button}
				className="app-button"
				onClick=${() => loadEmoji()}
				disabled=${isLoading}
			>
				${isLoading ? "Loading" : "Generate"}
				${isLoading && html`<${Loader} size="small" />`}
			<//>
			<p className="app-footer">
				${isLoading &&
				html`<${ProgressBar}
					title=${state === State.LoadingEmoji
						? "(1/2) Loading emoji..."
						: "(2/2) Loading stats..."}
					percent=${percentLoaded}
				/>`}
				<i> This may take a while for workspaces with many emoji. </i>
			</p>
		</div>
	`;
};
