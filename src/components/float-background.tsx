import Circle from './circle';

const BackgroundFloat = () => {

    const Colors = [
        "bg-Fuchsia-300",
        "bg-Fuchsia-400",
        "bg-Fuchsia-500",
        "bg-Fuchsia-600",
        "bg-Fuchsia-700",
        "bg-Pink-300",
        "bg-Pink-400",
        "bg-Pink-500",
        "bg-Pink-600",
        "bg-Pink-700",
        "bg-Rose-300",
        "bg-Rose-400",
        "bg-Rose-500",
        "bg-Rose-600",
        "bg-Rose-700",
        "bg-Purple-300",
        "bg-Purple-400",
        "bg-Purple-500",
        "bg-Purple-600",
        "bg-Purple-700",
        "bg-Violet-300",
        "bg-Violet-400",
        "bg-Violet-500",
        "bg-Violet-600",
        "bg-Violet-700",
        "bg-Indigo-300",
        "bg-Indigo-400",
        "bg-Indigo-500",
        "bg-Indigo-600",
        "bg-Indigo-700",
        "bg-Blue-300",
        "bg-Blue-400",
        "bg-Blue-500",
        "bg-Blue-600",
        "bg-Blue-700",
    ]

    const sizes = [
        "w-[5%] h-[5%]",
        "w-[10%] h-[10%]",
        "w-[15%] h-[15%]",
        "w-[20%] h-[20%]",
        "w-[25%] h-[25%]",
        "w-[30%] h-[30%]",
        "w-[35%] h-[35%]",
        "w-[40%] h-[40%]",
        "w-[45%] h-[45%]",
        "w-[50%] h-[50%]",
        "w-[55%] h-[55%]",
        "w-[60%] h-[60%]",
        "w-[65%] h-[65%]",
    ]

    const getRandStartPos = () => {
        return Math.floor(Math.random() * 500) - 250;
    }

    const getRandEndPos = () => {
        return Math.floor(Math.random() * 300) - 150; 
    }

    const getRandDuration = () => {
        return Math.floor(Math.random() * 10) + 5;
    }

    const getRandColor = () => {
        return Colors[Math.floor(Math.random() * Colors.length)];
    }

    const getRandSize = () => {
        return sizes[Math.floor(Math.random() * sizes.length)];
    }

    const otherClasses = "absolute rounded-full opacity-50";

    const generateCircles = () => {
        let circles = [];
        for (let i = 0; i < 50; i++) {
            circles.push(
                <Circle 
                    key={i}
                    startPositionX={getRandStartPos()}
                    startPositionY={getRandStartPos()}
                    endPositionX={getRandEndPos()}
                    endPositionY={getRandEndPos()}
                    className={`${getRandColor()} ${getRandSize()} ${otherClasses}`}
                    duration={getRandDuration()}
                />
            )
        }
        return circles;
    }


    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {generateCircles()}
        </div>
    );
};

export default BackgroundFloat;
