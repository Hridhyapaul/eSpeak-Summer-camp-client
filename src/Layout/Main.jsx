import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Home/Shared/Navigation";
import Footer from "../Pages/Home/Shared/Footer";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;