import React from 'react'
import {CgPokemon} from "react-icons/cg"

const LoadingScreen = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center animate-pulse">
      <CgPokemon className="text-9xl text-neutral-300 animate-spin" />
    </div>
  )
}

export default LoadingScreen