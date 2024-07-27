"use client";

import Layout from "./Layout";


function Content({children}) {
    return (
        <Layout>
            <main className="flex flex-col m-auto leading max-w-5xl w-full items-start p-5">
                {children}
            </main>
        </Layout>
    );
}

export default Content;