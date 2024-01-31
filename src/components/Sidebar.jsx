import React from 'react'
import { useGlobalContext } from '../Context'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
  const { sublinks, isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink) => {
            return (
              <article key={sublink.pageId}>
                <h4>{sublink.page}</h4>
                <div className="sidebar-sublinks">
                  {sublink.links.map((link) => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.icon}
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
