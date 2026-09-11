import { useId, type ReactNode } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export interface MarqueeLogo {
  name: string;
  logo: string;
}

interface InfiniteMarqueeProps<T extends MarqueeLogo = MarqueeLogo> {
  items: T[];
  direction?: 'left' | 'right';
  durationSeconds?: number;
  cardClassName?: string;
  imgClassName?: string;
  renderItem?: (item: T) => ReactNode;
}

export function InfiniteMarquee<T extends MarqueeLogo = MarqueeLogo>({
  items,
  direction = 'left',
  durationSeconds = 60,
  cardClassName = 'bg-white rounded-xl shadow-sm border border-gray-100',
  imgClassName = 'max-h-14 max-w-[85%] object-contain',
  renderItem,
}: InfiniteMarqueeProps<T>) {
  const animationName = useId().replace(/[:]/g, '');
  const duplicated = [...items, ...items];
  const keyframeDirection = direction === 'left' ? 'translateX(-50%)' : 'translateX(0)';
  const keyframeStart = direction === 'left' ? 'translateX(0)' : 'translateX(-50%)';

  return (
    <div className="relative overflow-hidden">
      <style>{`
        @keyframes scroll-${animationName} {
          0% { transform: ${keyframeStart}; }
          100% { transform: ${keyframeDirection}; }
        }
        .marquee-${animationName} {
          animation: scroll-${animationName} ${durationSeconds}s linear infinite;
        }
        .marquee-${animationName}:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className={`flex gap-6 w-max marquee-${animationName}`}>
        {duplicated.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
                        className={`flex items-center justify-center px-6 py-4 flex-shrink-0 ${cardClassName}`}
          >
            {renderItem ? (
              renderItem(item)
            ) : (
              <ImageWithFallback src={item.logo} alt={item.name} className={imgClassName} loading="lazy" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}