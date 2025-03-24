import { ebgaramond, montserrat } from "@/lib/fonts";

export default function Page () {
    const text = "text-xl md:text-3xl lg:text-5xl text-[#FFFF99] drop-shadow-lg";
    const taglineText = "text-base md:text-xl lg:text-3xl drop-shadow-lg";
    
    return (
            <div className="h-full branding grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))]">
                <div className="col-start-2 row-start-2 col-span-3">
                    <h6 className={`${text} ${ebgaramond.className}`}>NxtBuck</h6>
                    <h4 className={`${taglineText} ${montserrat.className}`}>Built to simplify, designed to deliver.</h4>
                </div>
            </div>
    );
};