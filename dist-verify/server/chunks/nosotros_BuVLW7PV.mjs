import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { C as createAstro, d as maybeRenderHead, f as renderHead, i as renderComponent, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_CvmArc7y.mjs";
import { t as createComponent } from "./compiler_AgT3OCzi.mjs";
import { n as renderScript, t as pollo_fresa_default } from "./pollo_fresa_Cf13Fupo.mjs";
import { t as fresa_wings_alitas_default } from "./fresa-wings-alitas_DwTN0KbK.mjs";
import { i as $$Header, n as menu_pollo_entero_default, r as $$Footer, t as $$WhatsappFlotante } from "./whatsapp_flotante_DBPnWEY3.mjs";
import { t as alitas_logo_default } from "./alitas_logo_BmKuF2qQ.mjs";
//#region src/layouts/Layout_nosotros.astro
createAstro("https://astro.build");
var $$LayoutNosotros = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LayoutNosotros;
	const { title = "Nosotros | Pollo Fresa", description = "Conoce la esencia de Pollo Fresa: fuego lento, sazón de casa y dos formas de disfrutar el antojo." } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#2c100b"><link rel="icon" type="image/png"${addAttribute(pollo_fresa_default.src, "href")}><title>${title}</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/layouts/Layout_nosotros.astro", void 0);
//#endregion
//#region src/assets/nuestra-esencia-rosticero.png
var nuestra_esencia_rosticero_default = new Proxy({
	"src": "/_astro/nuestra-esencia-rosticero.Dq1nWTUy.png",
	"width": 1536,
	"height": 1024,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/nuestra-esencia-rosticero.png";
	return target[name];
} });
//#endregion
//#region src/assets/nuestro_pollo.mp4
var nuestro_pollo_default = "/_astro/nuestro_pollo.DJO8H12P.mp4";
//#endregion
//#region src/pages/nosotros.astro
var nosotros_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Nosotros,
	file: () => $$file,
	url: () => $$url
});
var $$Nosotros = createComponent(($$result, $$props, $$slots) => {
	const whatsappUrl = `https://wa.me/524463869132?text=${encodeURIComponent("Hola, quiero conocer más y hacer un pedido en Pollo Fresa.")}`;
	const principios = [
		{
			number: "01",
			title: "Sabor honesto",
			text: "Una receta que se siente cercana, abundante y hecha para disfrutarse sin complicaciones."
		},
		{
			number: "02",
			title: "Tiempo y fuego",
			text: "Dejamos que el rosticero haga su trabajo hasta lograr una piel dorada y un interior jugoso."
		},
		{
			number: "03",
			title: "Recién preparado",
			text: "Cocinamos durante el día para que cada pedido llegue caliente y en su mejor momento."
		},
		{
			number: "04",
			title: "Mesa compartida",
			text: "Pensamos nuestros pollos, alitas y combos para convertir cualquier comida en un buen plan."
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$LayoutNosotros, { "data-astro-cid-w6fzp2su": true }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-w6fzp2su": true })}${maybeRenderHead($$result)}<main data-astro-cid-w6fzp2su><section class="about-hero" id="top" aria-label="Nuestro pollo" data-video-hero data-astro-cid-w6fzp2su><div class="hero-sticky" data-astro-cid-w6fzp2su><div class="video-window" data-astro-cid-w6fzp2su><video autoplay muted loop playsinline preload="auto"${addAttribute(nuestra_esencia_rosticero_default.src, "poster")} aria-label="Nuestro pollo preparándose al fuego" data-astro-cid-w6fzp2su><source${addAttribute(nuestro_pollo_default, "src")} type="video/mp4" data-astro-cid-w6fzp2su></video></div></div></section><section class="story" id="nuestra-historia" aria-labelledby="story-title" data-astro-cid-w6fzp2su><div class="story-heading" data-astro-cid-w6fzp2su><p data-astro-cid-w6fzp2su><span data-astro-cid-w6fzp2su>01</span> Lo que nos mueve</p><h2 id="story-title" data-astro-cid-w6fzp2su>No hacemos solo pollo.<br data-astro-cid-w6fzp2su><i data-astro-cid-w6fzp2su>Hacemos el plan.</i></h2></div><div class="story-copy" data-astro-cid-w6fzp2su><p class="lead" data-astro-cid-w6fzp2su>Ese momento en el que abres la bolsa, llega el aroma y todos se acercan a la mesa: eso es lo que queremos provocar.</p><div data-astro-cid-w6fzp2su><p data-astro-cid-w6fzp2su>Por eso cuidamos el sazón, respetamos el tiempo del rostizado y servimos porciones pensadas para compartir. Queremos que comer rico sea sencillo, cercano y siempre se sienta especial.</p><p data-astro-cid-w6fzp2su>Pollo Fresa nació alrededor de una idea muy clara: ofrecer comida que se antoje desde que la ves y que se recuerde después del último bocado.</p></div></div></section><section class="craft" aria-labelledby="craft-title" data-astro-cid-w6fzp2su><div class="craft-photo" data-astro-cid-w6fzp2su><img${addAttribute(nuestra_esencia_rosticero_default.src, "src")} alt="Pollo Fresa cocinándose en el rosticero" loading="lazy" data-astro-cid-w6fzp2su><span class="photo-note" data-astro-cid-w6fzp2su>EL FUEGO HACE SU PARTE</span><div class="photo-count" data-astro-cid-w6fzp2su><strong data-astro-cid-w6fzp2su>3</strong><span data-astro-cid-w6fzp2su>momentos<br data-astro-cid-w6fzp2su>del proceso</span></div></div><div class="craft-content" data-astro-cid-w6fzp2su><p class="section-label" data-astro-cid-w6fzp2su><span data-astro-cid-w6fzp2su></span> Nuestra manera de hacerlo</p><h2 id="craft-title" data-astro-cid-w6fzp2su>El sabor está<br data-astro-cid-w6fzp2su>en <i data-astro-cid-w6fzp2su>los detalles.</i></h2><div class="steps" data-astro-cid-w6fzp2su><article data-astro-cid-w6fzp2su><span data-astro-cid-w6fzp2su>01</span><div data-astro-cid-w6fzp2su><h3 data-astro-cid-w6fzp2su>Sazonamos</h3><p data-astro-cid-w6fzp2su>Cada pollo comienza con una mezcla que le da carácter desde el primer bocado.</p></div></article><article data-astro-cid-w6fzp2su><span data-astro-cid-w6fzp2su>02</span><div data-astro-cid-w6fzp2su><h3 data-astro-cid-w6fzp2su>Dejamos girar</h3><p data-astro-cid-w6fzp2su>El tiempo y el calor trabajan juntos para dorar por fuera y conservar la jugosidad.</p></div></article><article data-astro-cid-w6fzp2su><span data-astro-cid-w6fzp2su>03</span><div data-astro-cid-w6fzp2su><h3 data-astro-cid-w6fzp2su>Servimos caliente</h3><p data-astro-cid-w6fzp2su>Lo acompañamos con los favoritos de la casa y queda listo para llegar a tu mesa.</p></div></article></div></div></section><section class="brands" aria-labelledby="brands-title" data-astro-cid-w6fzp2su><header data-astro-cid-w6fzp2su><div data-astro-cid-w6fzp2su><p data-astro-cid-w6fzp2su><span data-astro-cid-w6fzp2su></span> Una casa, dos antojos</p><h2 id="brands-title" data-astro-cid-w6fzp2su>Elige tu lado<br data-astro-cid-w6fzp2su><i data-astro-cid-w6fzp2su>más Fresa.</i></h2></div><p data-astro-cid-w6fzp2su>Compartimos la misma obsesión por servir algo abundante, antojable y preparado para disfrutarse en compañía.</p></header><div class="brand-grid" data-astro-cid-w6fzp2su><a class="brand-card chicken-brand" href="/menu#pollo-fresa" data-astro-cid-w6fzp2su><img class="brand-food"${addAttribute(menu_pollo_entero_default.src, "src")} alt="Pollo entero rostizado" loading="lazy" data-astro-cid-w6fzp2su><span class="brand-overlay" data-astro-cid-w6fzp2su></span><span class="brand-logo pollo-logo" data-astro-cid-w6fzp2su><img${addAttribute(pollo_fresa_default.src, "src")} alt="Pollo Fresa" data-astro-cid-w6fzp2su></span><div class="brand-copy" data-astro-cid-w6fzp2su><small data-astro-cid-w6fzp2su>01 · EL CLÁSICO DE LA CASA</small><h3 data-astro-cid-w6fzp2su>Pollo<br data-astro-cid-w6fzp2su>Fresa</h3><p data-astro-cid-w6fzp2su>Rostizado, doradito y listo para compartir.</p><b data-astro-cid-w6fzp2su>Ver menú <span data-astro-cid-w6fzp2su>↗</span></b></div></a><a class="brand-card wings-brand-card" href="/menu#fresa-wings" data-astro-cid-w6fzp2su><img class="brand-food"${addAttribute(fresa_wings_alitas_default.src, "src")} alt="Alitas bañadas de Fresa Wings" loading="lazy" data-astro-cid-w6fzp2su><span class="brand-overlay" data-astro-cid-w6fzp2su></span><span class="brand-logo alitas-logo" data-astro-cid-w6fzp2su><img${addAttribute(alitas_logo_default.src, "src")} alt="Fresa Wings" data-astro-cid-w6fzp2su></span><div class="brand-copy" data-astro-cid-w6fzp2su><small data-astro-cid-w6fzp2su>02 · EL LADO MÁS ATREVIDO</small><h3 data-astro-cid-w6fzp2su>Fresa<br data-astro-cid-w6fzp2su><i data-astro-cid-w6fzp2su>Wings</i></h3><p data-astro-cid-w6fzp2su>Alitas, boneless y sabores para todos los niveles de antojo.</p><b data-astro-cid-w6fzp2su>Ver menú <span data-astro-cid-w6fzp2su>↗</span></b></div></a></div></section><section class="values" aria-labelledby="values-title" data-astro-cid-w6fzp2su><div class="values-title" data-astro-cid-w6fzp2su><p data-astro-cid-w6fzp2su>LO QUE NO NEGOCIAMOS</p><h2 id="values-title" data-astro-cid-w6fzp2su>Nuestra forma<br data-astro-cid-w6fzp2su>de hacer <i data-astro-cid-w6fzp2su>las cosas.</i></h2></div><div class="value-grid" data-astro-cid-w6fzp2su>${principios.map((principio) => renderTemplate`<article data-astro-cid-w6fzp2su><span data-astro-cid-w6fzp2su>${principio.number}</span><h3 data-astro-cid-w6fzp2su>${principio.title}</h3><p data-astro-cid-w6fzp2su>${principio.text}</p></article>`)}</div></section><section class="about-cta" data-astro-cid-w6fzp2su><span class="cta-word" aria-hidden="true" data-astro-cid-w6fzp2su>FRESA</span><div data-astro-cid-w6fzp2su><p data-astro-cid-w6fzp2su>YA CONOCES NUESTRA ESENCIA</p><h2 data-astro-cid-w6fzp2su>Ahora falta<br data-astro-cid-w6fzp2su><i data-astro-cid-w6fzp2su>probarla.</i></h2></div><p data-astro-cid-w6fzp2su>Elige entre pollo rostizado, alitas, boneless y combos para compartir.</p><a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noreferrer" data-astro-cid-w6fzp2su>Hacer mi pedido <span data-astro-cid-w6fzp2su>↗</span></a></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-w6fzp2su": true })}${renderComponent($$result, "WhatsappFlotante", $$WhatsappFlotante, { "data-astro-cid-w6fzp2su": true })}` })}${renderScript($$result, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/nosotros.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/nosotros.astro", void 0);
var $$file = "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/nosotros.astro";
var $$url = "/nosotros";
//#endregion
//#region \0virtual:astro:page:src/pages/nosotros@_@astro
var page = () => nosotros_exports;
//#endregion
export { page };
