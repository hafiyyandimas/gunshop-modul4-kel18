import { useEffect, useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

const FAVORITES_KEY = 'bore-and-barrel-favorites'

function Catalog() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
      return Array.isArray(saved) ? saved : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (gunName) => {
    setFavorites((current) =>
      current.includes(gunName)
        ? current.filter((item) => item !== gunName)
        : [...current, gunName],
    )
  }

  const favoriteGuns = GUNS.filter((gun) => favorites.includes(gun.name))

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <section>
        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">{GUNS.length} pieces</span>
        </div>
        <ul className="stock">
          {GUNS.map((gun) => (
            <GunCard
              key={gun.name}
              gun={gun}
              isFavorite={favorites.includes(gun.name)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </ul>
      </section>

      <section className="favorites-panel">
        <div className="list-head">
          <h2>Favorites</h2>
          <span className="count">{favoriteGuns.length} saved</span>
        </div>

        {favoriteGuns.length === 0 ? (
          <p className="empty-state">
            Belum ada favorit. Tekan tombol hati di kartu untuk menyimpan senjata pilihan.
          </p>
        ) : (
          <ul className="stock">
            {favoriteGuns.map((gun) => (
              <GunCard
                key={`${gun.name}-favorite`}
                gun={gun}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Catalog
