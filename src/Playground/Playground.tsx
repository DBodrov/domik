import React from 'react';
import {Image} from '../Image';
import './styles.css';

type TPointerEvent = React.PointerEvent<HTMLDivElement>;

export function Playground() {
  const [coordinates, setCoordinates] = React.useState({x: 0, y: 0});
  const previousLeft = React.useRef(0);
  const previousTop = React.useRef(0);
  const isDragging = React.useRef(false);

  const handlePointerDown = (e: TPointerEvent) => {
    isDragging.current = true;
    console.log(e)
    e.currentTarget.setPointerCapture(e.pointerId);
    extractPositionDelta(e);
  };

  const handlePointerUp = (e: TPointerEvent) => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: TPointerEvent) => {
    console.log(e);
    if (isDragging.current) {
      const {left, top} = extractPositionDelta(e);
      setCoordinates(({x, y}) => ({x: x + left, y: y + top}));
    }
    return;
  };

  const extractPositionDelta = (e: TPointerEvent) => {
    const left = e.pageX;
    const top = e.pageY;
    const delta = {
      left: left - previousLeft.current,
      top: top - previousTop.current,
    };
    previousLeft.current = left;
    previousTop.current = top;
    return delta;
  };

  return (
    <div className="Playground">
      <Image
        onSelect={handlePointerDown}
        onMove={handlePointerMove}
        onUp={handlePointerUp}
        coordX={coordinates?.x}
        coordY={coordinates?.y}
      />
      <div className="Domik"></div>
    </div>
  );
}
