import React from 'react'
import "./Contact.css"
import { connects } from "../../data";


const Contact = () => {
  return (
    <>

    <div className="container-fluid">
  
      <h1 className='text-white text-center mb-5'>Contact Us</h1>

      <div className="row text-center">

      {

connects.map((cnt) => (

    <>
  <div className="col-lg-4 col-md-4 col-sm-12">

     <img src={cnt.img} alt="pic" className='img-cnt'/>
     <h3 className="white-color mt-2 mb-2">{cnt.name}</h3>
     <p className="text-white">{cnt.join}</p>

  </div>
     

    </>
)

)
}
      </div>

      <div className="text-white text-center mt-4">

        <h1>Drop us your message</h1>
        <p>Freely contact with us anytime. We are available here for you</p>
      </div>

      </div>


           <div className=" container bottom-bar text-center">
   
           <form>
  <div class="form-group">
  <div className="row mb-3">
    <div className="col-6">

    
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Full Name'/>
    
    </div>
    <div className="col-6">
    <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Subject'/>
  </div>

    </div>
  </div>
    <div className="row mb-3">
         <div className="col-12">
        
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
    
         </div>

    </div>
    <div className="row mb-3">
         <div className="col-12">
        
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone'/>
    
         </div>

    </div>
    <div className="row mb-3">
         <div className="col-12">
   <textarea class="form-control mt-1" id="textAreaExample6" rows="6" placeholder="Enter your Message"  name="message" spellcheck="false"></textarea>
    
         </div>

    </div>
  </div>
  
  <button type="submit" class="btn btn-navbar">Send Message</button>
</form>

     </div>

    

    </>
  )
}

export default Contact
