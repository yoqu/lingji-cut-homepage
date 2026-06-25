import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Workflow } from './components/Workflow'
import { Features } from './components/Features'
import { PromoVideo } from './components/PromoVideo'
import { DemoVideo } from './components/DemoVideo'
import { QuickStart } from './components/QuickStart'
import { Screenshots } from './components/Screenshots'
import { Installation } from './components/Installation'
import { FAQ } from './components/FAQ'
import { TechStack } from './components/TechStack'
import { FriendLinks } from './components/FriendLinks'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Workflow />
      <Features />
      <PromoVideo />
      <DemoVideo />
      <QuickStart />
      <Screenshots />
      <Installation />
      <FAQ />
      <TechStack />
      <FriendLinks />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
