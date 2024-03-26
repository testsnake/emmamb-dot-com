import Circle from "./circle";

const BackgroundFloat = () => {
    return (
        <div className=" relative h-screen w-screen overflow-clip">
            <Circle
  startPositionX={-100}
  startPositionY={250}
  endPositionX={5}
  endPositionY={50}
  className="h-[50%] w-[50%] bg-red-500 rounded-full"
  duration={30}
/>
        </div>


    );
}

export default BackgroundFloat;