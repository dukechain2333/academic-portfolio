import React from "react";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Content from "@/app/components/Content";
import Greetings from "@/app/components/Greetings";
import NameCard from "@/app/components/NameCard";
import News from "@/app/components/News";
import About from "@/app/components/About";
import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";

import personalInfo from '../../data/personalInfo.json';
import news from '../../data/news.json'
import experience from '../../data/experience.json'

config.autoAddCss = false

export default function Home() {

    return (
        <Content>
            {personalInfo.greetings_on_homepage &&
                <Greetings greetings_on_homepage={personalInfo.greetings_on_homepage}/>}

            <NameCard/>

            {news.news.length > 0 && <News/>}

            {personalInfo.self_description_detail.length > 0 && <About/>}

            {experience.education.length > 0 && <Education/>}

            {experience.job.length > 0 && <Experience/>}
        </Content>
    );
}
