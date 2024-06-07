import global from './global.json'

const trans = {
  'global': global,
}

const pages = import.meta.glob('../../pages/_*/i18n/es.json', {'import':'default', 'eager':true})
for (const [path, content] of Object.entries(pages)) {
  let page = path.split('/')?.[3]
  if (page) {
    page = page.replace('_', '')
    page = `${page.charAt(0).toUpperCase()}${page.slice(1).toLowerCase()}`
    trans[ `pages${page}` ] = content
  }
}

export default trans