"use client";

import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollUpButton = () => {
    const [buttonVisible, setButtonVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const checkScroll = () => {
        if (window.scrollY > 300) setButtonVisible(true);
        else setButtonVisible(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`${
                buttonVisible ? "fixed" : "hidden"
            } right-6 bottom-6 bg-black hover:bg-zinc-950 border border-gray-600 rounded-full p-3 transition-all duration-300`}
        >
            <IoIosArrowUp className="w-6 h-6 text-white" />
        </button>
    );
};

export default ScrollUpButton;
