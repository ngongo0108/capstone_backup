import IconStar from "@/assets/star.svg";

interface RatingStarProps {
    rating: number;
}

const RatingStarCustom = ({ rating } : RatingStarProps) => {

    const getStarRating = (rating : number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                //5 Star
                stars.push(
                    <img key={i} loading="lazy" src={IconStar} alt="5 Star" className="w-5 h-5"/>
                );
            }
            else {
                //Empty star
                stars.push(
                    <img key={i} loading="lazy" src={IconStar} alt="5 Star" className="w-5 h-5 opacity-50"/>
                )
            }
        }
        return stars;
    };

    return (
        <div className="flex items-center gap-2.5 py-2 pr-4 pl-4 max-w-full font-semibold text-amber-400 whitespace-nowrap rounded-xl bg-orange-500 bg-opacity-10 w-[199px]">
            <div className="grow self-start text-2xl">
                {rating.toFixed(1)}
            </div>
            <div className="flex gap-1.5">
                {getStarRating(rating)}
            </div>
        </div>
    )
}

export default RatingStarCustom