import React from "react";
import Certificate from "../assets/img/Certificate.png";
import googledrive from "../assets/img/googledrive.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";
import onedrive from "../assets/img/onedrive.png";
import Dropbox from "../assets/img/Dropbox.png";
import localdrive from "../assets/img/localdrive.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";
import chart from "../assets/img/chart.png";
import bg1 from "../assets/img/bg1.png"
import bg2 from "../assets/img/bg2.png"
const Certi = () => {
    return(
        <>
        <div className="bg-contain bg-cover bg-[url('assets/img/bg2.png')] bg-[url('assets/img/bg2.png')]">
            <div className="md:flex  md:items-center  md:px-[150px] md:py-[100px] md:pt-[70px] grid">
            <img className="md:w-[500px] md:mr-[90px] " src={Certificate}/>
          <div className="pl-[25px]">  
            <p className="text-[23px] text-[#2D1D60] font-semibold py-[20px] w-[200px] md:w-[320px]">You can authomate 100s of beautiful Certificates within the shortest time possible</p>
            <h3 className="text-[15px] text-[#2D1D6080] font-thin w-[200px] md:w-[320px]">Are you looking for the fastest way to generate, host and send multiples of shareable Certificates to your Trainees or participants?. </h3>
          </div>  </div>
          <div className="md:flex  md:items-center md:px-[150px] md:py-[100px] md:pt-[70px] grid px-[0px]">
            <div className="grid mr-[90px]">
            <h2  className="text-[23px] text-[#2D1D60] font-semibold py-[20px] w-[100px] md:w-[390px] w-[300px] ml-[10px]">Ability to share, send and save certificates on different medium.</h2>
            <p className="text-[15px] text-[#2D1D6080] font-thin w-[200px] md:w-[320px] w-[290px] ml-[10px]">Students can save or share their achievement Certificates on Linkedin, Facebook, Twitter, Mails and Drives. </p>
          </div>
           {/* <div className="md:flex grid">
            <div className="md:grid md: md:align-center pr[0px]" >
              <img src={googledrive} />
              <img className="md:pt-[40px]" src={facebook} />
              <img className="md:pt-[40px]" src={twitter} />
            </div>
            <div  className=" md:grid  md:align-center md:pt-[180px] pr-[0px]">
              <img className="md:w-[100px]" src={onedrive} />
              <img className="md:pt-[40px]" src={Dropbox}/>
            </div>
            <div className="md:grid align-center justify-center">
              <img src={localdrive}/>
              <img className="md:pl-[30px] md:pt-[40px]" src={instagram}/>
              <img className="md:pl-[30px] md:pt-[40px]" src={linkedin}/>
            </div> 
          </div>  */}
        </div>
        <div className="md:flex  md:items-center   md:px-[150px]  md:py-[100px]  md:pt-[70px]  md:justify-between pt-[40px] ">
          <img src={chart} />
         <div className="grid"> <p className="text-[23px] text-[#2D1D60] font-semibold  w-[200px] md:w-[320px] pt-[30px] pb-[20px] text:20px w-[305px] pl-[10px]">Personal Dashboard to track metrics and achievements.</p>
          <h3  className=" md:text-[15px] text-[#2D1D6080]  md:pt-[20px] font-thin w-[280px] md:w-[320px] pl-[10px]">You i’ll have access to your Dashboard to view, edit and reuse the existing files or Projects.</h3>
          </div>
        </div>
          </div>
        </>
    )



};
export default Certi