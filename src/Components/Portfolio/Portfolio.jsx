import React, { useState } from 'react';
import cabin from '../img/portfolio/cabin.png';
import cake from '../img/portfolio/cake.png';
import circuse from '../img/portfolio/circus.png';
import game from '../img/portfolio/game.png';
import safe from '../img/portfolio/safe.png';
import sasubmarinefe from '../img/portfolio/submarine.png';

export default function Portfolio() {
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');

  const openLightbox = (src) => {
    setLightboxSrc(src);

    // console.log('moahemd');

    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // console.log('moahemd');
  };

  return (<>
    <section className=" portfolio py-5 "  >
      <div className="container">
        <h2 className="fw-bold text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div className=" m-auto d-flex text-black justify-content-center align-items-center my-3">
          <div className="divider-custom-line bg-black"></div>
          <div className="divider-custom-icon ">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="divider-custom-line bg-black"></div>
        </div>
        <div className="row ">
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="item mx-auto">
              <div
                className="layer d-flex align-items-center  bg-balck justify-content-center h-100 w-100"
                onClick={() => openLightbox(cabin)}
              >
                <div className="text-center text-white">
                  <i class="fa-solid fa-plus  text-black fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid img" src={cabin} alt="/" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="item mx-auto">
              <div
                className="layer d-flex align-items-center justify-content-center h-100 w-100"
                onClick={() => openLightbox(cake)}
              >
                <div className="text-center text-white">
                  <i className="fa-solid fa-plus text-black fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid img" src={cake} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="item mx-auto">
              <div
                className="layer d-flex align-items-center justify-content-center h-100 w-100"
                onClick={() => openLightbox(sasubmarinefe)}
              >
                <div className="text-center text-white">
                  <i className="fa-solid fa-plus text-black fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid img" src={sasubmarinefe} alt="" />
            </div>        </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="item mx-auto">
              <div
                className="layer d-flex align-items-center justify-content-center h-100 w-100"
                onClick={() => openLightbox(circuse)}
              >
                <div className="text-center text-white">
                  <i className="fa-solid fa-plus text-black fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid img" src={circuse} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="item mx-auto">
              <div
                className="layer d-flex align-items-center justify-content-center h-100 w-100"
                onClick={() => openLightbox(game)}
              >
                <div className="text-center text-white">
                  <i className="fa-solid fa-plus text-black fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid img" src={game} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="item mx-auto">
              <div
                className="layer d-flex align-items-center justify-content-center h-100 w-100"
                onClick={() => openLightbox(safe)}
              >
                <div className="text-center text-white">
                  <i className="fa-solid fa-plus text-black fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid img" src={safe} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Lightbox */}
    {lightboxOpen && (
  <div id='lihgtBoxContainer' >

    <div id='lihgtBox' className='rounded-3 p-5' >
    <div class=" text-center">
   
        <div class="container pb-5">
       
          <div class="row justify-content-center">
          <i class=" closes fas fa-times fa-3x d-flex justify-content-end text-primary"  onClick={() => closeLightbox()}></i>
            <div class="col-lg-8 text-black">
            
              <h2 class=" text-secondary text-uppercase m0" >Tasty Cake</h2>

              <div className=" m-auto d-flex  justify-content-center align-items-center my-3">
                    <div className="divider-custom-line bg-black">

                    </div>
                    <div className="divider-custom-icon">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="divider-custom-line bg-black"></div>
                </div>

            <img className="lightbox-image img-fluid rounded" src={lightboxSrc} alt="" />

              <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
              <button  class="btn btn-primary" onClick={() => closeLightbox()}>
                <i  class="fa-solid fa-times fa-fw"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )}
  </>
  );
}
