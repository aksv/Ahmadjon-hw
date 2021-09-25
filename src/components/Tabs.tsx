import React, { useState } from 'react'
import { ITabs } from './types'
import { tabs } from './utility'

function Tabs() {


    const [activeTab, setActiveTab] = useState<string>('all')
    const [tablsList] = useState<ITabs[]>(tabs)

    const handleClick = (tab: string) => {
        setActiveTab(tab);
    }

    const renderTabs = () => {
        return tablsList.map((tab, index) => (
            <li onClick={() => handleClick(tab.id)} key={index} className={tab.id === activeTab ? ' tab--active tab': "tab"}>
                    {tab.title}
            </li>
        ))
    }

    console.log(tabs, activeTab)

    return (
        <ul className="tabs">
            {renderTabs()}
        </ul>
    )
}

export default Tabs
