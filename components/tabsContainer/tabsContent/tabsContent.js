import React from 'react'

const TabsContent = ({ data, activeTab }) => {
    return (
        <div className="tab-content">
            <h3>{data.filter((x) => x.value === activeTab)[0].title}</h3>
            <p>{data.filter((x) => x.value === activeTab)[0].text}</p>
            <button className="btn-default-hover">Agenda tu cita</button>
        </div>
    )
}

export default TabsContent
