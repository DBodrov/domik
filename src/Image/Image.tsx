import React from 'react';
import './styles.css';

type TImageProps = {
  coordX?: number;
  coordY?: number;
  onSelect: (e: TPointerEvent) => void;
  onMove: (e: TPointerEvent) => void;
  onUp: (e: TPointerEvent) => void;
};

export function Image(props: TImageProps) {
  const {coordX, coordY, onSelect, onMove, onUp} = props;
  const [isSelect, setIsSelect] = React.useState(false);


  return (
    <div
      style={{top: coordY, left: coordX, backgroundColor: isSelect ? '#66DDAA' : '#0FC0FC'}}
      onPointerDown={onSelect}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onGotPointerCapture={() => setIsSelect(true)}
      onLostPointerCapture={() => setIsSelect(false)}
      className="ImageContainer"
    ></div>
  );
}
