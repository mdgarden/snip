import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import ReactCodeMirror from '@uiw/react-codemirror'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const code = "console.log('Code Mirror!')"
  return <ReactCodeMirror value={code} height="100px" theme="dark" />
}

export default App
