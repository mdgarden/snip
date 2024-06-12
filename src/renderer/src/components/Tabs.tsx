import { useState } from 'react'

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const handleClick = (label) => {
    setActiveTab(label)
  }

  return (
    <div>
      <ul className="tab-list">
        {children.map((tab) => {
          const label = tab.props.label

          return (
            <li
              key={label}
              className={label === activeTab ? 'tab-list-item active' : 'tab-list-item'}
              onClick={() => handleClick(label)}
            >
              {label}
            </li>
          )
        })}
      </ul>
      <div className="tab-content">
        {children.map((one) => {
          if (one.props.label === activeTab)
            return <div key={one.props.label}>{one.props.children}</div>
          else return null
        })}
      </div>
    </div>
  )
}
