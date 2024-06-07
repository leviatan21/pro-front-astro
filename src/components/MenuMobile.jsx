import { useState } from 'react'

function MenuMobile({children}) {
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <button 
        type="button" 
        className="navbar-toggler navbar-toggler-icon" 
        aria-label="Close"
        onClick={()=>setOpen(!open)}
      />

      <div className={`offcanvas offcanvas-top ${open ? 'show' : ''}`} tabIndex="-1" id="offcanvasTop" aria-hidden="true">
        <div className="offcanvas-body text-center">
          <div className="my-5"> 
            <button 
              type="button" 
              className="btn-close home" 
              aria-label="Close"
              onClick={()=>setOpen(!open)}
            />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
export default MenuMobile