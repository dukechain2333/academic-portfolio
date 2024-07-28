"use client";

import personalInfo from '../../../data/personalInfo.json';
import React from "react";

function About() {
    return (
        <div className="flex flex-col m-auto leading max-w-5xl w-full items-start mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                About Me
            </div>
            <div>
                {personalInfo.self_description_detail.map((item, index) => (
                    <p key={index} className="mb-4 text-lg opacity-80">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default About;