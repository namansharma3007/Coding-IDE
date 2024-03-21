import React from 'react'

const LanguageThemeSelector = ({onSelect, setTheme}) => {
  return (
    <div className="flex gap-1 w-full justify-center">
        <select className="w-[18rem] shrink py-2 px-3 rounded-lg" onChange={(e)=>onSelect(e.target.value)}>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="javascript">JavaScript</option>
        </select>
        <select className="w-[18rem] shrink py-2 px-3 rounded-lg" onChange={(e)=>setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="vs-dark">VS-Dark</option>
        </select>
      </div>
  )
}

export default LanguageThemeSelector