import './RatingStars.css'

// Draws a grey row of stars and overlays a gold row clipped to the rating,
// so fractional ratings such as 4.5 show a partly filled star.
function RatingStars({ rating, max = 5 }) {
  const fillPercent = (Math.min(rating, max) / max) * 100
  const stars = '★'.repeat(max)

  return (
    <div className="rating" role="img" aria-label={`Rated ${rating.toFixed(1)} out of ${max}`}>
      <span className="rating__stars" aria-hidden="true">
        {stars}
        <span className="rating__stars-fill" style={{ width: `${fillPercent}%` }}>
          {stars}
        </span>
      </span>
      <span className="rating__value" aria-hidden="true">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

export default RatingStars
