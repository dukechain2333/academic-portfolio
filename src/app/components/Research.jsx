import React from "react";
import research from '../../../data/research.json';
import CustomLink from "@/app/components/CustomLink";

export default function Research() {
    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Research
            </div>
            {research.research.map(item => (
                <ResearchCard key={item.id} item={item}/>
            ))}
        </div>
    );
}


function ResearchCard({item}) {
    const cardContent = (
        <>
            <div className="flex items-center text-sm text-gray-500">
                {item.status && (
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'}`}>
                        {item.status}
                    </span>
                )}
            </div>
            <div className="text-xl font-semibold my-2">{item.research_name}</div>
            {Array.isArray(item.company) && item.company.length > 0 && (
                <div className="my-2 text-gray-600">
                    <span className="italic">{item.company.join(', ')}</span>
                </div>
            )}
            {item.project && (
                <div className="text-gray-600 mb-1 italic">
                    <span className="font-medium">Project:</span> {item.project}
                </div>
            )}
            {Array.isArray(item.instructor) && item.instructor.length > 0 && (
                <div className="text-gray-600 mb-1 italic">
                    <span className="font-medium">Instructor:</span> {item.instructor.join(', ')}
                </div>
            )}
            {Array.isArray(item.keywords) && item.keywords.length > 0 && (
                <div className="text-gray-600 mb-1 italic">
                    <span className="font-medium">Keywords:</span> {item.keywords.join(', ')}
                </div>
            )}
            {Array.isArray(item.collaborators) && item.collaborators.length > 0 && (
                <div className="text-gray-600 mb-1 italic">
                    <span className="font-medium">Collaborators:</span> {item.collaborators.join(', ')}
                </div>
            )}
            {Array.isArray(item.abstract) && item.abstract.length > 0 && (
                <div className="mt-2 mb-4 text-gray-600">
                    {item.abstract.map((paragraph, index) => (
                        <p key={index} className="mb-2">{paragraph}</p>
                    ))}
                </div>
            )}
            <p className="text-gray-500 flex justify-end text-md bold">
                {Object.entries(item.href).map(([key, value]) => (
                    <CustomLink href={value} key={key}>[{key}]</CustomLink>
                ))}
            </p>
        </>
    );

    return (
        <div
            className="block relative mb-6 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 shadow-md hover:shadow-lg transition">
            {cardContent}
        </div>
    );
}