import React, { useState } from 'react';
import 'boxicons';

const HomeProcessItem = ({ Index, Title, Content }) => {
    const [isOpen, setOpen] = useState(0);
    const [icon, setIcon] = useState(<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={"#000"} viewBox="0 0 24 24"><path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>);

    function showIcon() {
        if (isOpen == 1) {
            setOpen(0);
            setIcon(<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={"#000"} viewBox="0 0 24 24"><path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>);
        } else {
            setOpen(1);
            setIcon(<svg  xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={"#000"} viewBox="0 0 24 24"><path d="M3 11h18v2H3z"></path></svg>)
        }
    }

    return (
        <button className={isOpen == 1 ? "item active" : "item"} onClick={() => { showIcon() }}>
            <div className="header">
                <div className="info">
                    <div className="index">{Index}</div>
                    <div className="title">{Title}</div>
                </div>
                <div className="icon">
                    {icon}
                </div>
            </div>
            <div className="body">
                {Content}
            </div>
        </button>
    );
}

export default HomeProcessItem;
