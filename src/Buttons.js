/* eslint no-eval: 0 */

import React,{ useState} from 'react'
import './calc.css'
// import { TextField } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function Buttons() {
/* const createDigits =()=>{
     const digits= [];
         for(let i=1;i<10;i++){
         digits.push(<button key={i}>{i}</button>)}
        return digits;
        //this code fragment could be an alternative to hard coding the numbers.
          It's a for loop that displays the numbers. }*/
 const [result, setResult] = useState("")


  const handleClick= (e)=>{
   console.log(setResult(result.concat(e.target.name)))
  }

   const calculate=()=>{
    setResult(eval(result).toString())
   }

   const clear =()=>{
       setResult('')
   }

   const backspace=()=>{
       setResult(result.splice(0,result.length  -1));  //-1
   }
    return (<div className='container'>
         
              <div className='screen'>
             {/*<AccessTimeIcon className='hist'/> */}
             {result}
              {/*<KeyboardBackspaceIcon  className='back' onClick={backspace}/>*/}
              </div>
                 
             <div  className='wrapper'>
                 <div className='butt1'></div>
                 <button onClick={clear} className='butt2'>C</button>
                 <button onClick={handleClick} className='butt3'>( )</button>
                 <button name='%' onClick={handleClick} className='butt3'>%</button>
                 <button name='/' onClick={handleClick} className='butt3'>/</button>
                 <button name='7' onClick={handleClick} className='butt' >7</button>
                 <button name='8' onClick={handleClick} className='butt'>8</button>
                 <button name='9' onClick={handleClick} className='butt'>9</button>
                 <button name='*' onClick={handleClick} className='butt3'>x</button> 
                 <button name='4' onClick={handleClick} className='butt'>4</button>
                 <button name='5' onClick={handleClick} className='butt'>5</button> 
                 <button name='6' onClick={handleClick} className='butt'>6</button> 
                 <button name='-' onClick={handleClick} className='butt3'>-</button>
                 <button name='1' onClick={handleClick} className='butt'>1</button>
                 <button name='2' onClick={handleClick} className='butt'>2</button>
                 <button name='3' onClick={handleClick} className='butt'>3</button>
                 <button name='+' onClick={handleClick} className='butt3'>+</button> 
                 <button name='+/-' onClick={handleClick} className='butt'>+/-</button>
                 <button name='0' onClick={handleClick} className='butt'>0</button> 
                 <button name='.' onClick={handleClick} className='butt'>.</button> 
                 <button name='=' onClick={calculate} className='butt4'>=</button> 
              </div>
            </div>
        
       
    )
}
/*<div className='calc'>
<div className='inspace'>
    <span>|</span>
</div>
<div className="col1">
    <button>+</button>
    <button>*</button>
    <button>-</button>
    <button>/</button>
</div>
<div> 
    {createDigits()}
</div>
<div>
    <button>.</button>
    <button>0</button>
    <button>=</button>
</div>

</div>*/