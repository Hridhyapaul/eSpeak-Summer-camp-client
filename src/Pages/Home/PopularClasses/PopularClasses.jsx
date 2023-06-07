import useClasses from "../../../Hooks/useClasses";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {

    const [courses] = useClasses();
    console.log(courses)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mx-4 lg:mx-0 justify-center">
            {
                courses.slice(0, 6).map((course, index) => <PopularClassesCard key={index} course={course}></PopularClassesCard>)
            }
        </div>
    );
};

export default PopularClasses;