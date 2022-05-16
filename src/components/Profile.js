import React, { useState } from 'react'

const Profile = () => {
    var [name,setName]=useState("")
    const changeName = () => {
       setName(name="Zera")
    }
    
  return (
    <div>
        Logged in as {name}
        <button onClick={changeName} className='bt btn-success'>Change profile</button>
        </div>
  )
}

export default Profile