// https://docs.astro.build/es/guides/deploy/render/#c%C3%B3mo-desplegar
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables

import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');
const baseUrl = env?.PUBLIC_BASE_URL || '';

// https://astro.build/config
export default defineConfig({
  'devToolbar': {
    'enabled': false
  },
  'site': baseUrl,
  'trailingSlash': 'ignore',
  // Because of form contact
  //'output': 'server',
  //'output': 'static',
  'output': 'hybrid',
  'adapter': node({
    'mode': 'standalone'
  }),
  'adapter': vercel({
    'edgeMiddleware': true,
    'isr': true,
  }),
  'integrations': [
    react(), 
    // https://docs.astro.build/en/guides/styling/#sass-and-scss
    tailwind(), 
    sitemap(),
    // https://www.npmjs.com/package/astro-robots-txt
    robotsTxt({
      'sitemap': true,
      'sitemapBaseFileName': 'sitemap-index',
      'policy': [{
        'userAgent': '*',
        'allow': '/',
        'disallow': ['/admin', '/login'],
        'crawlDelay': 2
      }]
    })
  ],
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
  },
  'resolve': {
    'alias': {
      'bootstrap' : 'bootstrap/dist/js/bootstrap.bundle.js'
    }
  },
  'build': {
    'inlineStylesheets': 'never'
  },
  'redirects': {
    // Redirection index
    '/index.html': '/',
    '/eng/index.html': '/en',
    // Redirection about
    '/nosotros.html': '/aboutus',
    '/eng/aboutus.html': '/en/aboutus',
    // Redirection projects
    '/proyectos.html': '/projects',
    '/eng/projects.html': '/en/projects',
    '/proyectos/[...project]/[...slug].html': '/projects/[project]',
    '/eng/proyectos/[...project]/[...slug].html': '/en/projects/[project]',
    // Redirection services
    '/servicios.html': '/services',
    '/eng/services.html': '/en/services',
    // Redirection contact
    '/contacto.html': '/contact',
    '/eng/contact.html': '/en/contact'
  }
});