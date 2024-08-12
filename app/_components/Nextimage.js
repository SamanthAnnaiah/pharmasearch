import Image from "next/image";

export function Nextimage({ source, altertext, width, height }) {
    return (
        <>
            <Image
                src={source}
                alt={altertext}
                className="dark:invert rounded-full inline-block mr-2 
                        transform transition-transform duration-300 hover:scale-125"
                width={width}
                height={height}
                priority
            />
        </>
    )
}