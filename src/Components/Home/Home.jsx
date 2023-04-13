
import React from 'react'
import MyImageSvg from '../img/avataaars.svg';
export default function Home() {

    
  return <>
  
  <header className=" bg-primary text-white text-center vh-100 d-flex align-items-center">
            <div className="container d-flex align-items-center flex-column">
           
                <img className=" w-25  mb-5" src={`${MyImageSvg}`} alt=""/>
                
                <h1 className=" text-uppercase  mb-0">Start React</h1>
                
                <div className=" d-flex align-items-center">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon px-3"><i className="fa-solid fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <p className=" font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
        
  
  </>
    
  
}
