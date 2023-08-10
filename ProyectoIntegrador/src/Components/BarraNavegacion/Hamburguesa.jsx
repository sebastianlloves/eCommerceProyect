import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'


function Hamburguesa() {

    const [, setOpen] = useState(false)
  return (
    <button
      type="button"
      className="relative rounded-mdp-2 text-gray-50 lg:hidden"
      onClick={() => setOpen(true)}
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export default Hamburguesa;