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
        <span className="always-on-top" role="button">
          📌
        </span>
        <button>-</button>
        <button>+</button>
        <button>x</button>
      </div>
    </div>
  )
}

export default TitleBar
