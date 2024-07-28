"use client";

import Layout from "./Layout";
import personalInfo from '../../../data/personalInfo.json';

function Content({children }) {
    return (
        <Layout personalInfo={personalInfo}>
            <main className="flex flex-col m-auto leading max-w-5xl w-full items-start p-5">
                {children}
            </main>
        </Layout>
    );
}

export default Content;