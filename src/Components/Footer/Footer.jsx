import React from 'react'

export default function Footer() {
  return <>

    <footer className="my5 py-5 bg-dark">
      <div className="container text-center text-white">
        <div className='row'>
          <div className='col-md-4'>
            <h2 className='mb-4'>LOCATION</h2>
            <p>2215 John Daniel Drive <br />
              Clark, MO 65243</p>
          </div>
          <div className='col-md-4 '>
            <h2 className='mb-4'>AROUND THE WEB</h2>
            <div className="icon text-center d-flex flex-row justify-content-center">
            <a class="btn btn-outline-light btn-social rounded-circle mx-1 d-flex justify-content-center align-items-center " href="#!">
               <i class="fa-brands fa-fw fa-facebook-f"></i> 
               </a>
            <a class="btn btn-outline-light btn-social rounded-circle mx-1 d-flex justify-content-center align-items-center" href="#!">
               <i class="fa-brands fa-fw fa-twitter"></i> 
               </a>
            <a class="btn btn-outline-light btn-social rounded-circle mx-1 d-flex justify-content-center align-items-center" href="#!">
               <i class="fa-brands fa-fw fa-linkedin"></i> 
               </a>
            <a class="btn btn-outline-light btn-social rounded-circle mx-1 d-flex justify-content-center align-items-center" href="#!">
               <i class="fa-brands fa-fw fa-dribbble"></i> 
               </a>
            </div>
          </div>
          <div className='col-md-4'>
            <h2 className='mb-4'>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, MIT <br/> licensed Bootstrap theme created by <br/> Route</p>
          </div>
        </div>
      </div>
    </footer>
<div className='footer bg-secondary py-3 text-white'>
  <div className='justify-content-center d-flex align-items-center'>
    <p>Copyright © Your Website 2021</p>
  </div>
</div>

  </>


}
