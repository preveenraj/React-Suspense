import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigateTo = useNavigate();
  return (
    <div>
        <button
            onClick={() => {
                navigateTo('/sample');
            }}
        >
            click to navigate to sample
        </button>
    </div>
  )
}

export default Navbar