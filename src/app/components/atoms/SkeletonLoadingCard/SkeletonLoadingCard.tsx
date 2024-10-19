import './SkeletonLoadingCard.scss'

interface SkeletonLoadingProps {
  cardCount?: number;
}

export default function SkeletonLoading({ cardCount = 9 }: SkeletonLoadingProps = {}) {
  return (
    <div className="skeleton-grid">
      {[...Array(cardCount)].map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-icon"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-link"></div>
          <div className="skeleton-link"></div>
        </div>
      ))}
      
    </div>
  );
}