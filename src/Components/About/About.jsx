



export default function About() {
    return <>

        <section className=" bg-primary text-white py-5 vh-100 d-flex align-items-center" >
            <div className="container ">

                <h2 className="fw-bold text-center text-uppercase text-white">About</h2>

                <div className=" m-auto d-flex  justify-content-center align-items-center my-3">
                    <div className="divider-custom-line">

                    </div>
                    <div className="divider-custom-icon">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row d-flex  justify-content-center">
                    <div className="col-lg-4 ml-auto">
                        <p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including
                            HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers,
                            and add your email address to the contact form to make it fully functional!
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </>
}