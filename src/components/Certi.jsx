import React from "react";
import Certificate from "../assets/img/certificate.png"
import googledrive from "../assets/img/googledrive.png"
import facebook from "../assets/img/facebook.png"
import twitter from "../assets/img/twitter.png"
import onedrive from "../assets/img/onedrive.png"
import Dropbox from "../assets/img/Dropbox.png"
import localdrive from "../assets/img/localdrive.png"
import instagram from "../assets/img/instagram.png"
import linkedin from "../assets/img/linkedin.png"
const Certi = () =>{
    return(
        <>
          <div  className="bg-contain bg-cover bg-[url('assets/img/bg1.png')] bg-[url('assets/img/bg2.png')]">
            <div  className="md:flex  md:items-center  md:px-[150px] md:py-[100px] md:pt-[70px] grid">
              <img className="md:w-[500px] md:mr-[90px] w-[300px] py-[10px] px-[20px] " src={Certificate} alt="" />
              <div  className="pl-[25px]">
                <h2 className="md:text-[23px] text-[18px] text-[#2D1D60] font-[bold] py-[20px] w-[200px] md:w-[320px]">You can authomate 100s of beautiful Certificates within the shortest time possible</h2>
                <h3 className="md:text-[15px] text-[13px] text-[#2D1D6080] font-[thin] w-[200px] md:w-[320px]">Are you looking for the fastest way to generate, host and send multiples of shareable Certificates to your Trainees or participants?. </h3>
              </div>
            </div>
            <div  className="md:flex  md:items-center  md:px-[150px] md:py-[100px] md:pt-[70px] grid">
              
              <div  className="md:pl-[60px] pl-[30px] md:pr-[200px]">
                <h2 className="md:text-[23px] text-[18px] text-[#2D1D60] font-bold py-[20px] w-[250px] md:w-[320px]">Ability to share, send and save certificates on different medium.</h2>
                <h3 className="md:text-[15px] text-[13px] text-[#2D1D6080] font-[thin] w-[250px] md:w-[320px]">Students can save or share their achievement Certificates on Linkedin, Facebook, Twitter, Mails and Drives.  </h3>
              </div>
              
              <div className="flex  md:mr-[90px] md:py-[10px] md:px-[20px] pl-[10px] " >
                <span className="md:grid md: align-center justify-center md:mr-[30px]">
                  <img src={googledrive} alt="" />
                  <img className="pt-[30px]" src={facebook} alt="" />
                  <img className="pt-[30px]" src={twitter} alt="" />
                </span>
                <span className="md:grid md: align-center justify-center md:mr-[30px]">
                  
                  <img className="pt-[150px] w-[100px]" src={onedrive} alt="" />
                  <img className="pt-[30px] w-[100px]" src={Dropbox} alt="" />
                </span>
                <span className="md:grid md: align-center justify-center w-[70px]">
                  <img src={localdrive} alt="" />
                  <img className="pt-[30px]" src={instagram} alt="" />
                  <img className="pt-[30px]" src={linkedin} alt="" />
                </span>
              </div>
            </div>
          </div>
         
        </>
       
    )
}
export default Certi