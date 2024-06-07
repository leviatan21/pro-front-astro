/* empty css                            */
import { g as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, i as addAttribute, k as renderSlot, F as Fragment, u as unescapeHTML, s as spreadAttributes, j as defineScriptVars } from '../astro_JGZcW2el.mjs';
import 'kleur/colors';
import { $ as $$Utils, a as $$Heading, e as $$Paragraph, b as $$Section, c as $$ImageAssets, f as $$LinkedIn, d as $$Layout } from './404_ZaZTsUc1.mjs';
import { nanoid } from 'nanoid';
import { clsx } from 'clsx';
import { titleCase } from 'title-case';
import { marked } from 'marked';

const $$Astro$Y = createAstro("http://localhost:4321");
const $$Hero$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Y, $$props, $$slots);
  Astro2.self = $$Hero$1;
  const {
    className,
    title,
    heading1,
    heading2Like1,
    heading2,
    heading3Like2,
    paragraph
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "className": `${className} d-flex align-items-center` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="row d-flex align-items-center"> <div class="col-12 col-md-6"> ${title && renderTemplate`<span class="color-lila"> <strong> ${renderComponent($$result2, "Trans", $$Utils, { "i18nKey": title })} </strong> </span>`} ${heading1 && renderTemplate`${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 1, "className": "underlineLeftOrange" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": heading1 })} ` })}`} ${heading2Like1 && renderTemplate`${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 2, "className": "h1 underlineLeftOrange" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": heading2Like1 })} ` })}`} ${heading2 && renderTemplate`${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 2, "className": "subtitle" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": heading2 })} ` })}`} ${heading3Like2 && renderTemplate`${renderComponent($$result2, "HeadingComponent", $$Heading, { "level": 3, "className": "h2 subtitle" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": heading3Like2 })} ` })}`} </div> <div class="col-12 col-md-6"> ${paragraph && renderTemplate`${renderComponent($$result2, "ParagraphComponent", $$Paragraph, { "className": "color-grey" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": paragraph })} ` })}`} </div> </div> </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Hero.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HeroComponent", $$Hero$1, { "className": "top internal us", "title": "pagesAboutus:hero-title", "heading1": "pagesAboutus:hero-heading1", "heading2": "pagesAboutus:hero-heading2", "paragraph": "pagesAboutus:hero-paragraph" })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_aboutus/sections/Hero.astro", void 0);

const $$Astro$X = createAstro("http://localhost:4321");
const $$Us$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$X, $$props, $$slots);
  Astro2.self = $$Us$1;
  const {
    className = "",
    fluid = false
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": `${className} d-flex align-items-end`, "data-aos": "zoom-in", "data-aos-offset": "60", "data-aos-once": "true" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`container${fluid ? "-fluid" : ""}`, "class")}> <div class="row"> <div class="col d-flex justify-content-center align-self-end"> ${renderComponent($$result2, "Heading", $$Heading, { "level": 2, "className": "d-none" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "pagesHome:us-btn-team" })} ` })} ${renderSlot($$result2, $$slots["default"])} </div> </div> </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Us.astro", void 0);

const $$Us = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "UsComponent", $$Us$1, { "className": "us-internal", "fluid": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ImageAssetsComponent", $$ImageAssets, { "src": "us-internal-background.webp", "className": "w-100 h-auto", "alt": "us-background", "width": "390", "height": "132" })} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_aboutus/sections/Us.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HeroComponent", $$Hero$1, { "className": "team my-5 py-5", "heading2Like1": "pagesAboutus:team-heading1", "heading3Like2": "pagesAboutus:team-heading2", "paragraph": "pagesAboutus:team-paragraph" })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_aboutus/sections/Team.astro", void 0);

const $$Astro$W = createAstro("http://localhost:4321");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$W, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    flush,
    class: className,
    data = [],
    id: userId,
    alwaysOpen,
    headerClass,
    itemClass,
    bodyClass
  } = Astro2.props;
  const id = userId || `accordion-${nanoid(8)}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["accordion", className, { "accordion-flush": flush }], "class:list")}${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${data && data.map((item, index) => renderTemplate`${renderComponent($$result, "Accordion.Item", Accordion.Item, { "class": itemClass }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Accordion.Header", Accordion.Header, { "parent": id, "index": index, "class": headerClass, "show": item.show }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.header)}` })} ` })} ${renderComponent($$result2, "Accordion.Body", Accordion.Body, { "parent": id, "index": index, "class": bodyClass, "show": item.show, "alwaysOpen": alwaysOpen }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.body)}` })} ` })} ` })}`)} `)} </div> `;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Accordion.astro", void 0);

const $$Astro$V = createAstro("http://localhost:4321");
const $$AccordionBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$V, $$props, $$slots);
  Astro2.self = $$AccordionBody;
  const {
    parent: id,
    index: i,
    show,
    alwaysOpen = false,
    class: className,
    text
  } = Astro2.props;
  const dataBsParent = alwaysOpen ? null : `#${id}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${id}-collapse-${i}`, "id")}${addAttribute(["accordion-collapse", "collapse", { show }], "class:list")}${addAttribute(`${id}-heading-${i}`, "aria-labelledby")}${addAttribute(dataBsParent, "data-bs-parent")}> <div${addAttribute(["accordion-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </div> </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/AccordionBody.astro", void 0);

const $$Astro$U = createAstro("http://localhost:4321");
const $$AccordionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$AccordionHeader;
  const { parent: id, class: className, index: i, show, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(["accordion-header", className], "class:list")}${addAttribute(`${id}-heading-${i}`, "id")}> <button class="accordion-button" type="button" data-bs-toggle="collapse"${addAttribute(`#${id}-collapse-${i}`, "data-bs-target")}${addAttribute(show, "aria-expanded")}${addAttribute(`${id}-collapse-${i}`, "aria-controls")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </button> </h2>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/AccordionHeader.astro", void 0);

const $$Astro$T = createAstro("http://localhost:4321");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["accordion-item", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/AccordionItem.astro", void 0);

const Accordion = Object.assign($$Accordion, { Body: $$AccordionBody, Header: $$AccordionHeader, Item: $$AccordionItem });

const $$Astro$S = createAstro("http://localhost:4321");
const $$Alert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$Alert;
  const { variant, class: className, dismissable } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "alert",
    `alert-${variant}`,
    className,
    { "alert-dismissible": dismissable }
  ], "class:list")} role="alert"> <div>${renderSlot($$result, $$slots["default"])}</div> ${dismissable && renderTemplate`<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`} </div> `;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Alert.astro", void 0);

const $$Astro$R = createAstro("http://localhost:4321");
const $$AlertHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$AlertHeading;
  const { text, h = 4, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["alert-heading", `h-${h}`, className], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/AlertHeading.astro", void 0);

const $$Astro$Q = createAstro("http://localhost:4321");
const $$AlertLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$AlertLink;
  const { href, text, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["alert-link", className], "class:list")}>${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)}</a>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/AlertLink.astro", void 0);

Object.assign($$Alert, { Heading: $$AlertHeading, Link: $$AlertLink });

const items = (path) => {
  const slugs = path.split("/").filter((x) => x);
  let currentPath = "";
  const parts = [
    {
      text: "Home",
      href: path !== "/" ? "/" : void 0
    }
  ];
  slugs.forEach((slug) => {
    const text = slug.replace(/[-_]/g, " ");
    currentPath = `${currentPath}/${slug}`;
    const href = currentPath;
    parts.push({
      text: titleCase(text),
      href
    });
  });
  return parts;
};

const $$Astro$P = createAstro("http://localhost:4321");
const $$VanishLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$VanishLink;
  const { href, class: className, text, ...props } = Astro2.props;
  let Tag = "";
  if (href) {
    Tag = "a";
  } else {
    Tag = "span";
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class": className, ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)}` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/utils/VanishLink.astro", void 0);

const $$Astro$O = createAstro("http://localhost:4321");
const $$BreadcrumbItemIterate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$BreadcrumbItemIterate;
  const { class: className } = Astro2.props;
  const path = Astro2.url.pathname;
  const parts = items(path);
  return renderTemplate`${parts.map(({ text, href }) => {
    const active = path === href;
    const link = active ? void 0 : href;
    return renderTemplate`${renderComponent($$result, "Breadcrumb.Item", Breadcrumb.Item, { "class": className, "active": active }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "VanishLink", $$VanishLink, { "href": link, "class": className }, { "default": ($$result3) => renderTemplate`${text}` })}` })}`;
  })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/BreadcrumbItemIterate.astro", void 0);

const $$Astro$N = createAstro("http://localhost:4321");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const {
    id,
    class: className,
    itemClass,
    "aria-label": ariaLabel = "Breadcrumb"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${addAttribute(id, "id")}> <ol class="breadcrumb"${addAttribute(className, "class")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${renderComponent($$result, "BreadcrumbItemIterate", $$BreadcrumbItemIterate, { "class": itemClass })} `)} </ol> </nav>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Breadcrumb.astro", void 0);

const $$Astro$M = createAstro("http://localhost:4321");
const $$BreadcrumbItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$BreadcrumbItem;
  const { class: className, active } = Astro2.props;
  const ariaCurrent = active ? "page" : void 0;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["breadcrumb-item", className, { active }], "class:list")}${addAttribute(ariaCurrent, "aria-current")}> ${renderSlot($$result, $$slots["default"])} </li>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/BreadcrumbItem.astro", void 0);

const Breadcrumb = Object.assign($$Breadcrumb, { Item: $$BreadcrumbItem });

const $$Astro$L = createAstro("http://localhost:4321");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    class: className,
    dropdown = false,
    variant,
    text,
    size,
    modalClose = false
  } = Astro2.props;
  let props = {};
  if (dropdown) {
    props = { "data-bs-toggle": "dropdown", "aria-expanded": "false" };
  } else if (modalClose) {
    props = { "data-bs-dismiss": "modal" };
  }
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([
    "btn",
    `btn-${variant}`,
    className,
    {
      "dropdown-toggle": dropdown,
      "btn-sm": size === "sm",
      "btn-lg": size === "lg"
    }
  ], "class:list")} type="button"${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </button>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Button.astro", void 0);

const $$Astro$K = createAstro("http://localhost:4321");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { id, class: className, dark, fade } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([
    "carousel",
    "slide",
    className,
    { "carousel-dark": dark, "carousel-fade": fade }
  ], "class:list")} data-bs-ride="carousel"> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Carousel.astro", void 0);

const $$Astro$J = createAstro("http://localhost:4321");
const $$CarouselControl = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$CarouselControl;
  const { class: className, id, direction } = Astro2.props;
  const text = direction == "prev" ? "Previous" : "Next";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([className, `carousel-control-${direction}`], "class:list")} type="button"${addAttribute(`#${id}`, "data-bs-target")}${addAttribute(direction, "data-bs-slide")}> <span${addAttribute(`carousel-control-${direction}-icon`, "class")} aria-hidden="true"></span> <span class="visually-hidden">${text}</span> </button>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/CarouselControl.astro", void 0);

const $$Astro$I = createAstro("http://localhost:4321");
const $$CarouselControls = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$CarouselControls;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CarouselControl", $$CarouselControl, { "id": id, "direction": "prev", "class": className })} ${renderComponent($$result, "CarouselControl", $$CarouselControl, { "id": id, "direction": "next", "class": className })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/CarouselControls.astro", void 0);

const $$Astro$H = createAstro("http://localhost:4321");
const $$CarouselIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$CarouselIndicator;
  const {
    class: className,
    id,
    index,
    active,
    "aria-current": ariaCurrent,
    "aria-label": ariaLabel
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`#${id}`, "data-bs-target")}${addAttribute(index, "data-bs-slide-to")}${addAttribute([className, { active }], "class:list")}${addAttribute(ariaCurrent, "aria-current")}${addAttribute(ariaLabel, "aria-label")}></button>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/CarouselIndicator.astro", void 0);

const $$Astro$G = createAstro("http://localhost:4321");
const $$CarouselIndicators = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$CarouselIndicators;
  const { slides, class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel-indicators"> ${slides.map((slide, index) => {
    const ariaCurrent = slide.active ? "page" : void 0;
    return renderTemplate`${renderComponent($$result, "Carousel.Indicator", Carousel.Indicator, { "id": id, "index": index, "class": className, "aria-current": ariaCurrent, "aria-label": slide.alt, "active": slide.active })}`;
  })} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/CarouselIndicators.astro", void 0);

const $$Astro$F = createAstro("http://localhost:4321");
const $$CarouselInner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$CarouselInner;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["carousel-inner", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/CarouselInner.astro", void 0);

const $$Astro$E = createAstro("http://localhost:4321");
const $$CarouselItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$CarouselItem;
  const { class: className, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["carousel-item", className, { active }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/CarouselItem.astro", void 0);

const Carousel = Object.assign($$Carousel, {
  Controls: $$CarouselControls,
  Control: $$CarouselControl,
  Indicator: $$CarouselIndicator,
  Indicators: $$CarouselIndicators,
  Inner: $$CarouselInner,
  Item: $$CarouselItem
});

const $$Astro$D = createAstro("http://localhost:4321");
const $$DropdownDivider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$DropdownDivider;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<hr${addAttribute(["dropdown-divider", className], "class:list")}>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/DropdownDivider.astro", void 0);

const $$Astro$C = createAstro("http://localhost:4321");
const $$ActiveLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$ActiveLink;
  const {
    href,
    class: className,
    disabled = false,
    activeClass = "active",
    disabledClass = "disabled",
    text,
    parent,
    ...props
  } = Astro2.props;
  let active = href === Astro2.url.pathname;
  const ariaCurrent = active ? "page" : void 0;
  const activeClassStr = active ? `${activeClass}` : void 0;
  const disabledClassStr = disabled ? disabledClass : void 0;
  const classCompiled = clsx([activeClassStr, disabledClassStr, className]);
  if (parent) {
    if (Astro2.url.pathname.includes(href)) {
      active = true;
    }
  }
  return renderTemplate`${renderComponent($$result, "VanishLink", $$VanishLink, { "href": disabled ? void 0 : href, "class": classCompiled, "aria-current": ariaCurrent, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/utils/ActiveLink.astro", void 0);

const $$Astro$B = createAstro("http://localhost:4321");
const $$DropdownItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$DropdownItem;
  const { href, text, class: className, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": ["dropdown-item", className], ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/DropdownItem.astro", void 0);

const $$Astro$A = createAstro("http://localhost:4321");
const $$DropdownHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$DropdownHeader;
  const { text, class: className, nav = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(["dropdown-toggle", className, { "nav-link": nav }], "class:list")} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </a>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/DropdownHeader.astro", void 0);

const $$Astro$z = createAstro("http://localhost:4321");
const $$DropdownMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$DropdownMenu;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["dropdown-menu", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/DropdownMenu.astro", void 0);

const $$Astro$y = createAstro("http://localhost:4321");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, nav = false } = Astro2.props;
  const Tag = nav ? "li" : "div";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["dropdown", className, { "nav-item": nav }] }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Dropdown.astro", void 0);

const Dropdown = Object.assign($$Dropdown, { Divider: $$DropdownDivider, Item: $$DropdownItem, Header: $$DropdownHeader, Menu: $$DropdownMenu });

const $$Astro$x = createAstro("http://localhost:4321");
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id, class: className, fade } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal", className, { fade }], "class:list")}${addAttribute(id, "id")} tabindex="-1"${addAttribute(`${id}-label`, "aria-labelledby")} aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Modal.astro", void 0);

const $$Astro$w = createAstro("http://localhost:4321");
const $$ModalBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$ModalBody;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/ModalBody.astro", void 0);

const $$Astro$v = createAstro("http://localhost:4321");
const $$ModalClose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$ModalClose;
  const { class: className, variant, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(["btn", `btn-${variant}`, className], "class:list")} data-bs-dismiss="modal"> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </button>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/ModalClose.astro", void 0);

const $$Astro$u = createAstro("http://localhost:4321");
const $$ModalFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ModalFooter;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-footer", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/ModalFooter.astro", void 0);

const $$Astro$t = createAstro("http://localhost:4321");
const $$ModalHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$ModalHeader;
  const { parent: id, h = 5, class: className } = Astro2.props;
  const Heading = `h${h}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-header", className], "class:list")}> ${renderComponent($$result, "Heading", Heading, { "class": "modal-title", "id": `${id}-label` }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/ModalHeader.astro", void 0);

const Modal = Object.assign($$Modal, { Body: $$ModalBody, Close: $$ModalClose, Footer: $$ModalFooter, Header: $$ModalHeader });

const $$Astro$s = createAstro("http://localhost:4321");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Nav;
  const { class: className, tabs, pills, justified, fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["nav", className, { "nav-tabs": tabs, "nav-pills": pills, "nav-justified": justified, "nav-fill": fill }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Nav.astro", void 0);

const $$Astro$r = createAstro("http://localhost:4321");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className, disabled, text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": ["nav-link", className], "disabled": disabled }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/NavLink.astro", void 0);

const $$Astro$q = createAstro("http://localhost:4321");
const $$NavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$NavItem;
  const { class: className, href, disabled, text, linkClass, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["nav-item", className], "class:list")}> ${renderComponent($$result, "Nav.Link", Nav.Link, { "class": linkClass, "disabled": disabled, "href": href, ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)}` })} </li>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/NavItem.astro", void 0);

const Nav = Object.assign($$Nav, { Link: $$NavLink, Item: $$NavItem });

const $$Astro$p = createAstro("http://localhost:4321");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["navbar", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Navbar.astro", void 0);

const $$Astro$o = createAstro("http://localhost:4321");
const $$NavbarCollapse = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$NavbarCollapse;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="collapse navbar-collapse"${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/NavbarCollapse.astro", void 0);

const $$Astro$n = createAstro("http://localhost:4321");
const $$NavbarItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$NavbarItems;
  const { items, class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Navbar.Nav", Navbar.Nav, { "class": className }, { "default": ($$result2) => renderTemplate`${items.map(
    (item) => item.subItems ? renderTemplate`${renderComponent($$result2, "Dropdown", Dropdown, { "nav": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Dropdown.Header", Dropdown.Header, { "nav": true }, { "default": ($$result4) => renderTemplate`${item.text}` })} ${renderComponent($$result3, "Dropdown.Menu", Dropdown.Menu, {}, { "default": ($$result4) => renderTemplate`${item.subItems.map(
      (subItem) => subItem.divider ? renderTemplate`${renderComponent($$result4, "Dropdown.Divider", Dropdown.Divider, {})}` : renderTemplate`${renderComponent($$result4, "Dropdown.Item", Dropdown.Item, { ...subItem })}`
    )}` })} ` })}` : renderTemplate`${renderComponent($$result2, "Nav.Item", Nav.Item, { ...item })}`
  )}` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/NavbarItems.astro", void 0);

const $$Astro$m = createAstro("http://localhost:4321");
const $$NavbarNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$NavbarNav;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["navbar-nav", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/NavbarNav.astro", void 0);

const $$Astro$l = createAstro("http://localhost:4321");
const $$NavbarToggler = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$NavbarToggler;
  const { controls } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="navbar-toggler" type="button" data-bs-toggle="collapse"${addAttribute(`#${controls}`, "data-bs-target")}${addAttribute(controls, "aria-controls")} aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/NavbarToggler.astro", void 0);

const Navbar = Object.assign($$Navbar, {
  Collapse: $$NavbarCollapse,
  Nav: $$NavbarNav,
  Items: $$NavbarItems,
  Toggler: $$NavbarToggler
});

const getRange = (start, end) => {
  return Array(end - start + 1).fill(void 0).map((v, i) => i + start);
};
const createPageNumbers = (currentPage, pageCount) => {
  let delta;
  if (pageCount <= 7) {
    delta = 7;
  } else {
    delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
  }
  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2)
  };
  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1;
    range.end += 1;
  }
  let pages = currentPage > delta ? getRange(
    Math.min(range.start, pageCount - delta),
    Math.min(range.end, pageCount)
  ) : getRange(1, Math.min(pageCount, delta + 1));
  const withDots = (value, pair) => pages.length + 1 !== pageCount ? pair : [value];
  if (pages[0] !== 1) {
    pages = withDots(1, [1, "..."]).concat(pages);
  }
  if (pages[pages.length - 1] < pageCount) {
    pages = pages.concat(withDots(pageCount, ["...", pageCount]));
  }
  return pages;
};
const createComponentData = (page, pathname) => {
  const { currentPage, lastPage, url } = page;
  const { prev, next } = url;
  const pageNums = createPageNumbers(currentPage, lastPage);
  let baseURL = pathname.replace(/\d+$/, "");
  baseURL = baseURL.replace(/\/$/, "");
  const pages = [
    {
      disabled: prev == null,
      href: prev,
      page: "Previous"
    }
  ];
  pageNums.forEach((page2) => {
    pages.push({
      disabled: false,
      href: page2 === "..." ? void 0 : page2 === 1 ? `${baseURL}` : `${baseURL}/${page2}`,
      page: page2.toString()
    });
  });
  pages.push({
    disabled: next == null,
    href: next,
    page: "Next"
  });
  return pages;
};

const $$Astro$k = createAstro("http://localhost:4321");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    page,
    "aria-label": ariaLabel = "Page pagination control",
    class: className,
    itemClass,
    linkClass,
    size
  } = Astro2.props;
  const { pathname } = Astro2.url;
  const pages = createComponentData(page, pathname);
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}> <ul${addAttribute([
    "pagination",
    className,
    { "pagination-sm": size === "sm", "pagination-lg": size === "lg" }
  ], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${pages && pages.map(({ href, disabled, page: page2 }) => renderTemplate`${renderComponent($$result, "Pagination.Item", Pagination.Item, { "class": itemClass, "disabled": disabled }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pagination.Link", Pagination.Link, { "href": href, "class": linkClass }, { "default": ($$result3) => renderTemplate`${page2}` })} ` })}`)} `)} </ul> </nav>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Pagination.astro", void 0);

const $$Astro$j = createAstro("http://localhost:4321");
const $$PaginationItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$PaginationItem;
  const { disabled = false, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["page-item", className, { disabled }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </li>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/PaginationItem.astro", void 0);

const $$Astro$i = createAstro("http://localhost:4321");
const $$PaginationLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$PaginationLink;
  const { href, class: className = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": `page-link ${className}` }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} <!-- class:list={['page-link', className]} -->`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/PaginationLink.astro", void 0);

const Pagination = Object.assign($$Pagination, { Item: $$PaginationItem, Link: $$PaginationLink });

const $$Astro$h = createAstro("http://localhost:4321");
const $$TabList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$TabList;
  const { id, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["nav nav-tabs", className], "class:list")}${addAttribute(`${id}-tabs`, "id")} role="tablist"> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/TabList.astro", void 0);

const $$Astro$g = createAstro("http://localhost:4321");
const $$TabItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TabItem;
  const {
    index,
    active = false,
    id,
    class: className,
    linkClass
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["nav-item", className], "class:list")} role="presentation"> <button${addAttribute(["nav-link", linkClass, { active }], "class:list")}${addAttribute(`${id}-tab-${index}`, "id")} data-bs-toggle="tab"${addAttribute(`#${id}-tab-pane-${index}`, "data-bs-target")} type="button" role="tab"${addAttribute(`${id}-tab-pane-${index}`, "aria-controls")}${addAttribute(index === 0, "aria-selected")}> ${renderSlot($$result, $$slots["default"])} </button> </li>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/TabItem.astro", void 0);

const $$Astro$f = createAstro("http://localhost:4321");
const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { class: className = "", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tab-content", className], "class:list")}${addAttribute(`${id}-tab-content`, "id")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/TabContent.astro", void 0);

const $$Astro$e = createAstro("http://localhost:4321");
const $$TabPane = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$TabPane;
  const {
    index,
    class: className,
    active = false,
    fade = false,
    id
  } = Astro2.props;
  const show = fade && active;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tab-pane", className, { fade, show, active }], "class:list")}${addAttribute(`${id}-tab-pane-${index}`, "id")} role="tabpanel"${addAttribute(`${id}-tab-${index}`, "aria-labelledby")} tabindex="0"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/TabPane.astro", void 0);

const Tab = Object.assign({ List: $$TabList, Item: $$TabItem, Content: $$TabContent, Pane: $$TabPane });

const $$Astro$d = createAstro("http://localhost:4321");
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Tabs;
  const {
    tabs,
    id: userId,
    listClass,
    itemClass,
    linkClass,
    contentClass,
    paneClass,
    fade = false
  } = Astro2.props;
  const id = userId || `tabs-${nanoid(8)}`;
  return renderTemplate`${renderComponent($$result, "Tab.List", Tab.List, { "id": id, "class": listClass }, { "default": ($$result2) => renderTemplate`${tabs && tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "Tab.Item", Tab.Item, { "index": index, "id": id, "active": tab.active, "class": itemClass, "linkClass": linkClass }, { "default": ($$result3) => renderTemplate`${tab.title}` })}`)}` })} ${renderComponent($$result, "Tab.Content", Tab.Content, { "class": contentClass, "id": id }, { "default": ($$result2) => renderTemplate`${tabs && tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "Tab.Pane", Tab.Pane, { "index": index, "fade": fade, "id": id, "active": tab.active, "class": paneClass }, { "default": ($$result3) => renderTemplate`${tab.body}` })}`)}` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Tabs.astro", void 0);

const $$Astro$c = createAstro("http://localhost:4321");
const $$Toast = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Toast;
  const { id, class: className, animation = true, autohide = true, delay = 5e3 } = Astro2.props;
  const config = { delay, animation, autohide };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(["toast", className], "class:list")} role="alert" aria-live="assertive" aria-atomic="true"${addAttribute(JSON.stringify(config), "data-bs-config")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Toast.astro", void 0);

const $$Astro$b = createAstro("http://localhost:4321");
const $$ToastBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ToastBody;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/ToastBody.astro", void 0);

const $$Astro$a = createAstro("http://localhost:4321");
const $$ToastClose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ToastClose;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(["btn-close", className], "class:list")} data-bs-dismiss="toast" aria-label="Close"></button>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/ToastClose.astro", void 0);

const $$Astro$9 = createAstro("http://localhost:4321");
const $$ToastContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ToastContainer;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-container", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/ToastContainer.astro", void 0);

const $$Astro$8 = createAstro("http://localhost:4321");
const $$ToastHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ToastHeader;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-header", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/ToastHeader.astro", void 0);

Object.assign($$Toast, { Body: $$ToastBody, Close: $$ToastClose, Container: $$ToastContainer, Header: $$ToastHeader });

const $$Astro$7 = createAstro("http://localhost:4321");
const $$Tooltip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Tooltip;
  const {
    title,
    placement,
    animation,
    delay,
    html,
    trigger,
    customClass
  } = Astro2.props;
  const config = { title, placement, animation, delay, html, trigger, customClass };
  return renderTemplate`${renderComponent($$result, "tooltip-wrapper", "tooltip-wrapper", {}, { "default": () => renderTemplate` ${maybeRenderHead()}<span data-bs-toggle="tooltip"${addAttribute(JSON.stringify(config), "data-bs-config")}> ${renderSlot($$result, $$slots["default"])} </span> ` })} `;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/components/Tooltip.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:4321");
const $$Marked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Marked;
  const { inline = false } = Astro2.props;
  const slot = await Astro2.slots.render("default");
  return renderTemplate`${Astro2.slots.has("default") && (inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(marked.parseInline(slot))}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(marked.parse(slot))}` })}`)}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/utils/Marked.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:4321");
const $$InlineCode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$InlineCode;
  const { code } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Marked", $$Marked, { "inline": true }, { "default": ($$result2) => renderTemplate`\`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(code)}` })}\`` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/node_modules/astro-bootstrap/lib/utils/InlineCode.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321");
const $$SkillsItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SkillsItem;
  const {
    level
  } = Astro2.props;
  let list = [];
  for (let i = 1; i <= 10; i++) {
    list.push(i <= level ? "active" : "");
  }
  return renderTemplate`${list.map((active) => renderTemplate`${maybeRenderHead()}<li${addAttribute(active, "class")}></li>`)}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_aboutus/sections/SkillsItem.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$SkillsTeam = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkillsTeam;
  const {
    lang,
    skills = []
  } = Astro2.props;
  return renderTemplate`${skills.map((skill, index) => {
    let { level, ...langs } = skill;
    return renderTemplate`${maybeRenderHead()}<div${addAttribute(`skill-${index + 1}`, "class")}><span>${langs?.[lang]}</span><ul>${renderComponent($$result, "SkillsItem", $$SkillsItem, { "level": level })}</ul></div>`;
  })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_aboutus/sections/SkillsTeam.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("http://localhost:4321");
const $$ModalTeam = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ModalTeam;
  const {
    lang,
    team,
    id
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Modal", Modal, { "id": id, "class": "teamMemberModal teamMembers", "dialog": "modal-lg modal-dialog-centered", "fade": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", " <script>(function(){", "\n  document.getElementById(modalId).addEventListener('show.bs.modal', function (e) {\n    document.querySelector('html').classList.add('modal-open');\n  });\n  document.getElementById(modalId).addEventListener('hide.bs.modal', function (e) {\n    document.querySelector('html').classList.remove('modal-open');\n  });\n})();<\/script>"])), renderComponent($$result2, "Modal.Header", Modal.Header, { "parent": id }), renderComponent($$result2, "Modal.Body", Modal.Body, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container p-0"> <div class="row"> <div class="col-12 col-lg-6 flex-center"> ${renderComponent($$result3, "ImageAssetsComponent", $$ImageAssets, { "className": "w-75", "src": team.image, "alt": team.name, "width": "200", "height": "200" })} ${renderComponent($$result3, "HeadingComponent", $$Heading, { "level": 3, "className": "teamMember" }, { "default": ($$result4) => renderTemplate`${team.name}` })} <div class="text-center"> <span>${team.title?.[lang]}</span> ${team.linkedin && renderTemplate`<div class="socialIconGroup"> <a class="social"${addAttribute(team.linkedin, "href")} target="_blank" rel="opener noreferrer" aria-label="linkedin" title="opens in a new window"> ${renderComponent($$result3, "LinkedInIcon", $$LinkedIn, { "className": "size-8 d-inline-block", "alt": "linkedin" })} </a> </div>`} </div> </div> <div class="col-12 col-lg-6"> ${renderComponent($$result3, "HeadingComponent", $$Heading, { "level": 4, "className": "teamMember" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "pagesAboutus:team-title" })} ` })} <div class="skillsGroup"> ${renderComponent($$result3, "SkillsTeamComponent", $$SkillsTeam, { "lang": lang, "skills": team.skills })} </div> </div> </div> </div> ` }), defineScriptVars({ "modalId": id })) })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_aboutus/sections/ModalTeam.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$TeamMembers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TeamMembers;
  const {
    lang,
    teams
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionComponent", $$Section, { "className": "teamMembers" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="row"> ${teams.map((team, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-center my-5" data-aos="zoom-in"${addAttribute(100 + index * 10, "data-aos-delay")} data-aos-once="true"> <div class="teamMember" data-bs-toggle="modal"${addAttribute(`#modal-team-${index}`, "data-bs-target")} data-target="#team-member-modal"${addAttribute(team.name, "aria-label")}> ${renderComponent($$result3, "ImageAssetsComponent", $$ImageAssets, { "className": "w-75 has-modal", "src": team.image, "alt": team.name, "width": "200", "height": "200" })} ${renderComponent($$result3, "HeadingComponent", $$Heading, { "level": 3, "className": "teamMember" }, { "default": ($$result4) => renderTemplate`${team.name}` })} </div> <span>${team.title?.[lang]}</span> ${team.linkedin && renderTemplate`<div class="socialIconGroup"> <a class="social"${addAttribute(team.linkedin, "href")} target="_blank" rel="opener noreferrer" aria-label="linkedin" title="opens in a new window"> ${renderComponent($$result3, "LinkedInIcon", $$LinkedIn, { "className": "size-8 d-inline-block" })} </a> </div>`} </div> ${renderComponent($$result3, "ModalTeamSection", $$ModalTeam, { "lang": lang, "team": team, "id": `modal-team-${index}` })} ` })}`)} </div> </div> ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_aboutus/sections/TeamMembers.astro", void 0);

const TeamsContent = [
	{
		name: "Paola Arnoni",
		title: {
			es: "Directora",
			en: "Director"
		},
		image: "team_members/paola-arnoni.webp",
		linkedin: "https://www.linkedin.com/in/paola-arnoni",
		skills: [
			{
				level: 10,
				es: "UX",
				en: "UX"
			},
			{
				level: 10,
				es: "UI",
				en: "UI"
			},
			{
				level: 9,
				es: "Accesibilidad",
				en: "Accessibility"
			},
			{
				level: 8,
				es: "Reclutadora de plugins para Figma",
				en: "Plugin recruiter for Figma"
			}
		]
	},
	{
		name: "Mónica Pérez",
		title: {
			es: "Co-directora y gestión de proyectos",
			en: "Co-director and project management"
		},
		image: "team_members/monica-perez.webp",
		linkedin: "https://www.linkedin.com/in/monica-perez-37528028",
		skills: [
			{
				level: 10,
				es: "Gestión de proyectos",
				en: "Project management"
			},
			{
				level: 10,
				es: "Metodologías ágiles",
				en: "Agile methodologies"
			},
			{
				level: 9,
				es: "Desarrollo de equipo",
				en: "Team development"
			},
			{
				level: 8,
				es: "Experta en Excel",
				en: "Excel Expert"
			}
		]
	},
	{
		name: "Ernesto Latierro",
		title: {
			es: "Coordinador",
			en: "Coordinator"
		},
		image: "team_members/ernesto-latierro.webp",
		linkedin: "https://www.linkedin.com/in/ernesto-latierro",
		skills: [
			{
				level: 10,
				es: "Joomla",
				en: "Joomla"
			},
			{
				level: 8,
				es: "HTML",
				en: "HTML"
			},
			{
				level: 9,
				es: "Accesibilidad",
				en: "Accessibility"
			},
			{
				level: 10,
				es: "Experto en playlist",
				en: "Playlist expert"
			}
		]
	},
	{
		name: "Virginia Monteverde",
		title: {
			es: "Desarrolladora Frontend",
			en: "Frontend Developer"
		},
		image: "team_members/virginia-monteverde.webp",
		linkedin: "https://www.linkedin.com/in/virginia-monteverde-1a387a56",
		skills: [
			{
				level: 10,
				es: "HTML + CSS",
				en: "HTML + CSS"
			},
			{
				level: 8,
				es: "PHP",
				en: "PHP"
			},
			{
				level: 10,
				es: "Wordpress",
				en: "Wordpress"
			},
			{
				level: 10,
				es: "Experta en Excel",
				en: "Excel expert"
			}
		]
	},
	{
		name: "Carla Gili",
		title: {
			es: "Diseñadora UI",
			en: "UI designer"
		},
		image: "team_members/carla-gili.webp",
		linkedin: "https://www.linkedin.com/in/carla-gili-taccari-009ab188",
		skills: [
			{
				level: 10,
				es: "Illustrator + Photoshop",
				en: "Illustrator + Photoshop"
			},
			{
				level: 9,
				es: "Figma",
				en: "Figma"
			},
			{
				level: 7,
				es: "Fotografía",
				en: "Photography"
			},
			{
				level: 9,
				es: "Experta en playlists",
				en: "Playlist expert"
			}
		]
	},
	{
		name: "Federico Martínez",
		title: {
			es: "Desarrollador Fullstack",
			en: "Fullstack developer"
		},
		image: "team_members/federico-martinez.webp",
		linkedin: "https://www.linkedin.com/in/juan-federico-martinez",
		skills: [
			{
				level: 10,
				es: "Drupal",
				en: "Drupal"
			},
			{
				level: 10,
				es: "PHP",
				en: "PHP"
			},
			{
				level: 10,
				es: "Wordpress",
				en: "Wordpress"
			},
			{
				level: 9,
				es: "Organizador de asados",
				en: "Barbacue organizer"
			}
		]
	},
	{
		name: "Valentina Raggio",
		title: {
			es: "Diseñadora UX/UI",
			en: "UX/UI designer"
		},
		image: "team_members/valentina-raggio.webp",
		linkedin: "https://www.linkedin.com/mwlite/in/valentinaraggio",
		skills: [
			{
				level: 10,
				es: "UI/UX",
				en: "UI/UX"
			},
			{
				level: 9,
				es: "Figma",
				en: "Figma"
			},
			{
				level: 10,
				es: "Illustrator",
				en: "Illustrator"
			},
			{
				level: 9,
				es: "Conocedora de datos curiosos",
				en: "Connoisseur of curious facts"
			}
		]
	},
	{
		name: "Gabriel Simonnetti",
		title: {
			es: "Desarrollador Frontend",
			en: "Frontend developer"
		},
		image: "team_members/gabriel-simonnetti.webp",
		linkedin: "https://www.linkedin.com/in/gabosimonetti",
		skills: [
			{
				level: 10,
				es: "Wordpress",
				en: "Wordpress"
			},
			{
				level: 10,
				es: "Joomla",
				en: "Joomla"
			},
			{
				level: 8,
				es: "HTML/CSS",
				en: "HTML/CSS"
			},
			{
				level: 10,
				es: "Experto en Gifs y Memes",
				en: "Expert in Gifs and Memes"
			}
		]
	},
	{
		name: "Juan Arellano",
		title: {
			es: "Desarrollador Fullstack",
			en: "Fullstack developer"
		},
		image: "team_members/juan-arellano.webp",
		linkedin: "https://www.linkedin.com/in/jfarellano",
		skills: [
			{
				level: 10,
				es: "React",
				en: "React"
			},
			{
				level: 9,
				es: "JS",
				en: "JS"
			},
			{
				level: 9,
				es: "PHP",
				en: "PHP"
			},
			{
				level: 10,
				es: "Organizador de asados",
				en: "Barbacue organizer"
			}
		]
	},
	{
		name: "Alexis Suárez",
		title: {
			es: "Desarrollador Frontend",
			en: "Frontend developer"
		},
		image: "team_members/alexis-suarez.webp",
		linkedin: "https://www.linkedin.com/in/alexis-su%C3%A1rez",
		skills: [
			{
				level: 10,
				es: "React",
				en: "React"
			},
			{
				level: 10,
				es: "Photoshop",
				en: "Photoshop"
			},
			{
				level: 10,
				es: "HTML+CSS",
				en: "HTML+CSS"
			},
			{
				level: 8,
				es: "Conocedor de datos curiosos",
				en: "Fun facts connoisseur"
			}
		]
	},
	{
		name: "Nicolás Rama",
		title: {
			es: "Desarrollador Frontend",
			en: "Frontend developer"
		},
		image: "team_members/nicolas-rama.webp",
		linkedin: "https://www.linkedin.com/in/nicolas-rama-45497214a",
		skills: [
			{
				level: 10,
				es: "React",
				en: "React"
			},
			{
				level: 9,
				es: "Node",
				en: "Node"
			},
			{
				level: 10,
				es: "JS",
				en: "JS"
			},
			{
				level: 9,
				es: "Conocedor de shortcuts",
				en: "Shortcut connoisseur"
			}
		]
	},
	{
		name: "Carolina González",
		title: {
			es: "Administración",
			en: "Administration"
		},
		image: "team_members/carolina-gonzalez.webp",
		linkedin: "https://www.linkedin.com/in/ana-carolina-gonz%C3%A1lez-gonz%C3%A1lez-4a842894",
		skills: [
			{
				level: 10,
				es: "Excel",
				en: "Excel"
			},
			{
				level: 9,
				es: "Atención al cliente",
				en: "Customer Support"
			},
			{
				level: 10,
				es: "Cobranzas",
				en: "Collections"
			},
			{
				level: 9,
				es: "Conocedora de datos curiosos",
				en: "Curious facts connoisseur"
			}
		]
	},
	{
		name: "Nicolás Oleinizak",
		title: {
			es: "Desarrollador Fullstack",
			en: "Fullstack developer"
		},
		image: "team_members/nicolas-oleinizak.webp",
		linkedin: "https://ar.linkedin.com/in/nicol%C3%A1s-oleinizak",
		skills: [
			{
				level: 10,
				es: "Backend development",
				en: "Backend development"
			},
			{
				level: 9,
				es: "Javascript",
				en: "Javascript"
			},
			{
				level: 10,
				es: "PHP",
				en: "PHP"
			},
			{
				level: 9,
				es: "Maestro pizzero",
				en: "Pizza master"
			}
		]
	},
	{
		name: "Gabriel Vazquez",
		title: {
			es: "Desarrollador Fullstack",
			en: "Fullstack developer"
		},
		image: "team_members/gabriel-vazquez.webp",
		linkedin: "https://www.linkedin.com/in/gabriel-vazquez-84431531",
		skills: [
			{
				level: 8,
				es: "HTML + CSS + Javascript",
				en: "HTML + CSS + Javascript"
			},
			{
				level: 8,
				es: "Backend NodeJs",
				en: "Backend NodeJs"
			},
			{
				level: 6,
				es: "Frontend ReactJs",
				en: "Frontend ReactJs"
			},
			{
				level: 9,
				es: "Referente para juniors",
				en: "Reference for juniors"
			}
		]
	},
	{
		name: "Engels Baca Sevilla",
		title: {
			es: "Desarrollador Web",
			en: "Web developer"
		},
		image: "team_members/engels-baca-sevilla.webp",
		linkedin: "https://www.linkedin.com/in/engels-baca-sevilla-60a03a122",
		skills: [
			{
				level: 10,
				es: "Vue",
				en: "Vue"
			},
			{
				level: 8,
				es: "React",
				en: "React"
			},
			{
				level: 8,
				es: "Laravel",
				en: "Laravel"
			},
			{
				level: 9,
				es: "Gamer",
				en: "Gamer"
			}
		]
	},
	{
		name: "Williams Blanco",
		title: {
			es: "Desarrollador Frontend",
			en: "Frontend developer"
		},
		image: "team_members/williams-blanco.webp",
		linkedin: "https://www.linkedin.com/in/williams-blanco-022958143",
		skills: [
			{
				level: 9,
				es: "HTML + CSS + JS",
				en: "HTML + CSS + JS"
			},
			{
				level: 9,
				es: "Accesibilidad",
				en: "Accesibility"
			},
			{
				level: 9,
				es: "React",
				en: "React"
			},
			{
				level: 10,
				es: "Pedagogía",
				en: "Pedagogy"
			}
		]
	},
	{
		name: "Leonardo Alvarez",
		title: {
			es: "Desarrollador Fullstack",
			en: "Fullstack developer"
		},
		image: "team_members/leonardo-alvarez.webp",
		linkedin: "https://www.linkedin.com/in/leo-alvarez",
		skills: [
			{
				level: 9,
				es: "PHP",
				en: "PHP"
			},
			{
				level: 8,
				es: "Laravel",
				en: "Laravel"
			},
			{
				level: 8,
				es: "Javascript",
				en: "Javascript"
			},
			{
				level: 7,
				es: "Músico, baterista",
				en: "Musician, drummer"
			}
		]
	}
];

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Aboutus" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$Hero, { "lang": lang })} ${renderComponent($$result2, "UsSection", $$Us, {})} ${renderComponent($$result2, "TeamSection", $$Team, {})} ${renderComponent($$result2, "TeamMembersSection", $$TeamMembers, { "lang": lang, "teams": TeamsContent })} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/_aboutus/index.astro", void 0);

const $$Aboutus$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Index, {})}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/aboutus.astro", void 0);

const $$file$1 = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/aboutus.astro";
const $$url$1 = "/aboutus/";

const aboutus$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Aboutus$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Aboutus = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Index, {})}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/en/aboutus.astro", void 0);

const $$file = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/en/aboutus.astro";
const $$url = "/en/aboutus/";

const aboutus = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Aboutus,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Us$1 as $, Carousel as C, $$Hero$1 as a, aboutus$1 as b, aboutus as c };
