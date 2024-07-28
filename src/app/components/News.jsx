"use client";

import React from "react";
import news from '../../../data/news.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function News() {
    const sortedNews = news.news.sort((a, b) => new Date(b.time) - new Date(a.time));

    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Recent News
            </div>
            {sortedNews.map(item => (
                item.href ? (
                    <a key={item.id} href={item.href} className="block relative mb-4 p-4 rounded-lg hover:bg-amber-100 hover:shadow-lg transition active:bg-amber-200">
                        <div className="absolute bottom-2 right-2">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-600" />
                        </div>
                        <div className="text-sm text-gray-500">{item.time}</div>
                        <div className="text-lg">{item.content}</div>
                    </a>
                ) : (
                    <div key={item.id} className="relative mb-4 p-4">
                        <div className="text-sm text-gray-500">{item.time}</div>
                        <div className="text-lg">{item.content}</div>
                    </div>
                )
            ))}
        </div>
    );
}