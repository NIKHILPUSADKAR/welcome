import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import { Route, Routes } from "react-router-dom";
function App () {

    return (
        <>
       <Routes>

        <Route path='/' element={<About></About>}/>
        <Route path='Contact' element={<Contact></Contact>}/>
        <Routes path='/' element={<Services></Services>}/>

       </Routes>
        </>
    )
}
export default App;