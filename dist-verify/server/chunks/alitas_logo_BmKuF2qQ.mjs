//#region src/assets/alitas_logo.jpeg
var alitas_logo_default = new Proxy({
	"src": "/_astro/alitas_logo.F0AQwGIu.jpeg",
	"width": 2752,
	"height": 1536,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/alitas_logo.jpeg";
	return target[name];
} });
//#endregion
export { alitas_logo_default as t };
