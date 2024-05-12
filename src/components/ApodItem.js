import React, { useEffect, useState } from 'react';

const ApodItem = ({ date, explanation, title, url }) => {
    const [shortenedVersion, setShortenedVersion] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setShortenedVersion(
            explanation
                .split("")
                .filter((_, idx) => isVisible ? idx < explanation.split("").length : idx < 250)
                .join("")
        );
    }, [explanation, isVisible]);

    return (
        React.createElement("div", { className: "text-white text-center font-medium text-xl" },
            React.createElement("pre", { className: "mb-2" }, date),
            React.createElement("p", { className: "mb-4" }, title),
            React.createElement("embed", { className: "w-full object-cover rounded-lg shadow-2xl h-96 mb-4", src: url, type: "" }),
            React.createElement("p", null,
                shortenedVersion.length > 0 && shortenedVersion,
                React.createElement("br", null),
                React.createElement("span", {
                    onClick: () => setIsVisible(prev => !prev),
                    className: "mt-3 block cursor-pointer text-md text-[#777]"
                },
                    isVisible ? " Click here to hide" : " Click here to see more")
            )
        )
    );
};

export default ApodItem;