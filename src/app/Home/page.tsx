import cssstyle from "./home.module.css"

const Home = () =>{
    return(
        <div>
            <h1 style={{color:"black",backgroundColor:"aquamarine"}}>This is home</h1>
            <h1 className={cssstyle.aquamarine}></h1></div>
    )
};
export default Home;