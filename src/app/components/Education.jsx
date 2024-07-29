import experience from '../../../data/experience.json';
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';


export default function Education() {
    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Education
            </div>
            <div>
                {experience.education.map((item) => (
                    <EducationCard key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
}


function EducationCard({item}) {
    const cardContent = (
        <>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <div className="font-semibold text-xl mb-2">{item.degree}</div>
                    <div className="text-gray-600 mb-1">{item.school}</div>
                    <div className="text-gray-600 mb-1">GPA: {item.gpa}</div>
                    <div className="text-gray-600 mb-1 md:hidden">
                        {item.status === 'In Progress' ? `${item.start_date} - Estimated: ${item.end_date}` : `${item.start_date} - ${item.end_date}`}
                    </div>
                </div>
                <div className="md:w-1/2 text-right hidden md:block">
                    <div className="text-gray-600 mb-1">
                        {item.status === 'In Progress' ? `${item.start_date} - Estimated: ${item.end_date}` : `${item.start_date} - ${item.end_date}`}
                    </div>
                </div>
            </div>
            <div className="mt-2">
                {item.courses.length > 0 && (
                    <div className="mb-4">
                        <div className="font-medium">Courses:</div>
                        <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                            {item.courses.map((course, index) => (
                                <li key={index} className="mr-2">{course}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {item.other_info.length > 0 && (
                    <div className="mb-2">
                        <div className="font-medium">Special:</div>
                        <ul className="list-disc list-inside">
                            {item.other_info.map((other, index) => (
                                <li key={index}>{other}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {item.href && (
                <div className="absolute bottom-2 right-2 hidden md:block">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-600"/>
                </div>
            )}
        </>
    );

    return item.href ? (
        <a href={item.href}
           className="block relative mb-6 p-4 bg-amber-50 shadow-md rounded-lg hover:bg-amber-100 hover:shadow-lg transition active:bg-amber-200">
            <div className="absolute top-2 right-2 md:hidden">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-600"/>
            </div>
            {cardContent}
        </a>
    ) : (
        <div className="mb-6 p-4 bg-amber-50 shadow-md rounded-lg relative">
            {cardContent}
        </div>
    );
}

