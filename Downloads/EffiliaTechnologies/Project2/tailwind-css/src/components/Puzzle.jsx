import React from 'react';
import Puzzle from './Puzzle'; // Ensure this import is correct

const Label = ({ text, position }) => {
  return (
    <div
      className="absolute text-center text-gray-800"
      style={{
        transform: `translate(${position[0]}px, ${position[1]}px)`,
        width: '100px',
      }}
    >
      {text}
    </div>
  );
};

const PuzzleWithLabels = () => {
  return (
    <div className="relative">
      <Puzzle />
      <Label text="Members – Aspirations" position={[100, -50]} />
      <Label text="Feasibility roadmap & design" position={[250, -50]} />
      <Label text="Approvals and ground work" position={[400, -50]} />
      <Label text="Handover & compliances" position={[550, -50]} />
      {/* Connecting Lines */}
      <div
        className="absolute border-t-2 border-gray-800"
        style={{
          top: '50%',
          left: '10%',
          width: '80%',
          transform: 'translateY(-50%)',
        }}
      ></div>
    </div>
  );
};

export default PuzzleWithLabels;
