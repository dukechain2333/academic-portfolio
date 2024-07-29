import React from "react";
import Image from 'next/image';
import projects from '../../../data/projects.json';
import CustomLink from "@/app/components/CustomLink";

export default function Projects() {
    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Projects
            </div>
            {projects.projects.map(item => (
                <ProjectCard key={item.id} project={item}/>
            ))}
        </div>
    );
}

const defaultImage = '/images/default_project.jpeg';

function ProjectCard({project}) {
    const {id, title, description, image, href} = project;
    const imageUrl = image || defaultImage;

    const cardContent = (
        <>
            <div className="relative w-full h-48">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                    priority={true}
                />
            </div>
            <div className="p-4 flex flex-col justify-between flex-1">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                {description && description.length > 0 && (
                    <div className="text-gray-600 mb-4">
                        {description.map((desc, index) => (
                            <p key={index} className="mb-2">{desc}</p>
                        ))}
                    </div>
                )}
                <p className="text-gray-500 flex justify-end text-md bold">
                    {Object.entries(href).map(([key, value]) => (
                        <CustomLink href={value} key={key}>[{key}]</CustomLink>
                    ))}
                </p>
            </div>
        </>
    );

    return (
        <div
            className="block relative mb-6 bg-amber-50 hover:bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition">
            {cardContent}
        </div>
    );
}