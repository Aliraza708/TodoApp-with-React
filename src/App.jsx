import { useState } from 'react'
import './App.css'
import Button from './assets/compount/button'
import Footer from './assets/compount/Footer'
import Header from './assets/compount/Header'


function App(){
 const [username , Setuser] = useState()
 const [users , Setusers] = useState([])
 function Add(){
  Setusers([...users,username])
 Setuser("")
 }
 function Delect(userToRemove) {
  Setusers (users.filter( data =>  data!== userToRemove)
 )}

 function Add1(data12){
  const pro = prompt("Update")
  const p = data12+" "+pro
  Setuser(users.push(p))
  console.log(users)
  Setusers(users.filter(data => data !== data12))
  Setuser("")
  
 }

  return(
   <div>

     <Header/>
     <div className='flex justify-center items-center m-10'>
      <input type="text" className='border pl-2 border-blue-500  w-80'value={username} onChange={(e)=>Setuser(e.target.value)} />
      <Button
      text={"Add"}
      onpress={()=> Add()}
      />
      <Button
      text={"Remove"}
      onpress={()=> Setusers([])}
      />
     </div>
   
      {
        users.map((data,index)=>{
       
          return(
            <h1 key={index} className='pl-10 pb-5 ' >
              <li>{data}
                
                {<Button
                
                text={"Add"}
                onpress={()=> Add1(data) }
                
                />}
                  {<Button
                  
                text={"Delect"}
                onpress={()=> Delect(data) }

                />}
              </li>
              </h1>
          )
        })
      }
      
     
     

     <Footer/>
   </div>
  )
}
export default App
