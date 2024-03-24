import Circle from "./circle";

const BackgroundFloat = () => {
    return (
        <div className=" relative h-screen w-screen overflow-clip">
            <Circle
  startPositionX={0}
  startPositionY={0}
  endPositionX={100}
  endPositionY={100}
  className="h-10 w-10 bg-red-500 rounded-full"
  duration={30}
/>
        </div>
    );
}

export default BackgroundFloat;