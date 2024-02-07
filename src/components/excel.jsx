import sheet from "../assets/img/sheet.png"
const excel = () =>{
    return(
        <>
            <div className="md:flex bg-[#C4C4C433] md:p-[100px] grid">
                <div className="md:pl-[60px] pl-[10px]">
                    <h2 className="md:text-[40px] text-[#2D1D60] font-semibold md:pb-[40px] md:pt-[60px] pb-[15px] pt-[20px] text-[30px]">Easy, Efficient & Fast</h2>
                    <p className="text-[15px] text-[#2D1D6080] md:pb-[50px] pb-[25px]">You can easily Integrate your Excel or Google-<br/>Sheet  files to generate Multiple Certificates for your <br/> Trainees.</p>
                    <button className="md:mt-[40px] bg-[#7853F1] md:w-[205px] h-[39px] text-center text-[white] rounded w-[250px] ml-[20px] ">GET STARTED</button>
                </div>
                <img className="md:pt-[0px] pt-[20px]"  src={sheet} />
            </div>
        </>
    )
};
export default excel