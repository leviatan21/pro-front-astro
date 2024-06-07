import { useState } from 'react'

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
  } = props
  
  const [open, setOpen] = useState(false)

  const changeLanguage = (event) => {
    const language = event.target.lang

    /* Avoid reload same page */
    if (language === lang) {
      event.preventDefault()
      return false
    }
  }

  return (
    <>
      <a 
        className="btn btn-secondary dropdown-toggle"
        role="button"
        id={`dropdown-toggle-${aria}`}
        aria-expanded={open ? true : false}
        tabIndex={0}
        aria-label={labelTop}
        href="#main"
        onClick={(e)=> {
          e.preventDefault()
          setOpen(!open)
        }}
      >
        {textTop}
      </a>
      <ul className={`dropdown-menu ${open ? 'show' : ''}`} aria-labelledby={`dropdown-toggle-${aria}`}>
        <li>
          <a 
            className="dropdown-item" 
            role="button"
            lang={lang==='es' ? 'en': 'es'}
            aria-label={labelMenu}
            hrefLang={hrefLang}
            href={href}
            onClick={(e)=>changeLanguage(e)} 
          >
            {textMenu}
          </a>
        </li>
      </ul>
    </>
  )
}
export default Language