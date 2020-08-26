import React, { useState } from 'react'
import './facialAesthetics.css'
import TabManager from '../tabs/tabs'

const FacialAesthetics = () => {

    const TABS = [
        { 
            label: "Tab 1", value: 1
        },
        {
            label: "Tab 2", value: 2
        },
        {
            label: "Tab 3", value: 3
        }
      ];

    const [activeTab, handleTab] = useState(1);

    return (
        <div className="container">
            <div className="content">
                <div className="content-data">
                    <h1>Estetica Facial</h1>
                    <hr/>
                    <div className="tabs-container">
                        <TabManager tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
                        <div className="tab-content">
                            {" "}
                            <div> Content of Tab {activeTab}</div>
                        </div>
                    </div>
                </div>
                <div className="content-img">

                </div>
            </div>
        </div>
    )
}

export default FacialAesthetics