import { BookA, ChevronRight, GraduationCap, Home, Link2Icon, PersonStanding } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LinksLayout = () => {
  const [expandLink, setExpandLink] = useState(true)
  const [dashboardLinks, setDashboardLinks] = useState([
    { label: 'Tableau de bord', to: '/dashboard', icon: Home, isActive: true },
    { label: 'Étudiants', to: '/dashboard/students', icon: PersonStanding },
    { label: 'Enseignants', to: '/dashboard/teachers', icon: GraduationCap },
    { label: 'Classes', to: '/dashboard/classes', icon: BookA },
  ])

  const changeActiveLink = (clickedLink) => {
    setDashboardLinks(dashboardLinks.map(link => {
      if (link.to === clickedLink.to) {
        return { ...link, isActive: true }
      } else {
        return { ...link, isActive: false }
      }
    }))
  }
  return (
    <aside className={`flex flex-col justify-between bg-white p-5 lg:h-lvh md:h-dvh h-svh border-r border-black/20 sticky top-0 left-0 
  ${expandLink ? "lg:w-70 md:w-50 w-24" : "w-24"}
  sm:w-16 sm:p-3
  transition-all duration-500`}>

      <ChevronRight className={`absolute -right-4.5 cursor-pointer hover:bg-slate-50 p-1 bg-white rounded-full border border-slate-300 transition-all duration-500 hidden md:block ${expandLink ? 'rotate-180' : ''}`}
        onClick={() => setExpandLink(prev => !prev)} size={30} />

      <nav className='space-y-10'>
        <img
          src="/assets/imgs/allamo-institut-logo.png"
          className={`object-center object-cover mx-auto ${expandLink ? "w-40" : "w-15"} max-sm:w-15 transition-all duration-500`}
          loading='lazy' alt=""
        />
        <div className='space-y-2 text-slate-700'>
          {dashboardLinks.map((link, index) => (
            <Link
              onClick={() => changeActiveLink(link)}
              key={index}
              className={`
            ${link.isActive ? 'dashboard-active-link' : 'dashboard-link'} 
            ${!expandLink ? "flex! justify-center! px-2.5! relative group overflow-visible!" : ""}
            max-sm:flex! max-sm:justify-center! max-sm:px-2! max-sm:relative max-sm:group max-sm:overflow-visible!
          `}
              to={link.to}
            >
              {/* On small screens: always show icon only */}
              <link.icon size={20} className={`max-sm:block! transition-opacity duration-500 ${expandLink ? "hidden!" : "block!"}`} />

              {/* Label: hidden on small screens */}
              {expandLink && (
                <span className="max-sm:hidden">{link.label}</span>
              )}

              <span className={`dashboard-tooltip ${expandLink ? "max-sm:block! hidden!" : "block!"}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      <footer className={`p-4 sm:p-2 text-sm font-semibold text-nowrap text-slate-900`}>
        {expandLink ? (
          <>
            <span className="max-sm:hidden overflow-hidden text-ellipsis block w-full">
              Réalisé par
              <span className="font-medium text-gray-500 underline underline-offset-2 ms-1">
                <Link to="https://mohamed-khassar.vercel.app/">Mohamed Khassar</Link>
              </span>
            </span>
            {/* On small screens show icon even when expanded */}
            <Link className='group relative max-sm:block hidden mx-auto!' to="https://mohamed-khassar.vercel.app/">
              <Link2Icon />
              <span className='dashboard-tooltip'>Mohamed Khassar</span>
            </Link>
          </>
        ) : (
          <Link className='group relative mx-auto!' to="https://mohamed-khassar.vercel.app/">
            <Link2Icon />
            <span className='dashboard-tooltip'>Mohamed Khassar</span>
          </Link>
        )}
      </footer>
    </aside>
  )
}

export default LinksLayout