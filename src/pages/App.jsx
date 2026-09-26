import Header from '../components/Header';
import GunCard from '../components/GunCard';
import Footer from '../components/Footer';
import guns from '../data/guns';
import './App.css';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="catalog">
        {guns.map((gun) => (
          <GunCard key={gun.id} gun={gun} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
