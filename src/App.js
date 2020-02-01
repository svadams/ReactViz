import * as React from 'react';
import ThreePointVis from './ThreePointVis/ThreePointVis';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <div className="vis-container">
        <ThreePointVis />
      </div>
    </div>
  );
}
