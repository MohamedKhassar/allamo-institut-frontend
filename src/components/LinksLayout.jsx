import { BookA, ChevronRight, GraduationCap, Home, Link2Icon, PersonStanding } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LinksLayout = () => {
  const [expandLink, setExpandLink] = useState(false)
  const [dashboardLinks, setDashboardLinks] = useState([
    { label: 'Tableau de bord', to: '/dashboard', icon: Home, isActive: true },
    { label: 'Étudiants', to: '/dashboard/students', icon: PersonStanding },
    { label: 'Enseignants', to: '/dashboard/teachers', icon: GraduationCap },
    { label: 'Classes', to: '/dashboard/classes', icon: BookA },
  ])

  const chageActiveLink = (clickedLink) => {
    setDashboardLinks(dashboardLinks.map(link => {
      if (link.to === clickedLink.to) {
        return { ...link, isActive: true }
      } else {
        return { ...link, isActive: false }
      }
    }))
  }
  return (
    <aside className={`flex flex-col justify-between bg-white p-5 lg:h-lvh md:h-dvh h-svh border-r border-black/20 sticky top-0 left-0 ${expandLink ? "lg:w-70 md:w-50 w-40" : "w-24"}  transition-all duration-500`}>
      <ChevronRight className={`absolute -right-4.5 cursor-pointer hover:bg-slate-50 p-1 bg-white rounded-full border border-slate-300 transition-all duration-500 ${expandLink ? 'rotate-180' : ''}`} onClick={() => setExpandLink(!expandLink)} size={30} />
      <nav className='space-y-10'>
        <img src="/assets/imgs/allamo-institut-logo.png" className="w-40 object-center object-cover mx-auto" loading='lazy' alt="" />
        <div className='space-y-2 text-slate-700'>
          {dashboardLinks.map((link, index) => (
            <Link onClick={() => chageActiveLink(link)} key={index} className={`${link.isActive ? 'dashboard-active-link' : 'dashboard-link'} ${!expandLink ? "flex! justify-center! px-4.5! relative group overflow-visible!" : ""}`} to={link.to}>
              {expandLink ? link.label : <link.icon size={20} className={`duration-500 transition-opacity ${expandLink ? "opacity-0" : "opacity-100"}`} />}
              <span className={`dashboard-tooltip ${expandLink ? "hidden" : ""}`}>{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
      <footer className={`p-4 text-sm font-semibold text-nowrap text-slate-900 ${expandLink ? "overflow-hidden" : ""}`} >
        {
          expandLink ?
            <>
              Réalisé par <span className="font-medium text-gray-500 underline underline-offset-2">
                <Link to="https://mohamed-khassar.vercel.app/">Mohamed Khassar</Link>
              </span>
            </>
            :
            <Link className='group relative' to="https://mohamed-khassar.vercel.app/">
              <Link2Icon />
              <span className='dashboard-tooltip'>Mohamed Khassar</span>
            </Link>
        }
      </footer>
    </aside >
  )
}

export default LinksLayout