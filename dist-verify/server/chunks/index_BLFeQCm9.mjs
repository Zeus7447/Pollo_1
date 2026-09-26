import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { C as createAstro, d as maybeRenderHead, f as renderHead, i as renderComponent, m as defineScriptVars, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_CvmArc7y.mjs";
import { t as createComponent } from "./compiler_AgT3OCzi.mjs";
import { n as renderScript, t as pollo_fresa_default } from "./pollo_fresa_Cf13Fupo.mjs";
import { i as setOnSetGetEnv, n as getEnv$1, t as createInvalidVariablesError } from "./runtime_UFBfOKdy.mjs";
import { t as fresa_wings_alitas_default } from "./fresa-wings-alitas_DwTN0KbK.mjs";
import "node:path";
//#region node_modules/.pnpm/astro@7.2.9_@emnapi+core@1._8be1b479488cd6815fb7376a820e674d/node_modules/astro/dist/env/validators.js
function getEnvFieldType(options) {
	const optional = options.optional ? options.default !== void 0 ? false : true : false;
	let type;
	if (options.type === "enum") type = options.values.map((v) => `'${v}'`).join(" | ");
	else type = options.type;
	return `${type}${optional ? " | undefined" : ""}`;
}
var stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
	if (typeof input !== "string") return {
		ok: false,
		errors: ["type"]
	};
	const errors = [];
	if (max !== void 0 && !(input.length <= max)) errors.push("max");
	if (min !== void 0 && !(input.length >= min)) errors.push("min");
	if (length !== void 0 && !(input.length === length)) errors.push("length");
	if (url !== void 0 && !URL.canParse(input)) errors.push("url");
	if (includes !== void 0 && !input.includes(includes)) errors.push("includes");
	if (startsWith !== void 0 && !input.startsWith(startsWith)) errors.push("startsWith");
	if (endsWith !== void 0 && !input.endsWith(endsWith)) errors.push("endsWith");
	if (errors.length > 0) return {
		ok: false,
		errors
	};
	return {
		ok: true,
		value: input
	};
};
var numberValidator = ({ gt, min, lt, max, int }) => (input) => {
	const num = Number.parseFloat(input ?? "");
	if (isNaN(num)) return {
		ok: false,
		errors: ["type"]
	};
	const errors = [];
	if (gt !== void 0 && !(num > gt)) errors.push("gt");
	if (min !== void 0 && !(num >= min)) errors.push("min");
	if (lt !== void 0 && !(num < lt)) errors.push("lt");
	if (max !== void 0 && !(num <= max)) errors.push("max");
	if (int !== void 0) {
		const isInt = Number.isInteger(num);
		if (!(int ? isInt : !isInt)) errors.push("int");
	}
	if (errors.length > 0) return {
		ok: false,
		errors
	};
	return {
		ok: true,
		value: num
	};
};
var booleanValidator = (input) => {
	const bool = input === "true" ? true : input === "false" ? false : void 0;
	if (typeof bool !== "boolean") return {
		ok: false,
		errors: ["type"]
	};
	return {
		ok: true,
		value: bool
	};
};
var enumValidator = ({ values }) => (input) => {
	if (!(typeof input === "string" ? values.includes(input) : false)) return {
		ok: false,
		errors: ["type"]
	};
	return {
		ok: true,
		value: input
	};
};
function selectValidator(options) {
	switch (options.type) {
		case "string": return stringValidator(options);
		case "number": return numberValidator(options);
		case "boolean": return booleanValidator;
		case "enum": return enumValidator(options);
	}
}
function validateEnvVariable(value, options) {
	const isOptional = options.optional || options.default !== void 0;
	if (isOptional && value === void 0) return {
		ok: true,
		value: options.default
	};
	if (!isOptional && value === void 0) return {
		ok: false,
		errors: ["missing"]
	};
	return selectValidator(options)(value);
}
//#endregion
//#region src/layouts/Layout_index.astro
createAstro("https://astro.build");
var $$LayoutIndex = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LayoutIndex;
	return renderTemplate`<html lang="es" data-astro-cid-uuvq2eyb><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png"${addAttribute(pollo_fresa_default.src, "href")}><meta name="generator"${addAttribute(Astro.generator, "content")}><title>Pollo Fresa</title>${renderHead($$result)}</head><body data-astro-cid-uuvq2eyb>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/layouts/Layout_index.astro", void 0);
//#endregion
//#region src/assets/pollo_musculoso.webm
var pollo_musculoso_default = "/_astro/pollo_musculoso.BdoPt-iA.webm";
//#endregion
//#region src/components/hero_index.astro
var $$HeroIndex = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<main class="site-shell" id="top" data-astro-cid-42kk3jev><section class="hero" data-astro-cid-42kk3jev><div class="hero-video" aria-hidden="true" data-astro-cid-42kk3jev><video autoplay muted loop playsinline data-astro-cid-42kk3jev><source${addAttribute(pollo_musculoso_default, "src")} type="video/mp4" data-astro-cid-42kk3jev></video></div></section></main>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/hero_index.astro", void 0);
//#endregion
//#region src/assets/asado/asado_1.webp
var asado_1_default = new Proxy({
	"src": "/_astro/asado_1.2nP4AMC6.webp",
	"width": 2752,
	"height": 1536,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/asado/asado_1.webp";
	return target[name];
} });
//#endregion
//#region src/assets/pollo_cool.webp
var pollo_cool_default = new Proxy({
	"src": "/_astro/pollo_cool.BsAEQ2sj.webp",
	"width": 1024,
	"height": 571,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/pollo_cool.webp";
	return target[name];
} });
//#endregion
//#region src/assets/fresa_wings_cool.webp
var fresa_wings_cool_default = new Proxy({
	"src": "/_astro/fresa_wings_cool.B_JVJWEY.webp",
	"width": 764,
	"height": 1024,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/fresa_wings_cool.webp";
	return target[name];
} });
//#endregion
//#region src/assets/todo_poderoso.webm
var todo_poderoso_default = "/_astro/todo_poderoso.B6WLySc1.webm";
//#endregion
//#region src/assets/local_pollo.webp
var local_pollo_default = new Proxy({
	"src": "/_astro/local_pollo.BaeoaTd0.webp",
	"width": 1792,
	"height": 2400,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/local_pollo.webp";
	return target[name];
} });
//#endregion
//#region src/assets/local_fresa_wings.webp
var local_fresa_wings_default = new Proxy({
	"src": "/_astro/local_fresa_wings.DbhO-ZK1.webp",
	"width": 1792,
	"height": 2400,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/local_fresa_wings.webp";
	return target[name];
} });
//#endregion
//#region src/components/ProductImage.astro
createAstro("https://astro.build");
var $$ProductImage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProductImage;
	const { src, alt, class: className = "" } = Astro.props;
	const imageSrc = typeof src === "string" ? src : src?.src;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`safe-image ${className}`, "class")} role="img"${addAttribute(alt, "aria-label")}>${imageSrc ? renderTemplate`<img${addAttribute(imageSrc, "src")}${addAttribute(alt, "alt")} loading="lazy">` : renderTemplate`<span class="image-placeholder" aria-hidden="true">✦</span>`}</div>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/ProductImage.astro", void 0);
//#endregion
//#region \0virtual:astro:env/internal
var schema = {
	"DIRECTUS_URL": {
		"context": "server",
		"access": "secret",
		"optional": true,
		"type": "string"
	},
	"DIRECTUS_TOKEN": {
		"context": "server",
		"access": "secret",
		"optional": true,
		"type": "string"
	},
	"DIRECTUS_BUSINESS_ID": {
		"context": "server",
		"access": "secret",
		"optional": true,
		"type": "string"
	}
};
//#endregion
//#region \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === "" ? void 0 : rawVariable;
	const options = schema[key];
	const result = validateEnvVariable(variable, options);
	if (result.ok) return result.value;
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};
setOnSetGetEnv(() => {
	DIRECTUS_URL = _internalGetSecret("DIRECTUS_URL");
	DIRECTUS_TOKEN = _internalGetSecret("DIRECTUS_TOKEN");
	DIRECTUS_BUSINESS_ID = _internalGetSecret("DIRECTUS_BUSINESS_ID");
});
var DIRECTUS_URL = _internalGetSecret("DIRECTUS_URL");
var DIRECTUS_TOKEN = _internalGetSecret("DIRECTUS_TOKEN");
var DIRECTUS_BUSINESS_ID = _internalGetSecret("DIRECTUS_BUSINESS_ID");
//#endregion
//#region src/lib/directus.ts
var directusUrl = DIRECTUS_URL?.replace(/\/$/, "");
var directusToken = DIRECTUS_TOKEN;
var businessId = DIRECTUS_BUSINESS_ID;
if (!directusUrl) throw new Error("Falta DIRECTUS_URL.");
if (!directusToken) throw new Error("Falta DIRECTUS_TOKEN.");
if (!businessId) throw new Error("Falta DIRECTUS_BUSINESS_ID.");
var getItems = async (collection, params) => {
	const response = await fetch(`${directusUrl}/items/${collection}?${params}`, { headers: { Authorization: `Bearer ${directusToken}` } });
	if (!response.ok) throw new Error(`Directus respondió ${response.status} para ${collection}`);
	return (await response.json()).data;
};
var getCatalog = async () => {
	const productQuery = new URLSearchParams({
		fields: "id,name,description,price,image,available,featured,sort_order,category",
		sort: "sort_order,name",
		"filter[active][_eq]": "true",
		"filter[available][_eq]": "true",
		"filter[business][_eq]": businessId
	});
	const categoryQuery = new URLSearchParams({
		fields: "id,name,sort_order",
		sort: "sort_order,name",
		"filter[active][_eq]": "true",
		"filter[business][_eq]": businessId
	});
	try {
		const [rawProducts, categories] = await Promise.all([getItems("products", productQuery), getItems("categories", categoryQuery)]);
		const categoryNames = new Map(categories.map((category) => [category.id, category.name]));
		const products = rawProducts.map((product) => ({
			id: product.id,
			name: product.name,
			description: product.description?.trim() || "Un favorito de Pollo Fresa.",
			price: `$${Number(product.price).toFixed(2)}`,
			image: product.image ? `${directusUrl}/assets/${product.image}?width=900&quality=82` : void 0,
			categoryId: product.category,
			category: product.category ? categoryNames.get(product.category) ?? "Pollo Fresa" : "Pollo Fresa",
			featured: product.featured,
			brand: "Pollo Fresa"
		}));
		const catalogCategories = categories.map(({ id, name }) => ({
			id,
			name
		}));
		return {
			products,
			promotions: products.filter((product) => product.featured),
			categories: catalogCategories
		};
	} catch (error) {
		console.warn("[Directus] No se pudo cargar el catálogo.", error);
		return {
			products: [],
			promotions: [],
			categories: []
		};
	}
};
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const { products: directusProducts, promotions, categories } = await getCatalog();
	return renderTemplate`${renderComponent($$result, "Layout", $$LayoutIndex, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="site-header"><a class="brand" href="#inicio"><img${addAttribute(pollo_fresa_default.src, "src")} alt="Pollo Fresa"></a><button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button><nav class="main-nav"><a href="#inicio">Inicio</a><a href="#marcas">Pollo Fresa</a><a href="#marcas">Fresa Wings</a><a href="#promociones">Promociones</a><a href="#ubicacion">Ubicación</a><a href="#contacto">Contacto</a><a class="button button-small" href="#menu">Pedir ahora <span>↗</span></a></nav></header>${renderComponent($$result, "Hero", $$HeroIndex, {})}<main id="inicio"><section class="status-strip section-wrap" id="estado"><div><p class="eyebrow">Ahora mismo</p><h2>¿Qué se te antoja?</h2></div><div class="status-grid"><article class="status-card pollo-status"><span class="status-dot"></span><div><strong>Pollo Fresa</strong><small>9 AM — 6 PM</small></div><b class="status-label">Consultando…</b></article><article class="status-card wings-status"><span class="status-dot"></span><div><strong>Fresa Wings</strong><small>3 PM — 10 PM</small></div><b class="status-label">Consultando…</b></article></div></section><section class="brands section-wrap" id="marcas"><div class="section-heading"><p class="eyebrow">Elige tu mood</p><h2>Dos formas de disfrutar<br><em>el mismo sabor.</em></h2></div><div class="brand-grid"><article class="brand-card brand-pollo"><div class="card-content"><span class="pill">Clásicos que abrazan</span><h3>Pollo<br><em>Fresa</em></h3><p>Frito, asado o rostizado. El sabor familiar que siempre se antoja.</p><div class="card-meta"><span>9 AM — 6 PM</span><a href="#menu">Ver menú <b>↗</b></a></div></div><div class="brand-card-art"><img${addAttribute(asado_1_default.src, "src")} alt="Pollo asado"></div></article><article class="brand-card brand-wings"><div class="card-content"><span class="pill">Sube el nivel</span><h3>Fresa<br><em>Wings</em></h3><p>Alitas, boneless y hamburguesas para tu lado más intenso.</p><div class="card-meta"><span>3 PM — 10 PM</span><a href="#menu">Ver menú <b>↗</b></a></div></div><div class="brand-card-art"><img${addAttribute(fresa_wings_alitas_default.src, "src")} alt="Alitas Fresa Wings"></div></article></div></section><section class="overlap section-wrap" id="ambos"><div><p class="eyebrow">El favorito de la casa</p><h2>Pollo Fresa,<br><em>hecho para compartir.</em></h2><p>Pollo frito, asado o rostizado con el sabor que reúne a todos alrededor de la mesa.</p><a class="button button-light" href="#menu">Ver menú de Pollo Fresa <span>↗</span></a></div></section>${promotions.length > 0 && renderTemplate`<section class="promotions section-wrap" id="promociones"><div class="section-heading"><p class="eyebrow">Algo bueno está pasando</p><h2>Promos para <em>compartir.</em></h2></div><div class="promo-grid">${promotions.map((promotion) => renderTemplate`<article><span>${promotion.category}</span><h3>${promotion.name}</h3><p>${promotion.description}</p><a href="#destacados">Ver promoción ↗</a></article>`)}</div></section>`}<section class="featured section-wrap" id="destacados"><div class="section-heading split"><div><p class="eyebrow">Para empezar bien</p><h2>Los favoritos<br><em>de la casa.</em></h2></div><a class="text-link" href="#menu">Ver todo el menú <span>→</span></a></div>${categories.length > 0 ? renderTemplate`<div class="catalog-categories">${categories.map((category) => {
		const categoryProducts = directusProducts.filter((product) => product.categoryId === category.id);
		return renderTemplate`<section class="catalog-category"><header><p>${category.name}</p><span>${categoryProducts.length} ${categoryProducts.length === 1 ? "producto" : "productos"}</span></header>${categoryProducts.length > 0 ? renderTemplate`<div class="product-grid">${categoryProducts.map((product) => renderTemplate`<article class="product-card product-pollo">${renderComponent($$result, "ProductImage", $$ProductImage, {
			"src": product.image,
			"alt": product.name,
			"class": "product-image"
		})}<span class="product-brand">${category.name}</span><div class="product-info"><div><h3>${product.name}</h3><p>${product.description}</p></div><strong>${product.price}</strong></div><button class="add-button">Agregar <span>+</span></button></article>`)}</div>` : renderTemplate`<p class="category-empty">Próximamente tendremos opciones de ${category.name}.</p>`}</section>`;
	})}</div>` : renderTemplate`<p class="catalog-empty">El catálogo se está actualizando. Vuelve a intentarlo en unos momentos.</p>`}</section><section class="location section-wrap" id="ubicacion"><header class="location-heading"><p class="eyebrow">Encuéntranos</p><h2>Ven por tu <em>antojo.</em></h2></header><div class="location-map-panel"><div class="map-placeholder"><iframe id="location-map" title="Mapa de Pollo Fresa en Irapuato" src="https://www.google.com/maps?q=Av%20Mariano%20J.%20Garc%C3%ADa%201254%2C%20Los%20Alamos%2C%2036568%20Irapuato%2C%20Gto.&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><div class="location-addresses"><a data-location="pollo" href="https://www.google.com/maps/search/?api=1&query=Av%20Mariano%20J.%20Garc%C3%ADa%201254%2C%20Los%20Alamos%2C%2036568%20Irapuato%2C%20Gto." target="_blank" rel="noopener"><span>01</span><div><strong>Pollo Fresa</strong><small>Av. Mariano J. García 1254, Los Álamos</small></div><b>↗</b></a><a data-location="wings" href="https://www.google.com/maps/search/?api=1&query=Av%20Independencia%201811%2C%20Miguel%20Hidalgo%2C%2036550%20Irapuato%2C%20Gto." target="_blank" rel="noopener"><span>02</span><div><strong>Fresa Wings</strong><small>Av. Independencia 1811, Miguel Hidalgo</small></div><b>↗</b></a></div></div><aside class="location-details"><div class="local-carousel" aria-label="Fotos de los locales"><figure class="local-photo is-active" data-location-photo="pollo"><img${addAttribute(local_pollo_default.src, "src")} alt="Local de Pollo Fresa"><figcaption>Pollo Fresa</figcaption></figure><figure class="local-photo" data-location-photo="wings"><img${addAttribute(local_fresa_wings_default.src, "src")} alt="Local de Fresa Wings"><figcaption>Fresa Wings</figcaption></figure><div class="carousel-dots" aria-hidden="true"><span class="is-active"></span><span></span></div></div><div class="daily-hours"><p class="eyebrow">Horarios</p><h3>Todos los días</h3><div><p><strong>Pollo Fresa</strong><span>9 AM — 6 PM</span></p><p><strong>Fresa Wings</strong><span>3 PM — 10 PM</span></p></div></div></aside></section></main><footer id="contacto"><div class="footer-main"><img${addAttribute(pollo_fresa_default.src, "src")} alt="Pollo Fresa"><p>Dos marcas, un solo lugar<br>para comer delicioso.</p><a class="button button-light" href="#menu">Pedir ahora <span>↗</span></a></div><div class="footer-bottom"><span>© 2026 Pollo Fresa</span><nav class="footer-socials" aria-label="Redes sociales"><a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z"></path></svg></a><a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4a9 9 0 0 0-14 11L4 20l5-2a9 9 0 0 0 11-14Zm-8 15a7 7 0 0 1-4-1l-3 1 1-3a7 7 0 1 1 6 3Zm4-5c-.2.4-1 .8-1.4.8-.4.1-1 .1-1.6-.2a8 8 0 0 1-3.2-2.8c-.3-.5-.8-1.4-.8-2.1 0-.7.4-1.2.7-1.4.2-.2.5-.2.7-.2h.5c.2 0 .3.1.4.4l.6 1.4c.1.3.1.4-.1.6l-.4.5c-.1.1-.2.2-.1.4.2.4.6 1 1.1 1.4.6.5 1.1.7 1.5.8.2.1.3 0 .4-.1l.5-.6c.2-.2.3-.2.6-.1l1.4.7c.3.1.4.2.2.4Z"></path></svg></a><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" class="fill"></circle></svg></a></nav><span>Hecho para compartir.</span></div></footer>` })}<div class="theme-switcher" aria-label="Selector de tema para pruebas"><button class="theme-switcher-toggle" type="button" aria-expanded="false">Tema <span>⌄</span></button><div class="theme-switcher-menu" role="group" aria-label="Temas disponibles"><button type="button" data-theme-choice="auto">Automático</button><button type="button" data-theme-choice="theme-pollo">Pollo Fresa</button><button type="button" data-theme-choice="theme-wings">Fresa Wings</button><button type="button" data-theme-choice="theme-combined">Combinado</button></div></div><script>(function(){${defineScriptVars({
		polloCoolSrc: pollo_cool_default.src,
		fresaWingsCoolSrc: fresa_wings_cool_default.src,
		todoPoderosoSrc: todo_poderoso_default
	})}
  const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.main-nav'); toggle?.addEventListener('click', () => { const open = nav?.classList.toggle('is-open') ?? false; toggle.setAttribute('aria-expanded', String(open)); }); document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => nav?.classList.remove('is-open')));
  document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => { document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active')); tab.classList.add('active'); document.querySelectorAll('[data-menu]').forEach((menu) => menu.classList.toggle('hidden', menu.getAttribute('data-menu') !== tab.getAttribute('data-brand'))); }));
  let selectedTheme = 'auto'; const themeClasses = ['theme-pollo', 'theme-wings', 'theme-combined', 'theme-closed']; const applyTheme = (theme) => { document.body.classList.remove(...themeClasses); document.body.classList.add(theme); };
  const updateStatus = () => { const hour = new Date().getHours(); const pollo = hour >= 9 && hour < 18; const wings = hour >= 15 && hour < 22; const automaticTheme = pollo && wings ? 'theme-combined' : pollo ? 'theme-pollo' : wings ? 'theme-wings' : 'theme-closed'; applyTheme(selectedTheme === 'auto' ? automaticTheme : selectedTheme); document.querySelector('.pollo-status')?.classList.toggle('open', pollo); document.querySelector('.wings-status')?.classList.toggle('open', wings); const labels = document.querySelectorAll('.status-label'); if (labels[0]) labels[0].textContent = pollo ? 'Abierto ahora' : hour < 9 ? 'Abre a las 9 AM' : 'Cerrado · abre mañana'; if (labels[1]) labels[1].textContent = wings ? 'Abierto ahora' : hour < 15 ? 'Abre a las 3 PM' : 'Cerrado · abre mañana'; }; updateStatus(); setInterval(updateStatus, 60000);
  const themeToggle = document.querySelector('.theme-switcher-toggle'); const themeMenu = document.querySelector('.theme-switcher-menu'); themeToggle?.addEventListener('click', () => { const open = themeMenu?.classList.toggle('is-open') ?? false; themeToggle.setAttribute('aria-expanded', String(open)); }); document.querySelectorAll('[data-theme-choice]').forEach((choice) => choice.addEventListener('click', () => { selectedTheme = choice.getAttribute('data-theme-choice') ?? 'auto'; updateStatus(); themeMenu?.classList.remove('is-open'); themeToggle?.setAttribute('aria-expanded', 'false'); }));
  const polloCard = document.querySelector('.brand-pollo');
  if (polloCard && !polloCard.querySelector('.pollo-cool-visual')) { const coolVisual = document.createElement('img'); coolVisual.className = 'pollo-cool-visual'; coolVisual.src = polloCoolSrc; coolVisual.alt = 'Pollo Fresa'; polloCard.append(coolVisual); }
  if (polloCard && !polloCard.querySelector('.promo-fresona')) { const promo = document.createElement('div'); promo.className = 'promo-fresona'; promo.innerHTML = '<p>Promociones</p><h3>Disfruta de nuestras<br><em>promos fresonas.</em></h3><a href="#promociones">Ver promociones <span>↗</span></a>'; polloCard.append(promo); }
  const wingsCard = document.querySelector('.brand-wings');
  if (wingsCard && !wingsCard.querySelector('.wings-cool-visual')) { const coolVisual = document.createElement('img'); coolVisual.className = 'wings-cool-visual'; coolVisual.src = fresaWingsCoolSrc; coolVisual.alt = 'Fresa Wings'; wingsCard.append(coolVisual); }
  if (wingsCard && !wingsCard.querySelector('.promo-wings')) { const promo = document.createElement('div'); promo.className = 'promo-wings'; promo.innerHTML = '<p>Promociones</p><h3>Sube el nivel con<br><em>Fresa Wings.</em></h3><a href="#promociones">Ver promociones <span>↗</span></a>'; wingsCard.append(promo); }
  const brandsSection = document.querySelector('.brands');
  if (brandsSection && !brandsSection.querySelector('.combined-video')) { const video = document.createElement('video'); video.className = 'combined-video'; video.src = todoPoderosoSrc; video.autoplay = true; video.muted = true; video.loop = true; video.playsInline = true; video.setAttribute('aria-hidden', 'true'); brandsSection.prepend(video); const powerTitle = document.createElement('div'); powerTitle.className = 'combined-power-title'; powerTitle.innerHTML = '<p>De 3 PM a 6 PM</p><h2>Tienes el poder de <em>pedirlo todo.</em></h2><span>Pollo Fresa y Fresa Wings, juntos en un solo pedido.</span>'; video.insertAdjacentElement('beforebegin', powerTitle); }
})();<\/script>${renderScript($$result, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/index.astro", void 0);
var $$file = "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
