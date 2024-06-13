import { useState } from 'react'
import './TitleBar.css'

function TitleBar(): JSX.Element {
  const [tabs, setTabs] = useState(['Tab 1', 'Tab 2'])
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false)

  const addTab = (): void => {
    const newTab = `Tab ${tabs.length + 1}`
    setTabs([...tabs, newTab])
    setActiveTab(newTab)
  }

  const removeTab = (tabToRemove): void => {
    const newTabs = tabs.filter((tab) => tab !== tabToRemove)
    setTabs(newTabs)
    if (tabToRemove === activeTab && newTabs.length > 0) {
      setActiveTab(newTabs[0])
    }
  }

  const handleTabClick = (tab): void => {
    setActiveTab(tab)
  }

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
            className={`tab ${tab === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
            {tab === activeTab && (
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
