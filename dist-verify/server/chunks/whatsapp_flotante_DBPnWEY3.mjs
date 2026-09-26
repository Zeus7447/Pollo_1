import { C as createAstro, d as maybeRenderHead, p as addAttribute, u as renderTemplate } from "./server_CvmArc7y.mjs";
import { t as createComponent } from "./compiler_AgT3OCzi.mjs";
import { n as renderScript, t as pollo_fresa_default } from "./pollo_fresa_Cf13Fupo.mjs";
//#region src/components/header.astro
createAstro("https://astro.build");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const pathname = Astro.url.pathname;
	const links = [
		{
			label: "Inicio",
			href: "/"
		},
		{
			label: "Menú",
			href: "/menu"
		},
		{
			label: "Nosotros",
			href: "/nosotros"
		},
		{
			label: "Pedir",
			href: "/pedir"
		},
		{
			label: "Ubicaciones",
			href: "/ubicaciones"
		}
	];
	const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);
	return renderTemplate`${maybeRenderHead($$result)}<header class="site-header" data-header data-astro-cid-4oan7hod><nav class="nav" aria-label="Navegación principal" data-astro-cid-4oan7hod><a class="brand" href="/" aria-label="Pollo Fresa, inicio" data-astro-cid-4oan7hod><span class="brand-logo" data-astro-cid-4oan7hod><img${addAttribute(pollo_fresa_default.src, "src")} alt="" data-astro-cid-4oan7hod></span><span class="brand-name" data-astro-cid-4oan7hod>POLLO<em data-astro-cid-4oan7hod>FRESA</em></span></a><div class="desktop-links" data-astro-cid-4oan7hod>${links.map((link) => renderTemplate`<a${addAttribute({ active: isActive(link.href) }, "class:list")}${addAttribute(link.href, "href")} data-astro-cid-4oan7hod><span data-astro-cid-4oan7hod>${link.label}</span></a>`)}</div><div class="nav-actions" data-astro-cid-4oan7hod><a class="order-link" href="/pedir" data-astro-cid-4oan7hod><span class="order-dot" data-astro-cid-4oan7hod></span>Pedir ahora <b data-astro-cid-4oan7hod>↗</b></a><button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" data-menu-toggle data-astro-cid-4oan7hod><span data-astro-cid-4oan7hod></span><span data-astro-cid-4oan7hod></span></button></div></nav><div class="mobile-menu" data-mobile-menu aria-hidden="true" data-astro-cid-4oan7hod><div class="mobile-menu-inner" data-astro-cid-4oan7hod><p data-astro-cid-4oan7hod>MENÚ PRINCIPAL</p><div data-astro-cid-4oan7hod>${links.map((link, index) => renderTemplate`<a${addAttribute({ active: isActive(link.href) }, "class:list")}${addAttribute(link.href, "href")} data-astro-cid-4oan7hod><small data-astro-cid-4oan7hod>0${index + 1}</small><span data-astro-cid-4oan7hod>${link.label}</span><b data-astro-cid-4oan7hod>↗</b></a>`)}</div><a class="mobile-order" href="/pedir" data-astro-cid-4oan7hod>Hacer mi pedido <span data-astro-cid-4oan7hod>↗</span></a><p class="mobile-note" data-astro-cid-4oan7hod>Pollo doradito · Recién hecho · Para compartir</p></div></div></header>${renderScript($$result, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/header.astro", void 0);
//#endregion
//#region src/components/footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer" data-astro-cid-ddhozxeg><div class="footer-top" data-astro-cid-ddhozxeg><p data-astro-cid-ddhozxeg><span data-astro-cid-ddhozxeg>✦</span> SABOR DE CASA · TODOS LOS DÍAS</p><a href="/pedir" data-astro-cid-ddhozxeg>Pedir ahora <span data-astro-cid-ddhozxeg>↗</span></a></div><div class="footer-main" data-astro-cid-ddhozxeg><div class="brand-column" data-astro-cid-ddhozxeg><a class="brand" href="/" aria-label="Pollo Fresa, inicio" data-astro-cid-ddhozxeg><span class="footer-brand-logo" data-astro-cid-ddhozxeg><img${addAttribute(pollo_fresa_default.src, "src")} alt="" data-astro-cid-ddhozxeg></span><span data-astro-cid-ddhozxeg>POLLO<br data-astro-cid-ddhozxeg><em data-astro-cid-ddhozxeg>FRESA</em></span></a><p data-astro-cid-ddhozxeg>Pollo doradito, jugoso y preparado para reunir a todos alrededor de la mesa.</p></div><div class="link-column" data-astro-cid-ddhozxeg><small data-astro-cid-ddhozxeg>Explora</small>${[
		{
			label: "Inicio",
			href: "/"
		},
		{
			label: "Menú",
			href: "/menu"
		},
		{
			label: "Nosotros",
			href: "/nosotros"
		},
		{
			label: "Pedir",
			href: "/pedir"
		},
		{
			label: "Ubicaciones",
			href: "/ubicaciones"
		}
	].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} data-astro-cid-ddhozxeg>${link.label}</a>`)}</div><div class="link-column" data-astro-cid-ddhozxeg><small data-astro-cid-ddhozxeg>Información</small><a href="/politica-de-privacidad" data-astro-cid-ddhozxeg>Política de privacidad</a><a href="/cookies" data-astro-cid-ddhozxeg>Política de cookies</a><a href="/terminos" data-astro-cid-ddhozxeg>Términos y condiciones</a><button type="button" data-cookie-open data-astro-cid-ddhozxeg>Configurar cookies</button></div><div class="contact-column" data-astro-cid-ddhozxeg><small data-astro-cid-ddhozxeg>Hablemos</small><p data-astro-cid-ddhozxeg>¿Tienes dudas sobre tu pedido?</p><a href="/pedir" data-astro-cid-ddhozxeg>Contáctanos <span data-astro-cid-ddhozxeg>↗</span></a><p class="schedule" data-astro-cid-ddhozxeg>Lunes a domingo<br data-astro-cid-ddhozxeg><strong data-astro-cid-ddhozxeg>11:00 — 22:00</strong></p></div></div><section class="social-showcase" aria-labelledby="social-title" data-astro-cid-ddhozxeg><header data-astro-cid-ddhozxeg><p data-astro-cid-ddhozxeg><span data-astro-cid-ddhozxeg></span> La parte más sabrosa del feed</p><h2 id="social-title" data-astro-cid-ddhozxeg>Síguenos y<br data-astro-cid-ddhozxeg><i data-astro-cid-ddhozxeg>abre el apetito.</i></h2></header><div class="social-grid" data-astro-cid-ddhozxeg><a class="social-card instagram" href="#" aria-label="Seguir a Pollo Fresa en Instagram" data-astro-cid-ddhozxeg><span class="social-index" data-astro-cid-ddhozxeg>01</span><span class="social-icon" data-astro-cid-ddhozxeg><svg viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ddhozxeg><rect x="3" y="3" width="18" height="18" rx="5" data-astro-cid-ddhozxeg></rect><circle cx="12" cy="12" r="4" data-astro-cid-ddhozxeg></circle><circle cx="17.5" cy="6.5" r="1" class="fill" data-astro-cid-ddhozxeg></circle></svg></span><div data-astro-cid-ddhozxeg><small data-astro-cid-ddhozxeg>@POLLOFRESA</small><strong data-astro-cid-ddhozxeg>Instagram</strong><p data-astro-cid-ddhozxeg>Fotos, antojos y mucho pollo doradito.</p></div><span class="social-arrow" data-astro-cid-ddhozxeg>↗</span></a><a class="social-card facebook" href="#" aria-label="Seguir a Pollo Fresa en Facebook" data-astro-cid-ddhozxeg><span class="social-index" data-astro-cid-ddhozxeg>02</span><span class="social-icon" data-astro-cid-ddhozxeg><svg viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ddhozxeg><path class="fill" d="M14.2 22v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H8V14h2.8v8h3.4Z" data-astro-cid-ddhozxeg></path></svg></span><div data-astro-cid-ddhozxeg><small data-astro-cid-ddhozxeg>POLLO FRESA</small><strong data-astro-cid-ddhozxeg>Facebook</strong><p data-astro-cid-ddhozxeg>Promociones, novedades y sucursales.</p></div><span class="social-arrow" data-astro-cid-ddhozxeg>↗</span></a><a class="social-card tiktok" href="#" aria-label="Seguir a Pollo Fresa en TikTok" data-astro-cid-ddhozxeg><span class="social-index" data-astro-cid-ddhozxeg>03</span><span class="social-icon tiktok-logo" data-astro-cid-ddhozxeg><svg viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ddhozxeg><path class="fill" d="M16.6 3c.4 2.3 1.7 3.7 4 3.9v3.2c-1.5.1-2.8-.3-4-1.2v6.3a6.2 6.2 0 1 1-5.4-6.1v3.3a3 3 0 1 0 2.1 2.8V3h3.3Z" data-astro-cid-ddhozxeg></path></svg></span><div data-astro-cid-ddhozxeg><small data-astro-cid-ddhozxeg>@POLLOFRESA</small><strong data-astro-cid-ddhozxeg>TikTok</strong><p data-astro-cid-ddhozxeg>El rosticero, detrás de cámaras y sabor.</p></div><span class="social-arrow" data-astro-cid-ddhozxeg>↗</span></a></div></section><div class="wordmark" aria-hidden="true" data-astro-cid-ddhozxeg>POLLO FRESA</div><div class="footer-bottom" data-astro-cid-ddhozxeg><p data-astro-cid-ddhozxeg>© ${year} Pollo Fresa. Todos los derechos reservados.</p><p data-astro-cid-ddhozxeg>Hecho con fuego, sazón y mucho cariño <span data-astro-cid-ddhozxeg>♥</span></p><a href="#top" data-astro-cid-ddhozxeg>Volver arriba ↑</a></div><dialog class="cookie-dialog" data-cookie-dialog data-astro-cid-ddhozxeg><form method="dialog" data-astro-cid-ddhozxeg><button class="close" value="close" aria-label="Cerrar" data-astro-cid-ddhozxeg>×</button><span class="cookie-icon" data-astro-cid-ddhozxeg>◉</span><h2 data-astro-cid-ddhozxeg>Preferencias de cookies</h2><p data-astro-cid-ddhozxeg>Utilizamos cookies para mejorar tu experiencia. Puedes elegir cuáles permitir.</p><label data-astro-cid-ddhozxeg><span data-astro-cid-ddhozxeg><strong data-astro-cid-ddhozxeg>Cookies esenciales</strong><small data-astro-cid-ddhozxeg>Necesarias para que el sitio funcione.</small></span><input type="checkbox" checked disabled data-astro-cid-ddhozxeg></label><label data-astro-cid-ddhozxeg><span data-astro-cid-ddhozxeg><strong data-astro-cid-ddhozxeg>Cookies de análisis</strong><small data-astro-cid-ddhozxeg>Nos ayudan a entender cómo se utiliza el sitio.</small></span><input type="checkbox" data-astro-cid-ddhozxeg></label><div class="dialog-actions" data-astro-cid-ddhozxeg><button value="essential" data-astro-cid-ddhozxeg>Solo esenciales</button><button class="accept" value="all" data-astro-cid-ddhozxeg>Aceptar todas</button></div></form></dialog></footer>${renderScript($$result, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/footer.astro", void 0);
//#endregion
//#region src/assets/menu-pollo-entero.png
var menu_pollo_entero_default = new Proxy({
	"src": "/_astro/menu-pollo-entero.DxHucKY9.png",
	"width": 1536,
	"height": 1024,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/assets/menu-pollo-entero.png";
	return target[name];
} });
//#endregion
//#region src/components/whatsapp_flotante.astro
var $$WhatsappFlotante = createComponent(($$result, $$props, $$slots) => {
	const whatsappUrl = `https://wa.me/524463869132?text=${encodeURIComponent("Hola, quiero hacer un pedido de Pollo Fresa o Fresa Wings.")}`;
	return renderTemplate`${maybeRenderHead($$result)}<a class="whatsapp"${addAttribute(whatsappUrl, "href")} target="_blank" rel="noreferrer" aria-label="Enviar mensaje a Pollo Fresa por WhatsApp" data-astro-cid-xdi3xius><span class="tooltip" data-astro-cid-xdi3xius><small data-astro-cid-xdi3xius>¿Tienes hambre?</small><strong data-astro-cid-xdi3xius>Escríbenos</strong></span><span class="icon" data-astro-cid-xdi3xius><svg viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-xdi3xius><path d="M27.3 4.7A15.8 15.8 0 0 0 2.5 23.8L.3 31.7l8.1-2.1A15.7 15.7 0 0 0 16 31.5h.1A15.7 15.7 0 0 0 27.3 4.7ZM16.1 28.8a13 13 0 0 1-6.6-1.8l-.5-.3-4.8 1.2 1.3-4.7-.3-.5a13 13 0 1 1 10.9 6.1Zm7.1-9.7c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-2.3-1.1-3.8-2-5.3-4.6-.4-.7.4-.7 1.1-2.2.1-.3 0-.6-.1-.8l-1.2-3c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.7s1.6 4.3 1.8 4.6c.2.3 3.1 4.8 7.6 6.7 2.8 1.2 3.9 1.3 5.3 1.1.9-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.2-.2-.5-.3-.9-.5Z" data-astro-cid-xdi3xius></path></svg></span></a>`;
}, "C:/Users/alan7/OneDrive/Documentos/GitHub/pollo_1/src/components/whatsapp_flotante.astro", void 0);
//#endregion
export { $$Header as i, menu_pollo_entero_default as n, $$Footer as r, $$WhatsappFlotante as t };
