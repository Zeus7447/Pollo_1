import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { C as createAstro, d as maybeRenderHead, f as renderHead, i as renderComponent, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_CvmArc7y.mjs";
import { t as createComponent } from "./compiler_AgT3OCzi.mjs";
import { n as renderScript, t as pollo_fresa_default } from "./pollo_fresa_Cf13Fupo.mjs";
import { t as fresa_wings_alitas_default } from "./fresa-wings-alitas_DwTN0KbK.mjs";
import { i as $$Header, n as menu_pollo_entero_default, r as $$Footer, t as $$WhatsappFlotante } from "./whatsapp_flotante_DBPnWEY3.mjs";
import { n as menu_combo_default, r as menu_medio_pollo_default, t as fresa_wings_combo_default } from "./fresa-wings-combo_BeUPGQ1K.mjs";
import { t as alitas_logo_default } from "./alitas_logo_BmKuF2qQ.mjs";
//#region src/layouts/Layout_pedir.astro
createAstro("https://astro.build");
var $$LayoutPedir = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LayoutPedir;
	const { title = "Pedir | Pollo Fresa & Fresa Wings", description = "Arma tu pedido de pollo rostizado, alitas, boneless, combos y complementos, y envíalo directamente por WhatsApp." } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#2c100b"><link rel="icon" type="image/png"${addAttribute(pollo_fresa_default.src, "href")}><title>${title}</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/layouts/Layout_pedir.astro", void 0);
//#endregion
//#region src/pages/pedir.astro
var pedir_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Pedir,
	file: () => $$file,
	url: () => $$url
});
var $$Pedir = createComponent(($$result, $$props, $$slots) => {
	const polloProducts = [
		{
			name: "Pollo entero",
			detail: "Con tortillas y salsa de la casa",
			price: 249,
			badge: "El favorito",
			image: menu_pollo_entero_default
		},
		{
			name: "Medio pollo",
			detail: "La porción perfecta para uno o dos",
			price: 139,
			badge: "Para compartir",
			image: menu_medio_pollo_default
		},
		{
			name: "Combo Fresa",
			detail: "Medio pollo, papas, tortillas, salsa y bebida",
			price: 179,
			badge: "Todo incluido",
			image: menu_combo_default
		},
		{
			name: "Combo familiar",
			detail: "Pollo entero, dos acompañamientos, tortillas y salsas",
			price: 329,
			badge: "Para la familia",
			image: menu_pollo_entero_default
		}
	];
	const wingsProducts = [
		{
			name: "6 alitas",
			detail: "Elige uno de nuestros 10 sabores",
			price: 80,
			badge: "Alitas",
			image: fresa_wings_alitas_default
		},
		{
			name: "12 alitas",
			detail: "Para compartir o quedártelas todas",
			price: 150,
			badge: "Alitas",
			image: fresa_wings_alitas_default
		},
		{
			name: "6 boneless",
			detail: "Crujientes, sin hueso y bañados",
			price: 80,
			badge: "Boneless",
			image: fresa_wings_alitas_default
		},
		{
			name: "12 boneless",
			detail: "Más bocados, más sabor",
			price: 150,
			badge: "Boneless",
			image: fresa_wings_alitas_default
		},
		{
			name: "Combo 1",
			detail: "6 alitas, una malteada y papas",
			price: 135,
			badge: "Combo",
			image: fresa_wings_combo_default
		},
		{
			name: "Combo 3",
			detail: "12 alitas y dos malteadas",
			price: 225,
			badge: "Combo",
			image: fresa_wings_combo_default
		},
		{
			name: "Combo familiar Wings",
			detail: "25 alitas, 4 hamburguesas, 2 malteadas y papas",
			price: 630,
			badge: "Para la banda",
			image: fresa_wings_combo_default
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
	const extras = [
		{
			name: "Papas a la francesa",
			price: 50
		},
		{
			name: "Gajos de papa",
			price: 50
		},
		{
			name: "10 aros de cebolla",
			price: 50
		},
		{
			name: "5 dedos de queso",
			price: 75
		},
		{
			name: "Refresco",
			price: 25
		},
		{
			name: "Salsa extra",
			price: 10
		},
		{
			name: "Aderezo",
			price: 12
		},
		{
			name: "Chimichurri",
			price: 12
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$LayoutPedir, { "data-astro-cid-atz2kigo": true }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-atz2kigo": true })}${maybeRenderHead($$result)}<main data-astro-cid-atz2kigo><section class="order-hero" id="top" data-astro-cid-atz2kigo><div class="hero-images" aria-hidden="true" data-astro-cid-atz2kigo><img${addAttribute(menu_pollo_entero_default.src, "src")} alt="" data-astro-cid-atz2kigo><img${addAttribute(fresa_wings_alitas_default.src, "src")} alt="" data-astro-cid-atz2kigo></div><div class="hero-shade" data-astro-cid-atz2kigo></div><div class="hero-copy" data-astro-cid-atz2kigo><p data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo></span> Pedido directo por WhatsApp</p><h1 data-astro-cid-atz2kigo>Tu antojo,<br data-astro-cid-atz2kigo><i data-astro-cid-atz2kigo>en camino.</i></h1><span data-astro-cid-atz2kigo>Elige, combina y envía tu pedido en pocos pasos.</span><a href="#armar-pedido" data-astro-cid-atz2kigo>Empezar pedido <b data-astro-cid-atz2kigo>↓</b></a></div><div class="hero-note" data-astro-cid-atz2kigo><b data-astro-cid-atz2kigo>2</b><span data-astro-cid-atz2kigo>negocios<br data-astro-cid-atz2kigo>un solo pedido</span></div></section><section class="order-builder" id="armar-pedido" aria-labelledby="builder-title" data-astro-cid-atz2kigo><header class="builder-heading" data-astro-cid-atz2kigo><div data-astro-cid-atz2kigo><p data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo>01</span> Arma tu pedido</p><h2 id="builder-title" data-astro-cid-atz2kigo>¿Qué se te<br data-astro-cid-atz2kigo><i data-astro-cid-atz2kigo>antoja hoy?</i></h2></div><p data-astro-cid-atz2kigo>Selecciona tus favoritos. Al terminar abriremos WhatsApp con el resumen listo para enviar.</p></header><form class="order-form" data-order-form data-astro-cid-atz2kigo><div class="form-content" data-astro-cid-atz2kigo><fieldset class="business-fieldset" data-astro-cid-atz2kigo><legend data-astro-cid-atz2kigo>Primero, elige tu negocio</legend><div class="business-options" data-astro-cid-atz2kigo><label class="business-option chicken-option" data-astro-cid-atz2kigo><input type="radio" name="business" value="Pollo Fresa" checked data-astro-cid-atz2kigo><span class="radio-mark" data-astro-cid-atz2kigo></span><span class="option-logo pollo-option-logo" data-astro-cid-atz2kigo><img${addAttribute(pollo_fresa_default.src, "src")} alt="" data-astro-cid-atz2kigo></span><span class="option-copy" data-astro-cid-atz2kigo><small data-astro-cid-atz2kigo>ROSTIZADO Y COMBOS</small><strong data-astro-cid-atz2kigo>Pollo Fresa</strong><b data-astro-cid-atz2kigo>Elegir →</b></span></label><label class="business-option wing-option" data-astro-cid-atz2kigo><input type="radio" name="business" value="Fresa Wings" data-astro-cid-atz2kigo><span class="radio-mark" data-astro-cid-atz2kigo></span><span class="option-logo wing-option-logo" data-astro-cid-atz2kigo><img${addAttribute(alitas_logo_default.src, "src")} alt="" data-astro-cid-atz2kigo></span><span class="option-copy" data-astro-cid-atz2kigo><small data-astro-cid-atz2kigo>ALITAS Y BONELESS</small><strong data-astro-cid-atz2kigo>Fresa Wings</strong><b data-astro-cid-atz2kigo>Elegir →</b></span></label></div></fieldset><fieldset class="product-fieldset" data-astro-cid-atz2kigo><legend data-astro-cid-atz2kigo>Ahora elige tu favorito</legend><div class="product-options" data-products="pollo" data-astro-cid-atz2kigo>${polloProducts.map((product, index) => renderTemplate`<label class="product-option" data-astro-cid-atz2kigo><input type="radio" name="product"${addAttribute(product.name, "value")}${addAttribute(product.price, "data-price")}${addAttribute(index === 0, "checked")} data-astro-cid-atz2kigo><span class="product-image" data-astro-cid-atz2kigo><img${addAttribute(product.image.src, "src")}${addAttribute(product.name, "alt")} loading="lazy" data-astro-cid-atz2kigo><small data-astro-cid-atz2kigo>${product.badge}</small><b data-astro-cid-atz2kigo>✓</b></span><span class="product-copy" data-astro-cid-atz2kigo><strong data-astro-cid-atz2kigo>${product.name}</strong><small data-astro-cid-atz2kigo>${product.detail}</small><b data-astro-cid-atz2kigo>$${product.price}</b></span></label>`)}</div><div class="product-options" data-products="wings" hidden data-astro-cid-atz2kigo>${wingsProducts.map((product) => renderTemplate`<label class="product-option" data-astro-cid-atz2kigo><input type="radio" name="product"${addAttribute(product.name, "value")}${addAttribute(product.price, "data-price")} data-astro-cid-atz2kigo><span class="product-image" data-astro-cid-atz2kigo><img${addAttribute(product.image.src, "src")}${addAttribute(product.name, "alt")} loading="lazy" data-astro-cid-atz2kigo><small data-astro-cid-atz2kigo>${product.badge}</small><b data-astro-cid-atz2kigo>✓</b></span><span class="product-copy" data-astro-cid-atz2kigo><strong data-astro-cid-atz2kigo>${product.name}</strong><small data-astro-cid-atz2kigo>${product.detail}</small><b data-astro-cid-atz2kigo>$${product.price}</b></span></label>`)}</div></fieldset><fieldset class="flavor-fieldset" data-flavors hidden data-astro-cid-atz2kigo><legend data-astro-cid-atz2kigo>Elige el sabor de tus alitas o boneless</legend><div class="flavor-options" data-astro-cid-atz2kigo>${sabores.map((sabor, index) => renderTemplate`<label data-astro-cid-atz2kigo><input type="radio" name="flavor"${addAttribute(sabor, "value")}${addAttribute(index === 0, "checked")} data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo>${sabor}</span></label>`)}</div></fieldset><fieldset class="extras-fieldset" data-astro-cid-atz2kigo><legend data-astro-cid-atz2kigo>Complementa el antojo</legend><div class="extras-options" data-astro-cid-atz2kigo>${extras.map((extra) => renderTemplate`<label data-astro-cid-atz2kigo><input type="checkbox" name="extra"${addAttribute(extra.name, "value")}${addAttribute(extra.price, "data-price")} data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo><b data-astro-cid-atz2kigo>+</b><span data-astro-cid-atz2kigo><strong data-astro-cid-atz2kigo>${extra.name}</strong><small data-astro-cid-atz2kigo>Agregar al pedido</small></span><em data-astro-cid-atz2kigo>$${extra.price}</em></span></label>`)}</div></fieldset><fieldset class="details-fieldset" data-astro-cid-atz2kigo><legend data-astro-cid-atz2kigo>Últimos detalles</legend><div class="detail-grid" data-astro-cid-atz2kigo><label data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo>¿Cómo lo quieres?</span><select name="method" data-astro-cid-atz2kigo><option value="Recoger en sucursal" data-astro-cid-atz2kigo>Recoger en sucursal</option><option value="Envío a domicilio" data-astro-cid-atz2kigo>Envío a domicilio</option></select></label><label data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo>Sucursal</span><select name="branch" data-astro-cid-atz2kigo><option value="Por confirmar en WhatsApp" data-astro-cid-atz2kigo>Confirmar por WhatsApp</option><option value="Av. Independencia 1823, Col. Miguel Hidalgo" data-astro-cid-atz2kigo>Av. Independencia 1823</option></select></label><label data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo>Tu nombre</span><input type="text" name="customer" placeholder="¿A nombre de quién?" data-astro-cid-atz2kigo></label><label class="notes" data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo>Indicaciones especiales</span><textarea name="notes" rows="3" placeholder="Sin cebolla, salsa aparte, referencia de domicilio..." data-astro-cid-atz2kigo></textarea></label></div></fieldset></div><aside class="order-summary" aria-live="polite" data-astro-cid-atz2kigo><div class="summary-top" data-astro-cid-atz2kigo><p data-astro-cid-atz2kigo>RESUMEN DEL PEDIDO</p><span data-astro-cid-atz2kigo>Se actualiza automáticamente</span></div><div class="summary-brand" data-astro-cid-atz2kigo><span class="summary-logo" data-astro-cid-atz2kigo><img${addAttribute(pollo_fresa_default.src, "src")} alt="" data-summary-logo data-astro-cid-atz2kigo></span><div data-astro-cid-atz2kigo><small data-summary-business data-astro-cid-atz2kigo>POLLO FRESA</small><strong data-astro-cid-atz2kigo>Tu pedido</strong></div></div><div class="summary-product" data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo><small data-astro-cid-atz2kigo>PRODUCTO</small><strong data-summary-product data-astro-cid-atz2kigo>Pollo entero</strong></span><b data-summary-product-price data-astro-cid-atz2kigo>$249</b></div><div class="summary-flavor" data-summary-flavor-row hidden data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo>Sabor</span><strong data-summary-flavor data-astro-cid-atz2kigo>BBQ</strong></div><div class="summary-extras" data-astro-cid-atz2kigo><small data-astro-cid-atz2kigo>COMPLEMENTOS</small><ul data-summary-extras data-astro-cid-atz2kigo><li data-astro-cid-atz2kigo>Aún no agregas complementos.</li></ul></div><div class="quantity-control" data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo>Cantidad</span><div data-astro-cid-atz2kigo><button type="button" data-minus aria-label="Disminuir cantidad" data-astro-cid-atz2kigo>−</button><strong data-quantity data-astro-cid-atz2kigo>1</strong><button type="button" data-plus aria-label="Aumentar cantidad" data-astro-cid-atz2kigo>+</button></div></div><div class="summary-total" data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo><small data-astro-cid-atz2kigo>TOTAL ESTIMADO</small><b data-astro-cid-atz2kigo>Confirma disponibilidad por WhatsApp</b></span><strong data-total data-astro-cid-atz2kigo>$249</strong></div><button class="send-order" type="submit" data-astro-cid-atz2kigo><span data-astro-cid-atz2kigo><small data-astro-cid-atz2kigo>LISTO PARA ENVIAR</small>Continuar en WhatsApp</span><b data-astro-cid-atz2kigo>↗</b></button><p class="delivery-note" data-astro-cid-atz2kigo>El servicio a domicilio puede generar un costo adicional según la ubicación.</p></aside></form></section><section class="order-help" data-astro-cid-atz2kigo><div data-astro-cid-atz2kigo><p data-astro-cid-atz2kigo>¿PREFIERES HABLAR CON NOSOTROS?</p><h2 data-astro-cid-atz2kigo>Te ayudamos a<br data-astro-cid-atz2kigo><i data-astro-cid-atz2kigo>elegir.</i></h2></div><p data-astro-cid-atz2kigo>Escríbenos directamente y cuéntanos para cuántas personas es el pedido.</p><a href="https://wa.me/524463869132?text=Hola%2C%20necesito%20ayuda%20para%20armar%20mi%20pedido." target="_blank" rel="noreferrer" data-astro-cid-atz2kigo>Hablar por WhatsApp <span data-astro-cid-atz2kigo>↗</span></a></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-atz2kigo": true })}${renderComponent($$result, "WhatsappFlotante", $$WhatsappFlotante, { "data-astro-cid-atz2kigo": true })}` })}${renderScript($$result, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/pedir.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/pedir.astro", void 0);
var $$file = "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/pages/pedir.astro";
var $$url = "/pedir";
//#endregion
//#region \0virtual:astro:page:src/pages/pedir@_@astro
var page = () => pedir_exports;
//#endregion
export { page };
