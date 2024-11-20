import { html } from "htm/preact";
import { Emojis } from "./Emojis";
import { Users } from "./Users";
import { Button, ButtonType } from "./Button";
import { downloadJSON } from "../utilities/download-json";
import { formatTimeDifference } from "../utilities/format-time-difference";
import { shuffle } from "../utilities/shuffle";
import type { Emoji, Stat, User } from "../types/entity-types";

export const LoadedState = ({
	emojis,
	stats,
	users,
	startTime,
	endTime,
	regenerateReport,
}: {
	emojis: Emoji[];
	stats: Stat[];
	users: User[];
	startTime: number;
	endTime: number;
	regenerateReport: () => void;
}) => {
	const rarestCount = stats.slice(-1)[0]?.count ?? 1;
	const rarestEmoji = shuffle(
		stats.filter(({ count }) => {
			return count === rarestCount;
		})
	);
	const topUsers = users.slice(0, 3);
	const topUsersEmoji = topUsers.flatMap(({ emoji }) => emoji);
	const topUserEmojis = Object.values(
		topUsersEmoji.reduce((acc, emojiName) => {
			if (!acc[emojiName]) {
				acc[emojiName] = {
					name: emojiName,
					url: stats.find(({ name }) => name === emojiName)?.url ?? "",
					createdAt:
						stats.find(({ name }) => name === emojiName)?.createdAt ?? 0,
					items: [],
					count: topUsersEmoji.filter((e) => e === emojiName).length ?? 0,
				};
			}

			return acc;
		}, {} as Record<string, Stat>)
	).sort((a, b) => b.count - a.count);
	const emojiThisYear = stats.filter(({ createdAt = 0 }) => {
		return new Date(createdAt).getFullYear() === new Date().getFullYear();
	});
	const onRegenerate = () => {
		if (
			confirm(
				"Are you sure you want to regenerate your Emoji Wrapped report? You'll lose your previous report, and it may take a while to pull fresh data."
			) === false
		) {
			return;
		}

		regenerateReport();
	};

	return html`
		<div className="app-loaded-state">
			<h5 className="app-subtitle">This year, you used...</h5>
			<span className="app-emoji-count">
				<h1>${stats.length}</h1>
				<i>different Slack emoji!</i>
			</span>
			<h5 className="app-subtitle">
				Some of your ⭐️⭐️⭐️⭐️⭐️ favorites were...
			</h5>
			<${Emojis} emojis=${stats.slice(0, 100)} />
			<h5 className="app-subtitle">Your most rarely used emoji 🔎</h5>
			<${Emojis} emojis=${rarestEmoji} />
			<h5 className="app-subtitle">The people you most often reacted to 👯</h5>
			<${Users} users=${topUsers} />
			<h5 className="app-subtitle">Your 🔝 reactions to them were...</h5>
			<${Emojis} emojis=${topUserEmojis} />
			<h5 className="app-subtitle">These new emoji caught your 👀</h5>
			<${Emojis} emojis=${emojiThisYear.slice(0, 5)} />
			<div className="app-footer">
				<p className="app-footer-text">
					Elapsed time: ${formatTimeDifference(startTime, endTime)}
				</p>
				<div className="app-buttons">
					<${Button} onClick=${onRegenerate}> Regenerate <//>
					<${Button}
						type=${ButtonType.Outline}
						onClick=${() =>
							downloadJSON(
								{ emojis, stats, startTime, endTime },
								"emoji-wrapped.json"
							)}
					>
						Export JSON
					<//>
				</div>
			</div>
		</div>
	`;
};
