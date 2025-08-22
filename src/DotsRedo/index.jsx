import React from "react";

const DotRedo = () => {
  const [point, setPoint] = React.useState([]);
  const [redo, setRedo] = React.useState([]);
  const onClickDot = (e) => {
    const newPoint = {
      x: e.clientX,
      y: e.clientY,
    };
    setPoint([...point, newPoint]);
    setRedo([]);
  };

  const undo = () => {
    const lastPoint = point[point.length - 1];
    setRedo([...redo, lastPoint]);
    setPoint([...point.slice(0, point.length - 1)]);
  };

  const redoFn = () => {
    const lastRedo = redo[redo.length - 1];
    setPoint([...point, lastRedo]);
    setRedo([...redo.slice(0, redo.length - 1)]);
  };

  return (
    <div>
      <Box points={point} onClickDot={onClickDot} />
      <div className="flex gap-2 mt-2 justify-center [&_button]:border [&_button]:p-2 [&_button]:rounded-md [&_button]:cursor-pointer">
        <button onClick={undo}>Undo</button>
        <button onClick={redoFn}>Redo</button>
      </div>
    </div>
  );
};

export default DotRedo;

const Box = ({ points, onClickDot }) => {
  return (
    <div className="w-[70%] h-[60vh] mx-auto mt-4 border" onClick={onClickDot}>
      {points.map((item, ind) => {
        return (
          <div
            key={ind}
            className="size-4 bg-black absolute rounded-full"
            style={{ left: item.x, top: item.y }}
          ></div>
        );
      })}
    </div>
  );
};
//https://www.youtube.com/watch?v=7-oYUxpDT6c
