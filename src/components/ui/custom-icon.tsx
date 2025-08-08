import React from "react";

type IconProps = {
    name: "instagram" | "twitter" | "facebook" | "linkedin"; // add more icon names here
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    stroke?: boolean;
    className?: string;
};

// Store icon paths here
const ICON_PATHS: Record<string, string> = {
    instagram:
        "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
    twitter:
        "M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9 12.14 12.14 0 0 1-8.8-4.46 4.28 4.28 0 0 0 1.33 5.71 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19 4.28 4.28 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 18.58 12.12 12.12 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0 0 22.46 6z",
    facebook:
        "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    linkedin:
        "M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.6c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.94-2.88 4V24h-4V8.5z",

};

export const Icon: React.FC<IconProps> = ({
    name,
    size = 20,
    color = "currentColor",
    strokeWidth = 2,
    stroke = false,
    className = "",
}) => {
    const path = ICON_PATHS[name];

    if (!path) {
        console.warn(`Icon "${name}" not found in CustomIcon component`);
        return null;
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={stroke ? "none" : color}
            stroke={stroke ? color : "none"}
            strokeWidth={stroke ? strokeWidth : undefined}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d={path} />
        </svg>
    );
};
