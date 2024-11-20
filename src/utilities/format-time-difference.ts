// Formats the time difference between two timestamps.
export function formatTimeDifference(startTime: number, endTime: number) {
	const diff = Math.abs(endTime - startTime);
	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
}
