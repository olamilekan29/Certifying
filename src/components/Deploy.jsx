import deploy from "../assets/img/deploy.png"
const Deploy = () =>{
    return(
        <>
            <div className="md:flex bg-[#7853F1CC] md:p-[100px] grid">
                <div className="md:pl-[60px] md:pr-[30px] pl-[20px]">
                    <h2 className="md:text-[40px] text-[#EFEBFF;] font-semibold md:pb-[40px] md:pt-[60px] text-[30px] ">Easy, Efficient & Fast</h2>
                    <p className="md:text-[15px] text-[#EFEBFF] md:pb-[50px] text-[13px] pt-[20px]">You can easily Integrate your Excel or Google-<br/>Sheet  files to generate Multiple Certificates for your <br/> Trainees.</p>
                    <button className="md:mt-[40px]   md:w-[205px] h-[39px] bg-[none] text-center text-[white] border-2 border-[#fff]  rounded w-[250px] mt-[23px] ">GET STARTED</button>
                </div>
                <img  src={deploy}/>
            </div>
        </>
    )
};
export default Deploy