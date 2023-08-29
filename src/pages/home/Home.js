import React from "react";
import "./Home.css"
import { projects, tech, topCategories, topdevelopers } from "../../data";


const Home = () => {

    return(
   
       <>
<div className="container-fluid">

    <div className="row home-topbar">

        <div className="col-lg-6 col-md-6 col-sm-12 left-col mb-5 mt-5">
     <h1 className="white-color mt-3"> Not Just Another Digital Agency</h1>
     <p className="white-color mt-2">We specilaize in providing innovative digital solutions to help your business grow and succeed in
      the ever-changing online landscape</p>

  <div className="home-btns mt-5">
  <button className="btn btn-navbar me-4">Explore</button>
      <button className="btn btn-navbar">Get a Quote</button>
  </div>
      

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 right-col">

            <h1 className="white-color text-center">Top Categories</h1>
            <hr className="text-white"/>

            <div className="row">

            {

                topCategories.map((category) => (
                    <>
                    <div className=" col-6 col-lg-4 col-md-4 col-sm-6 text-center">
                    <img src={category.img} alt="pic" className="categories-img img-fluid"/>
                  <p className="text-white category-name"> {category.name}</p>
                  </div>
                    </>
                )
                
                )
            }
            </div>
        </div>
    </div>

    <div className="top-developers mt-4">

  <h1 className="white-color text-center">Top Developers in our team </h1>
  <hr className="white-color mt-4"/>

  <div className="developersteam">

    <div className="row">

        {
            topdevelopers.map((dvr) => (

                <>
              <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-center">

                 <img src={dvr.img} alt="pic" className="developers-img img-fluid"/>
                 <h3 className="white-color mt-2 mb-2">{dvr.name}</h3>
                 <button className="btn-navbar btn mt-2 mb-2">Linkedin</button>

              </div>
                 
                </>
            )
            
            )
        }
    </div>
  </div>

    </div>

      <div className="myprojects">

        <h1 className="white-color text-center mt-5">Projects we mostly work on</h1>
        <hr className="white-color mt-3"/>

         <div className="top-projects mt-4"></div>
            <div className="row">

                {
                  projects.map((pro) => (

                    <>
                         <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center">

                             <img src={pro.img} alt="pic" className="pro-img img-fluid"/>
                             <h3 className="white-color mt-2 mb-2">{pro.name}</h3>
                             <button className="btn-navbar btn mb-3">{pro.visit}</button>


                         </div>


                    </>
                  )
                  
                  
                  
                  )

                }
            </div>
         </div>

         <div className="technologies">

          <h1 className="white-color mt-3 text-center">Technologies we work in</h1>
          <hr className="white-color mt-3"/>
          <div className="row">
          {

            tech.map((tch) => (


    <div className="col-lg-4 col-md-4 col-sm-12 text-center">

    <img src={tch.img} alt="pic" className="tech-img img-fluid"/>
 
  </div>
 

)

)
          }
          </div>
         </div>

         <div className="technologies">

    <h1 className="white-color mt-3 text-center">Competetive Advantages</h1>
     <hr className="white-color mt-3"/></div>
      
            <div className="row text-center text-white">

             <div className="col-lg-3 col-md-3 col-sm-12">

             <i className="fa fa-first-order fafa"></i>
             <h2>Brand</h2>
             <p>A strong brand image and positioning strategy.</p>
                

             </div>
             <div className="col-lg-3 col-md-3 col-sm-12">

           <i class="fa fa-line-chart fafa"></i>
             <h2>Sustainbility</h2>
              <p> Promote strong customer relations. </p>
   

            </div>
               <div className="col-lg-3 col-md-3 col-sm-12">

              <i class="fa fa-star-o fafa"></i>
                <h2>Quality</h2>
               <p>Delivering high quality products and services.</p>
   

            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">

           <i class="fa fa-lock fafa"></i>
           <h2>Privacy focused</h2>
            <p>keep your sensitive data secure. </p>
            </div>

            </div>

            <div className="row text-white mt-4 mb-4 d-flex flex-wrap-reverse">

              <div className="col-lg-6 col-md-6 col-sm-12 pt-4 pb-4 text-center">

                <img src="/images/c2.jpg" alt="pic"  className="img-fluid"/>

              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 pt-5 pb-4">

                <h1>Create, Sell and collect your best NFTs with us very fast</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui id, facilis praesentium aperiam ducimus distinctio?</p>
                <button className="btn btn-navbar">Connect Wallet</button>

             </div>
            </div>





         </div>
       </>
      
 
    )    
    }


export default Home


