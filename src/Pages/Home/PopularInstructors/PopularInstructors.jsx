import useClasses from "../../../Hooks/useClasses";
import SectionTitle from "../Shared/SectionTitle";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {

    const [courses] = useClasses();

    return (
        <div className="mb-16">
            <SectionTitle subHeader='50+ Expert Instructor' headers='Our Popular Instructor'></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 mx-4 lg:mx-0 group">
                {
                    courses.slice(0, 8).map((course, index) => <PopularInstructorsCard key={index} course={course}></PopularInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;