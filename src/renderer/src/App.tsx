import { useState } from 'react'
import { CodeMirror } from './components/CodeMirror'
import TitleBar from './components/TitleBar/TitleBar'

function App(): JSX.Element {
  const [tabs, setTabs] = useState([{ name: 'Tab 1', code: "console.log('Code Mirror!')" }])
  const [activeTab, setActiveTab] = useState(tabs[0])

  const addTab = (): void => {
    const newTab = { name: `Tab ${tabs.length + 1}`, code: '' }
    setTabs([...tabs, newTab])
    setActiveTab(newTab)
  }

  const removeTab = (tabToRemove): void => {
    const newTabs = tabs.filter((tab) => tab.name !== tabToRemove.name)
    setTabs(newTabs)
    if (tabToRemove === activeTab && newTabs.length > 0) {
      setActiveTab(newTabs[0])
    }
  }

  const handleTabClick = (tab): void => {
    setActiveTab(tab)
  }

  const updateCode = (newCode: string): void => {
    setTabs(tabs.map((tab) => (tab.name === activeTab.name ? { ...tab, code: newCode } : tab)))
  }

  return (
    <>
      <TitleBar
        tabs={tabs}
        activeTab={activeTab}
        addTab={addTab}
        removeTab={removeTab}
        handleTabClick={handleTabClick}
      />
      <CodeMirror code={activeTab.code} updateCode={updateCode} />
    </>
  )
}

export default App
