import {link} from "react-router-dom"
const HOME = () => {
    return(
        <>
        <h1>this is home</h1>
        <link to={"/ABOUT"}><button>this is home</button></link>
        </>
    )
};
export default HOME