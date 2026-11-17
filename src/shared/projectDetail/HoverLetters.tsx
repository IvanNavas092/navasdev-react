
import type { FC } from 'react';

interface HoverLettersProps {
    text?: string;
    isTitle?: boolean;
    isSubTitle?: boolean;
    isDeveloper?: boolean;
    isMini?: boolean;
}

export const HoverLetters: FC<HoverLettersProps> = ({
    text = '',
    isTitle = false,
    isSubTitle = false,
    isDeveloper = false,
    isMini = false,
}) => {

    const getHeroClasses = () => {
        if (isTitle) return 'text-[52vw] md:text-[22vw] lg:text-[25vw] xl:text-[30vw]';
        if (isSubTitle) return 'text-[25vw] md:text-[20vw] lg:text-[23vw] xl:text-[20vw]';
        if (isDeveloper) return 'text-[18vw] md:text-[20vw]';
        if (isMini) return 'text-[10vw] md:text-[12vw]';
        return '';
    };

    return (
        <h1
            className={`font-bold leading-[0.9] tracking-[-0.07em] flex gap-[0.02em] ${getHeroClasses()}`}
        >
            {text.split('').map((letter, index) => (
                <span
                    key={index}
                    className="off-color transition-colors duration-200 bebas cursor-default"
                >
                    {letter}
                </span>
            ))}
        </h1>
    );
};
