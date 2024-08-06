import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}~-+?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char)
    }
    
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
   // passwordRef.current?.setSelectionRange(0, 3); //advance optimization
    Window.navigator.Clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700">
      <h1 className='text-4xl text-center text-white px-10 my-5'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        
        <input type="text" value={password} className='outline-none w-full py-1 px-3 rounded-lg' placeholder='password' readOnly ref={passwordRef}/>
        
        <button onClick={copyPasswordToClipboard} className='outline-none text-white px-3 py-0.5 ml-2 shrink-0'>copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
      
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={5}
        max={50} 
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}/>
        <label className='text-white'>Length: {length}</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}/>
        <label htmlFor='numberInput'  className='text-white'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}/>
        <label htmlFor='characterInput' className='text-white'>Characters</label>
        </div>

      </div>
     </div>
    </>
  )
}

export default App
