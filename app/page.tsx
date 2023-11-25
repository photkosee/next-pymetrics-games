import Games from './components/Games';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Infos from './components/Infos';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
      <main className="space-y-40 mb-40">
        <HeroSection />
        <Infos />
        <Games />
      </main>
    </div>
  )
}
