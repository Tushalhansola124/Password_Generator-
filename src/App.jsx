
import { useState } from 'react';
import './App.css'
import { LC, NM, SM, UC} from './Data/SymbolChar';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [upperCase,setUpperCase]=useState(false);
  const [lowerCase,setLowerCase]=useState(false);
  const [number,setNumber]=useState(false);
  const [symbols,setSymbols]=useState(false);
  const [password,setPassword]=useState(10);
  const[finalPwd,setFinalpwd]=useState('');


  const copy=()=>{
    
  
      navigator.clipboard.writeText(finalPwd);
      toast.success("Password has Copied!");
  
    
  }

  const HandlerPwd=()=>{
    let charSet='';
    let finalPwd='';
    

  
    if(upperCase || lowerCase || number || symbols)
      {
        if(upperCase)charSet+=UC;
        if(lowerCase)charSet+=LC;
        if(number)charSet+=NM;
        if(symbols)charSet+=SM;
        for(let i=0;i<password;i++)
        {
          finalPwd+=charSet.charAt(Math.floor(Math.random()*charSet.length))
        
        }
    
        setFinalpwd(finalPwd);
        toast.success("Password has Generated");

        
      }  
      else
      {
        toast.error('Please Any checkBox  Selected After Than Will Be Password Generated');
      }


    
  }
    return(
    
      <>
        <ToastContainer />
        <div className='container'>
          <div className='passwordBox'>
              <h2>Password Generator</h2>
          </div>
          <div className='passwordboxinput'>
            <input type="text"   value={finalPwd}readOnly></input>
            <button className='btn' onClick={copy} >Copy</button>
          </div>
        <div className='passwordboxchecked'>
          <label className='nameoflength'>Password length</label>
            <input max={20} min={10} onChange={(e)=>setPassword(e.target.value)} value={password}  className="num"type='number'></input>
          </div>
          <div className='passwordboxchecked'>
          <label className='nameoflength'>Include Uppercase letters</label>
            <input  className="checkbox " onChange={()=>setUpperCase(!upperCase)} checked={upperCase} type='checkbox'></input>
          </div>
          <div className='passwordboxchecked'>
          <label className='nameoflength'>Include LowerCase letters</label>
            <input  className="checkbox" onChange={()=>setLowerCase(!lowerCase)} checked={lowerCase} type='checkbox'></input>
          </div>
          <div className='passwordboxchecked'>
          <label className='nameoflength'>Include Number </label>
            <input  className="checkbox"  onChange={()=>setNumber(!number)}checked={number} type='checkbox'></input>
          </div>
          <div className='passwordboxchecked'>
          <label className='nameoflength'>Include Sybmols</label>
            <input  className="checkbox"  onChange={()=>setSymbols(!symbols)}checked={symbols} type='checkbox'></input>
          </div>
          <button onClick={HandlerPwd} className='gpwd'>Generate password</button>
        </div>
        

      </>

    );
}

export default App
