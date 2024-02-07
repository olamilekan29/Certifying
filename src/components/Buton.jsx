const Buton = ({text,price})  => {
    console.log(text)
    return(
        <>
        <button className={`text-[black] items-center bg-[blue] w-[200px] h-[30px] mr-[20px]`}>{text},{price}</button></>
        
    )
};
export default Buton
