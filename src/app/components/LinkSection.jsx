import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import publications from '../../../data/publications.json';
import projects from '../../../data/projects.json';
import research from '../../../data/research.json';
import experience from "../../../data/experience.json";

const cards = [
  { title: 'Experience', path: '/experience', condition: experience.extracurricular.length > 0 || experience.job.length > 0 || experience.education.length > 0 },
  { title: 'Publications', path: '/publications', condition: publications.publications.length > 0 },
  { title: 'Research', path: '/research', condition: research.research.length > 0 },
  { title: 'Projects', path: '/projects', condition: projects.projects.length > 0 },
];

function LinkSection() {
  const filteredCards = cards.filter(card => card.condition);

  return (
    <div className="grid grid-cols-2 gap-6 mb-10 w-full">
      {filteredCards.map((card, index) => (
        <Link key={index} href={card.path} passHref>
          <div className="block relative p-4 md:p-6 bg-amber-50 hover:bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition min-h-[150px] md:min-h-[200px]">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{card.title}</h2>
            <div className="absolute bottom-4 right-4">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-600 text-xl md:text-2xl" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LinkSection;