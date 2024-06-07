/* empty css                            */
import { f as createComponent, r as renderTemplate, h as renderComponent, g as createAstro, m as maybeRenderHead, i as addAttribute, F as Fragment, u as unescapeHTML } from '../astro_JGZcW2el.mjs';
import 'kleur/colors';
import { a as $$Heading, e as $$Paragraph, b as $$Section, $ as $$Utils, c as $$ImageAssets, g as getAbsoluteLocaleUrl, t, d as $$Layout } from './404_ZaZTsUc1.mjs';
import { a as $$Hero$1 } from './aboutus_fgqeY9Zx.mjs';
import { $ as $$TagGroup } from './_project__C72TrzP9.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HeroComponent", $$Hero$1, { "className": "top internal services", "title": "pagesServices:hero-title", "heading1": "pagesServices:hero-heading1", "heading2": "pagesServices:hero-heading2", "paragraph": "pagesServices:hero-paragraph" })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_services/sections/Hero.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Service;
  const {
    lang = "",
    index = 0,
    service = {}
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row my-5 py-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom"${addAttribute(100 + index * 10, "data-aos-offset")} data-aos-once="true"> <div class="col-12 col-md-6"> ${renderComponent($$result, "HeadingComponent", $$Heading, { "level": 3, "className": "underline-2" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(service.title?.[lang])}` })} ` })} </div> <div class="col-12 col-md-6"> ${renderComponent($$result, "ParagraphComponent", $$Paragraph, { "className": "color-grey" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(service.paragraph?.[lang])}` })} ` })} ${renderComponent($$result, "TagGroupComponent", $$TagGroup, { "className": "my-3", "tags": service.tags })} </div> </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_services/sections/Service.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Services$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services$2;
  const {
    lang = "",
    services = []
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> ${services.map((service, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ServiceSection", $$Service, { "lang": lang, "service": service, "index": index })} ${index + 1 < services.length && renderTemplate`<hr>`}` })}`)} </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_services/sections/Services.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Parallax = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Parallax;
  const {
    lang = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "className": "section-2 d-flex align-items-center bg-parallax" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container d-flex align-items-center"> <div class="row"> <div class="col-12 col-md-8 col1 col-lg-7"> ${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 2, "className": "h1 text-white" }, { "default": ($$result3) => renderTemplate` <span class="thin"> ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesServices:parallax-thin" })} </span> <br> <strong> ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesServices:parallax-strong" })} </strong> ` })} </div> <div class="col-12 col-md-4 col2 col-lg-5"> <div class="container d-flex align-items-center"> <div class="row"> <div class="col-12"> ${renderComponent($$result2, "ImageAssetsComponent", $$ImageAssets, { "src": "logo-pro-white.svg", "alt": "logo", "width": 44, "height": 44 })} ${renderComponent($$result2, "ParagraphComponent", $$Paragraph, { "className": "text-light my-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesServices:parallax-paragraph" })} ` })} <a${addAttribute(getAbsoluteLocaleUrl(lang, "aboutus"), "href")} class="btn btn-warning"${addAttribute(t(lang, "pagesServices:parallax-button"), "aria-label")}> ${renderComponent($$result2, "Trans", $$Utils, { "i18nKey": "pagesServices:parallax-button" })} </a> </div> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_services/sections/Parallax.astro", void 0);

const ServicesContent = [
	{
		title: {
			es: "Diseño y<br/>desarrollo web",
			en: "Design &<br/>Web development"
		},
		paragraph: {
			es: "Creamos sitios web personalizados que reflejan la identidad visual de tu marca y ofrecen una experiencia intuitiva para los usuarios.",
			en: "We create custom websites that reflect your brand identity and offer an intuitive experience for users."
		},
		tags: [
			"figma",
			"wordpress",
			"html",
			"css",
			"cms",
			"react",
			"seo",
			"angular",
			"vue",
			"javascript"
		]
	},
	{
		title: {
			es: "Desarrollo<br/>frontend y<br/>backend",
			en: "Frontend &<br/>backend development"
		},
		paragraph: {
			es: "Creamos una experiencia de uso fluida y atractiva mediante el desarrollo frontend, garantizando un diseño visualmente impactante y una navegación intuitiva. Además, nuestro equipo de desarrollo backend se encargará de la implementación técnica, asegurando un funcionamiento eficiente, seguro y escalable de tu sitio web o aplicación.",
			en: "We create a smooth and engaging user experience through frontend development, ensuring a visually stunning design and intuitive navigation. In addition, our backend development team will take care of the technical implementation, ensuring efficient, secure and scalable websites and applications."
		},
		tags: [
			"react",
			"angular",
			"php",
			"node",
			"python",
			"next",
			"javascript",
			"net",
			"nuxt"
		]
	},
	{
		title: {
			es: "Integración de<br> sistemas",
			en: "System integration"
		},
		paragraph: {
			es: "A través de APIs, plugins o módulos personalizados, conectaremos tus diferentes sistemas y plataformas para un intercambio de datos fluido y automatizado. Simplifica tus procesos y mejora la productividad al tener toda la información centralizada y sincronizada.",
			en: "Through API\"s, plugins and custom modules, we will connect your different systems and platforms for a fluid and automated data exchange. Simplify your processes and improve productivity by having all the information centralized and synchronized."
		},
		tags: [
			"api",
			"plugins",
			"modules",
			"systems",
			"data",
			"productivity"
		]
	},
	{
		title: {
			es: "Diseño de <br>interfaces (UI)",
			en: "User interfaces design (UI)"
		},
		paragraph: {
			es: "Destaca visualmente y cautiva a tus usuarios con nuestro servicio de diseño de interfaces (UI). Nuestro talentoso equipo de diseñadores creará una interfaz intuitiva y atractiva que refleje la identidad de tu marca y mejore la experiencia del usuario. Cada elemento visual y cada interacción serán cuidadosamente diseñados para garantizar que tu sitio web o aplicación sea agradable a la vista y fácil de usar.",
			en: "Visually stand out and captivate your users with our interface (UI) design service. Our talented team of designers will create an intuitive and engaging interface that reflects your brand identity and enhances the user experience. Every visual element and every interaction will be carefully designed to ensure that your website or app is easy on the eyes and easy to use."
		},
		tags: [
			"ui-kit",
			"responsive",
			"visual",
			"wireframes",
			"icons",
			"interaction",
			"figma"
		]
	},
	{
		title: {
			es: "Diseño de<br/> experiencia de <br/>usuario (UX)",
			en: "User experience design (UX)"
		},
		paragraph: {
			es: "Mejora la experiencia de tus usuarios y maximiza el éxito de tu proyecto con nuestro servicio de diseño de experiencia de usuario (UX). Nuestro equipo experto se enfoca en comprender las necesidades y comportamientos de tus usuarios, para crear soluciones intuitivas y agradables.",
			en: "Improve the experience of your users and maximize the success of your project with our user experience (UX) design service. Our expert team focuses on understanding the needs and behaviors of your users, to create intuitive and pleasant solutions."
		},
		tags: [
			"testing",
			"usability",
			"architecture",
			"accessibility",
			"ux-research",
			"metrics",
			"cards",
			"ux-person",
			"ux-flow",
			"benchmarking",
			"heuristic"
		]
	},
	{
		title: {
			es: "Branding",
			en: "Branding"
		},
		paragraph: {
			es: "Destaca y deja una impresión duradera con nuestro servicio de branding. Nos enfocamos en crear una identidad de marca sólida y coherente que refleje tus valores y atraiga a tu audiencia objetivo. Desde el diseño de logotipos hasta la selección de colores, tipografía y tono de voz, construiremos una imagen de marca distintiva y memorable. Ya sea que estés empezando desde cero o busques renovar tu imagen, nuestro equipo de expertos en branding te guiará en el camino hacia el reconocimiento y el éxito de tu negocio.",
			en: "Stand out and leave a lasting impression with our branding services. We focus on creating a strong and consistent brand identity that reflects your values and engages your target audience. From logo design to color selection, typography and tone of voice, we will build a distinctive and memorable brand image. Whether you are starting from scratch or looking to renew your image, our team of branding experts will guide you on the path to recognition and success for your business."
		},
		tags: [
			"branding",
			"typography",
			"identity",
			"icons",
			"brandarq",
			"colorpalette",
			"logo"
		]
	}
];

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$Hero, { "lang": lang })} ${renderComponent($$result2, "ServicesSection", $$Services$2, { "lang": lang, "services": ServicesContent })} ${renderComponent($$result2, "ParallaxSection", $$Parallax, { "lang": lang })} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_services/index.astro", void 0);

const $$Services$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Index, {})}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/en/services.astro", void 0);

const $$file$1 = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/en/services.astro";
const $$url$1 = "/en/services/";

const services$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Index, {})}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/services.astro", void 0);

const $$file = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/services.astro";
const $$url = "/services/";

const services = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { services as a, services$1 as s };
