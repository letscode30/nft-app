import React from 'react'
import "./Projects.css"
import { Carousel } from 'react-bootstrap';
import { previous } from "../../data";

const Projects = () => {
  return (
    <>
    <div>
    <h1 className="white-color mt-3 text-center">NFT's Projects</h1>
    </div>
 
<div className='text-center mb-5 mt-4'>
<Carousel Fade>
  <Carousel.Item>
    <img
       className="img-carousel"
      src="/images/i4.jpg"
      alt="First slide"
    />

<img
       className="img-carousel"
      src="/images/i4.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-carousel"
      src="/images/i2.jpg"
      alt="Second slide"
    />
    <img
      className="img-carousel"
      src="/images/i2.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
     className='img-carousel img-fluid'
      src="/images/i3.jpg"
      alt="Third slide"
    />
    <img
     className='img-carousel'
    src="/images/i3.jpg"
    alt="Third slide"
  />
  </Carousel.Item>
  <Carousel.Item>
    <img
     className='img-carousel'
      src="/images/i1.jpg"
      alt="Third slide"
    />
    <img
     className='img-carousel'
    src="/images/i1.jpg"
    alt="Third slide"
  />
  </Carousel.Item>

  <Carousel.Item>
    <img
     className='img-carousel'
      src="/images/i5.jpg"
      alt="Third slide"
    />
    <img
     className='img-carousel'
    src="/images/i5.jpg"
    alt="Third slide"
  />
  </Carousel.Item>
</Carousel>
</div>



<div class="container">

<div className='mb-5'>
    <h1 className="white-color mt-3 text-center">Testimonials</h1>
    <hr className="white-color mt-3 "/>
    </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="face front-face">
                        <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                            alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                            Robert Garrison
                        </div>
                        <div class="designation">Android Developer</div>
                    </div>
                    <div class="face back-face">
                        <span class="fa fa-quote-left"></span>
                        <div class="testimonial">
                            I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                            pleasant.
                            The service was execellent. I will refer everyone I know.
                        </div>
                        <span class="fa fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="face front-face">
                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                            Jeffery Kennan
                        </div>
                        <div class="designation">Full Stack Developer</div>
                    </div>
                    <div class="face back-face">
                        <span class="fa fa-quote-left"></span>
                        <div class="testimonial">
                            Really good, you have saved our business! I made bacck the purchase price in just 48 hours!
                            man, this thing is getting better and better as I learn more about it.
                        </div>
                        <span class="fa fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="face front-face">
                        <img src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                            Issac Maxwell
                        </div>
                        <div class="designation">Finance Director</div>
                    </div>
                    <div class="face back-face">
                        <span class="fa fa-quote-left"></span>
                        <div class="testimonial">
                            Account keeper is the most valuable business research we have EVER purchased. Without
                            electrician, we would ahave gone bankrupt by now.
                        </div>
                        <span class="fa fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
           

   
            <div className="container">

            
            <div className='mb-5'>
          <h1 className="white-color mt-3 text-center">Our Previous Projects</h1>
          <hr className="white-color mt-3"/>
          </div>

            <div className="row">
              <div className='col-lg-3 col-md-3 col-sm-12 text-white text-center mt-2'>
                
                 <img src='/images/lc2.jpg' alt='pic' className='mb-3 img-fluid'/>
                 <h3 className='mb-3'>QLAB</h3>
                 <h5>@qlab</h5>
                 <h6>Followers.<strong>1M+</strong></h6>
                 <div className='mid-box mt-3'>
                 <button className="side-btn">Activities</button>
                 <button className="side-btn">Testimonials</button>
                 <button className="side-btn">Projects</button>
                 <button className="side-btn">Case Studies</button>
                 </div>
                 
              </div>
                 <div className='col-lg-9 col-md-9 col-sm-12'>

                    <div className="row">
      
                        {
                           previous.map((pre) => (

                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 text-center text-white'>

                               <img src={pre.img} alt='pic' className='tech-img1 mb-3 mt-2 img-fluid'/>
                               <h3>{pre.heading}</h3>
                                  
                            </div>




                           ))

                        }
                       
                    
                 </div>


            </div>  
            </div>
           </div>
    </>
  )
}

export default Projects
