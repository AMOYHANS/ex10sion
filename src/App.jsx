import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const onClick = async () => {
    // eslint-disable-next-line no-undef
    const [tab] = await chrome.tabs.query({ active: true });
    // eslint-disable-next-line no-undef
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        document.body.style.backgroundColor = "red";
        const bg = document.querySelector('.bili-feed4-layout')[0]
        if(bg){
          bg.style.backgroundColor = ' black'
        }
      }
    })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>
         vv
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
