import experience from '../../../data/experience.json';
import React from "react";
import ExperienceCard from "@/app/components/ExperienceCard";

export default function Extracurricular() {
    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Extracurricular
            </div>
            <div>
                {experience.extracurricular.map((item) => (
                    <ExperienceCard key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
}

