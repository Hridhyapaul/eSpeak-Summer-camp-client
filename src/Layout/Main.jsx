import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Home/Shared/Navigation";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;