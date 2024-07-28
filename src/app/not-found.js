import Link from 'next/link';
import personalInfo from '../../data/personalInfo.json';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600">
                {personalInfo.name} would like you to know that you are in the wrong direction.
            </p>
            <p className="text-lg text-gray-600 mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily
                unavailable.
            </p>
            <Link href="/"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Go to Homepage
            </Link>
        </div>
    );
}