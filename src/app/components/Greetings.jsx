"use client";

import React from "react";

export default function Greetings({greetings_on_homepage}) {
    return (
        <div className="font-bold text-3xl md:text-5xl mb-10">
            {greetings_on_homepage}
        </div>
    )
}