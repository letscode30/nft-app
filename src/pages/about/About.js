import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>

      <div className="container">
      <h2 className='text-white text-center mb-4'>About Us</h2>
        <div className="about-card">
       

          <div className="row">

            <div className='col-lg-6 col-md-6 col-sm 12 text-center mt-5'>


              <h2 className='text-white mt-4'>On a mission to environmental sustainability with NFT's</h2>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel ea beatae neque reiciendis
               sint Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Explicabo minima repellendus sapiente aliquid cum itaque.</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm 12 text-end'>

              <img src='/images/c2.jpg' alt='pic' className='img-fluid'/>
            </div>
          </div>
        </div>

        <div>
          
          <div className='text-center'>
          <h2 className='text-white text-center  mt-5 mb-4'>NFT Gen Marketplace</h2>
          
          <div className="text-center ">
        <video className="background-video vdo-style" type="video/mp4" autoPlay muted loop>
          <source src="/images/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        </div>
    </div>
        </div>

           <div className="container">
        <div className='mb-5'>

        <h2 className='text-white text-center  mt-5'>NFT Gen Marketplace with everything for everyone</h2>
        </div>

        <div className="about-card">
        

          <div className="row d-flex flex-wrap-reverse">

            <div className='col-lg-6 col-md-6 col-sm 12 text-center mt-5'>


            <img src='/images/c2.jpg' alt='pic' className='img-fluid'/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm 12 text-center  mt-5'>

            <h2 className='text-white mt-4'>On a mission to environmental sustainability with NFT's</h2>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel ea beatae neque reiciendis
               sint Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Explicabo minima repellendus sapiente aliquid cum itaque.</p>
              <button className="btn btn-navbar">Connect Wallet</button>


              
            </div>
          </div>
        </div>
        </div>
        
      

    </>
  )
}

export default About

/*<video src="/images/about.mp4" style={{width: "800px"}} type="video/mp4" autoPlay loop></video>
          </div>
          
          <div class="embed-responsive embed-responsive-16by9">
                <video class="embed-responsive-item"
               src="/images/about.mp4" type="video/mp4" style={{width: "800px"}} autoPlay loop> 
            </video>
          </div>
          
          */

          