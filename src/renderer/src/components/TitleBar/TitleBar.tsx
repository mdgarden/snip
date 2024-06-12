// TitleBar.js
import './TitleBar.css'

const { ipcRenderer } = window.require('electron')

function TitleBar(): JSX.Element {
  return (
    <div className="title-bar">
      <div className="title">My Custom TitleBar</div>
      <div className="window-controls">
        <button onClick={() => ipcRenderer.send('minimize-window')}>-</button>
        <button onClick={() => ipcRenderer.send('maximize-window')}>+</button>
        <button onClick={() => ipcRenderer.send('close-window')}>x</button>
      </div>
    </div>
  )
}

export default TitleBar
