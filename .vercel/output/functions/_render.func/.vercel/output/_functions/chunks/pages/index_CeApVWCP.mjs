/* empty css                            */
import { g as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, i as addAttribute, F as Fragment, u as unescapeHTML, k as renderSlot } from '../astro_JGZcW2el.mjs';
import 'kleur/colors';
import { a as $$Heading, $ as $$Utils, g as getAbsoluteLocaleUrl, t, b as $$Section, c as $$ImageAssets, e as $$Paragraph, d as $$Layout } from './404_ZaZTsUc1.mjs';
import { $ as $$TagGroup } from './_project__C72TrzP9.mjs';
import { C as Carousel, $ as $$Us$1 } from './aboutus_fgqeY9Zx.mjs';
import 'clsx';

const $$Astro$8 = createAstro("http://localhost:4321");
const $$Botton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Botton;
  const {
    lang
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "className": "section-botton" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container my-5 patternBotton"> <div class="row d-flex align-items-center"> <div class="col-12 col-md-8 p-4"> ${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 2, "className": "w-75 h4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "global:bottom-heading" })} ` })} </div> <div class="col-12 col-md-4 text-center d-flex justify-content-center"> <a${addAttribute(getAbsoluteLocaleUrl(lang, "contact"), "href")} class="btn btn-warning uppercasemy-4"${addAttribute(t(lang, "global:bottom-btn"), "aria-label")}> ${renderComponent($$result2, "Trans", $$Utils, { "i18nKey": "global:bottom-btn" })} </a> </div> </div> </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Botton.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "class": "top hero d-flex align-items-center" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="row"> <div class="col-12 order-2 order-lg-1 col-lg-5 col1"> <div class="pattern01"> ${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 1 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesHome:hero-heading" })} ` })} ${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 2 }, { "default": ($$result3) => renderTemplate` <span class="thin uppercase"> ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesHome:hero-thin" })} </span> <br> <strong class="uppercase"> ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesHome:hero-strong" })} </strong> ` })} </div> </div> <div class="col-12 col-lg-7 order-1 order-lg-2 text-center"> ${renderComponent($$result2, "ImageAssetsComponent", $$ImageAssets, { "className": "w-75 ipad opacity", "src": "ipad.webp", "alt": "ipad", "loading": "eager", "width": 727, "height": 672 })} </div> </div> </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_home/sections/Hero.astro", void 0);

const $$Astro$7 = createAstro("http://localhost:4321");
const $$SectionParallax = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SectionParallax;
  const {
    lang
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "class": "section-2 bg-parallax d-flex align-items-center" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container d-flex align-items-center"> <div class="row"> <div class="col-12 col-md-6 col1 col-lg-7"> ${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 2, "className": "h1" }, { "default": ($$result3) => renderTemplate` <span class="thin"> ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesHome:parallax-thin" })} </span> <br> <strong> ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesHome:parallax-strong" })} </strong> ` })} </div> <div class="col-12 col-md-6 col2 col-lg-5"> <div class="container d-flex align-items-center"> <div class="row"> <div class="col-12 parrafo_somos"> ${renderComponent($$result2, "ImageAssetsComponent", $$ImageAssets, { "src": "logo-pro-white.svg", "alt": "logo", "width": 44, "height": 44 })} ${renderComponent($$result2, "ParagraphComponent", $$Paragraph, { "class": "text-light my-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesHome:parallax-paragraph" })} ` })} <a${addAttribute(getAbsoluteLocaleUrl(lang, "aboutus"), "href")} class="btn btn-warning"${addAttribute(t(lang, "pagesHome:parallax-button"), "aria-label")}> ${renderComponent($$result2, "Trans", $$Utils, { "i18nKey": "pagesHome:parallax-button" })} </a> </div> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_home/sections/SectionParallax.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:4321");
const $$SectionWhatWeDo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SectionWhatWeDo;
  const {
    tags = {}
  } = Astro2.props;
  const tagsDo = tags?.tagsDo || [];
  const tagsTech = tags?.tagsTech || [];
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SectionComponent", $$Section, { "className": "section-3" }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="container"><div class="row d-flex align-items-center"><div class="col-12 col-md-12 col-lg-6 order-2 order-md-2 order-lg-1" data-aos="fade-right" data-aos-once="true">${renderComponent($$result3, "HeadingComponent", $$Heading, { "level": 2, "className": "h3" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "pagesHome:whatwedo-heading-3" })}` })}${renderComponent($$result3, "ParagraphComponent", $$Paragraph, { "className": "my-4 special parrafo_dedicamos" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "pagesHome:whatwedo-paragraph" })}` })}${renderComponent($$result3, "TagGroupComponent", $$TagGroup, { "tags": tagsDo })}</div><div class="col-12 col-md-12 col-lg-6 order-1 order-md-1 order-lg-2" data-aos="fade-left" data-aos-once="true">${renderComponent($$result3, "ImageAssetsComponent", $$ImageAssets, { "className": "laptopPlaceholder", "src": "laptop.webp", "alt": "laptop", "loading": "eager", "width": 727, "height": 672 })}</div></div></div>` })}${renderComponent($$result2, "SectionComponent", $$Section, { "className": "section-4" }, { "default": ($$result3) => renderTemplate`<div class="container"><div class="row d-flex"><div class="col-12 col-md-4 col-lg-2 d-flex align-items-center mb20">${renderComponent($$result3, "HeadingComponent", $$Heading, { "level": 2, "className": "h5 uppercase" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "pagesHome:whatwedo-heading-5" })}<br><span class="accent1">${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "pagesHome:whatwedo-accent" })}</span><br><span class="rayita_azul queusamos">${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "pagesHome:whatwedo-use" })}</span>` })}</div><div class="col-12 col-md-8 col-lg-10 d-flex align-items-center">${renderComponent($$result3, "TagGroupComponent", $$TagGroup, { "tags": tagsTech })}</div></div></div>` })}` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_home/sections/SectionWhatWeDo.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:4321");
const $$SectionCarousell = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SectionCarousell;
  const {
    lang = "",
    slides = {}
  } = Astro2.props;
  slides[0].active = true;
  const id = "testimonials-carousel";
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "className": "testimonials-home my-5" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Carousel", Carousel, { "id": id }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Carousel.Indicators", Carousel.Indicators, { "id": id, "slides": slides })} ${renderComponent($$result3, "Carousel.Inner", Carousel.Inner, {}, { "default": ($$result4) => renderTemplate`${slides.map((slide) => renderTemplate`${renderComponent($$result4, "Carousel.Item", Carousel.Item, { "active": slide.active, "class": "py-5 mb-5" }, { "default": ($$result5) => renderTemplate` ${maybeRenderHead()}<div class="container testimonials"> <div class="row"> <div class="col-12 col-md-6 col1"> <div class="d-block uppercase d-inline"> <span class="dinline"> ${renderComponent($$result5, "Trans", $$Utils, { "i18nKey": "pagesHome:carousel-ours" })} </span> <span class="accent3"> ${renderComponent($$result5, "Trans", $$Utils, { "i18nKey": "pagesHome:carousel-clients" })}</span> <br> <span class="rayita_azul"> ${renderComponent($$result5, "Trans", $$Utils, { "i18nKey": "pagesHome:carousel-think" })} </span> </div> <div class="my-4"> ${renderComponent($$result5, "HeadingComponent", $$Heading, { "level": 3 }, { "default": ($$result6) => renderTemplate`${slide.heading}` })} <div class="autor"> <blockquote class="quote"> ${renderComponent($$result5, "Fragment", Fragment, {}, { "default": ($$result6) => renderTemplate`${unescapeHTML(`\u201C${slide.quote?.[lang]}\u201D`)}` })} </blockquote> <strong class="name"> ${renderComponent($$result5, "Fragment", Fragment, {}, { "default": ($$result6) => renderTemplate`${unescapeHTML(slide.author)}` })} </strong> <span class="position"> ${renderComponent($$result5, "Fragment", Fragment, {}, { "default": ($$result6) => renderTemplate`${unescapeHTML(slide.position)}` })} </span> </div> </div> </div> <div class="col-12 col-md-6 col2 d-flex justify-content-center"> ${renderComponent($$result5, "ImageAssetsComponent", $$ImageAssets, { "src": slide.image, "className": "w-100 carousel-testimonials cover", "alt": slide.heading, "width": 636, "height": 420 })} ${slide?.path && renderTemplate`<a${addAttribute(getAbsoluteLocaleUrl(lang, slide.path), "href")} class="btn btn-outline btn-more"> ${renderComponent($$result5, "Trans", $$Utils, { "i18nKey": "pagesHome:carousel-btn" })} </a>`} ${slide?.link && renderTemplate`<a${addAttribute(slide.link, "href")} target="_blank" class="btn btn-outline btn-more" rel="opener noreferrer follow" title="opens in a new window"> ${slide.anchor} </a>`} </div> </div> </div> ` })}`)}` })} ${renderComponent($$result3, "Carousel.Controls", Carousel.Controls, { "id": id })} ` })} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_home/sections/SectionCarousell.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Us = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Us;
  const {
    lang
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "UsComponent", $$Us$1, { "className": "banner-aboutus" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a${addAttribute(getAbsoluteLocaleUrl(lang, "aboutus"), "href")} class="btn btn-accent uppercase text-light"${addAttribute(t(lang, "pagesHome:us-btn-team"), "aria-label")}> ${renderComponent($$result2, "Trans", $$Utils, { "i18nKey": "pagesHome:us-btn-team" })} </a> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_home/sections/Us.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    classCard,
    href,
    label
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card ${classCard}`, "class")}> <a${addAttribute(href, "href")}${addAttribute(label, "aria-label")}> ${renderSlot($$result, $$slots["image"])} <div class="card-body"> ${renderSlot($$result, $$slots["title"])} ${renderSlot($$result, $$slots["text"])} </div> </a></div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$PortfolioCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioCard;
  const {
    lang,
    card,
    index
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-12 col-md-6 col-lg-3 portfolio-item" data-aos="flip-right"${addAttribute(200 + index * 100, "data-aos-delay")} data-aos-offset="60" data-aos-once="true"> ${renderComponent($$result, "CardComponent", $$Card, { "classCard": "border-none", "href": getAbsoluteLocaleUrl(lang, card.path), "aria-label": `${card.title} ${card.text?.[lang]}` }, { "image": ($$result2) => renderTemplate`${renderComponent($$result2, "ImageAssets", $$ImageAssets, { "slot": "image", "className": "card-img", "src": card.image, "alt": `${card.title} ${card.text?.[lang]}`, "width": 544, "height": 460 })}`, "text": ($$result2) => renderTemplate`${renderComponent($$result2, "ParagraphComponent", $$Paragraph, { "slot": "text", "className": "card-text" }, { "default": ($$result3) => renderTemplate`${card.text?.[lang]}` })}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "HeadingComponent", $$Heading, { "slot": "title", "level": 3, "className": "card-title h5" }, { "default": ($$result3) => renderTemplate`${card.title}` })}` })} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/PortfolioCard.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Portfolios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Portfolios;
  const {
    lang,
    cards
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "className": "portfolios-home p-5 my-5" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 2, "className": "w-100 d-flex justify-content-center underlinefh p-5 rayita_azul titulo_proyectos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesHome:portfolio-heading" })} ` })} <div class="row my-4"> ${cards.map((item, index) => renderTemplate`${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "lang": lang, "card": item, "index": index })}`)} </div> <div class="col-12 w-100 d-flex justify-content-center"> <a${addAttribute(getAbsoluteLocaleUrl(lang, "projects"), "href")} class="btn btn-warning"${addAttribute(t(lang, "pagesHome:portfolio-btn-more"), "aria-label")}> ${renderComponent($$result2, "Trans", $$Utils, { "i18nKey": "pagesHome:portfolio-btn-more" })} </a> </div> </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_home/sections/Portfolios.astro", void 0);

const tagsDo = [
	"design",
	"development",
	"uiux",
	"accessibility"
];
const tagsTech = [
	"react",
	"php",
	"javascript",
	"typescript",
	"node",
	"laravel",
	"vue",
	"scss",
	"html",
	"css"
];
const WhatWeDoContent = {
	tagsDo: tagsDo,
	tagsTech: tagsTech
};

const CarouselsContent = [
	{
		heading: "DELFOS",
		path: "/projects/delfos",
		quote: {
			es: "Trabajar con PRO es una muy buena experiencia, tanto por su dedicación como por su profesionalismo. Son un equipo muy eficaz y profesional. Fue muy grato colaborar con ellos en este proyecto.",
			en: "Working with PRO is a very good experience, both for their dedication and their professionalism. They are a very efficient and professional team. It was very pleasant to collaborate with them on this project."
		},
		author: "– Ari Chamlian",
		position: "CEO Delfos",
		image: "testimonials/delfos.webp"
	},
	{
		heading: "ASTROSELLING",
		quote: {
			es: "Nuestra experiencia ha sido excepcional. Su enfoque colaborativo y profesionalismo han hecho que el proceso sea fluido y eficiente. Han demostrado una comunicación clara y constante, manteniéndonos informados en cada etapa del proyecto. Recomiendo ampilamente su servicio.",
			en: "Our experience has been exceptional. Their collaborative approach and professionalism have made the process smooth and efficient. They have demonstrated clear and constant communication, keeping us informed at every stage of the project. I highly recommend your service."
		},
		author: "– Adrián Stagno",
		position: "COO Astroselling",
		image: "testimonials/astroselling.webp"
	},
	{
		heading: "HEPIC!",
		quote: {
			es: "Pro desarrolló la web de HEPIC y también trabajamos en conjunto varios proyectos y siempre la experiencia fue muy positiva, muy buena disposición para los requerimientos y lograr que las webs se adapten a cada necesidad.",
			en: "Pro developed the HEPIC website and we also worked together on several projects and the experience was always very positive, very good willingness to meet the requirements and ensure that the websites adapt to each need."
		},
		author: "– Raquel Oberlander",
		position: "CEO y Co-founder HEPIC",
		image: "testimonials/hepic.webp"
	},
	{
		heading: "THINKUP",
		link: "https://thinkupsoft.com/fintech-app-development",
		anchor: "ThinkUp",
		quote: {
			es: "He tenido el privilegio de colaborar estrechamente con PRO en varios proyectos web innovadores. Nuestra asociación ha sido fundamental para impulsar la transformación digital y alcanzar nuevos niveles de éxito en el mercado digital.",
			en: "I have had the privilege of working closely with PRO on several innovative web projects. Our partnership has been instrumental in driving digital transformation and achieving new levels of success in the digital marketplace."
		},
		author: "– Mauro Tarocco",
		position: "CEO y Co-founder ThinkUp - <a href='https://thinkupsoft.com/fintech-app-development' title='Fintech App Development Company' target='_blank' rel='opener noreferrer follow' >Fintech App Development Company</a>",
		image: "testimonials/thinkup.webp"
	}
];

const CardsContent = [
	{
		title: "Directa24",
		path: "/projects/d24",
		image: "portfolios/d24/card.webp",
		text: {
			es: "Sitio web corporativo",
			en: "Corporative website"
		}
	},
	{
		title: "Banco Hipotecario del Uruguay",
		path: "/projects/bhu",
		image: "portfolios/bhu/card.webp",
		text: {
			es: "Portal del Estado",
			en: "State portal"
		}
	},
	{
		title: "CCEAU",
		path: "/projects/cceau",
		image: "portfolios/cceau/card.webp",
		text: {
			es: "Sitio web corporativo",
			en: "Corporative website"
		}
	},
	{
		title: "Delfos Website",
		path: "/projects/delfos",
		image: "portfolios/delfos/card.webp",
		text: {
			es: "Sitio web corporativo",
			en: "Corporative website"
		}
	}
];

const $$Astro = createAstro("http://localhost:4321");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$2;
  const lang = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$Hero, { "lang": lang })} ${renderComponent($$result2, "ParallaxSection", $$SectionParallax, { "lang": lang })} ${renderComponent($$result2, "WhatWeDoSection", $$SectionWhatWeDo, { "tags": WhatWeDoContent })} ${renderComponent($$result2, "CarousellSection", $$SectionCarousell, { "lang": lang, "slides": CarouselsContent })} ${renderComponent($$result2, "UsSection", $$Us, { "lang": lang })} ${renderComponent($$result2, "PortfoliosSection", $$Portfolios, { "lang": lang, "cards": CardsContent })} ${renderComponent($$result2, "BottonComponent", $$Botton, { "lang": lang })} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_home/index.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Index$2, {})}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/en/index.astro", void 0);

const $$file$1 = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/en/index.astro";
const $$url$1 = "/en/";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Index$2, {})}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/index.astro", void 0);

const $$file = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Botton as $, index as a, index$1 as i };
