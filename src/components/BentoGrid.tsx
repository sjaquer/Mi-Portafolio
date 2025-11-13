import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'full';
  delay?: number;
  noPadding?: boolean;
}

export const BentoCard = ({ children, className = '', span = 'medium', delay = 0, noPadding = true }: BentoCardProps) => {
  // Revised span classes for a more balanced Bento layout on wider screens.
  // Default grid will prefer 4 columns at large breakpoints, so spans are tuned to that layout.
  const spanClasses: Record<string,string> = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2',
    wide: 'col-span-1 md:col-span-2 lg:col-span-4 row-span-1',
    // tall should span more columns on md+ so it isn't a narrow vertical strip
    tall: 'col-span-1 md:col-span-2 row-span-2',
    // full will take the full width of the grid at lg (4 columns)
    full: 'col-span-1 md:col-span-2 lg:col-span-4 row-span-1'
  };

  const reduce = useReducedMotion();
  const motionInitial = reduce ? {} : { opacity: 0, y: 20 };
  const motionWhileInView = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };
  const hoverTransform = reduce ? {} : { y: -10, transition: { duration: 0.18 } };

  return (
    <motion.div
      initial={motionInitial}
      whileInView={motionWhileInView}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={hoverTransform}
      className={`
  ${spanClasses[span]}
  rounded-3xl border border-[rgba(255,255,255,0.03)] backdrop-blur-xl
        shadow-[0_12px_42px_rgba(0,0,0,0.16)]
        hover:shadow-[0_28px_90px_rgba(11,95,255,0.18)]
        hover:border-[rgba(11,95,255,0.22)]
        transition-all duration-300
        overflow-hidden
        ${className}
      `}
      style={{ willChange: 'transform', background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))' }}
    >
      {/* By default cards are flat / full-bleed (no internal panel or padding) to match the requested visual: */}
      {noPadding ? (
        <div className="h-full w-full">{children}</div>
      ) : (
        <div className="h-full w-full p-6 md:p-8">
          <div className="h-full w-full rounded-2xl bg-[rgba(6,12,25,0.78)] overflow-hidden">{children}</div>
        </div>
      )}
    </motion.div>
  );
};

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3 | 4 | 6;
  horizontalOnMobile?: boolean;
}

export const BentoGrid = forwardRef<HTMLDivElement, BentoGridProps>(({ children, className = '', columns = 6, horizontalOnMobile = false }, ref) => {
  // Use fewer columns by default (4) to give each card more horizontal space on desktop.
  const columnClasses: Record<number,string> = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6'
  };
  const base = horizontalOnMobile
    ? `flex flex-nowrap overflow-x-auto gap-4 md:gap-6 lg:gap-8 lg:grid ${columnClasses[columns]} ${className}`
    : `grid ${columnClasses[columns]} gap-4 md:gap-6 lg:gap-8 auto-rows-[260px] md:auto-rows-[340px] lg:auto-rows-[380px] ${className}`;

  return (
    <div ref={ref} className={base}>
      {children}
    </div>
  );
});

BentoGrid.displayName = 'BentoGrid';

export default BentoGrid;
