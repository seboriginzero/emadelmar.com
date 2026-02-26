import Image from "next/image"

interface FullMenuProps {
    categories: any[];
    data: Record<string, any[]>;
    allergyWarning: string;
}

export function FullMenu({ categories, data, allergyWarning }: FullMenuProps) {
    return (
        <div className="bg-white dark:bg-background min-h-[100vh] text-[#2a2a4a] dark:text-white font-serif pb-24 transition-colors">
            {/* Header / Logo */}
            <div className="flex flex-col items-center pt-16 pb-10 px-4">
                <div className="relative h-32 w-80 mb-8">
                    <Image
                        src="/logo.png"
                        alt="Ema del Mar Logo"
                        fill
                        className="object-contain dark:brightness-0 dark:invert"
                        priority
                    />
                </div>
                <div className="w-full max-w-4xl text-center px-4">
                    <p className="text-[15px] md:text-[17px] font-bold text-center italic mt-4 px-4 tracking-wide text-[#2a2a4a] dark:text-white/90">
                        {allergyWarning}
                    </p>
                </div>
            </div>

            {/* Menu Items */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-4 space-y-20">
                {categories.map((category) => {
                    const items = data[category.id]
                    if (!items || items.length === 0) return null

                    return (
                        <div key={category.id}>
                            <div className="flex justify-center mb-10">
                                <h2 className="text-3xl md:text-[34px] font-bold italic text-[#2a2a4a] dark:text-white border-b-[1.5px] border-[#2a2a4a] dark:border-white pb-1 px-2">
                                    {category.title}
                                </h2>
                            </div>

                            <div className="space-y-5">
                                {items.map((item: any, idx: number) => (
                                    <div key={idx} className="flex flex-col">
                                        <div className="flex justify-between items-end w-full relative">
                                            {/* Dotted line background */}
                                            <div className="absolute bottom-[6px] left-0 w-full border-b-[2px] border-dotted border-[#2a2a4a]/40 dark:border-white/40 -z-10"></div>

                                            <h3 className="text-[20px] md:text-[22px] bg-white dark:bg-background pr-2 text-[#2a2a4a] dark:text-white transition-colors">
                                                {item.name}
                                            </h3>
                                            <span className="text-[18px] md:text-[20px] bg-white dark:bg-background pl-2 text-[#2a2a4a] dark:text-white whitespace-nowrap transition-colors">
                                                {item.price}
                                            </span>
                                        </div>
                                        {item.description && (
                                            <p className="text-[14px] md:text-[16px] text-[#2a2a4a]/80 dark:text-white/70 mt-1 max-w-[85%] leading-snug">
                                                ({item.description})
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
