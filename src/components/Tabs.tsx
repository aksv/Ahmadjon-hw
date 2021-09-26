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
        <div className="tabs__container">
            <ul className="tabs__list">
                {renderTabs()}
            </ul>
            <div className="sort-by">
                <label>Sort by</label>
                <select>
                    <option value="none">Release Date</option>
                    <option value="popularity.desc">Popularity Descending</option>
                    <option value="popularity.asc">Popularity Ascending</option>
                    <option value="release_date.desc">Release Date Descending</option>
                    <option value="release_date.asc">Release Date Ascending</option>
                    <option value="revenue.desc">Revenue Descending</option>
                    <option value="revenue.asc">Revenue Ascending</option>
                    <option value="primary_release_date.desc">Primary Release Date Descending</option>
                    <option value="primary_release_date.asc">Primary Release Date Ascending</option>
                    <option value="original_title.desc">Original Title Descending</option>
                    <option value="original_title.asc">Original Title Ascending</option>
                    <option value="vote_average.desc">Vote Average Descending</option>
                    <option value="vote_average.asc">Vote Average Ascending</option>
                    <option value="vote_count.desc">Vote Count Descending</option>
                    <option value="vote_count.asc">Vote Count Ascending</option>
                </select>
            </div>
        </div>
        
    )
}

export default Tabs
