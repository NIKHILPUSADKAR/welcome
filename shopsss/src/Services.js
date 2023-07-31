import { Link } from "react-router-dom";

function Services (){

    return (
        <>
        <h1>Welcome to Services</h1>
        <button>SERVICES</button>
        <Link to={Services}>Services</Link>
        </>
    )
}
export default Services;