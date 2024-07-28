"use client";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faFile, faSchool} from '@fortawesome/free-solid-svg-icons';
import personalInfo from '../../../data/personalInfo.json';
import SocialMedia from "@/app/components/SocialMedia";

function NameCard() {
    return (
        <div className="flex flex-col items-center w-full p-4 md:pr-10 rounded-lg shadow-lg bg-amber-50 mb-10">
            <div className="flex flex-col md:flex-row items-center w-full justify-between">
                <div className="flex-shrink-0">
                    <Image
                        src="/images/avatar.jpeg"
                        alt="Profile Picture"
                        width={240}
                        height={240}
                        className="rounded-full aspect-square object-cover md:ml-5"
                    />
                </div>
                <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-right w-full">
                    <div className="text-3xl md:text-5xl font-bold">{personalInfo.name}</div>
                    <div className="text-lg md:text-xl">{personalInfo.self_description_brief}</div>
                    <div className="text-md md:text-lg mt-2">
                        {personalInfo.research_interests.join(' | ')}
                    </div>
                    <div
                        className="flex flex-col md:flex-row items-center md:items-center mt-2 justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-2">
                        <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faFile} className="mr-2 text-xl"/>
                            <a href={personalInfo.cv_link} className="text-blue-600 hover:underline">
                                Download CV
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faSchool} className="mr-2 text-xl"/>
                            <a href={personalInfo.work_place_url} className="text-blue-600 hover:underline">
                                {personalInfo.work_place}
                            </a>
                        </div>
                        <div className="flex items-center justify-center mt-2 md:mt-0">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xl"/>
                            <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                                {personalInfo.email}
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-center mt-4 justify-center md:justify-end">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NameCard;