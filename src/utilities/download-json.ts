import { JSONRepresentable } from "../types/base-types";

// Downloads a JSON file.
export function downloadJSON(data: JSONRepresentable, filename: string) {
	// Creating a blob object from non-blob data using the Blob constructor
	const blob = new Blob([JSON.stringify(data, null, "\t")], {
		type: "application/json",
	});
	const url = URL.createObjectURL(blob);
	// Create a new anchor element
	const a = document.createElement("a");
	a.href = url;
	a.download = filename || "download";
	a.click();
	a.remove();
}
