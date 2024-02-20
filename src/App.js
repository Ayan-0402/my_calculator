import React ,{useState}from 'react'
import { LiaBackspaceSolid } from "react-icons/lia";


const App = () => {
  const [calculate, setCalulate] = useState('')
  const [answer, setAnswer] = useState(0)

  const handleCalculate=(data)=>{
    setCalulate(calculate.concat(data))
  }
   console.log(calculate)

   const handleClear=()=>{
    setCalulate('')
    setAnswer('0')
   }
   const handleAnswer=()=>{
    setAnswer(eval(calculate))
    setCalulate('0')
   }
  
    

   const handleEdit = () =>{
    setCalulate(calculate.slice(0, -1))
   }
  
  return (
    <div className='main h-[100vh] p-24 px-44'>
      <div className='bg-[#fd9dc8] h-[75vh] w-[55vh] rounded-2xl py-10 px-10 ml-96 mb-32 '>
        <div className='h-[15vh] bg-[#ffe8f0] rounded-2xl  font-semibold text-[] px-5 py-5 '>
          <div className=' h-[7vh] text-3xl text-pink-800' >{answer}</div>
          <div className='h-[7vh] text-xl text-pink-800'>{calculate}</div>
        </div>
        <div className='grid grid-cols-4 m-4 text-xl '>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl shadow-lg 'onClick={()=>{handleClear()}} >C</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl  shadow-lg' onClick={()=>{handleCalculate('%')}}>%</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl p-3  shadow-lg text-2xl' onClick={()=>{handleEdit()}}><LiaBackspaceSolid /></button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl shadow-lg'>/</button>
          
  
        </div>
        <div className='grid grid-cols-4 m-4 text-xl '>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl shadow-lghover:shadow-lg hover:bg-rose-400' onClick={()=>{handleCalculate(7)}}>7</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl shadow-lg hover:shadow-lg hover:bg-rose-400' onClick={()=>{handleCalculate(8)}}>8</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl shadow-lghover:shadow-lg hover:bg-rose-400 '  onClick={()=>{handleCalculate(9)}}>9</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl shadow-lg hover:shadow-lg hover:bg-rose-400' onClick={()=>{handleCalculate('*')}}>*</button>
          
  
        </div>
        <div className='grid grid-cols-4 m-4 text-xl'>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl hover:shadow-lg hover:bg-rose-400 shadow-lg' onClick={()=>{handleCalculate(4)}}>4</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl hover:shadow-lg hover:bg-rose-400 shadow-lg' onClick={()=>{handleCalculate(5)}}>5</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl hover:shadow-lg hover:bg-rose-400  shadow-lg'onClick={()=>{handleCalculate(6)}}>6</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl  hover:shadow-lg hover:bg-rose-400 shadow-lg' onClick={()=>{handleCalculate('+')}}>+</button>
          
  
        </div>
        <div className='grid grid-cols-4 m-4 text-xl'>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl hover:shadow-lg hover:bg-rose-400 shadow-lg' onClick={()=>{handleCalculate(1)}}>1</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl hover:shadow-lg hover:bg-rose-400 shadow-lg' onClick={()=>{handleCalculate(2)}}> 2</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl hover:shadow-lg hover:bg-rose-400 shadow-lg' onClick={()=>{handleCalculate(3)}}>3</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl hover:shadow-lg hover:bg-rose-400 shadow-lg' onClick={()=>{handleCalculate('-')}}>-</button>
          
  
        </div>
  
        <div className='grid grid-cols-4 m-4 text-xl'>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl hover:shadow-lg hover:bg-rose-400 shadow-lg' onClick={()=>{handleCalculate(0)}}>0</button>
          <button className='h-[7vh] w-[7vh] bg-white text-black rounded-3xl  shadow-lg pb-3'onClick={()=>{handleCalculate('.')}}>.</button>
          <button className='h-[7vh] w-[17vh] bg-[#ffe8f0] text-black rounded-xl  shadow-lg' onClick={()=>{handleAnswer()}}>=</button>
                
        </div>
      </div>

    </div>
  )
}

export default App