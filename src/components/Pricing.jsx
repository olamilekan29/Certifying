import thick from "../assets/img/thick.png"
import arrow from "../assets/img/arrow.png"
const Pricing = () =>{
    return(
        <>
        <div className="pb-[40px] border-b">
            <div className="text-center">
            <h2  className="text-[40px] text-[#2D1D60;] font-semibold pb-[20px] pt-[20px]">Pricing</h2>
            <h3  className="text-[15px] text-[#02020280] pb-[20px]">Choose subscription plan</h3>
         </div> 
         <div className="md:flex md:justify-between md:px-[190px] grid ml-[25px]">
         <div className="w-[270px]  ">
         <ul className=" border-2 border-[#9375F4] rounded-xl">  
         <div className="text-center"><h3 className="text-[21px] text-[#020202] pb-[10px] border-b mb-[10px]">Basic</h3></div> 
        
           <li className="pl-[50px]"> ₦0.00/ month</li>
           <li className="flex "> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Free storefront template</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Unlimited Product uploads</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Unlimited sales</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> SSL Security</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Payment mode integration</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/>  Order Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Whatsapp/SMS Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Email Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Sales Analytics</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Logistics integration</li>
           <li className="flex">  <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Free customer support &</li>
           <li className="flex "> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Social Media integration</li>
        </ul>
        <button className="bg-white mt-[40px] text-[#0EE99C] w-[270px]   h-[35px] border-2 border-[#9375F4] rounded mb-[30px]">Active</button>
        </div>
        

        <div className="w-[270px]   ">
        <ul className="border-2 border-[#9375F4] rounded-xl">  
        <div className="text-center"><h3 className="text-[21px] text-[#020202] pb-[10px] border-b mb-[10px]">Professional</h3></div> 
         
           <li className="pl-[50px]"> ₦5,000.00/ month</li>
           <li className="flex "> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Free storefront template</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Unlimited Product uploads</li>
           <li className="flex"> <img className="w-[19px] h-[16pnx] mr-[20px] ml-[10px]" src={thick}/> Unlimited sales</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> SSL Security</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Payment mode integration</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/>  Order Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Whatsapp/SMS Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Email Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Sales Analytics</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Logistics integration</li>
           <li className="flex">  <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Free customer support &</li>
           <li className="flex "> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Social Media integration</li>
        </ul>
        <button className="bg-[#9375F4] mt-[40px] mb-[30px] text-[#fff] w-[270px]   h-[35px] border-2 border-[#9375F4] rounded ">Subscribe</button>
        </div>


        <div className="w-[270px]  ">
        <ul className=" border-2 border-[#9375F4] rounded-xl">
             <div className="text-center"><h3 className="text-[21px]  text-[#020202] pb-[10px] border-b mb-[10px]">Enterprise</h3></div> 
          
           <li className="pl-[50px]"> ₦200,000.00/ month</li>
           <li className="flex "> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Free storefront template</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Unlimited Product uploads</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Unlimited sales</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> SSL Security</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Payment mode integration</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/>  Order Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Whatsapp/SMS Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Email Notifications</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Sales Analytics</li>
           <li className="flex"> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Logistics integration</li>
           <li className="flex">  <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Free customer support &</li>
           <li className="flex "> <img className="w-[19px] h-[16px] mr-[20px] ml-[10px]" src={thick}/> Social Media integration</li>
        </ul>
        <button className="bg-[#9375F4] mt-[40px] text-[#fff] w-[270px]   h-[35px] border-2 border-[#9375F4] rounded ">Subscribe</button>
        </div>

       </div>
       </div>
       {/* <div>
        <h1 className="text-center text-[#2D1D60] text-[30px]">FREQUENTLY ASKED <br /> QUESTIONS</h1>

        <div>
            <div>
                <span className="flex w-[200px] shadow-2xl">Can I automate multiple certificates <br /> at once to different users?  <img src={arrow}/></span>
            </div>
        </div>
        
       </div> */}
       
       
     
        </>
    )
};
export default Pricing