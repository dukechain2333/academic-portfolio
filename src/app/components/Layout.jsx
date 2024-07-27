"use client";

import {useState, useEffect} from 'react';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

import Header from './Header';
import Footer from './Footer';


function Layout({children}) {
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useScrollPosition(({currPos}) => {
        if (currPos.y <= -20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, [scrolled]);

    return (
        <div className="w-full">
            <Header scrolled={scrolled}/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;