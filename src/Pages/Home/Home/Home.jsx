import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <PopularClasses></PopularClasses>
            </div>
            <div>
                <PopularInstructors></PopularInstructors>
            </div>
            <div>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;