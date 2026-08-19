import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Account from './pages/Account'
import Loans from './pages/Loans'
import Contact from './pages/Contact'

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/accounts" element={<Account />}/>
                    <Route path="/loans" element={<Loans />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App