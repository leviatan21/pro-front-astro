/* empty css                            */
import { f as createComponent, r as renderTemplate, h as renderComponent, g as createAstro, m as maybeRenderHead, i as addAttribute } from '../astro_JGZcW2el.mjs';
import 'kleur/colors';
import { g as getAbsoluteLocaleUrl, c as $$ImageAssets, a as $$Heading, $ as $$Utils, b as $$Section, d as $$Layout } from './404_ZaZTsUc1.mjs';
import { a as $$Hero$1 } from './aboutus_fgqeY9Zx.mjs';
import { $ as $$TagGroup, P as PortfoliosContent } from './_project__C72TrzP9.mjs';
import { $ as $$Botton } from './index_CeApVWCP.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HeroComponent", $$Hero$1, { "className": "top internal projects", "title": "pagesProjects:hero-title", "heading1": "pagesProjects:hero-heading1", "heading2": "pagesProjects:hero-heading2", "paragraph": "pagesProjects:hero-paragraph" })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_projects/sections/Hero.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const {
    lang = "",
    portfolio = {}
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row my-5 py-5" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-offset="10" data-aos-once="true"> <div class="col-12 col-md-6 "> <div class="my-4"> ${renderComponent($$result, "HeadingComponent", $$Heading, { "level": 3 }, { "default": ($$result2) => renderTemplate`${portfolio.name}` })} ${renderComponent($$result, "TagGroupComponent", $$TagGroup, { "tags": portfolio.tags })} <a${addAttribute(getAbsoluteLocaleUrl(lang, portfolio.path), "href")} class="btn btn-warning"> ${renderComponent($$result, "Trans", $$Utils, { "i18nKey": "pagesProjects:portfolio-btn-view" })} </a> </div> </div> <div class="col-12 col-md-6 d-flex justify-content-center col2"> ${renderComponent($$result, "ImageAssetsComponent", $$ImageAssets, { "className": "w-100 h-auto rounded", "src": portfolio.image, "alt": portfolio.name, "width": "366", "height": "300" })} </div> </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_projects/sections/Portfolio.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Portfolios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Portfolios;
  const {
    lang = "",
    portfolios = []
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "className": "project_mobile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container project py-5 "> ${portfolios.map((item) => renderTemplate`${renderComponent($$result2, "PortfolioSection", $$Portfolio, { "lang": lang, "portfolio": item })}`)} </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_projects/sections/Portfolios.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$Hero, {})} ${renderComponent($$result2, "PortfoliosSection", $$Portfolios, { "lang": lang, "portfolios": PortfoliosContent })} ${renderComponent($$result2, "BottonComponent", $$Botton, { "lang": lang })} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_projects/index.astro", void 0);

const $$Projects$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Index, {})}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/en/projects.astro", void 0);

const $$file$1 = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/en/projects.astro";
const $$url$1 = "/en/projects/";

const projects$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Index, {})}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/projects.astro", void 0);

const $$file = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/projects.astro";
const $$url = "/projects/";

const projects = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { projects as a, projects$1 as p };
