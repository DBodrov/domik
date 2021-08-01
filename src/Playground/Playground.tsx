import React from 'react';
import './styles.css';

type TPointerEvent = React.PointerEvent<HTMLDivElement>;

export function Playground() {
  const [isSelect, setIsSelect] = React.useState(false);
  const imageRef = React.useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: TPointerEvent) => {
    setIsSelect(true);
  };

  const handlePointerMove = (e: TPointerEvent) => {
    if (isSelect) {
      const shiftX = e.clientX;
      const shiftY = e.clientY;
      console.log(shiftX, shiftY)
      if (imageRef && imageRef.current) {
        imageRef.current.style.left = shiftX + 'px';
        imageRef.current.style.top = shiftY + 'px';
      }
    }
    return;
  };

  return (
    <div className="Playground" onPointerMove={handlePointerMove} onPointerUp={() => setIsSelect(false)}>
      <div
        ref={imageRef}
        onPointerDown={handlePointerDown}

        className="ImageContainer"
      ></div>
      <div className="Domik"></div>
    </div>
  );
}
