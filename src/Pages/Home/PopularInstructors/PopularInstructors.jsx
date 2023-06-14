import useInstructorPage from "../../../Hooks/useInstructorPage";
import SectionTitle from "../Shared/SectionTitle";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {

    const [instructors] = useInstructorPage();

    return (
        <div className="mb-16">
            <SectionTitle subHeader='50+ Expert Instructor' headers='Our Popular Instructor'></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 mx-4 lg:mx-0 group">
                {
                    instructors.slice(0, 8).map((instructor, index) => <PopularInstructorsCard key={index} instructor={instructor}></PopularInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;