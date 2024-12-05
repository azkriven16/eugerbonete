import Image from "next/image";

export function Experience() {
    return (
        <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center">
            <h2 className="text-sm md:text-lg md:tracking-widest mx-auto uppercase font-semibold">
                Companies I worked with
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <Image
                    src="/digipay.png"
                    alt="Digipay"
                    height={300}
                    width={300}
                />
                <Image
                    src="/rocketshyft.webp"
                    alt="Digipay"
                    height={300}
                    width={300}
                />
            </div>
        </div>
    );
}
