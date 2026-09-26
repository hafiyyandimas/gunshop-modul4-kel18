import { useRef } from 'react'

function GunCard({ gun, isFavorite, onToggleFavorite }) {
  const popup = useRef(null)

  return (
    <li className="card">
      <div className="card-shell">
        <button
          type="button"
          className={isFavorite ? 'favorite-btn active' : 'favorite-btn'}
          aria-label={isFavorite ? `Remove ${gun.name} from favorites` : `Add ${gun.name} to favorites`}
          onClick={(event) => {
            event.stopPropagation()
            onToggleFavorite?.(gun.name)
          }}
        >
          {isFavorite ? '♥' : '♡'}
        </button>

        <button type="button" className="card-btn" onClick={() => popup.current.showModal()}>
          <img className="card-img" src={gun.image} alt="" width="120" height="90" />
          <span className="name display">{gun.name}</span>
          <span className="type">
            {gun.type} · {gun.caliber}
          </span>
          <span className="price">${gun.price.toLocaleString()}</span>
        </button>
      </div>

      <dialog
        className="popup"
        ref={popup}
        onClick={(e) => e.target === popup.current && popup.current.close()}
      >
        <img className="popup-img" src={gun.image} alt="" width="240" height="180" />
        <h3 className="display">{gun.name}</h3>
        <p className="type">
          {gun.type} · {gun.caliber} · <span className="price">${gun.price.toLocaleString()}</span>
        </p>
        <p>{gun.description}</p>
        <form method="dialog">
          <button type="submit" className="popup-close">
            Close
          </button>
        </form>
      </dialog>
    </li>
  )
}

export default GunCard
