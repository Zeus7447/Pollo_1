import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { C as createAstro, d as maybeRenderHead, f as renderHead, i as renderComponent, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_CvmArc7y.mjs";
import { t as createComponent } from "./compiler_AgT3OCzi.mjs";
import { t as pollo_fresa_default } from "./pollo_fresa_Cf13Fupo.mjs";
import { t as fresa_wings_alitas_default } from "./fresa-wings-alitas_DwTN0KbK.mjs";
import { i as $$Header, n as menu_pollo_entero_default, r as $$Footer, t as $$WhatsappFlotante } from "./whatsapp_flotante_DBPnWEY3.mjs";
import { n as menu_combo_default, r as menu_medio_pollo_default, t as fresa_wings_combo_default } from "./fresa-wings-combo_BeUPGQ1K.mjs";
//#region src/layouts/Layout_menu.astro
createAstro("https://astro.build");
var $$LayoutMenu = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LayoutMenu;
	const { title = "Menú | Pollo Fresa & Fresa Wings", description = "Elige entre pollo rostizado, alitas, boneless, hamburguesas, combos y acompañamientos de Pollo Fresa y Fresa Wings." } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/png"${addAttribute(pollo_fresa_default.src, "href")}><title>${title}</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/layouts/Layout_menu.astro", void 0);
//#endregion
//#region src/assets/menu-acompanamientos.png
var menu_acompanamientos_default = new Proxy({
	"src": "/_astro/menu-acompanamientos.CSQ0ZF-D.png",
	"width": 1536,
	"height": 1024,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/menu-acompanamientos.png";
	return target[name];
} });
//#endregion
//#region src/assets/alitas_logo.png
var alitas_logo_default = new Proxy({
	"src": "/_astro/alitas_logo.Sy_yPriD.png",
	"width": 1024,
	"height": 571,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/alitas_logo.png";
	return target[name];
} });
//#endregion
//#region src/components/menu_alitas.astro
var $$MenuAlitas = createComponent(($$result, $$props, $$slots) => {
	const presentaciones = [
		{
			piezas: "6 piezas",
			precio: "$80"
		},
		{
			piezas: "12 piezas",
			precio: "$150"
		},
		{
			piezas: "15 piezas",
			precio: "$180"
		},
		{
			piezas: "24 piezas",
			precio: "$285"
		}
	];
	const sabores = [
		"BBQ",
		"Mango",
		"Mango habanero",
		"Tamarindo",
		"Búfalo",
		"Valentina",
		"Habanero",
		"Parmesano",
		"Lemon pepper",
		"Takis fuego"
	];
	const complementos = [
		["Papas a la francesa", "$50"],
		["Gajos de papa", "$50"],
		["10 aros de cebolla", "$50"],
		["5 dedos de queso", "$75"],
		["Refresco", "$25"]
	];
	const extras = [
		["Salsa", "$10"],
		["Aderezo", "$12"],
		["Chimichurri", "$12"],
		["Ensalada", "$10"]
	];
	const combos = [
		{
			numero: "01",
			nombre: "Combo alitas",
			incluye: [
				"6 alitas",
				"1 malteada",
				"1 papas"
			],
			precio: "$135"
		},
		{
			numero: "02",
			nombre: "Combo burger",
			incluye: [
				"1 hamburguesa",
				"1 malteada",
				"1 papas"
			],
			precio: "$120"
		},
		{
			numero: "03",
			nombre: "Combo doble",
			incluye: ["12 alitas", "2 malteadas"],
			precio: "$225"
		},
		{
			numero: "04",
			nombre: "Combo familiar",
			incluye: [
				"25 alitas",
				"4 hamburguesas",
				"2 malteadas",
				"1 papas"
			],
			precio: "$630",
			destacado: true
		}
	];
	const whatsappUrl = `https://wa.me/524463869132?text=${encodeURIComponent("Hola, quiero hacer un pedido de Fresa Wings.")}`;
	return renderTemplate`${maybeRenderHead($$result)}<section class="wings-menu" id="fresa-wings" aria-labelledby="wings-title" data-astro-cid-mzvsh35l><div class="wings-noise" aria-hidden="true" data-astro-cid-mzvsh35l></div><header class="wings-intro" data-astro-cid-mzvsh35l><div class="wings-copy" data-astro-cid-mzvsh35l><p class="eyebrow" data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>02</span> El lado más atrevido del antojo</p><div class="wings-brand" data-astro-cid-mzvsh35l><small data-astro-cid-mzvsh35l>POLLO FRESA PRESENTA</small><span class="wings-logo" data-astro-cid-mzvsh35l><img${addAttribute(alitas_logo_default.src, "src")} alt="Fresa Wings" data-astro-cid-mzvsh35l></span></div><h2 id="wings-title" data-astro-cid-mzvsh35l>Crujientes.<br data-astro-cid-mzvsh35l>Bañadas. <em data-astro-cid-mzvsh35l>Adictivas.</em></h2><p class="intro-text" data-astro-cid-mzvsh35l>Alitas y boneless para elegir, bañar en tu sabor favorito y compartir… si es que alcanzan.</p><div class="wings-actions" data-astro-cid-mzvsh35l><a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noreferrer" data-astro-cid-mzvsh35l>Pedir Fresa Wings <span data-astro-cid-mzvsh35l>↗</span></a><span data-astro-cid-mzvsh35l>Servicio a domicilio · costo extra</span></div></div><div class="wings-photo" data-astro-cid-mzvsh35l><img${addAttribute(fresa_wings_alitas_default.src, "src")} alt="Plato con alitas bañadas y crujientes de Fresa Wings" loading="lazy" data-astro-cid-mzvsh35l><span class="hot-badge" data-astro-cid-mzvsh35l><small data-astro-cid-mzvsh35l>ELIGE ENTRE</small><strong data-astro-cid-mzvsh35l>10</strong><b data-astro-cid-mzvsh35l>sabores</b></span><span class="photo-caption" data-astro-cid-mzvsh35l>Bañadas al momento</span></div></header><div class="sizes-grid" data-astro-cid-mzvsh35l><article class="size-card alitas" id="alitas" data-astro-cid-mzvsh35l><div class="card-title" data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>🔥</span><div data-astro-cid-mzvsh35l><small data-astro-cid-mzvsh35l>CON HUESITO</small><h3 data-astro-cid-mzvsh35l>Alitas</h3></div></div><div class="size-list" data-astro-cid-mzvsh35l>${presentaciones.map((item) => renderTemplate`<div data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>${item.piezas}</span><strong data-astro-cid-mzvsh35l>${item.precio}</strong></div>`)}</div><p data-astro-cid-mzvsh35l>El clásico que nunca falla: piel crujiente y mucho sabor.</p></article><article class="size-card boneless" id="boneless" data-astro-cid-mzvsh35l><div class="card-title" data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>✦</span><div data-astro-cid-mzvsh35l><small data-astro-cid-mzvsh35l>SIN HUESO</small><h3 data-astro-cid-mzvsh35l>Boneless</h3></div></div><div class="size-list" data-astro-cid-mzvsh35l>${presentaciones.map((item) => renderTemplate`<div data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>${item.piezas}</span><strong data-astro-cid-mzvsh35l>${item.precio}</strong></div>`)}</div><p data-astro-cid-mzvsh35l>Bocados suaves por dentro, doraditos por fuera y listos para dippear.</p></article><aside class="flavor-board" data-astro-cid-mzvsh35l><p data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l></span> Primero elige tu favorito</p><h3 data-astro-cid-mzvsh35l>¿Con qué sabor<br data-astro-cid-mzvsh35l><i data-astro-cid-mzvsh35l>te atreves?</i></h3><div class="flavor-list" data-astro-cid-mzvsh35l>${sabores.map((sabor, index) => renderTemplate`<span${addAttribute({ hot: [
		"Mango habanero",
		"Habanero",
		"Takis fuego"
	].includes(sabor) }, "class:list")} data-astro-cid-mzvsh35l><b data-astro-cid-mzvsh35l>${String(index + 1).padStart(2, "0")}</b>${sabor}</span>`)}</div><small class="heat-key" data-astro-cid-mzvsh35l><b data-astro-cid-mzvsh35l>●</b> Opciones con más picante</small></aside></div><div class="street-menu" data-astro-cid-mzvsh35l><div class="street-photo" data-astro-cid-mzvsh35l><img${addAttribute(fresa_wings_combo_default.src, "src")} alt="Hamburguesa, papas, alitas y malteada de Fresa Wings" loading="lazy" data-astro-cid-mzvsh35l><div class="street-stamp" data-astro-cid-mzvsh35l><small data-astro-cid-mzvsh35l>NO TODO</small><strong data-astro-cid-mzvsh35l>son alitas</strong></div></div><div class="street-products" data-astro-cid-mzvsh35l><p class="section-kicker" data-astro-cid-mzvsh35l>Para cambiarle, pero no bajarle</p><h3 data-astro-cid-mzvsh35l>Más antojos,<br data-astro-cid-mzvsh35l><i data-astro-cid-mzvsh35l>más Fresa.</i></h3><div class="street-product-list" data-astro-cid-mzvsh35l><div data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l><b data-astro-cid-mzvsh35l>Hamburguesa clásica</b><small data-astro-cid-mzvsh35l>Agrega papas por $20</small></span><strong data-astro-cid-mzvsh35l>$60</strong></div><div data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l><b data-astro-cid-mzvsh35l>Hamburguesa hawaiana</b><small data-astro-cid-mzvsh35l>Agrega papas por $20</small></span><strong data-astro-cid-mzvsh35l>$70</strong></div><div data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l><b data-astro-cid-mzvsh35l>Palomitas de pollo</b><small data-astro-cid-mzvsh35l>Crujientes y doraditas</small></span><strong data-astro-cid-mzvsh35l>$60</strong></div><div data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l><b data-astro-cid-mzvsh35l>Malteada</b><small data-astro-cid-mzvsh35l>Fresa, vainilla u Oreo</small></span><strong data-astro-cid-mzvsh35l>$40</strong></div></div></div></div><div class="sides-row" data-astro-cid-mzvsh35l><article class="list-panel" data-astro-cid-mzvsh35l><p data-astro-cid-mzvsh35l>Para acompañar</p><h3 data-astro-cid-mzvsh35l>Complementos</h3><div data-astro-cid-mzvsh35l>${complementos.map(([nombre, precio]) => renderTemplate`<p data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>${nombre}</span><strong data-astro-cid-mzvsh35l>${precio}</strong></p>`)}</div></article><article class="list-panel extras-panel" data-astro-cid-mzvsh35l><p data-astro-cid-mzvsh35l>Hazlo todavía mejor</p><h3 data-astro-cid-mzvsh35l>Extras</h3><div data-astro-cid-mzvsh35l>${extras.map(([nombre, precio]) => renderTemplate`<p data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>${nombre}</span><strong data-astro-cid-mzvsh35l>${precio}</strong></p>`)}</div></article><div class="side-message" data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>+</span><p data-astro-cid-mzvsh35l>Pide tus complementos al centro y arma la mesa completa.</p></div></div><div class="combos-section" id="combos-wings" data-astro-cid-mzvsh35l><header data-astro-cid-mzvsh35l><div data-astro-cid-mzvsh35l><p data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l></span> Para uno, para dos o para toda la banda</p><h3 data-astro-cid-mzvsh35l>Combos que <i data-astro-cid-mzvsh35l>sí llenan.</i></h3></div><p data-astro-cid-mzvsh35l>Precios y contenido tomados del menú de Fresa Wings. Elige el que mejor le quede a tu antojo.</p></header><div class="combo-grid-wings" data-astro-cid-mzvsh35l>${combos.map((item) => renderTemplate`<article${addAttribute(["wing-combo", { featured: item.destacado }], "class:list")} data-astro-cid-mzvsh35l><span class="combo-number" data-astro-cid-mzvsh35l>${item.numero}</span>${item.destacado && renderTemplate`<small class="family-label" data-astro-cid-mzvsh35l>PARA TODA LA BANDA</small>`}<h4 data-astro-cid-mzvsh35l>${item.nombre}</h4><ul data-astro-cid-mzvsh35l>${item.incluye.map((producto) => renderTemplate`<li data-astro-cid-mzvsh35l>${producto}</li>`)}</ul><div data-astro-cid-mzvsh35l><strong data-astro-cid-mzvsh35l>${item.precio}</strong><a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noreferrer"${addAttribute(`Pedir ${item.nombre}`, "aria-label")} data-astro-cid-mzvsh35l>Pedir <span data-astro-cid-mzvsh35l>↗</span></a></div></article>`)}</div></div><footer class="wings-contact" data-astro-cid-mzvsh35l><div class="contact-brand" data-astro-cid-mzvsh35l><span class="contact-logo" data-astro-cid-mzvsh35l><img${addAttribute(alitas_logo_default.src, "src")} alt="Fresa Wings" data-astro-cid-mzvsh35l></span><strong data-astro-cid-mzvsh35l>¿Ya elegiste tu sabor?</strong></div><p data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>📍</span> Av. Independencia 1823, Col. Miguel Hidalgo</p><p data-astro-cid-mzvsh35l><span data-astro-cid-mzvsh35l>◷</span> Todos los días · 3:00 a 10:00 p.m.</p><a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noreferrer" data-astro-cid-mzvsh35l><small data-astro-cid-mzvsh35l>INFORMES Y PEDIDOS</small><strong data-astro-cid-mzvsh35l>446 386 9132</strong><span data-astro-cid-mzvsh35l>↗</span></a></footer></section>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/menu_alitas.astro", void 0);
//#endregion
//#region src/components/hero_menu.astro
var $$HeroMenu = createComponent(($$result, $$props, $$slots) => {
	const whatsappUrl = `https://wa.me/524463869132?text=${encodeURIComponent("Hola, quiero pedir un pollo rostizado de Pollo Fresa.")}`;
	return renderTemplate`${maybeRenderHead($$result)}<section class="menu-showcase" id="top" aria-labelledby="menu-hero-title" data-astro-cid-77qb6iil><div class="hero-photo" aria-hidden="true" data-astro-cid-77qb6iil><img${addAttribute(menu_pollo_entero_default.src, "src")} alt="" data-astro-cid-77qb6iil></div><div class="hero-overlay" aria-hidden="true" data-astro-cid-77qb6iil></div><span class="hero-outline" aria-hidden="true" data-astro-cid-77qb6iil>ROSTIZADO</span><span class="red-rail" aria-hidden="true" data-astro-cid-77qb6iil></span><div class="showcase-inner" data-astro-cid-77qb6iil><div class="showcase-copy" data-astro-cid-77qb6iil><p class="hero-kicker" data-astro-cid-77qb6iil><span data-astro-cid-77qb6iil>MENÚ · POLLO FRESA</span><b data-astro-cid-77qb6iil>Recién salido del rosticero</b></p><h1 id="menu-hero-title" data-astro-cid-77qb6iil><span data-astro-cid-77qb6iil>Dorado.</span><span class="accent" data-astro-cid-77qb6iil>Jugoso.</span><span data-astro-cid-77qb6iil>Muy Fresa.</span></h1><p class="hero-description" data-astro-cid-77qb6iil>Pollo rostizado a fuego lento, acompañado con todo lo necesario para poner la mesa y disfrutar sin complicaciones.</p><div class="hero-actions" data-astro-cid-77qb6iil><a class="primary-action"${addAttribute(whatsappUrl, "href")} target="_blank" rel="noreferrer" data-astro-cid-77qb6iil><span data-astro-cid-77qb6iil><small data-astro-cid-77qb6iil>PIDE EN MINUTOS</small>Ordenar por WhatsApp</span><b data-astro-cid-77qb6iil>↗</b></a><a class="menu-action" href="#pollo-fresa" data-astro-cid-77qb6iil>Ver menú <span data-astro-cid-77qb6iil>↓</span></a></div><div class="hero-points" aria-label="Características" data-astro-cid-77qb6iil><div data-astro-cid-77qb6iil><strong data-astro-cid-77qb6iil>01</strong><span data-astro-cid-77qb6iil>Rostizado<br data-astro-cid-77qb6iil>a fuego lento</span></div><div data-astro-cid-77qb6iil><strong data-astro-cid-77qb6iil>02</strong><span data-astro-cid-77qb6iil>Preparado<br data-astro-cid-77qb6iil>todos los días</span></div><div data-astro-cid-77qb6iil><strong data-astro-cid-77qb6iil>03</strong><span data-astro-cid-77qb6iil>Listo para<br data-astro-cid-77qb6iil>compartir</span></div></div></div><aside class="hero-price-card" aria-label="Precio del pollo entero" data-astro-cid-77qb6iil><p data-astro-cid-77qb6iil>EL FAVORITO</p><span data-astro-cid-77qb6iil>Pollo entero</span><div data-astro-cid-77qb6iil><small data-astro-cid-77qb6iil>DESDE</small><strong data-astro-cid-77qb6iil>$249</strong></div><a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noreferrer" data-astro-cid-77qb6iil>Lo quiero <b data-astro-cid-77qb6iil>↗</b></a></aside><p class="rotation-note" data-astro-cid-77qb6iil><span data-astro-cid-77qb6iil>✦</span> GIRA LENTO · SABE MEJOR</p></div><div class="business-switch" aria-label="Elige un negocio" data-astro-cid-77qb6iil><a class="business chicken" href="#pollo-fresa" data-astro-cid-77qb6iil><span class="business-logo chicken-logo" data-astro-cid-77qb6iil><img${addAttribute(pollo_fresa_default.src, "src")} alt="" data-astro-cid-77qb6iil></span><div data-astro-cid-77qb6iil><small data-astro-cid-77qb6iil>QUIERO ALGO PARA COMPARTIR</small><strong data-astro-cid-77qb6iil>Pollo rostizado</strong></div><b data-astro-cid-77qb6iil>Explorar Pollo Fresa ↘</b></a><a class="business wings" href="#fresa-wings" data-astro-cid-77qb6iil><span class="business-logo wings-logo" data-astro-cid-77qb6iil><img${addAttribute(alitas_logo_default.src, "src")} alt="" data-astro-cid-77qb6iil></span><div data-astro-cid-77qb6iil><small data-astro-cid-77qb6iil>QUIERO ALGO PICANTE Y CRUJIENTE</small><strong data-astro-cid-77qb6iil>Alitas & boneless</strong></div><b data-astro-cid-77qb6iil>Explorar Fresa Wings ↘</b></a></div></section>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/hero_menu.astro", void 0);
//#endregion
//#region src/pages/menu.astro
var menu_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Menu,
	file: () => $$file,
	url: () => $$url
});
var $$Menu = createComponent(($$result, $$props, $$slots) => {
	const products = [
		{
			category: "pollos",
			badge: "El favorito",
			name: "Pollo entero",
			description: "Dorado, jugoso e incluye tortillas y salsa de la casa.",
			price: "$249",
			image: menu_pollo_entero_default
		},
		{
			category: "pollos",
			badge: "Para uno o dos",
			name: "Medio pollo",
			description: "Todo el sabor de la casa en la porción perfecta.",
			price: "$139",
			image: menu_medio_pollo_default
		},
		{
			category: "combos",
			badge: "Todo incluido",
			name: "Combo Fresa",
			description: "Medio pollo, papas, tortillas, salsa y bebida.",
			price: "$179",
			image: menu_combo_default
		},
		{
			category: "combos",
			badge: "Para compartir",
			name: "Combo familiar",
			description: "Pollo entero, dos acompañamientos, tortillas y salsas.",
			price: "$329",
			image: menu_pollo_entero_default
		},
		{
			category: "acompanamientos",
			badge: "Extra crujiente",
			name: "Papas doradas",
			description: "Papas sazonadas y rostizadas hasta quedar irresistibles.",
			price: "$59",
			image: menu_acompanamientos_default
		},
		{
			category: "acompanamientos",
			badge: "Sabor de casa",
			name: "Mesa completa",
			description: "Papas, cebollitas, tortillas y salsas roja y verde.",
			price: "$99",
			image: menu_acompanamientos_default
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$LayoutMenu, { "data-astro-cid-2ndeurlg": true }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-2ndeurlg": true })}${maybeRenderHead($$result)}<main data-astro-cid-2ndeurlg>${renderComponent($$result, "HeroMenu", $$HeroMenu, { "data-astro-cid-2ndeurlg": true })}<nav class="category-nav" aria-label="Negocios y categorías del menú" data-astro-cid-2ndeurlg><span data-astro-cid-2ndeurlg>DOS NEGOCIOS, UN ANTOJO</span><div data-astro-cid-2ndeurlg><a class="chicken-tab" href="#pollo-fresa" data-astro-cid-2ndeurlg>Pollo rostizado</a><a class="wings-tab" href="#fresa-wings" data-astro-cid-2ndeurlg>Alitas & boneless</a></div><a class="order-nav" href="/pedir" data-astro-cid-2ndeurlg>Pedir ahora ↗</a></nav><section class="menu-section" id="pollo-fresa" aria-labelledby="menu-title" data-astro-cid-2ndeurlg><header class="menu-heading" data-astro-cid-2ndeurlg><div data-astro-cid-2ndeurlg><p data-astro-cid-2ndeurlg><span data-astro-cid-2ndeurlg></span> 01 · Recién salido del rosticero</p><h2 id="menu-title" data-astro-cid-2ndeurlg>Pollo <i data-astro-cid-2ndeurlg>Fresa</i></h2></div><p data-astro-cid-2ndeurlg>Elige tu favorito. Todos nuestros pollos se preparan durante el día para servirlos calientes y en su punto.</p></header><div class="chicken-subnav" aria-label="Categorías de Pollo Fresa" data-astro-cid-2ndeurlg><span data-astro-cid-2ndeurlg>Explora:</span><a href="#pollos" data-astro-cid-2ndeurlg>Pollos</a><a href="#combos" data-astro-cid-2ndeurlg>Combos</a><a href="#acompanamientos" data-astro-cid-2ndeurlg>Acompañamientos</a></div><div class="product-grid" data-astro-cid-2ndeurlg>${products.map((product, index) => renderTemplate`<article${addAttribute(["product-card", { wide: index === 0 || index === 3 }], "class:list")}${addAttribute(index === 0 ? "pollos" : index === 2 ? "combos" : index === 4 ? "acompanamientos" : void 0, "id")} data-astro-cid-2ndeurlg><a href="/pedir" data-astro-cid-2ndeurlg><div class="product-visual" data-astro-cid-2ndeurlg><img${addAttribute(product.image.src, "src")}${addAttribute(product.name, "alt")} loading="lazy" data-astro-cid-2ndeurlg><span class="badge" data-astro-cid-2ndeurlg>${product.badge}</span><span class="number" data-astro-cid-2ndeurlg>0${index + 1}</span></div><div class="product-info" data-astro-cid-2ndeurlg><div data-astro-cid-2ndeurlg><small data-astro-cid-2ndeurlg>${product.category}</small><h3 data-astro-cid-2ndeurlg>${product.name}</h3><p data-astro-cid-2ndeurlg>${product.description}</p></div><div class="price" data-astro-cid-2ndeurlg><strong data-astro-cid-2ndeurlg>${product.price}</strong><span data-astro-cid-2ndeurlg>Agregar al pedido ↗</span></div></div></a></article>`)}</div></section>${renderComponent($$result, "MenuAlitas", $$MenuAlitas, { "data-astro-cid-2ndeurlg": true })}<section class="order-banner" data-astro-cid-2ndeurlg><div data-astro-cid-2ndeurlg><p data-astro-cid-2ndeurlg>¿Con cuál te quedas?</p><h2 data-astro-cid-2ndeurlg>Rostizado o bañado,<br data-astro-cid-2ndeurlg><i data-astro-cid-2ndeurlg>el antojo manda.</i></h2></div><p data-astro-cid-2ndeurlg>Elige Pollo Fresa para compartir en familia o Fresa Wings para una tarde cargada de sabor.</p><a href="https://wa.me/524463869132?text=Hola%2C%20quiero%20hacer%20un%20pedido." target="_blank" rel="noreferrer" data-astro-cid-2ndeurlg>Empezar mi pedido <span data-astro-cid-2ndeurlg>↗</span></a></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-2ndeurlg": true })}${renderComponent($$result, "WhatsappFlotante", $$WhatsappFlotante, { "data-astro-cid-2ndeurlg": true })}` })}`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/menu.astro", void 0);
var $$file = "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/menu.astro";
var $$url = "/menu";
//#endregion
//#region \0virtual:astro:page:src/pages/menu@_@astro
var page = () => menu_exports;
//#endregion
export { page };
