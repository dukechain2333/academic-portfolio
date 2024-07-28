import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ExperienceCard({ item }) {
    const cardContent = (
        <>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-2 md:mb-0 md:w-1/2">
                    <div className="font-semibold text-xl mb-2">{item.title}</div>
                    <div className="text-gray-600 mb-1 italic">{item.company}</div>
                    {item.project_name && <div className="text-gray-600 mb-1 italic"><span className="font-medium">Project:</span> {item.project_name}</div>}
                    {item.instructor && <div className="text-gray-600 mb-1 italic"><span className="font-medium">Instructor:</span> {item.instructor}</div>}
                </div>
                <div className="md:w-1/2 text-left md:text-right">
                    <div className="text-gray-600 mb-1">{item.start_date} - {item.end_date}</div>
                    <div className="text-gray-600 mb-1">{item.location}</div>
                </div>
            </div>
            <div className="mt-2">
                {item.description.length > 0 && (
                    <ul className="list-disc list-inside">
                        {item.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                )}
            </div>
            {item.href && (
                <div className="absolute bottom-2 right-2 hidden md:block">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-600" />
                </div>
            )}
        </>
    );

    return item.href ? (
        <a href={item.href} className="block relative mb-6 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 hover:shadow-lg transition active:bg-amber-200">
            <div className="absolute top-2 right-2 md:hidden">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-600" />
            </div>
            {cardContent}
        </a>
    ) : (
        <div className="relative mb-6 p-4 bg-amber-50 rounded-lg">
            {cardContent}
        </div>
    );
}

export default ExperienceCard;