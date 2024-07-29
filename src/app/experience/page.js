import Content from "@/app/components/Content";
import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";
import Extracurricular from "@/app/components/Extracurricular";
import experience from '../../../data/experience.json';

export default function Page() {
    return (
        <Content>
            {experience.education.length > 0 && <Education/>}

            {experience.job.length > 0 && <Experience/>}

            {experience.extracurricular.length > 0 && <Extracurricular/>}
        </Content>
    )
}