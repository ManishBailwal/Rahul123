import React from "react";
import Navbar from "../components/navbar";

import "./consultancy.css";
import Footer from "../components/footer";
import Card from "../components/card";
import Form from '../components/form'
import hiw from '../assets/images/hiw.png'


function Consultancy() {
  return (
    <div className="con">
      <Navbar></Navbar>  

      {/*herosection*/}

      
      <div className="hsection">
        <h1 className="heading">Instant and complete vet care , </h1>
        <h1 className="heading2"> wherever you are</h1>

        <div className="b">
          <button type="button" className="btn">
            Consult Now
          </button>
        </div>
      </div>

      <div className="vets">
        <h2>Our Experts Vets</h2>
      </div>


      {/* cards  */}

      <div className="cards">
       <div className="box"> <Card></Card></div>
        <div className="box"><Card></Card></div>
        <div className="box"><Card></Card></div>
        <div className="box"><Card></Card></div>
      </div>

      < div className="form-section">

        <div className="why">
        <img src={hiw} />
        </div>
         

        
        <div className="cform"><Form></Form></div>
      </div>

      <Footer></Footer>
       

       
      
    </div>
  );
}

export default Consultancy;
