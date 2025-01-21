import { useState } from 'react'
import './TitleBar.css'

interface TitleBarProps {
  tabs: { name: string; code: string }[]
  activeTab: { name: string; code: string }
  addTab: () => void
  removeTab: (tab: { name: string; code: string }) => void
  handleTabClick: (tab: { name: string; code: string }) => void
}

function TitleBar({
  tabs,
  activeTab,
  addTab,
  removeTab,
  handleTabClick
}: TitleBarProps): JSX.Element {
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false)

  const toggleAlwaysOnTop = (): void => {
    setIsAlwaysOnTop(!isAlwaysOnTop)
    window.electron.ipcRenderer.send('toggle-always-on-top', !isAlwaysOnTop)
  }

  return (
    <div className="title-bar">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${tab.name === activeTab.name ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.name}
            {tab.name === activeTab.name && (
              <button
                className="close-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  removeTab(tab)
                }}
              >
                x
              </button>
            )}
          </div>
        ))}
        <div className="tab" onClick={addTab}>
          + Add Tab
        </div>
      </div>
      <div className="window-controls">
        <span
          className="always-on-top"
          onClick={toggleAlwaysOnTop}
          role="button"
          aria-pressed={isAlwaysOnTop}
        >
          {isAlwaysOnTop ? '📍' : '📌'}
        </span>
        <button onClick={() => window.electron.ipcRenderer.send('minimize-window')}>-</button>
        <button onClick={() => window.electron.ipcRenderer.send('maximize-window')}>+</button>
        <button onClick={() => window.electron.ipcRenderer.send('close-window')}>x</button>
      </div>
    </div>
  )
}

export default TitleBar
