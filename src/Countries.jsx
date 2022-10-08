
import React ,{useState, useEffect} from 'react'
import CountriesData from './countries.json'

export function Countries() {
  const [Countries,setCountries] = useState([]) 
  const [SelectedCountries,setSelectedCountries ] = useState("")
  const [State,setState] = useState([])

  useEffect(()=>{
    if (!CountriesData) return  
    setCountries(Object.keys(CountriesData))
  },[])

  useEffect(()=>{
    if (!SelectedCountries) return
    let state = CountriesData[SelectedCountries]
    setState(state)

  },[SelectedCountries])

  return(
    <div className='listOfCountr'>
          <select name="" id="firstSelect"onChange={(e)=> setSelectedCountries(e.target.value)} >
          <option value="">select countries</option> 
          {Countries && Countries.map((item,i)=>(<option value={item} key={i}>{item}</option>  ))}
          </select>
           <select name="" id="secondSelect">
           <option >select state</option> 
             {State && State.map((item,i)=>(<option value={item} key={i}>{item}</option>))}
         
         </select>
       </div>
  )

}






// export function Countries() {
//   const [Countr, setCountr] = useState()
//   const [stateV, setstateV] = useState()

//   let countries = Object.keys(Data)
//   let countriesIndex = countries.indexOf(Countr)
//   let state = Object.values(Data) 

//   useEffect(()=>{      
//          setstateV(state[countriesIndex])
//           console.log(stateV);
//   },[Countr]);

//   return (
//     <div className='listOfCountr'>
//      <select name="" id="firstSelect"onChange={(e)=> setCountr(e.target.value)} >
//       <option value="">select countries</option> 
//           {countries.map((item,i)=>(<option value={item} key={i}>{item}</option>  ))}
//       </select>
//       <select name="" id="secondSelect">
//       <option >select state</option> 
//         {stateV && stateV.map((item,i)=>(<option value={item} key={i}>{item}</option>))}
     
//       </select>
//     </div>
//   )
// }

  





