import { useEffect, useState } from 'react'

const NAV = ['Catalog', 'About', 'Contact']

function Header({ tab, onTab }) {
  const [installPrompt, setInstallPrompt] = useState(null)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setInstallPrompt(event)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!installPrompt) return

    installPrompt.prompt()
    await installPrompt.userChoice
    setInstallPrompt(null)
  }

  return (
    <header className="header">
      <span className="brand display">Bore &amp; Barrel</span>

      <nav className="nav">
        {NAV.map((item) => (
          <button
            key={item}
            type="button"
            className={tab === item ? 'nav-link active' : 'nav-link'}
            onClick={() => onTab(item)}
          >
            {item}
          </button>
        ))}

        <button
          type="button"
          className="install-btn"
          onClick={handleInstall}
          disabled={!installPrompt}
        >
          Install App
        </button>
      </nav>
    </header>
  )
}

export default Header
