
import React ,{useState} from 'react'
import Data from './countries.json'

export function Countries() {

  const [Countr, setCountr] = useState()

  let countries = Object.keys(Data)

  let countriesIndex = countries.indexOf(Countr)

  let state = Object.values(Data)

  let stateValue = state[countriesIndex]



  return (
    <div className='listOfCountr'>
     <select name="" id="firstSelect"onChange={(e)=> setCountr(e.target.value)} >
      <option value="">select countries</option> 
          {countries.map((item,i)=>(<option value={item} key={i}>{item}</option>  ))}
      </select>

      <select name="" id="secondSelect">
      <option >select state</option> 
      {Countr && stateValue.map((item,i)=>(<option value={item} key={i}>{item}</option>  ))}
      </select>
    </div>
  )
}

