import React from 'react'

const DexRadioItem = ({label, value, checkedValue, handleChange}) => {
  return (
    <div>
        <input type="radio" value={value} checked={value === checkedValue} onChange={e => handleChange(e.target.value)} />
        <label>{label}</label>
    </div>
  )
}

export default DexRadioItem