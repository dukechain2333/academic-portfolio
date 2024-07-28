import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

import React from "react";
import publications from '../../../data/publications.json';

export default function Publications() {
    const sortedPublications = publications.publications.sort((a, b) => new Date(b.year) - new Date(a.year));

    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Publications
            </div>
            {sortedPublications.map(item => (
                <PublicationCard key={item.id} item={item}/>
            ))}
        </div>
    );
}

function PublicationCard({ item }) {
    const highlightedCitation = item.citation.replace(item.bold_name, `<span class="font-bold">${item.bold_name}</span>`);

    const cardContent = (
        <>
            <div className="flex items-center text-sm text-gray-500">
                <span>{item.year}</span>
                {item.status && (
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold
                        ${item.status === 'Published' ? 'bg-green-100 text-green-800' :
                          item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'}`}>
                        {item.status}
                    </span>
                )}
            </div>
            <div className="text-lg mt-2" dangerouslySetInnerHTML={{ __html: highlightedCitation }}></div>
            {Array.isArray(item.abstract) && item.abstract.length > 0 && (
                <div className="mt-2 text-gray-600">
                    {item.abstract.map((paragraph, index) => (
                        <p key={index} className="mb-2">{paragraph}</p>
                    ))}
                </div>
            )}
            {Array.isArray(item.keywords) && item.keywords.length > 0 && (
                <div className="mt-2 text-gray-600">
                    <span className="font-medium">Keywords:</span> {item.keywords.join(', ')}
                </div>
            )}
        </>
    );

    return item.href ? (
        <a href={item.href} className="block relative mb-6 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 hover:shadow-lg transition active:bg-amber-200">
            <div className="absolute bottom-2 right-2">
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