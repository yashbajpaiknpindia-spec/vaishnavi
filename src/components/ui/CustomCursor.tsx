import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => cursorRef.current?.classList.add('hover');
    const onLeave = () => cursorRef.current?.classList.remove('hover');

    // Smooth follow with lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    function tick() {
      currentPos.current.x = lerp(currentPos.current.x, posRef.current.x, 0.12);
      currentPos.current.y = lerp(currentPos.current.y, posRef.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    const interactives = document.querySelectorAll('.interactive, a, button, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove, { passive: true });

    // MutationObserver for dynamic elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('.interactive, a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ transform: 'translate(-200px, -200px)' }}
    />
  );
}
