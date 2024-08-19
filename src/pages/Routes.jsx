import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layouts from "./Layouts";
import NotFounde from "./NotFounde";
const Routest = () => {


    return(
        <>
          <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layouts/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<NotFounde/>}/>
            </Route>
           </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routest;