//#region src/assets/fresa-wings-alitas.png
var fresa_wings_alitas_default = new Proxy({
	"src": "/_astro/fresa-wings-alitas.DsmstomS.png",
	"width": 1448,
	"height": 1086,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/fresa-wings-alitas.png";
	return target[name];
} });
//#endregion
export { fresa_wings_alitas_default as t };
