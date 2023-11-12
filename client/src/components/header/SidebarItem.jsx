import { useState } from "react";
import '../header/SidebarItem.css';
import { Link } from "react-router-dom";

export default function SidebarItem({ menuItems, props }) {
    const [open, setOpen] = useState(false)


    if (menuItems.subMenu) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => {setOpen(!open); props.setIsClicked(!props.isClicked)}}>
                    <span>
                        {menuItems.icon && <i className={menuItems.icon}></i>}
                        {menuItems.name}
                    </span>
                    <i className="fa-solid fa-chevron-down toggle-btn"></i>
                </div>
                <div className="sidebar-content">
                    {menuItems?.subMenu?.map((child, i) =>
                      <Link key={i} to={child.link || "#"} className="text-decoration-none" onClick={() => { props.setIsNavExpanded(!props.isNavExpanded) }}>
                      <SidebarItem  menuItems={child} />
                  </Link>
                        // console.log("object child", child)
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <Link to={menuItems.link || "#"} className="sidebar-item plain" onClick={() => { props.setIsNavExpanded(!props.isNavExpanded) }}>
                {menuItems.icon && <i className={menuItems.icon}></i>}
                {menuItems.name}
            </Link>
        )
    }
}