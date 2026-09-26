import { h as createRenderInstruction } from "./server_CvmArc7y.mjs";
//#region node_modules/.pnpm/astro@7.2.9_@emnapi+core@1._8be1b479488cd6815fb7376a820e674d/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/assets/pollo_fresa.webp
var pollo_fresa_default = new Proxy({
	"src": "/_astro/pollo_fresa.CzaB0LIv.webp",
	"width": 1024,
	"height": 1024,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/pollo_fresa.webp";
	return target[name];
} });
//#endregion
export { renderScript as n, pollo_fresa_default as t };
