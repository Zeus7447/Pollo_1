import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { C as createAstro, d as maybeRenderHead, f as renderHead, i as renderComponent, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_CvmArc7y.mjs";
import { t as createComponent } from "./compiler_AgT3OCzi.mjs";
import { n as renderScript, t as pollo_fresa_default } from "./pollo_fresa_Cf13Fupo.mjs";
import { i as $$Header, n as menu_pollo_entero_default, r as $$Footer, t as $$WhatsappFlotante } from "./whatsapp_flotante_DBPnWEY3.mjs";
//#region src/layouts/Layout_indicaciones.astro
createAstro("https://astro.build");
var $$LayoutIndicaciones = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LayoutIndicaciones;
	const { title = "Ubicaciones en Irapuato | Pollo Fresa", description = "Encuentra las ubicaciones de Pollo Fresa en Irapuato, consulta el mapa y abre la ruta para llegar." } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#2c100b"><link rel="icon" type="image/png"${addAttribute(pollo_fresa_default.src, "href")}><title>${title}</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/layouts/Layout_indicaciones.astro", void 0);
//#endregion
//#region src/pages/ubicaciones.astro
var ubicaciones_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ubicaciones,
	file: () => $$file,
	url: () => $$url
});
var $$Ubicaciones = createComponent(($$result, $$props, $$slots) => {
	const locations = [
		{
			id: "abasolo-2295",
			zone: "Bajada de San Martín",
			address: "Calle Mariano Abasolo 2295",
			detail: "Bajada de San Martín, C.P. 36555, Irapuato, Gto.",
			phone: "462 235 6448",
			phoneHref: "tel:+524622356448",
			hours: "Lunes a domingo · 9:00 a 18:00",
			badge: "Ficha completa",
			className: "verified",
			query: "Pollo Fresa, Calle Mariano Abasolo 2295, Bajada de San Martín, Irapuato, Guanajuato"
		},
		{
			id: "abasolo-1997",
			zone: "Playa Azul",
			address: "Calle Mariano Abasolo 1997",
			detail: "Playa Azul, C.P. 36555, Irapuato, Gto.",
			phone: "462 660 0320",
			phoneHref: "tel:+524626600320",
			hours: "Horario por confirmar",
			badge: "Teléfono disponible",
			className: "verified",
			query: "Pollo Fresa, Calle Mariano Abasolo 1997, Playa Azul, Irapuato, Guanajuato"
		},
		{
			id: "alamos",
			zone: "Los Álamos",
			address: "Av. Mariano J. García 1254",
			detail: "Los Álamos, C.P. 36568, Irapuato, Gto.",
			phone: "462 146 5811",
			secondPhone: "462 103 0742",
			phoneHref: "tel:+524621465811",
			hours: "Lunes a domingo · hasta las 18:30",
			badge: "Ficha completa",
			className: "verified",
			query: "Pollos Fresa, Av Mariano J García 1254, Los Álamos, Irapuato, Guanajuato"
		},
		{
			id: "san-pedro",
			zone: "San Pedro",
			address: "Avenida Independencia s/n",
			detail: "San Pedro, C.P. 36550, Irapuato, Gto.",
			hours: "Horario y teléfono por confirmar",
			badge: "Registro público",
			className: "public",
			query: "Pollería Pollo Fresa, Avenida Independencia, San Pedro, Irapuato, Guanajuato 36550"
		},
		{
			id: "sostenes-rocha",
			zone: "Zona Centro",
			address: "Calle Sóstenes Rocha 584 B",
			detail: "C.P. 36530, Irapuato, Gto.",
			hours: "Confirma la operación antes de visitar",
			badge: "Ficha antigua",
			className: "check",
			query: "Pollería El Pollo Fresa, Sóstenes Rocha 584 B, Irapuato, Guanajuato"
		},
		{
			id: "guerrero",
			zone: "Colonia Rodríguez",
			address: "Calle Guerrero",
			detail: "Colonia Rodríguez, Irapuato, Gto.",
			hours: "Número exterior y horario por confirmar",
			badge: "Referencia pública",
			className: "check",
			query: "Pollos Rostizados Pollo Fresa, Calle Guerrero, Colonia Rodríguez, Irapuato, Guanajuato"
		},
		{
			id: "leandro-valle",
			zone: "Centro",
			address: "Calle Leandro Valle",
			detail: "Colonia Centro, Irapuato, Gto.",
			hours: "Número exterior y horario por confirmar",
			badge: "Referencia pública",
			className: "check",
			query: "Rosticería Pollo Fresa, Calle Leandro Valle, Centro, Irapuato, Guanajuato"
		}
	];
	const mapEmbed = (query) => `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
	const directions = (query) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
	return renderTemplate`${renderComponent($$result, "Layout", $$LayoutIndicaciones, { "data-astro-cid-cmx7dml6": true }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-cmx7dml6": true })}${maybeRenderHead($$result)}<main data-astro-cid-cmx7dml6><section class="locations-hero" data-astro-cid-cmx7dml6><div class="hero-media" aria-hidden="true" data-astro-cid-cmx7dml6><img${addAttribute(menu_pollo_entero_default.src, "src")} alt="" data-astro-cid-cmx7dml6></div><div class="hero-overlay" aria-hidden="true" data-astro-cid-cmx7dml6></div><div class="hero-map-lines" aria-hidden="true" data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6></i><i data-astro-cid-cmx7dml6></i><i data-astro-cid-cmx7dml6></i><i data-astro-cid-cmx7dml6></i></div><div class="hero-shell" data-astro-cid-cmx7dml6><div class="hero-copy" data-astro-cid-cmx7dml6><p data-astro-cid-cmx7dml6><span data-astro-cid-cmx7dml6></span> Estamos en Irapuato, Guanajuato</p><h1 data-astro-cid-cmx7dml6>Encuentra tu<br data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6>Pollo Fresa.</i></h1><span class="hero-description" data-astro-cid-cmx7dml6>Del rosticero a tu mesa. Explora nuestros puntos, elige el más cercano y abre la ruta en un solo toque.</span><div class="hero-actions" data-astro-cid-cmx7dml6><a class="hero-primary" href="#sucursales" data-astro-cid-cmx7dml6>Ver ubicaciones <b data-astro-cid-cmx7dml6>↓</b></a><a class="hero-secondary"${addAttribute(directions(locations[0].query), "href")} target="_blank" rel="noreferrer" data-astro-cid-cmx7dml6>Abrir Google Maps <b data-astro-cid-cmx7dml6>↗</b></a></div><div class="hero-facts" data-astro-cid-cmx7dml6><div data-astro-cid-cmx7dml6><strong data-astro-cid-cmx7dml6>${locations.length}</strong><span data-astro-cid-cmx7dml6>Puntos<br data-astro-cid-cmx7dml6>encontrados</span></div><div data-astro-cid-cmx7dml6><strong data-astro-cid-cmx7dml6>1</strong><span data-astro-cid-cmx7dml6>Ciudad<br data-astro-cid-cmx7dml6>con mucho sabor</span></div><div data-astro-cid-cmx7dml6><strong data-astro-cid-cmx7dml6>100%</strong><span data-astro-cid-cmx7dml6>Antojo<br data-astro-cid-cmx7dml6>irresistible</span></div></div></div><aside class="hero-locator" aria-label="Resumen de ubicaciones" data-astro-cid-cmx7dml6><div class="locator-heading" data-astro-cid-cmx7dml6><span class="locator-pin" data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6></i></span><div data-astro-cid-cmx7dml6><small data-astro-cid-cmx7dml6>POLLO FRESA CERCA DE TI</small><strong data-astro-cid-cmx7dml6>Irapuato, Gto.</strong></div><span class="locator-logo" data-astro-cid-cmx7dml6><img${addAttribute(pollo_fresa_default.src, "src")} alt="" data-astro-cid-cmx7dml6></span></div><div class="locator-route" aria-hidden="true" data-astro-cid-cmx7dml6><span class="route-point point-one" data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6>01</i></span><span class="route-point point-two" data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6>02</i></span><span class="route-point point-three" data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6>03</i></span><svg viewBox="0 0 350 126" preserveAspectRatio="none" data-astro-cid-cmx7dml6><path d="M18 96 C76 22, 113 110, 172 61 S267 17, 332 43" data-astro-cid-cmx7dml6></path></svg></div><div class="locator-bottom" data-astro-cid-cmx7dml6><div data-astro-cid-cmx7dml6><small data-astro-cid-cmx7dml6>PRIMER PUNTO</small><strong data-astro-cid-cmx7dml6>Bajada de San Martín</strong><span data-astro-cid-cmx7dml6>Mariano Abasolo 2295</span></div><a href="#sucursales" aria-label="Explorar todas las ubicaciones" data-astro-cid-cmx7dml6>${locations.length}<small data-astro-cid-cmx7dml6>VER TODAS</small><b data-astro-cid-cmx7dml6>↘</b></a></div></aside></div><div class="hero-city" aria-hidden="true" data-astro-cid-cmx7dml6>IRAPUATO</div><a class="hero-scroll" href="#sucursales" data-astro-cid-cmx7dml6><span data-astro-cid-cmx7dml6></span><small data-astro-cid-cmx7dml6>DESLIZA PARA EXPLORAR</small></a></section><section class="locations-intro" id="sucursales" aria-labelledby="locations-title" data-astro-cid-cmx7dml6><div class="intro-heading" data-astro-cid-cmx7dml6><p data-astro-cid-cmx7dml6><span data-astro-cid-cmx7dml6>01</span> Elige tu punto</p><h2 id="locations-title" data-astro-cid-cmx7dml6>Pollo Fresa<br data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6>en Irapuato.</i></h2></div><div class="intro-copy" data-astro-cid-cmx7dml6><p data-astro-cid-cmx7dml6>Pollo Fresa en la ciudad.</p></div></section><section class="locations-explorer" aria-label="Explorador de ubicaciones" data-astro-cid-cmx7dml6><div class="map-panel" data-astro-cid-cmx7dml6><div class="map-heading" data-astro-cid-cmx7dml6><div data-astro-cid-cmx7dml6><small data-astro-cid-cmx7dml6>VIENDO EN EL MAPA</small><strong data-map-title data-astro-cid-cmx7dml6>${locations[0].zone}</strong></div><span data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6></i> Google Maps</span></div><iframe data-location-map${addAttribute(mapEmbed(locations[0].query), "src")}${addAttribute(`Mapa de Pollo Fresa en ${locations[0].zone}`, "title")} loading="eager" referrerpolicy="no-referrer-when-downgrade" allowfullscreen data-astro-cid-cmx7dml6></iframe><div class="map-footer" data-astro-cid-cmx7dml6><span data-astro-cid-cmx7dml6>Selecciona una tarjeta para mover el mapa</span><b data-astro-cid-cmx7dml6>IRAPUATO, GTO.</b></div></div><div class="locations-list" data-astro-cid-cmx7dml6>${locations.map((location, index) => renderTemplate`<article${addAttribute([
		"location-card",
		location.className,
		{ active: index === 0 }
	], "class:list")} data-location-card data-astro-cid-cmx7dml6><button class="location-select" type="button"${addAttribute(mapEmbed(location.query), "data-map-src")}${addAttribute(location.zone, "data-map-title")}${addAttribute(`Mapa de Pollo Fresa en ${location.zone}`, "data-map-frame-title")}${addAttribute(`Mostrar ${location.zone} en el mapa`, "aria-label")} data-astro-cid-cmx7dml6><span class="location-number" data-astro-cid-cmx7dml6>${String(index + 1).padStart(2, "0")}</span><span class="location-main" data-astro-cid-cmx7dml6><span class="location-top" data-astro-cid-cmx7dml6><small data-astro-cid-cmx7dml6>${location.badge}</small><i data-astro-cid-cmx7dml6>↗</i></span><strong data-astro-cid-cmx7dml6>${location.zone}</strong><span data-astro-cid-cmx7dml6>${location.address}</span><em data-astro-cid-cmx7dml6>${location.detail}</em></span></button><div class="location-meta" data-astro-cid-cmx7dml6><span class="hours" data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6></i>${location.hours}</span>${location.phone && renderTemplate`<a${addAttribute(location.phoneHref, "href")}${addAttribute(`Llamar a la sucursal ${location.zone}`, "aria-label")} data-astro-cid-cmx7dml6><small data-astro-cid-cmx7dml6>LLAMAR</small>${location.phone}${location.secondPhone && renderTemplate`<em data-astro-cid-cmx7dml6> / ${location.secondPhone}</em>`}</a>`}</div><a class="directions-link"${addAttribute(directions(location.query), "href")} target="_blank" rel="noreferrer" data-astro-cid-cmx7dml6><span data-astro-cid-cmx7dml6>Cómo llegar</span><b data-astro-cid-cmx7dml6>↗</b></a></article>`)}</div></section><section class="location-note" data-astro-cid-cmx7dml6><span class="note-icon" data-astro-cid-cmx7dml6>!</span><div data-astro-cid-cmx7dml6><small data-astro-cid-cmx7dml6>ANTES DE VISITARNOS</small><h2 data-astro-cid-cmx7dml6>Que el antojo no<br data-astro-cid-cmx7dml6><i data-astro-cid-cmx7dml6>te haga dar vueltas.</i></h2></div><p data-astro-cid-cmx7dml6>Algunas fichas comerciales no publican número exterior, teléfono u horario. En esos casos, abre la ruta y confirma que el punto siga operando.</p><a href="/pedir" data-astro-cid-cmx7dml6>Pedir ahora <span data-astro-cid-cmx7dml6>↗</span></a></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-cmx7dml6": true })}${renderComponent($$result, "WhatsappFlotante", $$WhatsappFlotante, { "data-astro-cid-cmx7dml6": true })}` })}${renderScript($$result, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/ubicaciones.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/ubicaciones.astro", void 0);
var $$file = "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/ubicaciones.astro";
var $$url = "/ubicaciones";
//#endregion
//#region \0virtual:astro:page:src/pages/ubicaciones@_@astro
var page = () => ubicaciones_exports;
//#endregion
export { page };
