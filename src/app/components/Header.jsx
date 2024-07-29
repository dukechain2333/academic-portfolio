import NavLink from './NavLink';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import personalInfo from '../../../data/personalInfo.json';
import publications from '../../../data/publications.json';
import projects from '../../../data/projects.json';

function Header({scrolled}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`z-10 pt-4 pb-4 mb-4 pl-0 top-0 right-0 left-0 transition border-b ${scrolled ? 'border-gray-400' : 'bg-transparent border-transparent'} sticky w-full backdrop-blur-md`}>
            <div className="container mx-auto flex justify-between items-center px-5 w-full max-w-5xl">
                <div className="flex items-center space-x-4">
                    <nav className="hidden md:flex items-center space-x-4">
                        <NavLink title="About" href="/"/>
                        {publications.publications.length > 0 && (<NavLink title="Publications" href="/publications"/>)}
                        <NavLink title="Research" href="/research"/>
                        {projects.projects.length > 0 && (<NavLink title="Projects" href="/projects"/>)}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x"/>
                        </button>
                    </div>
                </div>
                <div className="flex items-center ml-auto pr-3 md:pr-0">
                    <a href={personalInfo.domain} className="font-bold">{personalInfo.name}&apos;s Portfolio</a>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden flex flex-col items-start space-y-4 p-4">
                    <NavLink title="About" href="/"/>
                    <NavLink title="Publications" href="/publications"/>
                    <NavLink title="Research" href="/research"/>
                    <NavLink title="Projects" href="/projects"/>
                </nav>
            )}
        </header>
    );
}


export default Header;