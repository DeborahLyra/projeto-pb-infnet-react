import './App.css'
import { Header } from './components/header/Header';
import AppRoutes from './pages/Routes';

function App() {
  return (
    <>
    <div className="min-h-full">
        <Header></Header>
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
