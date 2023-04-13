import React from 'react'
import $ from 'jquery';
export default function Contact() {


 
  $(function () {
  
    
    var inputFields = $('.floating-label-form-group input, .floating-label-form-group textarea');
    
    
    function showError(inputField) {
      var errorElement = inputField.siblings('.help-block');
      errorElement.html('<ul role="alert"><li>Please enter a value.</li></ul>');
    }
    
   
    function hideError(inputField) {
      var errorElement = inputField.siblings('.help-block');
      errorElement.html('');
    }
    
    
    $('#sendMessageButton').click(function() {
      var formIsValid = true;
      
      inputFields.each(function() {
        var currentField = $(this);
        
      
        if (currentField.val().trim() === '') {
          showError(currentField);
          formIsValid = false;
        } else {
          hideError(currentField);
        }
      });
      
      if (!formIsValid) {
        return false;
      }
    });
  });
  
  return <>

    <section class=" my-5" >
      <div class="container">

        <h2 class=" fw-bold text-center text-uppercase text-secondary mb-0">Contact Me</h2>

        <div className=" m-auto d-flex  justify-content-center align-items-center my-3">
          <div className="divider-custom-line bg-black">

          </div>
          <div className="divider-custom-icon">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="divider-custom-line bg-black"></div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto">

            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div className="control-group">
                <div className="form-group floating-label-form-group  mb-0 pb-2">
                  <label>Name</label>
                  <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." fdprocessedid="gyyslh" />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group  mb-0 pb-2">
                  <label>Email Address</label>
                  <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." fdprocessedid="wiln05" />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group  mb-0 pb-2">
                  <label>Phone Number</label>
                  <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." fdprocessedid="rhznkr" />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group  mb-0 pb-2">
                  <label>Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" fdprocessedid="yntxy">Send</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </>
}
