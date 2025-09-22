import { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isTouchDevice = () => {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  };

  const move = (e) => {
    const touchEvent = e.touches ? e.touches[0] : null;
    const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
    const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

    setCursorX(x);
    setCursorY(y);

    const cursorBorder = document.getElementById('cursor-border');
    if (cursorBorder) {
      cursorBorder.style.left = `${x}px`;
      cursorBorder.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    const handleMouseEnter = (e) => {
      if (window.getComputedStyle(e.target).cursor === 'pointer') {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div>
        <div
          id="cursor"
          className={isHovered ? 'hovered' : ''}
          style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
        ></div>
        <div id="cursor-border"></div>
      </div>
    </>
  );
};

export default Cursor;
