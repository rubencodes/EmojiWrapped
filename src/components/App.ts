import { html } from "htm/preact";
import { useEmoji } from "../hooks/use-emoji";
import { Loader } from "./Loader";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";
import { LoadedState } from "./LoadedState";
import { State } from "../types/app-state";

export const App = () => {
	const {
		emojis,
		stats,
		users,
		state,
		percentLoaded,
		startTime,
		endTime,
		loadEmoji,
	} = useEmoji();
	return html`
		<div className="app">
			<h2 className="app-title">Emoji Wrapped ✨</h2>
			${state === State.Initial && html`<${Loader} />`}
			${[State.Empty, State.LoadingStats, State.LoadingEmoji].includes(state) &&
			html`<${EmptyState}
				state=${state}
				percentLoaded=${percentLoaded}
				loadEmoji=${loadEmoji}
			/>`}
			${state === State.Error && html`<${ErrorState} />`}
			${state === State.Loaded &&
			html`<${LoadedState}
				emojis=${emojis}
				stats=${stats}
				users=${users}
				startTime=${startTime}
				endTime=${endTime}
				regenerateReport=${() => loadEmoji(true)}
			/>`}
		</div>
	`;
};
