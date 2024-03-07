import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Chat from "../pages/Chat";
import Categories from "../pages/Category/Categories";
import FAQ from "../components/FAQ";
import Pregnantwomen from "../pages/Category/Pregnantwomen";

const AppRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/FAQ" element={<FAQ/>}></Route>
            <Route path="/pregnantwomen" element={<Pregnantwomen/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoute