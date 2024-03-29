import './App.css'
import { Header } from './components/header/Header';
import AppRoutes from './pages/Routes';

function App() {
  const rotasSemHeader = [
    "/login", "/signin", "forgotPassword"
  ]
  return (
    <>
    <div className="min-h-full">
        {
          rotasSemHeader.includes(location.pathname) ? null : <Header />
        }
        
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <main>
              <AppRoutes />
            </main>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
