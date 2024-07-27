"use client";

import personalInfo from '../../../data/personalInfo.json';
import SocialMedia from './SocialMedia';


function Footer() {

    return (
        <footer className="w-full">
            <div
                className="mb-9 pb-0 px-6 max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-between text-sm opacity-60 m-auto pt-20">
                <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()}. {personalInfo.name}</p>
                <div className="mb-4 md:mb-0">
                    <SocialMedia/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;