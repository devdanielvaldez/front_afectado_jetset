'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import AdminHeader from '@/components/admin/AdminHeader'
import AddFallecidoForm from '@/components/admin/AddFallecidoForm'
import AddPacienteForm from '@/components/admin/AddPacienteForm'

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <AdminHeader />
      
      <div className="bg-white rounded-xl shadow-soft mt-6 p-6">
        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-50 p-1">
            <Tab
              className={({ selected }) =>
                `w-full py-3 text-sm font-medium leading-5 rounded-lg
                ${
                  selected
                    ? 'bg-white text-primary-700 shadow'
                    : 'text-gray-600 hover:bg-white/[0.3] hover:text-primary-600'
                }`
              }
            >
              Registrar Fallecido
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full py-3 text-sm font-medium leading-5 rounded-lg
                ${
                  selected
                    ? 'bg-white text-primary-700 shadow'
                    : 'text-gray-600 hover:bg-white/[0.3] hover:text-primary-600'
                }`
              }
            >
              Registrar Rescatado
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-6">
            <Tab.Panel className="rounded-xl bg-white p-4">
              <AddFallecidoForm />
            </Tab.Panel>
            <Tab.Panel className="rounded-xl bg-white p-4">
              <AddPacienteForm />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
