import React from 'react';
import { poemas } from '../../data/poemas';

interface PoemIndexProps {
  activeIndex: number;
  onSelect: (i: number) => void;
}

const PoemIndex: React.FC<PoemIndexProps> = ({ activeIndex, onSelect }) => (
  <nav className="poem-index">
    <div
      className="poem-index-inner"
      style={{
        transform: `translateY(calc(30vh - ${activeIndex * (window.innerWidth <= 900 ? 22 : 28)}px))`,
      }}
    >
      {poemas.map((p, i) => {
        const isActive = activeIndex === i;
        return (
          <button
            key={p.id}
            className={`poem-index-btn${isActive ? ' active' : ''}`}
            onClick={() => onSelect(i)}
          >
            <span
              className="index-label"
              style={{ color: isActive ? p.color.accent : undefined }}
            >
              {p.titulo}
            </span>
            <span
              className={`index-line${isActive ? ' active' : ''}`}
              style={{ background: isActive ? p.color.accent : undefined }}
            />
          </button>
        );
      })}
    </div>
  </nav>
);

export default PoemIndex;
