// Formats the time difference between two timestamps.
export function formatSeconds(totalSeconds: number) {
	const years = Math.floor(totalSeconds / (60 * 60 * 24 * 365));
	const days = Math.floor(
		(totalSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24)
	);
	const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
	const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
	const seconds = Math.floor(totalSeconds % 60);

	if (years > 0) {
		return `${years}y ${days % 365}d ${hours % 24}h ${minutes % 60}m ${
			seconds % 60
		}s`;
	} else if (days > 0) {
		return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
	} else if (hours > 0) {
		return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
	} else if (minutes > 0) {
		return `${minutes}m ${seconds % 60}s`;
	}

	return `${seconds}s`;
}
