import useInstructorPage from "../../../Hooks/useInstructorPage";
import Container from "../Shared/Container";
import SectionTitle2 from "../Shared/SectionTitle/SectionTitle2";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {

    const [instructors] = useInstructorPage();

    return (
        <div className="bg-deepColor font-body">
            <Container>
                <div className="mt-28 pt-28 pb-20">
                    <div className="mb-16">
                        <SectionTitle2 subHeader='50+ Expert Instructor' headers='Our Popular Instructor'></SectionTitle2>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 mx-4 lg:mx-0 group">
                            {
                                instructors.slice(0, 8).map((instructor, index) => <PopularInstructorsCard key={index} instructor={instructor}></PopularInstructorsCard>)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PopularInstructors;