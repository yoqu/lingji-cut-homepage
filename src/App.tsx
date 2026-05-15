import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { PromoVideo } from './components/PromoVideo'
import { DemoVideo } from './components/DemoVideo'
import { QuickStart } from './components/QuickStart'
import { Screenshots } from './components/Screenshots'
import { Installation } from './components/Installation'
import { FAQ } from './components/FAQ'
import { TechStack } from './components/TechStack'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <PromoVideo />
      <DemoVideo />
      <QuickStart />
      <Screenshots />
      <Installation />
      <FAQ />
      <TechStack />
      <Footer />
    </div>
  )
}

export default App
