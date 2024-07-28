"use client";

import React from "react";
import news from '../../../data/news.json';

export default function News() {
    const sortedNews = news.news.sort((a, b) => new Date(b.time) - new Date(a.time));

    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Recent News
            </div>
            {sortedNews.map(item => (
                <div key={item.id} className="mb-4">
                    <div className="text-sm text-gray-500">{item.time}</div>
                    <div className="text-lg">{item.content}</div>
                </div>
            ))}
        </div>
    )
}