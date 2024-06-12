// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import { CodeMirror } from './components/CodeMirror'
import TitleBar from './components/TitleBar/TitleBar'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <TitleBar />
      <CodeMirror />
    </>
  )
}

export default App
