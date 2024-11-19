function injectScript(file_path, tag) {
	var node = document.getElementsByTagName(tag)[0];
	var script = document.createElement("script");
	script.setAttribute("type", "module");
	script.setAttribute("src", file_path);
	node.appendChild(script);
}

injectScript(chrome.runtime.getURL("scripts/content.module.js"), "body");
