import React from 'react'
import {} from 'react-router-dom';
import './Header.css'

const Header = ({headline, onBack}) => {
    
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-light">
            <div className="d-flex align-items-center">
                <button className='header_backbutton cursor-pointer me-3 bold' onClick={onBack}><i className="bi bi-arrow-left"></i></button>
                <span className="fw-bold fs-5">{headline}</span>
            </div>
        </div>
    </div>
  )
}

export default Header
