import { R as ROUTE_TYPE_HEADER, A as AstroError, c as MissingLocale, d as REROUTE_DIRECTIVE_HEADER, e as AstroUserError, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as createAstro, h as renderComponent, u as unescapeHTML, F as Fragment, i as addAttribute, j as defineScriptVars, k as renderSlot, s as spreadAttributes, l as createTransitionScope, n as renderHead } from '../astro_JGZcW2el.mjs';
/* empty css                            */
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import { j as joinPaths, a as appendForwardSlash, r as removeLeadingForwardSlash } from '../astro/assets-service_CrCRSGcL.mjs';
import 'clsx';
import { loadEnv } from 'vite';
import { fileURLToPath, pathToFileURL } from 'node:url';
import autoprefixerPlugin from 'autoprefixer';
import tailwindPlugin from 'tailwindcss';
import fs$1, { existsSync, readFileSync } from 'node:fs';
import { z, ZodError } from 'zod';
import isValidFilename from 'valid-filename';
import path, { relative, basename } from 'node:path';
import { EnumChangefreq, SitemapAndIndexStream, SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, normalize } from 'path';
import { Readable, pipeline } from 'stream';
import { promisify } from 'util';
import { mkdir } from 'fs/promises';
import replace from 'stream-replace-string';
import react from '@vitejs/plugin-react';
import { version } from 'react-dom';
import glob from 'fast-glob';
import * as fs from 'node:fs/promises';
import { builtinModules } from 'node:module';
import { jsxs, Fragment as Fragment$1, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                            */

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function createI18nMiddleware(i18n, base, trailingSlash, format) {
  if (!i18n) return (_, next) => next();
  const payload = {
    ...i18n,
    trailingSlash,
    base,
    format,
    domains: {}
  };
  const _redirectToDefaultLocale = redirectToDefaultLocale(payload);
  const _noFoundForNonLocaleRoute = notFound(payload);
  const _requestHasLocale = requestHasLocale(payload.locales);
  const _redirectToFallback = redirectToFallback(payload);
  const prefixAlways = (context) => {
    const url = context.url;
    if (url.pathname === base + "/" || url.pathname === base) {
      return _redirectToDefaultLocale(context);
    } else if (!_requestHasLocale(context)) {
      return _noFoundForNonLocaleRoute(context);
    }
    return void 0;
  };
  const prefixOtherLocales = (context, response) => {
    let pathnameContainsDefaultLocale = false;
    const url = context.url;
    for (const segment of url.pathname.split("/")) {
      if (normalizeTheLocale(segment) === normalizeTheLocale(i18n.defaultLocale)) {
        pathnameContainsDefaultLocale = true;
        break;
      }
    }
    if (pathnameContainsDefaultLocale) {
      const newLocation = url.pathname.replace(`/${i18n.defaultLocale}`, "");
      response.headers.set("Location", newLocation);
      return _noFoundForNonLocaleRoute(context);
    }
    return void 0;
  };
  return async (context, next) => {
    const response = await next();
    const type = response.headers.get(ROUTE_TYPE_HEADER);
    if (type !== "page" && type !== "fallback") {
      return response;
    }
    if (requestIs404Or500(context.request, base)) {
      return response;
    }
    const { currentLocale } = context;
    switch (i18n.strategy) {
      case "manual": {
        return response;
      }
      case "domains-prefix-other-locales": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixOtherLocales(context, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-other-locales": {
        const result = prefixOtherLocales(context, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always-no-redirect": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = _noFoundForNonLocaleRoute(context, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-always-no-redirect": {
        const result = _noFoundForNonLocaleRoute(context, response);
        if (result) {
          return result;
        }
        break;
      }
      case "pathname-prefix-always": {
        const result = prefixAlways(context);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixAlways(context);
          if (result) {
            return result;
          }
        }
        break;
      }
    }
    return _redirectToFallback(context, response);
  };
}
function localeHasntDomain(i18n, currentLocale) {
  for (const domainLocale of Object.values(i18n.domainLookupTable)) {
    if (domainLocale === currentLocale) {
      return false;
    }
  }
  return true;
}

function requestHasLocale(locales) {
  return function(context) {
    return pathHasLocale(context.url.pathname, locales);
  };
}
function requestIs404Or500(request, base = "") {
  const url = new URL(request.url);
  return url.pathname.startsWith(`${base}/404`) || url.pathname.startsWith(`${base}/500`);
}
function pathHasLocale(path, locales) {
  const segments = path.split("/");
  for (const segment of segments) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) {
          return true;
        }
      } else if (segment === locale.path) {
        return true;
      }
    }
  }
  return false;
}
function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    return appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    return joinPaths(...pathsToJoin);
  }
}
function getLocaleAbsoluteUrl({ site, isBuild, ...rest }) {
  const localeUrl = getLocaleRelativeUrl(rest);
  const { domains, locale } = rest;
  let url;
  if (isBuild && domains && domains[locale]) {
    const base = domains[locale];
    url = joinPaths(base, localeUrl.replace(`/${rest.locale}`, ""));
  } else {
    if (site) {
      url = joinPaths(site, localeUrl);
    } else {
      url = localeUrl;
    }
  }
  if (shouldAppendForwardSlash(rest.trailingSlash, rest.format)) {
    return appendForwardSlash(url);
  } else {
    return url;
  }
}
function getPathByLocale(locale, locales) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  throw new Unreachable();
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function toCodes(locales) {
  return locales.map((loopLocale) => {
    if (typeof loopLocale === "string") {
      return loopLocale;
    } else {
      return loopLocale.codes[0];
    }
  });
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}
class Unreachable extends Error {
  constructor() {
    super(
      "Astro encountered an unexpected line of code.\nIn most cases, this is not your fault, but a bug in astro code.\nIf there isn't one already, please create an issue.\nhttps://astro.build/issues"
    );
  }
}
function redirectToDefaultLocale({
  trailingSlash,
  format,
  base,
  defaultLocale
}) {
  return function(context, statusCode) {
    if (shouldAppendForwardSlash(trailingSlash, format)) {
      return context.redirect(`${appendForwardSlash(joinPaths(base, defaultLocale))}`, statusCode);
    } else {
      return context.redirect(`${joinPaths(base, defaultLocale)}`, statusCode);
    }
  };
}
function notFound({ base, locales }) {
  return function(context, response) {
    if (response?.headers.get(REROUTE_DIRECTIVE_HEADER) === "no") return response;
    const url = context.url;
    const isRoot = url.pathname === base + "/" || url.pathname === base;
    if (!(isRoot || pathHasLocale(url.pathname, locales))) {
      if (response) {
        response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
        return new Response(response.body, {
          status: 404,
          headers: response.headers
        });
      } else {
        return new Response(null, {
          status: 404,
          headers: {
            [REROUTE_DIRECTIVE_HEADER]: "no"
          }
        });
      }
    }
    return void 0;
  };
}
function redirectToFallback({
  fallback,
  locales,
  defaultLocale,
  strategy,
  base
}) {
  return function(context, response) {
    if (response.status >= 300 && fallback) {
      const fallbackKeys = fallback ? Object.keys(fallback) : [];
      const segments = context.url.pathname.split("/");
      const urlLocale = segments.find((segment) => {
        for (const locale of locales) {
          if (typeof locale === "string") {
            if (locale === segment) {
              return true;
            }
          } else if (locale.path === segment) {
            return true;
          }
        }
        return false;
      });
      if (urlLocale && fallbackKeys.includes(urlLocale)) {
        const fallbackLocale = fallback[urlLocale];
        const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
        let newPathname;
        if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") {
          if (context.url.pathname.includes(`${base}`)) {
            newPathname = context.url.pathname.replace(`/${urlLocale}`, ``);
          } else {
            newPathname = context.url.pathname.replace(`/${urlLocale}`, `/`);
          }
        } else {
          newPathname = context.url.pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
        }
        return context.redirect(newPathname);
      }
    }
    return response;
  };
}

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
let Logger$1 = class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
};
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = toCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a, b) => {
    if (a.qualityValue && b.qualityValue) {
      return Math.sign(b.qualityValue - a.qualityValue);
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult && firstResult.locale !== "*") {
      for (const currentLocale of locales) {
        if (typeof currentLocale === "string") {
          if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
            result = currentLocale;
          }
        } else {
          for (const currentCode of currentLocale.codes) {
            if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
              result = currentLocale.path;
            }
          }
        }
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return locales.map((locale) => {
        if (typeof locale === "string") {
          return locale;
        } else {
          return locale.codes.at(0);
        }
      });
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        for (const loopLocale of locales) {
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) {
              result.push(loopLocale);
            }
          } else {
            for (const code of loopLocale.codes) {
              if (code === browserLocale.locale) {
                result.push(loopLocale.path);
              }
            }
          }
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(pathname, locales) {
  for (const segment of pathname.split("/")) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (!segment.includes(locale)) continue;
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
          return locale;
        }
      } else {
        if (locale.path === segment) {
          return locale.codes.at(0);
        } else {
          for (const code of locale.codes) {
            if (normalizeTheLocale(code) === normalizeTheLocale(segment)) {
              return code;
            }
          }
        }
      }
    }
  }
}
function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "pathname-prefix-always";
        } else {
          strategy = "pathname-prefix-always-no-redirect";
        }
      } else {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "domains-prefix-always";
        } else {
          strategy = "domains-prefix-always-no-redirect";
        }
      } else {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}

function getDefaultImageConfig(astroImageConfig) {
  return {
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: astroImageConfig.domains ?? [],
    // Cast is necessary here because Vercel's types are slightly different from ours regarding allowed protocols. Behavior should be the same, however.
    remotePatterns: astroImageConfig.remotePatterns ?? []
  };
}
function getAstroImageConfig(images, imagesConfig, command, devImageService, astroImageConfig) {
  let devService = "@astrojs/vercel/dev-image-service";
  switch (devImageService) {
    case "sharp":
      devService = "@astrojs/vercel/dev-image-service";
      break;
    case "squoosh":
      devService = "@astrojs/vercel/squoosh-dev-image-service";
      break;
    default:
      if (typeof devImageService === "string") {
        devService = devImageService;
      } else {
        devService = "@astrojs/vercel/dev-image-service";
      }
      break;
  }
  if (images) {
    return {
      image: {
        service: {
          entrypoint: command === "dev" ? devService : "@astrojs/vercel/build-image-service",
          config: imagesConfig ? imagesConfig : getDefaultImageConfig(astroImageConfig)
        }
      }
    };
  }
  return {};
}

async function writeJson(path, data) {
  await fs.writeFile(path, JSON.stringify(data, null, "	"), { encoding: "utf-8" });
}
async function removeDir(dir) {
  await fs.rm(dir, { recursive: true, force: true, maxRetries: 3 });
}
async function copyFilesToFunction(files, outDir, exclude = []) {
  const excludeList = exclude.map(fileURLToPath);
  const fileList = files.map(fileURLToPath).filter((f) => !excludeList.includes(f));
  if (files.length === 0) throw new Error("[@astrojs/vercel] No files found to copy");
  let commonAncestor = path.dirname(fileList[0]);
  for (const file of fileList.slice(1)) {
    while (!file.startsWith(commonAncestor)) {
      commonAncestor = path.dirname(commonAncestor);
    }
  }
  for (const origin of fileList) {
    const dest = new URL(path.relative(commonAncestor, origin), outDir);
    const realpath = await fs.realpath(origin);
    const isSymlink = realpath !== origin;
    const isDir = (await fs.stat(origin)).isDirectory();
    if (isDir && !isSymlink) {
      await fs.mkdir(new URL("..", dest), { recursive: true });
    } else {
      await fs.mkdir(new URL(".", dest), { recursive: true });
    }
    if (isSymlink) {
      const realdest = fileURLToPath(new URL(path.relative(commonAncestor, realpath), outDir));
      const target = path.relative(fileURLToPath(new URL(".", dest)), realdest);
      if (!existsSync(dest)) {
        await fs.symlink(target, dest, isDir ? "dir" : "file");
      }
    } else if (!isDir) {
      await fs.copyFile(origin, dest);
    }
  }
  return commonAncestor;
}

async function copyDependenciesToFunction({
  entry,
  outDir,
  includeFiles,
  excludeFiles,
  logger
}, cache) {
  const entryPath = fileURLToPath(entry);
  logger.info(`Bundling function ${relative(fileURLToPath(outDir), entryPath)}`);
  let base = entry;
  while (fileURLToPath(base) !== fileURLToPath(new URL("../", base))) {
    base = new URL("../", base);
  }
  const { nodeFileTrace } = await import('@vercel/nft');
  const result = await nodeFileTrace([entryPath], {
    base: fileURLToPath(base),
    // If you have a route of /dev this appears in source and NFT will try to
    // scan your local /dev :8
    ignore: ["/dev/**"],
    cache
  });
  for (const error of result.warnings) {
    if (error.message.startsWith("Failed to resolve dependency")) {
      const [, module, file] = /Cannot find module '(.+?)' loaded from (.+)/.exec(error.message);
      if (module === "@astrojs/") continue;
      if (module === "sharp") continue;
      if (entryPath === file) {
        logger.debug(
          `[@astrojs/vercel] The module "${module}" couldn't be resolved. This may not be a problem, but it's worth checking.`
        );
      } else {
        logger.debug(
          `[@astrojs/vercel] The module "${module}" inside the file "${file}" couldn't be resolved. This may not be a problem, but it's worth checking.`
        );
      }
    } else if (error.message.startsWith("Failed to parse")) {
      continue;
    } else {
      throw error;
    }
  }
  const commonAncestor = await copyFilesToFunction(
    [...result.fileList].map((file) => new URL(file, base)).concat(includeFiles),
    outDir,
    excludeFiles
  );
  return {
    // serverEntry location inside the outDir
    handler: relative(commonAncestor, entryPath)
  };
}

const pathJoin = path.posix.join;
const ROUTE_DYNAMIC_SPLIT = /\[(.+?\(.+?\)|.+?)\]/;
const ROUTE_SPREAD = /^\.{3}.+$/;
function getParts(part, file) {
  const result = [];
  part.split(ROUTE_DYNAMIC_SPLIT).map((str, i) => {
    if (!str) return;
    const dynamic = i % 2 === 1;
    const [, content] = dynamic ? /([^(]+)$/.exec(str) || [null, null] : [null, str];
    if (!content || dynamic && !/^(?:\.\.\.)?[\w$]+$/.test(content)) {
      throw new Error(`Invalid route ${file} \u2014 parameter name must match /^[a-zA-Z0-9_$]+$/`);
    }
    result.push({
      content,
      dynamic,
      spread: dynamic && ROUTE_SPREAD.test(content)
    });
  });
  return result;
}
function getMatchPattern(segments) {
  return segments.map((segment) => {
    return segment[0].spread ? "(?:\\/(.*?))?" : segment.map((part) => {
      if (part)
        return part.dynamic ? "([^/]+?)" : part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[*+?^${}()|[\]\\]/g, "\\$&");
    }).join("");
  }).join("/");
}
function getReplacePattern(segments) {
  let n = 0;
  let result = "";
  for (const segment of segments) {
    for (const part of segment) {
      if (part.dynamic) result += "$" + ++n;
      else result += part.content;
    }
    result += "/";
  }
  result = result.slice(0, -1);
  return result;
}
function getRedirectLocation(route, config) {
  if (route.redirectRoute) {
    const pattern = getReplacePattern(route.redirectRoute.segments);
    const path = config.trailingSlash === "always" ? appendForwardSlash(pattern) : pattern;
    return pathJoin(config.base, path);
  } else if (typeof route.redirect === "object") {
    return pathJoin(config.base, route.redirect.destination);
  } else {
    return pathJoin(config.base, route.redirect || "");
  }
}
function getRedirectStatus(route) {
  if (typeof route.redirect === "object") {
    return route.redirect.status;
  }
  return 301;
}
function escapeRegex(content) {
  const segments = removeLeadingForwardSlash(content).split(path.posix.sep).filter(Boolean).map((s) => {
    return getParts(s, content);
  });
  return `^/${getMatchPattern(segments)}$`;
}
function getRedirects(routes, config) {
  let redirects = [];
  for (const route of routes) {
    if (route.type === "redirect") {
      redirects.push({
        src: config.base + getMatchPattern(route.segments),
        headers: { Location: getRedirectLocation(route, config) },
        status: getRedirectStatus(route)
      });
    } else if (route.type === "page" && route.route !== "/") {
      if (config.trailingSlash === "always") {
        redirects.push({
          src: config.base + getMatchPattern(route.segments),
          headers: { Location: config.base + getReplacePattern(route.segments) + "/" },
          status: 308
        });
      } else if (config.trailingSlash === "never") {
        redirects.push({
          src: config.base + getMatchPattern(route.segments) + "/",
          headers: { Location: config.base + getReplacePattern(route.segments) },
          status: 308
        });
      }
    }
  }
  return redirects;
}

function getSpeedInsightsViteConfig(enabled) {
  if (enabled) {
    return {
      define: exposeEnv(["VERCEL_ANALYTICS_ID"])
    };
  }
  return {};
}
function exposeEnv(envs) {
  const mapped = {};
  envs.filter((env) => process.env[env]).forEach((env) => {
    mapped[`import.meta.env.PUBLIC_${env}`] = JSON.stringify(process.env[env]);
  });
  return mapped;
}

async function getInjectableWebAnalyticsContent({
  mode
}) {
  const base = `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`;
  if (mode === "development") {
    return `
			${base}
			var script = document.createElement('script');
			script.defer = true;
			script.src = 'https://cdn.vercel-insights.com/v1/script.debug.js';
			var head = document.querySelector('head');
			head.appendChild(script);
		`;
  }
  return `${base}
		var script = document.createElement('script');
		script.defer = true;
		script.src = '/_vercel/insights/script.js';
		var head = document.querySelector('head');
		head.appendChild(script);
	`;
}

async function generateEdgeMiddleware(astroMiddlewareEntryPointPath, vercelEdgeMiddlewareHandlerPath, outPath, middlewareSecret, logger) {
  const code = edgeMiddlewareTemplate(
    astroMiddlewareEntryPointPath,
    vercelEdgeMiddlewareHandlerPath,
    middlewareSecret,
    logger
  );
  const bundledFilePath = fileURLToPath(outPath);
  const esbuild = await import('esbuild');
  await esbuild.build({
    stdin: {
      contents: code,
      resolveDir: process.cwd()
    },
    target: "es2020",
    platform: "browser",
    // https://runtime-keys.proposal.wintercg.org/#edge-light
    conditions: ["edge-light", "worker", "browser"],
    outfile: bundledFilePath,
    allowOverwrite: true,
    format: "esm",
    bundle: true,
    minify: false,
    // ensure node built-in modules are namespaced with `node:`
    plugins: [
      {
        name: "esbuild-namespace-node-built-in-modules",
        setup(build) {
          const filter = new RegExp(builtinModules.map((mod) => `(^${mod}$)`).join("|"));
          build.onResolve({ filter }, (args) => ({ path: "node:" + args.path, external: true }));
        }
      }
    ]
  });
  return pathToFileURL(bundledFilePath);
}
function edgeMiddlewareTemplate(astroMiddlewareEntryPointPath, vercelEdgeMiddlewareHandlerPath, middlewareSecret, logger) {
  const middlewarePath = JSON.stringify(
    fileURLToPath(astroMiddlewareEntryPointPath).replace(/\\/g, "/")
  );
  const filePathEdgeMiddleware = fileURLToPath(vercelEdgeMiddlewareHandlerPath);
  let handlerTemplateImport = "";
  let handlerTemplateCall = "{}";
  if (existsSync(filePathEdgeMiddleware + ".js") || existsSync(filePathEdgeMiddleware + ".ts")) {
    logger.warn(
      "Usage of `vercel-edge-middleware.js` is deprecated. You can now use the `waitUntil(promise)` function directly as `ctx.locals.waitUntil(promise)`."
    );
    const stringified = JSON.stringify(filePathEdgeMiddleware.replace(/\\/g, "/"));
    handlerTemplateImport = `import handler from ${stringified}`;
    handlerTemplateCall = `await handler({ request, context })`;
  }
  return `
	${handlerTemplateImport}
import { onRequest } from ${middlewarePath};
import { createContext, trySerializeLocals } from 'astro/middleware';
export default async function middleware(request, context) {
	const ctx = createContext({
		request,
		params: {}
	});
	ctx.locals = { vercel: { edge: context }, ...${handlerTemplateCall} };
	const { origin } = new URL(request.url);
	const next = () => {
		const { vercel, ...locals } = ctx.locals;
		return fetch(new URL('/${NODE_PATH}', request.url), {
			headers: {
				...Object.fromEntries(request.headers.entries()),
				'${ASTRO_MIDDLEWARE_SECRET_HEADER}': '${middlewareSecret}',
				'${ASTRO_PATH_HEADER}': request.url.replace(origin, ''),
				'${ASTRO_LOCALS_HEADER}': trySerializeLocals(locals)
			}
		})
	}

	return onRequest(ctx, next);
}`;
}

const PACKAGE_NAME = "@astrojs/vercel/serverless";
const ASTRO_PATH_HEADER = "x-astro-path";
const ASTRO_PATH_PARAM = "x_astro_path";
const ASTRO_LOCALS_HEADER = "x-astro-locals";
const ASTRO_MIDDLEWARE_SECRET_HEADER = "x-astro-middleware-secret";
const VERCEL_EDGE_MIDDLEWARE_FILE = "vercel-edge-middleware";
const NODE_PATH = "_render";
const MIDDLEWARE_PATH = "_middleware";
const ISR_PATH = `/_isr?${ASTRO_PATH_PARAM}=$0`;
const SUPPORTED_NODE_VERSIONS = {
  18: { status: "retiring", removal: "Early 2025", warnDate: /* @__PURE__ */ new Date("October 1 2024") },
  20: { status: "default" }
};
function getAdapter({
  edgeMiddleware,
  functionPerRoute,
  middlewareSecret,
  skewProtection
}) {
  return {
    name: PACKAGE_NAME,
    serverEntrypoint: `${PACKAGE_NAME}/entrypoint`,
    exports: ["default"],
    args: { middlewareSecret, skewProtection },
    adapterFeatures: {
      edgeMiddleware,
      functionPerRoute
    },
    supportedAstroFeatures: {
      hybridOutput: "stable",
      staticOutput: "stable",
      serverOutput: "stable",
      assets: {
        supportKind: "stable",
        isSharpCompatible: true,
        isSquooshCompatible: true
      },
      i18nDomains: "experimental"
    }
  };
}
function vercelServerless({
  webAnalytics,
  speedInsights,
  includeFiles: _includeFiles = [],
  excludeFiles: _excludeFiles = [],
  imageService,
  imagesConfig,
  devImageService = "sharp",
  functionPerRoute = false,
  edgeMiddleware = false,
  maxDuration,
  isr = false,
  skewProtection = false
} = {}) {
  if (maxDuration) {
    if (typeof maxDuration !== "number") {
      throw new TypeError(`maxDuration must be a number`, { cause: maxDuration });
    }
    if (maxDuration <= 0) {
      throw new TypeError(`maxDuration must be a positive number`, { cause: maxDuration });
    }
  }
  let _config;
  let _buildTempFolder;
  let _serverEntry;
  let _entryPoints;
  let _middlewareEntryPoint;
  const extraFilesToInclude = [];
  const middlewareSecret = crypto.randomUUID();
  return {
    name: PACKAGE_NAME,
    hooks: {
      "astro:config:setup": async ({ command, config, updateConfig, injectScript, logger }) => {
        if (maxDuration && maxDuration > 900) {
          logger.warn(
            `maxDuration is set to ${maxDuration} seconds, which is longer than the maximum allowed duration of 900 seconds.`
          );
          logger.warn(
            `Please make sure that your plan allows for this duration. See https://vercel.com/docs/functions/serverless-functions/runtimes#maxduration for more information.`
          );
        }
        if (webAnalytics?.enabled) {
          injectScript(
            "head-inline",
            await getInjectableWebAnalyticsContent({
              mode: command === "dev" ? "development" : "production"
            })
          );
        }
        if (command === "build" && speedInsights?.enabled) {
          injectScript("page", 'import "@astrojs/vercel/speed-insights"');
        }
        const vercelConfigPath = new URL("vercel.json", config.root);
        if (existsSync(vercelConfigPath)) {
          try {
            const vercelConfig = JSON.parse(readFileSync(vercelConfigPath, "utf-8"));
            if (vercelConfig.trailingSlash === true && config.trailingSlash === "always") {
              logger.warn(
                `
	Your "vercel.json" \`trailingSlash\` configuration (set to \`true\`) will conflict with your Astro \`trailinglSlash\` configuration (set to \`"always"\`).
	This would cause infinite redirects under certain conditions and throw an \`ERR_TOO_MANY_REDIRECTS\` error.
	To prevent this, your Astro configuration is updated to \`"ignore"\` during builds.
`
              );
              updateConfig({
                trailingSlash: "ignore"
              });
            }
          } catch (_err) {
            logger.warn(`Your "vercel.json" config is not a valid json file.`);
          }
        }
        updateConfig({
          outDir: new URL("./.vercel/output/", config.root),
          build: {
            client: new URL("./.vercel/output/static/", config.root),
            server: new URL("./.vercel/output/_functions/", config.root),
            redirects: false
          },
          vite: {
            ...getSpeedInsightsViteConfig(speedInsights?.enabled),
            ssr: {
              external: ["@vercel/nft"]
            }
          },
          ...getAstroImageConfig(
            imageService,
            imagesConfig,
            command,
            devImageService,
            config.image
          )
        });
      },
      "astro:config:done": ({ setAdapter, config, logger }) => {
        if (functionPerRoute === true) {
          logger.warn(
            `
	Vercel's hosting plans might have limits to the number of functions you can create.
	Make sure to check your plan carefully to avoid incurring additional costs.
	You can set functionPerRoute: false to prevent surpassing the limit.
`
          );
        }
        setAdapter(
          getAdapter({ functionPerRoute, edgeMiddleware, middlewareSecret, skewProtection })
        );
        _config = config;
        _buildTempFolder = config.build.server;
        _serverEntry = config.build.serverEntry;
        if (config.output === "static") {
          throw new AstroUserError(
            '`output: "server"` or `output: "hybrid"` is required to use the serverless adapter.'
          );
        }
      },
      "astro:build:ssr": async ({ entryPoints, middlewareEntryPoint }) => {
        _entryPoints = new Map(
          Array.from(entryPoints).filter(([routeData]) => !routeData.prerender)
        );
        _middlewareEntryPoint = middlewareEntryPoint;
      },
      "astro:build:done": async ({ routes, logger }) => {
        if (_config.vite.assetsInclude) {
          const mergeGlobbedIncludes = (globPattern) => {
            if (typeof globPattern === "string") {
              const entries = glob.sync(globPattern).map((p) => pathToFileURL(p));
              extraFilesToInclude.push(...entries);
            } else if (Array.isArray(globPattern)) {
              for (const pattern of globPattern) {
                mergeGlobbedIncludes(pattern);
              }
            }
          };
          mergeGlobbedIncludes(_config.vite.assetsInclude);
        }
        const routeDefinitions = [];
        const includeFiles = _includeFiles.map((file) => new URL(file, _config.root)).concat(extraFilesToInclude);
        const excludeFiles = _excludeFiles.map((file) => new URL(file, _config.root));
        const builder = new VercelBuilder(_config, excludeFiles, includeFiles, logger, maxDuration);
        if (_entryPoints.size) {
          const getRouteFuncName = (route) => route.component.replace("src/pages/", "");
          const getFallbackFuncName = (entryFile) => basename(entryFile.toString()).replace("entry.", "").replace(/\.mjs$/, "");
          for (const [route, entryFile] of _entryPoints) {
            const func = route.component.startsWith("src/pages/") ? getRouteFuncName(route) : getFallbackFuncName(entryFile);
            await builder.buildServerlessFolder(entryFile, func);
            routeDefinitions.push({
              src: route.pattern.source,
              dest: func
            });
          }
        } else {
          const entryFile = new URL(_serverEntry, _buildTempFolder);
          if (isr) {
            const isrConfig = typeof isr === "object" ? isr : {};
            await builder.buildServerlessFolder(entryFile, NODE_PATH);
            if (isrConfig.exclude?.length) {
              const dest = _middlewareEntryPoint ? MIDDLEWARE_PATH : NODE_PATH;
              for (const route of isrConfig.exclude) {
                routeDefinitions.push({ src: escapeRegex(route), dest });
              }
            }
            await builder.buildISRFolder(entryFile, "_isr", isrConfig);
            for (const route of routes) {
              const src = route.pattern.source;
              const dest = src.startsWith("^\\/_image") ? NODE_PATH : ISR_PATH;
              if (!route.prerender) routeDefinitions.push({ src, dest });
            }
          } else {
            await builder.buildServerlessFolder(entryFile, NODE_PATH);
            const dest = _middlewareEntryPoint ? MIDDLEWARE_PATH : NODE_PATH;
            for (const route of routes) {
              if (!route.prerender) routeDefinitions.push({ src: route.pattern.source, dest });
            }
          }
        }
        if (_middlewareEntryPoint) {
          await builder.buildMiddlewareFolder(
            _middlewareEntryPoint,
            MIDDLEWARE_PATH,
            middlewareSecret
          );
        }
        const fourOhFourRoute = routes.find((route) => route.pathname === "/404");
        await writeJson(new URL(`./config.json`, _config.outDir), {
          version: 3,
          routes: [
            ...getRedirects(routes, _config),
            {
              src: `^/${_config.build.assets}/(.*)$`,
              headers: { "cache-control": "public, max-age=31536000, immutable" },
              continue: true
            },
            { handle: "filesystem" },
            ...routeDefinitions,
            ...fourOhFourRoute ? [
              {
                src: "/.*",
                dest: fourOhFourRoute.prerender ? "/404.html" : _middlewareEntryPoint ? MIDDLEWARE_PATH : NODE_PATH,
                status: 404
              }
            ] : []
          ],
          ...imageService || imagesConfig ? {
            images: imagesConfig ? {
              ...imagesConfig,
              domains: [...imagesConfig.domains, ..._config.image.domains],
              remotePatterns: [
                ...imagesConfig.remotePatterns ?? [],
                ..._config.image.remotePatterns
              ]
            } : getDefaultImageConfig(_config.image)
          } : {}
        });
        await removeDir(_buildTempFolder);
      }
    }
  };
}
class VercelBuilder {
  constructor(config, excludeFiles, includeFiles, logger, maxDuration, runtime = getRuntime(process, logger)) {
    this.config = config;
    this.excludeFiles = excludeFiles;
    this.includeFiles = includeFiles;
    this.logger = logger;
    this.maxDuration = maxDuration;
    this.runtime = runtime;
  }
  NTF_CACHE = {};
  async buildServerlessFolder(entry, functionName) {
    const { config, includeFiles, excludeFiles, logger, NTF_CACHE, runtime, maxDuration } = this;
    const functionFolder = new URL(`./functions/${functionName}.func/`, config.outDir);
    const packageJson = new URL(`./functions/${functionName}.func/package.json`, config.outDir);
    const vcConfig = new URL(`./functions/${functionName}.func/.vc-config.json`, config.outDir);
    const { handler } = await copyDependenciesToFunction(
      {
        entry,
        outDir: functionFolder,
        includeFiles,
        excludeFiles,
        logger
      },
      NTF_CACHE
    );
    await writeJson(packageJson, { type: "module" });
    await writeJson(vcConfig, {
      runtime,
      handler: handler.replaceAll("\\", "/"),
      launcherType: "Nodejs",
      maxDuration,
      supportsResponseStreaming: true
    });
  }
  async buildISRFolder(entry, functionName, isr) {
    await this.buildServerlessFolder(entry, functionName);
    const prerenderConfig = new URL(
      `./functions/${functionName}.prerender-config.json`,
      this.config.outDir
    );
    await writeJson(prerenderConfig, {
      expiration: isr.expiration ?? false,
      bypassToken: isr.bypassToken,
      allowQuery: [ASTRO_PATH_PARAM],
      passQuery: true
    });
  }
  async buildMiddlewareFolder(entry, functionName, middlewareSecret) {
    const functionFolder = new URL(`./functions/${functionName}.func/`, this.config.outDir);
    await generateEdgeMiddleware(
      entry,
      new URL(VERCEL_EDGE_MIDDLEWARE_FILE, this.config.srcDir),
      new URL("./middleware.mjs", functionFolder),
      middlewareSecret,
      this.logger
    );
    await writeJson(new URL(`./.vc-config.json`, functionFolder), {
      runtime: "edge",
      entrypoint: "middleware.mjs"
    });
  }
}
function getRuntime(process2, logger) {
  const version = process2.version.slice(1);
  const major = version.split(".")[0];
  const support = SUPPORTED_NODE_VERSIONS[major];
  if (support === void 0) {
    logger.warn(
      `
	The local Node.js version (${major}) is not supported by Vercel Serverless Functions.
	Your project will use Node.js 18 as the runtime instead.
	Consider switching your local version to 18.
`
    );
    return "nodejs18.x";
  }
  if (support.status === "default") {
    return `nodejs${major}.x`;
  }
  if (support.status === "retiring") {
    if (support.warnDate && /* @__PURE__ */ new Date() >= support.warnDate) {
      logger.warn(
        `Your project is being built for Node.js ${major} as the runtime, which is retiring by ${support.removal}.`
      );
    }
    return `nodejs${major}.x`;
  }
  if (support.status === "beta") {
    logger.warn(
      `Your project is being built for Node.js ${major} as the runtime, which is currently in beta for Vercel Serverless Functions.`
    );
    return `nodejs${major}.x`;
  }
  if (support.status === "deprecated") {
    const removeDate = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }).format(
      support.removal
    );
    logger.warn(
      `
	Your project is being built for Node.js ${major} as the runtime.
	This version is deprecated by Vercel Serverless Functions, and scheduled to be disabled on ${removeDate}.
	Consider upgrading your local version to 18.
`
    );
    return `nodejs${major}.x`;
  }
  return "nodejs18.x";
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { base: "/", format: "directory", site: "http://localhost:4321", trailingSlash: "always", i18n: { defaultLocale: "es", locales: ["es", "en"], fallback: { en: "es" }, routing: { prefixDefaultLocale: false, redirectToDefaultLocale: true } }, isBuild: true };
const { trailingSlash, format, site, i18n, isBuild } = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, fallback, routing } = i18n;
const base = "/";
const strategy = toRoutingStrategy(routing, domains);
const getAbsoluteLocaleUrl = (locale, path, options) => getLocaleAbsoluteUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  site,
  defaultLocale,
  locales,
  strategy,
  domains,
  isBuild,
  ...options
});
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div style="text-align:center;width:100%;height:100%;"> <img src="/assets/maintenance.webp" alt="Site under maintenance" style="object-fit:cover;width:100%;"> </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Maintenance.astro", void 0);

function defineConfig(config) {
  return config;
}

async function getPostCssConfig(root, postcssInlineOptions) {
  let postcssConfigResult;
  if (!(typeof postcssInlineOptions === "object" && postcssInlineOptions !== null)) {
    let { default: postcssrc } = await import('postcss-load-config');
    const searchPath = typeof postcssInlineOptions === "string" ? postcssInlineOptions : root;
    try {
      postcssConfigResult = await postcssrc({}, searchPath);
    } catch (e) {
      postcssConfigResult = null;
    }
  }
  return postcssConfigResult;
}
async function getViteConfiguration$1(tailwindConfigPath, nesting, root, postcssInlineOptions) {
  const postcssConfigResult = await getPostCssConfig(root, postcssInlineOptions);
  const postcssOptions = postcssConfigResult?.options ?? {};
  const postcssPlugins = postcssConfigResult?.plugins?.slice() ?? [];
  postcssPlugins.push(tailwindPlugin(tailwindConfigPath));
  postcssPlugins.push(autoprefixerPlugin());
  return {
    css: {
      postcss: {
        ...postcssOptions,
        plugins: postcssPlugins
      }
    }
  };
}
function tailwindIntegration(options) {
  const customConfigPath = options?.configFile;
  const nesting = false;
  return {
    name: "@astrojs/tailwind",
    hooks: {
      "astro:config:setup": async ({ config, updateConfig, injectScript }) => {
        updateConfig({
          vite: await getViteConfiguration$1(
            customConfigPath,
            nesting,
            fileURLToPath(config.root),
            config.vite.css?.postcss
          )
        });
        {
          injectScript("page-ssr", `import '@astrojs/tailwind/base.css';`);
        }
      }
    }
  };
}

// src/index.ts

// ../utils/src/is-valid-hostname.ts
var isValidHostname = (x) => {
  if (typeof x !== "string") {
    return false;
  }
  let value = x.toString();
  const validHostnameChars = /^[a-zA-Z0-9-.]{1,253}\.?$/g;
  if (!validHostnameChars.test(value)) {
    return false;
  }
  if (value.endsWith(".")) {
    value = value.slice(0, value.length - 1);
  }
  if (value.length > 253) {
    return false;
  }
  return value.split(".").every((label) => /^([a-zA-Z0-9-]+)$/g.test(label) && label.length < 64 && !label.startsWith("-") && !label.endsWith("-"));
};

// ../utils/src/is-valid-http-url.ts
var isValidHttpUrl = (s) => {
  if (typeof s !== "string" || !s) {
    return false;
  }
  try {
    const { protocol } = new URL(s);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
};

// ../utils/src/logger.ts
var Logger = class {
  constructor(packageName2) {
    this.colors = {
      reset: "\x1B[0m",
      fg: {
        red: "\x1B[31m",
        green: "\x1B[32m",
        yellow: "\x1B[33m"
      }
    };
    this.packageName = packageName2;
  }
  log(msg, prefix = "") {
    const s = msg.join("\n");
    console.log(`%s${this.packageName}:%s ${s}
`, prefix, prefix ? this.colors.reset : "");
  }
  info(...msg) {
    this.log(msg);
  }
  success(...msg) {
    this.log(msg, this.colors.fg.green);
  }
  warn(...msg) {
    this.log(["Skipped!", ...msg], this.colors.fg.yellow);
  }
  error(...msg) {
    this.log(["Failed!", ...msg], this.colors.fg.red);
  }
};

// ../utils/src/error-helpers.ts
function getErrorMessage(err) {
  return err instanceof Error ? err.message : String(err);
}

// src/config-defaults.ts
var ROBOTS_TXT_CONFIG_DEFAULTS = {
  sitemap: true,
  policy: [
    {
      allow: "/",
      userAgent: "*"
    }
  ],
  sitemapBaseFileName: "sitemap-index"
};

// src/schema.ts
var schemaSitemapItem = z.string().min(1).refine((val) => !val || isValidHttpUrl(val), {
  message: "Only valid URLs with `http` or `https` protocol allowed"
});
var schemaCleanParam = z.string().max(500);
var schemaPath = z.string().or(z.string().array()).optional();
var RobotsTxtOptionsSchema = z.object({
  host: z.string().or(z.boolean()).optional().refine((val) => !val || typeof val === "boolean" || isValidHostname(val), {
    message: "Not valid host"
  }),
  sitemap: schemaSitemapItem.or(schemaSitemapItem.array()).or(z.boolean()).optional().default(ROBOTS_TXT_CONFIG_DEFAULTS.sitemap),
  policy: z.object({
    userAgent: z.string().min(1),
    allow: schemaPath,
    disallow: schemaPath,
    cleanParam: schemaCleanParam.or(schemaCleanParam.array()).optional(),
    crawlDelay: z.number().nonnegative().optional().refine((val) => typeof val === "undefined" || Number.isFinite(val), { message: "Must be finite number" })
  }).array().nonempty().optional().default(ROBOTS_TXT_CONFIG_DEFAULTS.policy),
  sitemapBaseFileName: z.string().min(1).optional().refine((val) => !val || isValidFilename(val), { message: "Not valid file name" }).default(ROBOTS_TXT_CONFIG_DEFAULTS.sitemapBaseFileName),
  transform: z.function().args(z.string()).returns(z.any()).optional()
}).default(ROBOTS_TXT_CONFIG_DEFAULTS);

// src/validate-options.ts
var validateOptions$1 = (site, opts) => {
  const siteSchema = z.string().min(1, {
    message: "`site` property is required in `astro.config.*`."
  });
  siteSchema.parse(site);
  const result = RobotsTxtOptionsSchema.parse(opts);
  return result;
};

// src/get-robots-txt-content.ts
var capitaliseFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);
var addBackSlash = (s) => s.endsWith("/") ? s : `${s}/`;
var addLine = (name, rule) => {
  if (rule && Array.isArray(rule) && rule.length > 0) {
    let content = "";
    rule.forEach((item) => {
      content += addLine(name, item);
    });
    return content;
  }
  const ruleContent = name === "Allow" || name === "Disallow" ? encodeURI(rule.toString()) : rule.toString();
  return `${capitaliseFirstLetter(name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase())}:${ruleContent.length > 0 ? ` ${ruleContent}` : ""}
`;
};
var generatePoliceItem = (item, index) => {
  let content = "";
  if (index !== 0) {
    content += "\n";
  }
  content += addLine("User-agent", item.userAgent);
  if (typeof item.disallow === "string" || Array.isArray(item.disallow)) {
    content += addLine("Disallow", item.disallow);
  }
  if (item.allow) {
    content += addLine("Allow", item.allow);
  }
  if (item.crawlDelay) {
    content += addLine("Crawl-delay", item.crawlDelay);
  }
  if (item.cleanParam && item.cleanParam.length > 0) {
    content += addLine("Clean-param", item.cleanParam);
  }
  return content;
};
var getSitemapArr = (sitemap, finalSiteHref, sitemapBaseFileName) => {
  if (typeof sitemap !== "undefined") {
    if (!sitemap) {
      return void 0;
    }
    if (Array.isArray(sitemap)) {
      return sitemap;
    }
    if (typeof sitemap === "string") {
      return [sitemap];
    }
  }
  return [`${addBackSlash(finalSiteHref)}${sitemapBaseFileName}.xml`];
};
var getRobotsTxtContent = (finalSiteHref, opts, site) => {
  var _a;
  const { host, sitemap, policy, sitemapBaseFileName } = opts;
  let result = "";
  policy == null ? void 0 : policy.forEach((item, index) => {
    result += generatePoliceItem(item, index);
  });
  (_a = getSitemapArr(sitemap, finalSiteHref, sitemapBaseFileName)) == null ? void 0 : _a.forEach((item) => {
    result += addLine("Sitemap", item);
  });
  if (host) {
    let hostStr;
    if (typeof host === "boolean") {
      const { hostname } = new URL(site);
      hostStr = hostname;
    } else {
      hostStr = host;
    }
    result += addLine("Host", hostStr);
  }
  return result;
};

// src/data/pkg-name.ts
var packageName = "astro-robots-txt";

// src/index.ts
function formatConfigErrorMessage$1(err) {
  const errorList = err.issues.map((issue) => `${issue.path.join(".")}  ${issue.message + "."}`);
  return errorList.join("\n");
}
var createRobotsTxtIntegration = (options = {}) => {
  let config;
  return {
    name: packageName,
    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg;
      },
      "astro:build:done": async ({ dir }) => {
        const logger = new Logger(packageName);
        try {
          const opts = validateOptions$1(config.site, options);
          const finalSiteHref = new URL(config.base, config.site).href;
          let robotsTxtContent = getRobotsTxtContent(finalSiteHref, opts, config.site);
          if (opts.transform) {
            try {
              robotsTxtContent = await Promise.resolve(opts.transform(robotsTxtContent));
              if (!robotsTxtContent) {
                logger.warn("No content after transform.");
                return;
              }
            } catch (err) {
              logger.error("Error transforming content", getErrorMessage(err));
              return;
            }
          }
          fs$1.writeFileSync(new URL("robots.txt", dir), robotsTxtContent);
          logger.success("`robots.txt` is created.");
        } catch (err) {
          if (err instanceof ZodError) {
            logger.warn(formatConfigErrorMessage$1(err));
          } else {
            throw err;
          }
        }
      }
    }
  };
};
var src_default$2 = createRobotsTxtIntegration;

function parseI18nUrl(url, defaultLocale, locales, base) {
  if (!url.startsWith(base)) {
    return void 0;
  }
  let s = url.slice(base.length);
  if (!s || s === "/") {
    return { locale: defaultLocale, path: "/" };
  }
  if (s[0] !== "/") {
    s = "/" + s;
  }
  const locale = s.split("/")[1];
  if (locale in locales) {
    let path = s.slice(1 + locale.length);
    if (!path) {
      path = "/";
    }
    return { locale, path };
  }
  return { locale: defaultLocale, path: s };
}

function generateSitemap(pages, finalSiteUrl, opts) {
  const { changefreq, priority, lastmod: lastmodSrc, i18n } = opts ?? {};
  const urls = [...pages];
  urls.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  const lastmod = lastmodSrc?.toISOString();
  const { defaultLocale, locales } = i18n ?? {};
  let getI18nLinks;
  if (defaultLocale && locales) {
    getI18nLinks = createGetI18nLinks(urls, defaultLocale, locales, finalSiteUrl);
  }
  const urlData = urls.map((url, i) => ({
    url,
    links: getI18nLinks?.(i),
    lastmod,
    priority,
    changefreq
  }));
  return urlData;
}
function createGetI18nLinks(urls, defaultLocale, locales, finalSiteUrl) {
  const parsedI18nUrls = urls.map((url) => parseI18nUrl(url, defaultLocale, locales, finalSiteUrl));
  const i18nPathToLinksCache = /* @__PURE__ */ new Map();
  return (urlIndex) => {
    const i18nUrl = parsedI18nUrls[urlIndex];
    if (!i18nUrl) {
      return void 0;
    }
    const cached = i18nPathToLinksCache.get(i18nUrl.path);
    if (cached) {
      return cached;
    }
    const links = [];
    for (let i = 0; i < parsedI18nUrls.length; i++) {
      const parsed = parsedI18nUrls[i];
      if (parsed?.path === i18nUrl.path) {
        links.push({
          url: urls[i],
          lang: locales[parsed.locale]
        });
      }
    }
    if (links.length <= 1) {
      return void 0;
    }
    i18nPathToLinksCache.set(i18nUrl.path, links);
    return links;
  };
}

const SITEMAP_CONFIG_DEFAULTS = {
  entryLimit: 45e3
};

const localeKeySchema = z.string().min(1);
const SitemapOptionsSchema = z.object({
  filter: z.function().args(z.string()).returns(z.boolean()).optional(),
  customPages: z.string().url().array().optional(),
  canonicalURL: z.string().url().optional(),
  i18n: z.object({
    defaultLocale: localeKeySchema,
    locales: z.record(
      localeKeySchema,
      z.string().min(2).regex(/^[a-zA-Z\-]+$/gm, {
        message: "Only English alphabet symbols and hyphen allowed"
      })
    )
  }).refine((val) => !val || val.locales[val.defaultLocale], {
    message: "`defaultLocale` must exist in `locales` keys"
  }).optional(),
  entryLimit: z.number().nonnegative().optional().default(SITEMAP_CONFIG_DEFAULTS.entryLimit),
  serialize: z.function().args(z.any()).returns(z.any()).optional(),
  changefreq: z.nativeEnum(EnumChangefreq).optional(),
  lastmod: z.date().optional(),
  priority: z.number().min(0).max(1).optional()
}).strict().default(SITEMAP_CONFIG_DEFAULTS);

const validateOptions = (site, opts) => {
  const result = SitemapOptionsSchema.parse(opts);
  z.object({
    site: z.string().optional(),
    // Astro takes care of `site`: how to validate, transform and refine
    canonicalURL: z.string().optional()
    // `canonicalURL` is already validated in prev step
  }).refine((options) => options.site || options.canonicalURL, {
    message: "Required `site` astro.config option or `canonicalURL` integration option"
  }).parse({
    site,
    canonicalURL: result.canonicalURL
  });
  return result;
};

async function writeSitemap({
  hostname,
  sitemapHostname = hostname,
  sourceData,
  destinationDir,
  limit = 5e4,
  publicBasePath = "./"
}, astroConfig) {
  await mkdir(destinationDir, { recursive: true });
  const sitemapAndIndexStream = new SitemapAndIndexStream({
    limit,
    getSitemapStream: (i) => {
      const sitemapStream = new SitemapStream({
        hostname
      });
      const path = `./sitemap-${i}.xml`;
      const writePath = resolve(destinationDir, path);
      if (!publicBasePath.endsWith("/")) {
        publicBasePath += "/";
      }
      const publicPath = normalize(publicBasePath + path);
      let stream;
      if (astroConfig.trailingSlash === "never" || astroConfig.build.format === "file") {
        const host = hostname.endsWith("/") ? hostname.slice(0, -1) : hostname;
        const searchStr = `<loc>${host}/</loc>`;
        const replaceStr = `<loc>${host}</loc>`;
        stream = sitemapStream.pipe(replace(searchStr, replaceStr)).pipe(createWriteStream(writePath));
      } else {
        stream = sitemapStream.pipe(createWriteStream(writePath));
      }
      return [new URL(publicPath, sitemapHostname).toString(), sitemapStream, stream];
    }
  });
  let src = Readable.from(sourceData);
  const indexPath = resolve(destinationDir, `./sitemap-index.xml`);
  return promisify(pipeline)(src, sitemapAndIndexStream, createWriteStream(indexPath));
}

function formatConfigErrorMessage(err) {
  const errorList = err.issues.map((issue) => ` ${issue.path.join(".")}  ${issue.message + "."}`);
  return errorList.join("\n");
}
const PKG_NAME = "@astrojs/sitemap";
const OUTFILE = "sitemap-index.xml";
const STATUS_CODE_PAGES = /* @__PURE__ */ new Set(["404", "500"]);
const isStatusCodePage = (locales) => {
  const statusPathNames = new Set(
    locales.flatMap((locale) => [...STATUS_CODE_PAGES].map((page) => `${locale}/${page}`)).concat([...STATUS_CODE_PAGES])
  );
  return (pathname) => {
    if (pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    if (pathname.startsWith("/")) {
      pathname = pathname.slice(1);
    }
    return statusPathNames.has(pathname);
  };
};
const createPlugin = (options) => {
  let config;
  return {
    name: PKG_NAME,
    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg;
      },
      "astro:build:done": async ({ dir, routes, pages, logger }) => {
        try {
          if (!config.site) {
            logger.warn(
              "The Sitemap integration requires the `site` astro.config option. Skipping."
            );
            return;
          }
          const opts = validateOptions(config.site, options);
          const { filter, customPages, serialize, entryLimit } = opts;
          let finalSiteUrl;
          if (config.site) {
            finalSiteUrl = new URL(config.base, config.site);
          } else {
            console.warn(
              "The Sitemap integration requires the `site` astro.config option. Skipping."
            );
            return;
          }
          const shouldIgnoreStatus = isStatusCodePage(Object.keys(opts.i18n?.locales ?? {}));
          let pageUrls = pages.filter((p) => !shouldIgnoreStatus(p.pathname)).map((p) => {
            if (p.pathname !== "" && !finalSiteUrl.pathname.endsWith("/"))
              finalSiteUrl.pathname += "/";
            if (p.pathname.startsWith("/")) p.pathname = p.pathname.slice(1);
            const fullPath = finalSiteUrl.pathname + p.pathname;
            return new URL(fullPath, finalSiteUrl).href;
          });
          let routeUrls = routes.reduce((urls, r) => {
            if (r.type !== "page") return urls;
            if (r.pathname) {
              if (shouldIgnoreStatus(r.pathname ?? r.route)) return urls;
              let fullPath = finalSiteUrl.pathname;
              if (fullPath.endsWith("/")) fullPath += r.generate(r.pathname).substring(1);
              else fullPath += r.generate(r.pathname);
              let newUrl = new URL(fullPath, finalSiteUrl).href;
              if (config.trailingSlash === "never") {
                urls.push(newUrl);
              } else if (config.build.format === "directory" && !newUrl.endsWith("/")) {
                urls.push(newUrl + "/");
              } else {
                urls.push(newUrl);
              }
            }
            return urls;
          }, []);
          pageUrls = Array.from(/* @__PURE__ */ new Set([...pageUrls, ...routeUrls, ...customPages ?? []]));
          try {
            if (filter) {
              pageUrls = pageUrls.filter(filter);
            }
          } catch (err) {
            logger.error(`Error filtering pages
${err.toString()}`);
            return;
          }
          if (pageUrls.length === 0) {
            logger.warn(`No pages found!
\`${OUTFILE}\` not created.`);
            return;
          }
          let urlData = generateSitemap(pageUrls, finalSiteUrl.href, opts);
          if (serialize) {
            try {
              const serializedUrls = [];
              for (const item of urlData) {
                const serialized = await Promise.resolve(serialize(item));
                if (serialized) {
                  serializedUrls.push(serialized);
                }
              }
              if (serializedUrls.length === 0) {
                logger.warn("No pages found!");
                return;
              }
              urlData = serializedUrls;
            } catch (err) {
              logger.error(`Error serializing pages
${err.toString()}`);
              return;
            }
          }
          const destDir = fileURLToPath(dir);
          await writeSitemap(
            {
              hostname: finalSiteUrl.href,
              destinationDir: destDir,
              publicBasePath: config.base,
              sourceData: urlData,
              limit: entryLimit
            },
            config
          );
          logger.info(`\`${OUTFILE}\` created at \`${path.relative(process.cwd(), destDir)}\``);
        } catch (err) {
          if (err instanceof ZodError) {
            logger.warn(formatConfigErrorMessage(err));
          } else {
            throw err;
          }
        }
      }
    }
  };
};
var src_default$1 = createPlugin;

const FAST_REFRESH_PREAMBLE = react.preambleCode;
const versionsConfig = {
  17: {
    server: "@astrojs/react/server-v17.js",
    client: "@astrojs/react/client-v17.js",
    externals: ["react-dom/server.js", "react-dom/client.js"]
  },
  18: {
    server: "@astrojs/react/server.js",
    client: "@astrojs/react/client.js",
    externals: ["react-dom/server", "react-dom/client"]
  },
  19: {
    server: "@astrojs/react/server.js",
    client: "@astrojs/react/client.js",
    externals: ["react-dom/server", "react-dom/client"]
  }
};
function getReactMajorVersion() {
  const matches = /\d+\./.exec(version);
  if (!matches) {
    return NaN;
  }
  return Number(matches[0]);
}
function isUnsupportedVersion(majorVersion) {
  return majorVersion < 17 || majorVersion > 19 || Number.isNaN(majorVersion);
}
function getRenderer(reactConfig) {
  return {
    name: "@astrojs/react",
    clientEntrypoint: reactConfig.client,
    serverEntrypoint: reactConfig.server
  };
}
function optionsPlugin(experimentalReactChildren) {
  const virtualModule = "astro:react:opts";
  const virtualModuleId = "\0" + virtualModule;
  return {
    name: "@astrojs/react:opts",
    resolveId(id) {
      if (id === virtualModule) {
        return virtualModuleId;
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        return {
          code: `export default {
						experimentalReactChildren: ${JSON.stringify(experimentalReactChildren)}
					}`
        };
      }
    }
  };
}
function getViteConfiguration({ include, exclude, babel, experimentalReactChildren } = {}, reactConfig) {
  return {
    optimizeDeps: {
      include: [
        reactConfig.client,
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-dom"
      ],
      exclude: [reactConfig.server]
    },
    plugins: [react({ include, exclude, babel }), optionsPlugin(!!experimentalReactChildren)],
    resolve: {
      dedupe: ["react", "react-dom", "react-dom/server"]
    },
    ssr: {
      external: reactConfig.externals,
      noExternal: [
        // These are all needed to get mui to work.
        "@mui/material",
        "@mui/base",
        "@babel/runtime",
        "use-immer",
        "@material-tailwind/react"
      ]
    }
  };
}
function src_default({
  include,
  exclude,
  babel,
  experimentalReactChildren
} = {}) {
  const majorVersion = getReactMajorVersion();
  if (isUnsupportedVersion(majorVersion)) {
    throw new Error(`Unsupported React version: ${majorVersion}.`);
  }
  const versionConfig = versionsConfig[majorVersion];
  return {
    name: "@astrojs/react",
    hooks: {
      "astro:config:setup": ({ command, addRenderer, updateConfig, injectScript }) => {
        addRenderer(getRenderer(versionConfig));
        updateConfig({
          vite: getViteConfiguration(
            { include, exclude, babel, experimentalReactChildren },
            versionConfig
          )
        });
        if (command === "dev") {
          const preamble = FAST_REFRESH_PREAMBLE.replace(`__BASE__`, "/");
          injectScript("before-hydration", preamble);
        }
      }
    }
  };
}

// https://docs.astro.build/es/guides/deploy/render/#c%C3%B3mo-desplegar
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');
const baseUrl = env?.PUBLIC_BASE_URL || '';


// https://astro.build/config
const Config = defineConfig({
  'devToolbar': {
    'enabled': false
  },
  'site': baseUrl,
  'trailingSlash': 'always',
  'output': 'server',
  //'output': 'static',
  //'output': 'hybrid',
  //'adapter': node({
  //  'mode': 'standalone'
  //}),
  'adapter': vercelServerless(),
  'integrations': [
  // https://docs.astro.build/en/guides/styling/#sass-and-scss
  tailwindIntegration(), src_default(), src_default$1(),
  // https://www.npmjs.com/package/astro-robots-txt
  src_default$2({
    'sitemap': true,
    'sitemapBaseFileName': 'sitemap-index',
    'policy': [{
      'userAgent': '*',
      'allow': '/',
      'disallow': ['/admin', '/login'],
      'crawlDelay': 2
    }]
  })],
  // https://docs.astro.build/en/guides/internationalization/
  'i18n': {
    'defaultLocale': 'es',
    'locales': ['es', 'en'],
    'fallback': {
      'en': 'es'
    },
    'routing': {
      'prefixDefaultLocale': false
    }
  }
});

const title$9 = "Creadores de experiencias digitales";
const description$9 = "Somos una agencia creativa y apasionada dedicada a brindar soluciones digitales de alta calidad. Nuestro equipo de expertos en diseño y desarrollo web está listo para convertir tus ideas en realidad. Ya sea que necesite un sitio web hermoso, una aplicación móvil innovadora o una tienda en línea funcional, estamos aquí para ayudarlo a alcanzar sus objetivos digitales.";
const keywords$9 = "sitio web, web, sitios web, pro, apps, e-commerce, seo, diseño, desarrollo, ux, ui, accesibilidad, reaccionar, php, javascript, mecanografiado, nodejs, laravel, vue, scss, html, css, agencia de diseño web, creatividad, calidad, expertos, mobile, proyecto de diseño, soluciones personalizadas, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, módulos, sistemas, responsive, benchmarking, identidad visual, logo, logotipo, wix, drupal, desarrollo web";
const __vite_glob_0_0$1 = {
	title: title$9,
	description: description$9,
	keywords: keywords$9,
	"hero-title": "Nosotros",
	"hero-heading1": "Somos PRO",
	"hero-heading2": "Creadores de experiencias<br/> digitales.",
	"hero-paragraph": "Somos una agencia creativa y apasionada dedicada a brindar soluciones digitales de alta calidad. Nuestro equipo de expertos en diseño y desarrollo web está listo para convertir tus ideas en realidad. Ya sea que necesites un sitio web atractivo, una aplicación móvil innovadora o una tienda en línea funcional, estamos aquí para ayudarte a alcanzar tus objetivos digitales.",
	"team-heading1": "Somos Equipo",
	"team-heading2": "Nuestro objetivo: pensar afuera de la caja.",
	"team-paragraph": "Personas flexibles y adaptables, y sobre todo buenos compañeros. Nos encanta el trabajo colaborativo y nuestro propósito es: pensar afuera de la caja. Aunque no todo el tiempo, cuando tenemos que concentrarnos y acelerar, miramos para adelante y remamos todos juntos para sacar adelante cualquier proyecto.",
	"team-title": "Skills"
};

const title$8 = "Convertimos ideas en impacto digital";
const description$8 = "Diseño y desarrollo web. Somos una agencia creativa especializada en la creación de sitios web a medida y soluciones digitales. Nuestro equipo de diseñadores y desarrolladores web está listo para convertir tu visión en realidad. ¡Contáctanos para impulsar tu presencia en línea!";
const keywords$8 = "sitio, web, sitios, pro, apps, e-commerce, seo, diseño, desarrollo, ux, ui, accesibilidad, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, agencia, creativa, calidad, expertos, mobile, móvil, proyecto, soluciones, personalizadas, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, módulos, sistemas, responsive, benchmarking, identidad, visual, logo, logotipo, wix, drupal, diseño web, desarrollo web, desarrollo y diseño web";
const __vite_glob_0_1$1 = {
	title: title$8,
	description: description$8,
	keywords: keywords$8,
	"hero-heading": "Más de 800 clientes en 15 países",
	"hero-thin": "convertimos ideas en",
	"hero-strong": "impacto digital",
	"parallax-thin": "Somos<br/> creadores de",
	"parallax-strong": "experiencias<br/> digitales.",
	"parallax-paragraph": "Desde hace más de 15 años ayudamos a empresas a crear soluciones de impacto en la vida de sus clientes.",
	"parallax-button": "+ de nosotros",
	"whatwedo-heading-3": "¿A qué nos dedicamos?",
	"whatwedo-paragraph": "Desarrollamos sitios web, apps, e-commerce, acciones de engagement, campañas de SEO y todo lo que implique servicios de transformación digital para nuestros clientes.",
	"whatwedo-heading-5": "ALGUNAS",
	"whatwedo-accent": "tecnologías",
	"whatwedo-use": "que usamos:",
	"carousel-ours": "Nuestros",
	"carousel-clients": "clientes",
	"carousel-think": "opinan",
	"carousel-btn": "Ver proyecto",
	"us-btn-team": "Conocé nuestro equipo",
	"portfolio-heading": "Proyectos",
	"portfolio-btn-more": "Ver más +"
};

const title$7 = "Ideas que se convirtieron en experiencias digitales";
const description$7 = "Nuestro enfoque se basa en una combinación de creatividad, experiencia técnica y una profunda comprensión de las necesidades de cada cliente. Trabajamos estrechamente contigo en cada etapa del proyecto para asegurarnos de que se cumplan tus objetivos y se entregue un producto final que supere tus expectativas.";
const keywords$7 = "sitio, web, sitios, pro, apps, e-commerce, seo, diseño, desarrollo, ux, ui, accesibilidad, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, agencia, creativa, calidad, expertos, mobile, móvil, proyecto, soluciones, personalizadas, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, módulos, sistemas, responsive, benchmarking, identidad, visual, logo, logotipo, wix, drupal, diseño web, desarrollo web, desarrollo y diseño web";
const iconography$1 = "Iconografía";
const uikit$1 = "UI Kit";
const conceptualization$1 = "Conceptualización";
const __vite_glob_0_2$1 = {
	title: title$7,
	description: description$7,
	keywords: keywords$7,
	"hero-title": "Proyectos",
	"hero-heading1": "Nuestros trabajos",
	"hero-heading2": "Ideas que se convirtieron en<br/>experiencias digitales.",
	"hero-paragraph": "Nuestro enfoque se basa en una combinación de creatividad, experiencia técnica y una profunda comprensión de las necesidades de cada cliente. Trabajamos estrechamente contigo en cada etapa del proyecto para asegurarnos de que se cumplan tus objetivos y se entregue un producto final que supere tus expectativas. Explora nuestra cartera para ver algunos de nuestros proyectos más destacados y descubre cómo podemos ayudarte a alcanzar tus metas digitales.",
	"portfolio-btn-view": "Ver proyecto +",
	"portfolio-btn-go": "Ir al sitio",
	iconography: iconography$1,
	uikit: uikit$1,
	conceptualization: conceptualization$1
};

const title$6 = "Creamos plataformas digitales";
const description$6 = "Nos especializamos en ofrecer soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente, centrándonos en la creatividad, la usabilidad y el rendimiento. Ya sea que estés buscando establecer una presencia en línea impactante, expandir tu alcance móvil o potenciar tus ventas en línea, estamos aquí para ofrecerte las herramientas y la experiencia necesarias para alcanzar tus metas digitales.";
const keywords$6 = "sitio, web, sitios, pro, apps, e-commerce, seo, diseño, desarrollo, ux, ui, accesibilidad, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, agencia, creativa, calidad, expertos, mobile, móvil, proyecto, soluciones, personalizadas, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, módulos, sistemas, responsive, benchmarking, identidad, visual, logo, logotipo, wix, drupal, diseño web, desarrollo web, desarrollo y diseño web";
const __vite_glob_0_3$1 = {
	title: title$6,
	description: description$6,
	keywords: keywords$6,
	"hero-title": "Servicios",
	"hero-heading1": "A qué nos dedicamos",
	"hero-heading2": "Creamos plataformas<br/>digitales.",
	"hero-paragraph": "Nos especializamos en ofrecer soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente, centrándonos en la creatividad, la usabilidad y el rendimiento. Ya sea que estés buscando establecer una presencia en línea impactante, expandir tu alcance móvil o potenciar tus ventas en línea, estamos aquí para ofrecerte las herramientas y la experiencia necesarias para alcanzar tus metas digitales.",
	"parallax-thin": "Somos creadores de",
	"parallax-strong": "experiencias<br/> digitales.",
	"parallax-paragraph": "Desde hace más de 15 años ayudamos a empresas a crear soluciones de impacto en la vida de sus clientes.",
	"parallax-button": "+ de nosotros"
};

const lang$1 = "Español";
const hrefLang$1 = "es-ES";
const siteTitle$1 = "Pro";
const siteDescription$1 = "Servicios de diseño y desarrollo Web";
const title$5 = "Servicios de diseño y desarrollo Web";
const description$5 = "Diseño y desarrollo web. Somos una agencia creativa especializada en la creación de sitios web a medida y soluciones digitales. Nuestro equipo de diseñadores y desarrolladores web está listo para convertir tu visión en realidad. ¡Contáctanos para impulsar tu presencia en línea!";
const keywords$5 = "sitio, web, sitios, pro, apps, e-commerce, seo, diseño, desarrollo, ux, ui, accesibilidad, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, agencia, creativa, calidad, expertos, mobile, móvil, proyecto, soluciones, personalizadas, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, módulos, sistemas, responsive, benchmarking, identidad, visual, logo, logotipo, wix, drupal, diseño web, desarrollo web, desarrollo y diseño web";
const home$1 = "Inicio";
const aboutus$1 = "Nosotros";
const projects$1 = "Proyectos";
const services$1 = "Servicios";
const contact$1 = "Contáctanos";
const location$1 = "Dr. Mario Cassinoni 1011, Montevideo Uruguay";
const global$1 = {
	lang: lang$1,
	hrefLang: hrefLang$1,
	"hrefLang-EN": "en-GB",
	"hrefLang-ES": "es-ES",
	"lang-ES": "ESP",
	"lang-EN": "ENG",
	siteTitle: siteTitle$1,
	siteDescription: siteDescription$1,
	title: title$5,
	description: description$5,
	keywords: keywords$5,
	"404heading-1": "Oops, no encontramos lo que buscas!",
	"404gotoPage": "Ir a la página principal",
	home: home$1,
	aboutus: aboutus$1,
	projects: projects$1,
	services: services$1,
	contact: contact$1,
	"skip-main": "Saltar al contenido principal",
	"tag-design": "diseño",
	"tag-development": "desarrollo",
	"tag-frontend": "desarrollo frontend",
	"tag-uiux": "ux ui",
	"tag-ui-kit": "ui kit",
	"tag-ux-research": "ux research",
	"tag-ux-person": "user persona",
	"tag-ux-flow": "user flow",
	"tag-accessibility": "accesibilidad",
	"tag-react": "react",
	"tag-php": "php",
	"tag-javascript": "javascript",
	"tag-typescript": "typescript",
	"tag-node": "node.js",
	"tag-laravel": "laravel",
	"tag-vue": "vue",
	"tag-scss": "scss",
	"tag-html": "html",
	"tag-css": "css",
	"tag-architecture": "arq. de información",
	"tag-flow": "flujo de navegación",
	"tag-templates": "desarrollo de templates",
	"tag-migration": "migración",
	"tag-cms": "cms",
	"tag-drupal": "drupal",
	"tag-wordpress": "wordpress",
	"tag-smartcontract": "smart contract",
	"tag-figma": "figma",
	"tag-seo": "seo",
	"tag-angular": "angular",
	"tag-next": "next.js",
	"tag-nuxt": "nuxt.js",
	"tag-python": "python",
	"tag-net": ".net",
	"tag-api": "api",
	"tag-plugins": "plugins",
	"tag-modules": "módulos custom",
	"tag-systems": "sistemas",
	"tag-data": "datos",
	"tag-productivity": "productividad",
	"tag-responsive": "responsive",
	"tag-visual": "visual design",
	"tag-icons": "iconografía",
	"tag-interaction": "interacción",
	"tag-wireframes": "wireframes",
	"tag-testing": "user testing",
	"tag-usability": "usabilidad",
	"tag-metrics": "métricas",
	"tag-cards": "card sorting",
	"tag-benchmarking": "venchmarking",
	"tag-heuristic": "análisis heurístico",
	"tag-typography": "tipografía",
	"tag-branding": "marca",
	"tag-brandarq": "arquitectura de marca",
	"tag-colorpalette": "paleta cromática",
	"tag-logo": "logotipo",
	"tag-identity": "identidad visual",
	"bottom-heading": "¿Convertimos tus ideas en una <strong>experiencia digital?</strong>",
	"bottom-btn": "Contacto",
	location: location$1
};

const trans$2 = {
  'global': global$1,
};

const pages$1 = /* #__PURE__ */ Object.assign({"../../pages/_aboutus/i18n/es.json": __vite_glob_0_0$1,"../../pages/_home/i18n/es.json": __vite_glob_0_1$1,"../../pages/_projects/i18n/es.json": __vite_glob_0_2$1,"../../pages/_services/i18n/es.json": __vite_glob_0_3$1});
for (const [path, content] of Object.entries(pages$1)) {
  let page = path.split('/')?.[3];
  if (page) {
    page = page.replace('_', '');
    page = `${page.charAt(0).toUpperCase()}${page.slice(1).toLowerCase()}`;
    trans$2[ `pages${page}` ] = content;
  }
}

const title$4 = "Creators of digital experiences";
const description$4 = "We are a creative and passionate agency dedicated to providing high-quality digital solutions. Our team of experts in web design and development is ready to turn your ideas into reality. Whether you need a beautiful website, an innovative mobile app or a functional online store, we are here to help you achieve your digital goals.";
const keywords$4 = "website, web, websites, pro, apps, e-commerce, seo, design, development, ux, ui, accesibility, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, web design agency, creativity, quality, experts, mobile, design project, personalized solutions, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, modules, systems, responsive, benchmarking, visual identity, logo, logotipo, wix, drupal, web development";
const __vite_glob_0_0 = {
	title: title$4,
	description: description$4,
	keywords: keywords$4,
	"hero-title": "Who we are",
	"hero-heading1": "We are PRO",
	"hero-heading2": "creators of digital<br/> experiences",
	"hero-paragraph": "We are a creative and passionate agency dedicated to providing high-quality digital solutions. Our team of experts in web design and development is ready to turn your ideas into reality. Whether you need a beautiful website, an innovative mobile app or a functional online store, we are here to help you achieve your digital goals.",
	"team-heading1": "We are a team",
	"team-heading2": "Our goal is to think outside the box",
	"team-paragraph": "We are a team of flexible and adaptable people, and above all good colleagues. We love collaborative work and our purpose is to think outside the box. Although not all the time, when we have to focus and speed up, we all push forward together towards a common goal to get any project off the ground.",
	"team-title": "Skills"
};

const title$3 = "We turn ideas into digital impact";
const description$3 = "We develop websites, apps, e-commerce, engagement actions, SEO campaigns and everything that involves digital transformation services for our clients.";
const keywords$3 = "website, web, websites, pro, apps, e-commerce, seo, design, development, ux, ui, accesibility, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, web design agency, creativity, quality, experts, mobile, design project, personalized solutions, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, modules, systems, responsive, benchmarking, visual identity, logo, logotipo, wix, drupal, web development";
const __vite_glob_0_1 = {
	title: title$3,
	description: description$3,
	keywords: keywords$3,
	"hero-heading": "More than 800 clients in 15 countries",
	"hero-thin": "WE TURN IDEAS INTO",
	"hero-strong": "digital impact",
	"parallax-thin": "We are<br/> creators of",
	"parallax-strong": "digital experiences.",
	"parallax-paragraph": "15 years helping companies create solutions that impact people's lives.",
	"parallax-button": "+ About us",
	"whatwedo-heading-3": "What we do / our expertise",
	"whatwedo-paragraph": "We develop websites, apps, e-commerce, engagement actions, SEO campaigns and everything that involves digital transformation services for our clients.",
	"whatwedo-heading-5": "SOME OF THE",
	"whatwedo-accent": "TECHNOLOGIES",
	"whatwedo-use": "WE USE:",
	"carousel-ours": "What our",
	"carousel-clients": "clients",
	"carousel-think": "think",
	"carousel-btn": "Project",
	"us-btn-team": "Our team",
	"portfolio-heading": "Project",
	"portfolio-btn-more": "View more +"
};

const title$2 = "Ideas that become digital experiences";
const description$2 = "Our approach is based on a combination of creativity, technical expertise and a deep understanding of each client needs. We work closely with you at every stage of the project to ensure that your goals are met and a final product that exceeds your expectations is delivered. Browse our portfolio to see some of our most notable projects and find out how we can help you achieve your digital goals.";
const keywords$2 = "website, web, websites, pro, apps, e-commerce, seo, design, development, ux, ui, accesibility, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, web design agency, creativity, quality, experts, mobile, design project, personalized solutions, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, modules, systems, responsive, benchmarking, visual identity, logo, logotipo, wix, drupal, web development";
const iconography = "Iconography";
const uikit = "UI Kit";
const conceptualization = "Conceptualization";
const __vite_glob_0_2 = {
	title: title$2,
	description: description$2,
	keywords: keywords$2,
	"hero-title": "Projects",
	"hero-heading1": "Our work",
	"hero-heading2": "Ideas that become<br/>digital experiences.",
	"hero-paragraph": "Our approach is based on a combination of creativity, technical expertise and a deep understanding of each client needs. We work closely with you at every stage of the project to ensure that your goals are met and a final product that exceeds your expectations is delivered. Browse our portfolio to see some of our most notable projects and find out how we can help you achieve your digital goals.",
	"portfolio-btn-view": "View project +",
	"portfolio-btn-go": "Visit website",
	iconography: iconography,
	uikit: uikit,
	conceptualization: conceptualization
};

const title$1 = "We create digital platforms";
const description$1 = "We specialize in offering customized solutions that are tailored to the specific needs of each client, focusing on creativity, usability and performance. Whether you're looking to establish an impactful online presence, expand your mobile reach, or boost your online sales, we're here to provide you with the tools and expertise to achieve your digital goals.";
const keywords$1 = "website, web, websites, pro, apps, e-commerce, seo, design, development, ux, ui, accesibility, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, web design agency, creativity, quality, experts, mobile, design project, personalized solutions, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, modules, systems, responsive, benchmarking, visual identity, logo, logotipo, wix, drupal, web development";
const __vite_glob_0_3 = {
	title: title$1,
	description: description$1,
	keywords: keywords$1,
	"hero-title": "Services",
	"hero-heading1": "What we do",
	"hero-heading2": "We create digital<br/>platforms",
	"hero-paragraph": "We specialize in offering customized solutions that are tailored to the specific needs of each client, focusing on creativity, usability and performance. Whether you're looking to establish an impactful online presence, expand your mobile reach, or boost your online sales, we're here to provide you with the tools and expertise to achieve your digital goals.",
	"parallax-thin": "We are<br/> creators of",
	"parallax-strong": "digital experiences.",
	"parallax-paragraph": "15 years helping companies create solutions that impact people's lives.",
	"parallax-button": "+ About us"
};

const lang = "English";
const hrefLang = "en-GB";
const siteTitle = "Pro";
const siteDescription = "We turn ideas into digital impact";
const title = "We turn ideas into digital impact";
const description = "We develop websites, apps, e-commerce, engagement actions, SEO campaigns and everything that involves digital transformation services for our clients.";
const keywords = "website, web, websites, pro, apps, e-commerce, seo, design, development, ux, ui, accesibility, react, php, javascript, typescript, nodejs, laravel, vue, scss, html, css, web design agency, creativity, quality, experts, mobile, design project, personalized solutions, wordpress, joomla, html, css, react, cms, next.js, nuxt.js, .net, plugins, modules, systems, responsive, benchmarking, visual identity, logo, logotipo, wix, drupal, web development";
const home = "Home";
const aboutus = "About us";
const projects = "Projects";
const services = "Services";
const contact = "Contact us";
const location = "Dr. Mario Cassinoni 1011, Montevideo Uruguay";
const global = {
	lang: lang,
	hrefLang: hrefLang,
	"hrefLang-EN": "en-GB",
	"hrefLang-ES": "es-ES",
	"lang-ES": "ESP",
	"lang-EN": "ENG",
	siteTitle: siteTitle,
	siteDescription: siteDescription,
	title: title,
	description: description,
	keywords: keywords,
	"404heading-1": "Nothing to see here!",
	"404gotoPage": "Go to the home page",
	home: home,
	aboutus: aboutus,
	projects: projects,
	services: services,
	contact: contact,
	"skip-main": "Skip to main content",
	"tag-design": "design",
	"tag-development": "development",
	"tag-frontend": "frontend Development",
	"tag-uiux": "ux ui",
	"tag-ui-kit": "ui kit",
	"tag-ux-research": "ux research",
	"tag-ux-person": "user persona",
	"tag-ux-flow": "user flow",
	"tag-accessibility": "accesibility",
	"tag-react": "react",
	"tag-php": "php",
	"tag-javascript": "javascript",
	"tag-typescript": "typescript",
	"tag-node": "node.js",
	"tag-laravel": "laravel",
	"tag-vue": "vue",
	"tag-scss": "scss",
	"tag-html": "html",
	"tag-css": "css",
	"tag-architecture": "information arch.",
	"tag-flow": "flow navigation",
	"tag-templates": "template development",
	"tag-migration": "migration",
	"tag-cms": "cms",
	"tag-drupal": "drupal",
	"tag-wordpress": "wordpress",
	"tag-smartcontract": "smart contract",
	"tag-figma": "figma",
	"tag-seo": "seo",
	"tag-angular": "angular",
	"tag-next": "next.js",
	"tag-nuxt": "nuxt.js",
	"tag-python": "python",
	"tag-net": ".net",
	"tag-api": "api",
	"tag-plugins": "plugins",
	"tag-modules": "custom modules",
	"tag-systems": "systems",
	"tag-data": "data",
	"tag-productivity": "productivity",
	"tag-responsive": "responsive",
	"tag-visual": "visual design",
	"tag-icons": "iconography",
	"tag-interaction": "interaction",
	"tag-wireframes": "wireframes",
	"tag-testing": "user testing",
	"tag-usability": "usability",
	"tag-metrics": "metrics",
	"tag-cards": "card sorting",
	"tag-benchmarking": "venchmarking",
	"tag-heuristic": "heuristic analysis",
	"tag-typography": "typography",
	"tag-branding": "brand",
	"tag-brandarq": "brand arquitecture",
	"tag-colorpalette": "palettes",
	"tag-logo": "logo",
	"tag-identity": "visual identity",
	"bottom-heading": "Shall we turn your ideas into a <strong>digital experience?</strong>",
	"bottom-btn": "Contact us",
	location: location
};

const trans$1 = {
  'global': global,
};

const pages = /* #__PURE__ */ Object.assign({"../../pages/_aboutus/i18n/en.json": __vite_glob_0_0,"../../pages/_home/i18n/en.json": __vite_glob_0_1,"../../pages/_projects/i18n/en.json": __vite_glob_0_2,"../../pages/_services/i18n/en.json": __vite_glob_0_3});
for (const [path, content] of Object.entries(pages)) {
  let page = path.split('/')?.[3];
  if (page) {
    page = page.replace('_', '');
    page = `${page.charAt(0).toUpperCase()}${page.slice(1).toLowerCase()}`;
    trans$1[ `pages${page}` ] = content;
  }
}

const $$Astro$g = createAstro("http://localhost:4321");
const defaultLang = Config.i18n.defaultLocale;
Config.i18n.locales;
const trans = {
  "es": trans$2,
  "en": trans$1
};
function getRouteFromUrl(pathname) {
  let [, lang, route, ..._rest] = pathname.split("/");
  if (lang in trans)
    return [route, ..._rest].join("/");
  return [lang, route, ..._rest].join("/");
}
function t(i18Lang, i18nKey, fallback = true) {
  const [page, key] = i18nKey.split(":");
  return trans?.[i18Lang]?.[page]?.[key] || trans?.[defaultLang]?.[page]?.[key] || (fallback ? key : null);
}
const $$Utils = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Utils;
  const {
    i18Lang = Astro2.currentLocale,
    i18nKey = "siteTitle"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(t(i18Lang, i18nKey))}` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/i18n/utils.astro", void 0);

const $$Astro$f = createAstro("http://localhost:4321");
const $$Hreflang = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hreflang;
  const {
    lang = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link rel="alternate"${addAttribute(getAbsoluteLocaleUrl(lang), "href")} hreflang="x-default">${Config.i18n.locales.map((lang2) => renderTemplate`<link rel="alternate"${addAttribute(getAbsoluteLocaleUrl(lang2), "href")}${addAttribute(lang2, "hreflang")}>`)}` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Hreflang.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$e = createAstro("http://localhost:4321");
const $$GoogleTagManager = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$GoogleTagManager;
  const {
    id
  } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script async", "><\/script> <script>(function(){", "\n  window.dataLayer = window.dataLayer || [];\n  function gtag() { dataLayer.push(arguments); }\n  gtag('js', new Date());\n  gtag('config', dataLayerId);\n})();<\/script>"])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${id}`, "src"), defineScriptVars({ "dataLayerId": `${id}` }));
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/GoogleTagManager.astro", void 0);

const $$Astro$d = createAstro("http://localhost:4321");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Head;
  const {
    lang = "",
    page = "",
    error = false
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const baseUrl = new URL(Astro2.site);
  const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");
  const GTMID = env?.PUBLIC_GTM_ID || null;
  const datePublished = env?.PUBLIC_DATE_PUBLISHED || "";
  const dateModified = env?.PUBLIC_DATE_MODIFIED || "";
  const seo = {
    "title": t(lang, `pages${page}:title`, false),
    "description": t(lang, `pages${page}:description`, false),
    "keywords": t(lang, `pages${page}:keywords`, false)
  };
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link rel="dns-prefetch" href="https://fonts.gstatic.com"><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="Shortcut Icon" type="image/x-icon"${addAttribute(`${baseUrl}favicon.ico`, "href")}><link rel="sitemap" type="application/xml" title="Site map"${addAttribute(`${baseUrl}sitemap-index.xml`, "href")}>${renderComponent($$result2, "HreflangComponent", $$Hreflang, { "lang": lang })}${GTMID && renderTemplate`<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin="anonymous">`}${GTMID && renderTemplate`<link rel="dns-prefetch" href="https://www.googletagmanager.com">`}${GTMID && renderTemplate`<link rel="preload"${addAttribute(`https://www.googletagmanager.com/gtag/js?id=${GTMID}`, "href")} as="script">`}${seo?.title && renderTemplate`<title>${`${seo.title} - ${t(lang, "global:siteTitle")}`}</title>`}${seo?.title && renderTemplate`<meta name="title"${addAttribute(seo.title, "content")}>`}${seo?.description && renderTemplate`<meta name="description"${addAttribute(seo.description, "content")}>`}${seo?.keywords && renderTemplate`<meta name="keywords"${addAttribute(seo.keywords, "content")}>`}${seo?.title && renderTemplate`<meta property="og:title"${addAttribute(seo.title, "content")}>`}${seo?.description && renderTemplate`<meta name="og:description"${addAttribute(seo.description, "content")}>`}<meta property="og:locale"${addAttribute(t(lang, "global:hrefLang-ES"), "content")}><meta property="og:locale:alternate"${addAttribute(t(lang, "global:hrefLang-EN"), "content")}><meta property="og:site_name"${addAttribute(t(lang, "global:siteTitle"), "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta name="twitter:widgets:autoload" content="off"><meta name="twitter:widgets:csp" content="on"><meta name="twitter:widgets:theme" content="light"><meta name="twitter:card" content="summary"><meta name="twitter:url"${addAttribute(canonicalURL, "content")}>${seo?.title && renderTemplate`<meta name="twitter:title"${addAttribute(seo.title, "content")}>`}${seo?.description && renderTemplate`<meta name="twitter:description"${addAttribute(seo.description, "content")}>`}${datePublished && renderTemplate`<meta property="article:published_time"${addAttribute(datePublished, "content")}>`}${dateModified && renderTemplate`<meta property="article:modified_time"${addAttribute(dateModified, "content")}>`}${error && renderTemplate`<meta name="robots" content="noindex, nofollow">`}${error && renderTemplate`<meta name="errorpage" content="true">`}${error && renderTemplate`<meta name="errortype" content="404 - Not Found">`}${error && renderTemplate`<meta name="prerender-status-code" content="404">`}${!error && renderTemplate`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`}${GTMID && renderTemplate`${renderComponent($$result2, "GoogleTagManager", $$GoogleTagManager, { "id": GTMID })}`}${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Head.astro", void 0);

const $$SkipMain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="skip-main" href="#main"> ${renderComponent($$result, "Trans", $$Utils, { "i18nKey": "global:skip-main" })} </a>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/SkipMain.astro", void 0);

const $$Astro$c = createAstro("http://localhost:4321");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navigation;
  const {
    lang = "",
    route = ""
  } = Astro2.props;
  const pages = [
    { name: "global:aboutus", path: "aboutus" },
    { name: "global:projects", path: "projects" },
    { name: "global:services", path: "services" }
  ];
  return renderTemplate`${pages.map((page) => {
    const current = route.includes(page.path) ? true : false;
    return renderTemplate`${maybeRenderHead()}<li class="nav-item"><a${addAttribute(`nav-link ${current ? "active" : ""}`, "class")}${addAttribute(getAbsoluteLocaleUrl(lang, page.path), "href")}${addAttribute(0, "tabindex")}${addAttribute(t(lang, page.name), "aria-label")}${addAttribute(current ? "page" : false, "aria-current")}>${renderComponent($$result, "Trans", $$Utils, { "i18nKey": page.name })}</a></li>`;
  })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Navigation.astro", void 0);

function Language(props) {
  const {
    lang,
    aria,
    labelTop,
    textTop,
    labelMenu,
    textMenu,
    hrefLang,
    href
  } = props;
  const [open, setOpen] = useState(false);
  const changeLanguage = (event) => {
    const language = event.target.lang;
    if (language === lang) {
      event.preventDefault();
      return false;
    }
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "btn btn-secondary dropdown-toggle",
        role: "button",
        id: `dropdown-toggle-${aria}`,
        "aria-expanded": open ? true : false,
        tabIndex: 0,
        "aria-label": labelTop,
        href: "#main",
        onClick: (e) => {
          e.preventDefault();
          setOpen(!open);
        },
        children: textTop
      }
    ),
    /* @__PURE__ */ jsx("ul", { className: `dropdown-menu ${open ? "show" : ""}`, "aria-labelledby": `dropdown-toggle-${aria}`, children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        className: "dropdown-item",
        role: "button",
        lang: lang === "es" ? "en" : "es",
        "aria-label": labelMenu,
        hrefLang,
        href,
        onClick: (e) => changeLanguage(e),
        children: textMenu
      }
    ) }) })
  ] });
}

function MenuMobile({ children }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "navbar-toggler navbar-toggler-icon",
        "aria-label": "Close",
        onClick: () => setOpen(!open)
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `offcanvas offcanvas-top ${open ? "show" : ""}`, tabIndex: "-1", id: "offcanvasTop", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "offcanvas-body text-center", children: /* @__PURE__ */ jsxs("div", { className: "my-5", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "btn-close home",
          "aria-label": "Close",
          onClick: () => setOpen(!open)
        }
      ),
      children
    ] }) }) })
  ] });
}

const $$Astro$b = createAstro("http://localhost:4321");
function ImageBackground(src = "") {
  return src.includes("/") ? `url(/assets/${src})` : src;
}
const $$ImageAssets = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ImageAssets;
  const {
    src = "",
    alt = "",
    className = "",
    loading = "lazy",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(`/assets/${src}`, "src")}${addAttribute(alt, "alt")}${addAttribute(`image-assets initial ${className}`, "class")} decoding="async"${addAttribute(loading === "lazy" ? "low" : "high", "fetchpriority")}${addAttribute(loading, "loading")}${spreadAttributes(attrs)}>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/ImageAssets.astro", void 0);

const $$Astro$a = createAstro("http://localhost:4321");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    lang,
    props
  } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const isContactPage = pathname.includes("/contact");
  const route = getRouteFromUrl(pathname);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header id="top"${addAttribute(`p-3 mb-3 ${isContactPage ? "" : "pro"}`, "class")}${spreadAttributes(props)}><div class="container"><div class="d-flex justify-content-between"><nav class="navbar navbar-expand-lg w-100 navbar-light"><div class="container-fluid"><a${addAttribute(getAbsoluteLocaleUrl(lang, ""), "href")} class="d-flex align-items-center mb-lg-0 text-dark text-decoration-none me-5"${addAttribute(0, "tabindex")} aria-label="index">${renderComponent($$result2, "ImageAssets", $$ImageAssets, { "src": "logo-pro.svg", "alt": "Logo Pro", "loading": "eager", "class": "site-logo", "width": 100, "height": 30 })}</a>${renderComponent($$result2, "MenuMobile", MenuMobile, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/MenuMobile.jsx", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result2, "kx3qnzmi") }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`<a${addAttribute(getAbsoluteLocaleUrl(lang, ""), "href")} class="d-flex justify-content-center text-decoration-none"${addAttribute(0, "tabindex")} aria-label="index">${renderComponent($$result4, "ImageAssets", $$ImageAssets, { "class": "align-items-center", "src": "logo-pro-white.svg", "alt": "logo", "width": 44, "height": 44 })}</a><ul class="navbar-nav w-100 py-3">${renderComponent($$result4, "Navigation", $$Navigation, { "lang": lang, "route": route })}</ul><div class="cta-menu text-center">${!isContactPage && renderTemplate`<a${addAttribute(getAbsoluteLocaleUrl(lang, "contact"), "href")} class="btn btn-warning uppercase d-inline-block"${addAttribute(t(lang, "global:contact"), "aria-label")}${addAttribute(0, "tabindex")}>${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "global:contact" })}</a>`}<div class="languageSwitch">${renderComponent($$result4, "Language", Language, { "client:visible": true, "lang": lang, "aria": "mobile", "labelTop": lang === "es" ? t("es", "global:lang-ES") : t("en", "global:lang-EN"), "textTop": lang === "es" ? t("es", "global:lang-ES") : t("en", "global:lang-EN"), "labelMenu": lang === "es" ? t("es", "global:lang-EN") : t("en", "global:lang-ES"), "textMenu": lang === "es" ? t("es", "global:lang-EN") : t("en", "global:lang-ES"), "hrefLang": lang === "es" ? t("es", "global:hrefLang-EN") : t("en", "global:hrefLang-ES"), "href": getAbsoluteLocaleUrl(lang === "en" ? "es" : "en", route), "client:component-hydration": "visible", "client:component-path": "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Language.jsx", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result4, "wghlfkzj") })}</div></div>` })}` })}<div class="collapse navbar-collapse"><ul class="navbar-nav w-100">${renderComponent($$result2, "Navigation", $$Navigation, { "lang": lang, "route": route })}</ul><div class="w-100 d-flex justify-content-end gap-2">${!isContactPage && renderTemplate`<a${addAttribute(getAbsoluteLocaleUrl(lang, "contact"), "href")} class="btn btn-warning uppercase d-inline-block"${addAttribute(t(lang, "global:contact"), "aria-label")}${addAttribute(0, "tabindex")}>${renderComponent($$result2, "Trans", $$Utils, { "i18nKey": "global:contact" })}</a>`}<div class="dropdown d-inline">${renderComponent($$result2, "Language", Language, { "client:visible": true, "lang": lang, "aria": "desktop", "labelTop": lang === "es" ? t("es", "global:lang-ES") : t("en", "global:lang-EN"), "textTop": lang === "es" ? t("es", "global:lang-ES") : t("en", "global:lang-EN"), "labelMenu": lang === "es" ? t("es", "global:lang-EN") : t("en", "global:lang-ES"), "textMenu": lang === "es" ? t("es", "global:lang-EN") : t("en", "global:lang-ES"), "hrefLang": lang === "es" ? t("es", "global:hrefLang-EN") : t("en", "global:hrefLang-ES"), "href": getAbsoluteLocaleUrl(lang === "es" ? "en" : "es", route), "client:component-hydration": "visible", "client:component-path": "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Language.jsx", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result2, "t6emdzlx") })}</div></div></div></div></nav></div></div></header>` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Header.astro", "self");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro("http://localhost:4321");
const $$SchemaMarkup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SchemaMarkup;
  const {
    lang = "",
    page = ""
  } = Astro2.props;
  const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");
  const WebSiteUrl = new URL(Astro2.site);
  const WebPageUrl = new URL(Astro2.url.pathname, Astro2.site);
  const translationOfWork = getAbsoluteLocaleUrl(lang === "es" ? "en" : "es");
  const inLanguage = t(lang, "global:hrefLang");
  const ImageUrl = `${WebSiteUrl}/assets/logo-pro-international.png`;
  const LogoUrl = `${WebSiteUrl}/assets/logo-pro-international.png`;
  const datePublished = env?.PUBLIC_DATE_PUBLISHED || "";
  const dateModified = env?.PUBLIC_DATE_MODIFIED || "";
  const email = env?.PUBLIC_MAIL_REPLY_ACCOUNT || "";
  let BreadcrumbList = [];
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // WebSite
        "@type": "WebSite",
        "@id": `${WebSiteUrl}#WebSite`,
        "url": WebSiteUrl,
        "name": t(lang, "global:siteTitle"),
        "description": t(lang, "global:siteDescription"),
        "keywords": t(lang, "global:keywords"),
        "publisher": {
          "@id": `${WebSiteUrl}#Organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${WebSiteUrl}?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": inLanguage
      },
      {
        // WebPage
        "@type": "WebPage",
        "@id": WebPageUrl,
        "url": WebPageUrl,
        "name": t(lang, `${page}:title`),
        "description": t(lang, `${page}:description`),
        "keywords": t(lang, `${page}:keywords`),
        "inLanguage": inLanguage,
        ...datePublished !== "" && { "datePublished": `${datePublished}` },
        ...dateModified !== "" && { "dateModified": `${dateModified}` },
        "breadcrumb": {
          "@id": `${WebSiteUrl}#BreadcrumbList`
        },
        "isPartOf": {
          "@id": `${WebSiteUrl}#WebSite`
        },
        "about": {
          "@id": `${WebSiteUrl}#LocalBusiness`
        },
        "publisher": {
          "@id": `${WebSiteUrl}#Organization`
        },
        "translationOfWork": {
          "@id": `${translationOfWork}#WebSite`
        },
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [
              WebPageUrl
            ]
          }
        ]
      },
      {
        // BreadcrumbList
        "@type": "BreadcrumbList",
        "@id": `${WebSiteUrl}#BreadcrumbList`,
        "itemListElement": BreadcrumbList
      },
      {
        // LocalBusiness
        "@type": "LocalBusiness",
        "@id": `${WebSiteUrl}#LocalBusiness`,
        "url": WebSiteUrl,
        "legalName": t(lang, "global:siteTitle"),
        "name": t(lang, "global:siteTitle"),
        "description": t(lang, "global:siteDescription"),
        "image": {
          "@type": "ImageObject",
          "url": ImageUrl
        },
        "logo": {
          "@type": "ImageObject",
          "url": LogoUrl
        },
        "telephone": "+12122459600",
        ...email !== "" && { "email": `${email}` },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dr. Mario Cassinoni 1011",
          "addressLocality": "Montevideo",
          "addressRegion": "UY",
          "addressCountry": "UY",
          "postalCode": "11200"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "hasMap": "https://www.google.com/maps/search/?api=1&query=-34.9099283,-56.1648242",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -34.9099283,
          "longitude": -56.1648242
        }
      },
      {
        // Organization
        "@type": "Organization",
        "@id": `${WebSiteUrl}#Organization`,
        "url": WebSiteUrl,
        "name": t(lang, "global:siteTitle"),
        "description": t(lang, "global:siteDescription"),
        "keywords": t(lang, "global:keywords"),
        "logo": {
          "@type": "ImageObject",
          "inLanguage": inLanguage,
          "@id": `${WebSiteUrl}#/schema/logo/image/`,
          "image": ImageUrl,
          "caption": t(lang, "global:siteTitle")
        },
        "image": {
          "@id": `${WebSiteUrl}#/schema/logo/image/`
        },
        "sameAs": [
          "https://www.linkedin.com/company/pro-internacional"
        ]
      }
    ]
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script id="ldjson-script" type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(json)));
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/SchemaMarkup.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ScrollTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<a href="#top" title="Go Top" aria-label="Go Top" class="scrollTop">
Top
</a> <script>
  const scrollTop = document.querySelector('a.scrollTop');
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({'top':0,'left':0,'behavior':'smooth'});
  });
<\/script>`])), maybeRenderHead());
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/ScrollTop.astro", void 0);

const $$Astro$8 = createAstro("http://localhost:4321");
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const {
    className,
    children,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(className, "class")}${spreadAttributes(attrs)}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Paragraph.astro", void 0);

const $$Astro$7 = createAstro("http://localhost:4321");
const $$BusinessGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BusinessGroup;
  const {
    group = [],
    index = 1
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="footer-block-group"> <div class="container"> <span class="domus-group"> <a class="d-flex" href="https://domus.global" target="_blank" rel="opener noreferrer follow" aria-label="WE ARE DOMUS DOMUS" title="WE ARE DOMUS DOMUS"> ${index === 2 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
WE ARE ${renderComponent($$result2, "ImageAssetsComponent", $$ImageAssets, { "src": "domus-group/logo-domus-color.webp", "alt": "DOMUS", "className": "domus-global", "width": 85, "height": 67 })} DOMUS
` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ImageAssetsComponent", $$ImageAssets, { "src": "logo-domus-footer.webp", "alt": "DOMUS", "className": "domus-global", "width": 100, "height": 18 })} ` })}`} </a> </span> <ul class="row"> ${group.map((item) => renderTemplate`<li class="col"> <a${addAttribute(item.link, "href")} target="_blank" rel="opener noreferrer follow"${addAttribute(`group-image ${item.heading}`, "class")}${addAttribute(item.heading, "aria-label")}${addAttribute(item.heading, "title")}> ${renderComponent($$result, "ImageAssetsComponent", $$ImageAssets, { "src": item.image, "alt": item.heading, "width": 80, "height": 14 })} <span>${item.heading}</span> </a> </li>`)} </ul> </div> </div>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/BusinessGroup.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:4321");
const $$Location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Location;
  const {
    className = "",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(attrs)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(`icon icon-tabler icons-tabler-outline icon-tabler-map-pin ${className}`, "class")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path> </svg>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/icons/Location.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:4321");
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  const {
    className = "",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(attrs)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(`icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin ${className}`, "class")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> </svg>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/icons/LinkedIn.astro", void 0);

const GroupContent = [
	{
		heading: "Astroselling",
		link: "https://www.astroselling.com/es/",
		image: "domus-group/astroselling.svg"
	},
	{
		heading: "Doomit",
		link: "https://boomit.us",
		image: "domus-group/boomit.svg"
	},
	{
		heading: "Buybutton",
		link: "https://www.buybutton.app",
		image: "domus-group/buybutton.svg"
	},
	{
		heading: "Corefone",
		link: "https://corefone.com",
		image: "domus-group/corefone.svg"
	},
	{
		heading: "Delfos",
		link: "https://delfoslabs.com",
		image: "domus-group/delfos.svg"
	},
	{
		heading: "Hepic",
		link: "https://hepicmarketing.com",
		image: "domus-group/hepic.svg"
	},
	{
		heading: "Iugo",
		link: "https://www.iugo.com.uy/?lang=es",
		image: "domus-group/iugo.svg"
	},
	{
		heading: "Nublit",
		link: "https://nublit.com",
		image: "domus-group/nublit.svg"
	},
	{
		heading: "Pro",
		link: "https://www.prointernacional.com/",
		image: "domus-group/pro.svg"
	},
	{
		heading: "Sabyk",
		link: "https://www.sabyk.com",
		image: "domus-group/sabik.svg"
	},
	{
		heading: "Thinkup",
		link: "https://thinkupsoft.com/",
		image: "domus-group/thinkup.svg"
	}
];

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    lang
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<footer class="footer">${renderComponent($$result2, "ScrollTopComponent", $$ScrollTop, {})}<div class="container"><div class="d-flex flex-wrap justify-content-between align-items-center pt-5 pb-5"><div class="col-12 col-md-3 text-left"><span class="text-light"><a${addAttribute(getAbsoluteLocaleUrl(lang, ""), "href")} class="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1" aria-label="index">${renderComponent($$result2, "ImageAssetsComponent", $$ImageAssets, { "src": "logo-pro-footer.webp", "alt": "Logo Pro", "className": "site-logo pro_footer", "width": 100, "height": 30 })}</a></span></div><div class="col-12 col-md-6 my-3 my-md-0 text-md-center">${renderComponent($$result2, "LocationIcon", $$Location, { "class": "d-inline text-light size-5 opacity-90" })}${renderComponent($$result2, "ParagraphComponent", $$Paragraph, { "className": "text-light d-inline" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Trans", $$Utils, { "i18nKey": "global:location" })}` })}</div><div class="col-12 col-md-3 text-md-center"><ul class="list-unstyled m-0"><li><a class="text-light" href="https://www.linkedin.com/company/pro-internacional" target="_blank" rel="opener noreferrer nofollow" aria-label="linkedin" title="opens in a new window">${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "d-inline text-light size-5 opacity-90" })}</a></li></ul></div></div>${renderComponent($$result2, "BusinessGroupComponent", $$BusinessGroup, { "group": GroupContent, "index": 1 })}</div></footer>${renderComponent($$result2, "BusinessGroupComponent", $$BusinessGroup, { "group": GroupContent, "index": 2 })}` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLocale = Astro2.currentLocale;
  const {
    page = "home",
    error = false
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "HeadComponent", $$Head, { "lang": currentLocale, "page": page, "error": error })}${renderHead()}</head> <body> ${renderTemplate`${renderComponent($$result, "SkipMainComponent", $$SkipMain, {})}
      ${renderComponent($$result, "HeaderComponent", $$Header, { "lang": currentLocale })}
      <main> ${renderSlot($$result, $$slots["default"])} </main>
      ${renderComponent($$result, "FooterComponent", $$Footer, { "lang": currentLocale })}`} ${!error && renderTemplate`${renderComponent($$result, "SchemaMarkupComponent", $$SchemaMarkup, { "lang": currentLocale, "page": page })}`}   </body></html>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    className,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(className, "class")}${spreadAttributes(attrs)}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Section.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  const {
    level = 1,
    className = "",
    ...attrs
  } = Astro2.props;
  const Element = `h${level}`;
  return renderTemplate`${renderComponent($$result, "Element", Element, { "class": className, ...attrs }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/components/Heading.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const lang = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "global", ",": true, "error": "true" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionComponent", $$Section, { "className": "top internal d-flex align-items-center full" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="row"> <div class="col-6 mx-auto pattern01"> ${renderComponent($$result3, "HeadingComponent", $$Heading, { "level": 1, "className": "text-black" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "global:404heading-1" })} ` })} <br> ${renderComponent($$result3, "ParagraphComponent", $$Paragraph, { "className": "text-center h5" }, { "default": ($$result4) => renderTemplate` <a${addAttribute(getAbsoluteLocaleUrl(lang, ""), "href")} aria-label="home"> ${renderComponent($$result4, "Trans", $$Utils, { "i18nKey": "global:404gotoPage" })} </a> ` })} </div> </div> </div> ` })} ` })}`;
}, "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/404.astro", void 0);

const $$file = "/Users/user/Documents/Sites/DomusGlobal/prointernational/Astro/src/pages/404.astro";
const $$url = "/404/";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Utils as $, AstroIntegrationLogger as A, ImageBackground as I, Logger$1 as L, _404 as _, $$Heading as a, $$Section as b, $$ImageAssets as c, $$Layout as d, $$Paragraph as e, $$LinkedIn as f, getAbsoluteLocaleUrl as g, getEventPrefix as h, createI18nMiddleware as i, computeCurrentLocale as j, computePreferredLocale as k, levels as l, computePreferredLocaleList as m, normalizeTheLocale as n, ASTRO_LOCALS_HEADER as o, ASTRO_MIDDLEWARE_SECRET_HEADER as p, ASTRO_PATH_HEADER as q, ASTRO_PATH_PARAM as r, t };
