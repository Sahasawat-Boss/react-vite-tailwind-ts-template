import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const tailwindLogo = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg";

function App() {
  const [count, setCount] = useState(0)
  return (
    <main>
      <div className='flex justify-center items-center my-8'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="w-28 h-2w-28 logo" alt="Tailwind CSS logo" />
        </a>
      </div>

      <h1>Vite + React + Tailwind CSS</h1>
      <p className='text-4xl mt-20'>Template Setup by Boss</p>
      
      <div className="card mt-4">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='mt-10'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs -mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
