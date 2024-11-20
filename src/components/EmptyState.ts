import { html } from "htm/preact";
import { Button, ButtonType } from "./Button";
import { Loader } from "./Loader";
import { ProgressBar } from "./ProgressBar";
import { State } from "../types/app-state";

export const EmptyState = ({
	state,
	percentLoaded,
	loadStats,
	importStats,
}: {
	state: State;
	percentLoaded: number;
	loadStats: (forced?: boolean) => void;
	importStats: (event: InputEvent) => void;
}) => {
	const isLoading =
		state === State.LoadingEmoji || state === State.LoadingStats;
	return html`
		<div className="app-empty-state">
			<p className="app-description">View a report of your top used emoji.</p>
			<div className="app-buttons">
				<${Button}
					className="app-button"
					onClick=${() => loadStats()}
					disabled=${isLoading}
				>
					${isLoading ? "Loading" : "Generate"}
					${isLoading && html`<${Loader} size="small" />`}
				<//>
				<${Button}
					className="app-button"
					type=${ButtonType.Outline}
					onFileUpload=${importStats}
				>
					Import JSON
				<//>
			</div>
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
