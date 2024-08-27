import React from 'react'
import {} from 'react-router-dom';


const Header = ({headline}) => {
   
    
    
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-light">
            <div className="d-flex align-items-center">
                <i className="bi bi-arrow-left cursor-pointer me-3 bold"></i>
                <span className="fw-bold fs-5">{headline}</span>
            </div>
        </div>
    </div>
  )
}

export default Header
