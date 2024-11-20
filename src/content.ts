import { html } from "htm/preact";
import { render } from "preact";
import { App } from "./components/App";

(() => {
	const root = document.createElement("div");
	render(html`<${App} />`, root);

	const anchorElement = document.getElementById("list_emoji_section");
	if (!anchorElement) return;
	anchorElement.insertBefore(root, anchorElement.firstChild);
})();
