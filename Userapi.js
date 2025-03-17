import React, { useEffect,useState } from 'react'

function Userapi() {
    let [user,setuser]=useState('');
    useEffect(()=>{
        fetch('https://random-data-api.com/api/users/random_user').then(res=>res.json()).then(data=>setuser(data));
    },[])

    function hand(){
window.location.reload();

    }
  return (
    <div className='api'>
     
        
     {user&&<div className='user'>
        <h1>User Detail 👨‍💼</h1>
        <h3><img src={user.avatar} alt='no img' style={{width:"50%",height:"30%"}}/> </h3>
        <div className='detail'>
        <p>First_name   :{user.first_name}</p>
        <p>Last_name    :{user.last_name}</p>
        <p>Username     :{user.username}</p>
        <p>Emanil       :{user.email}</p>
        <p>Gender       :{user.gender}</p>
        <p>Phone_number :{user.phone_number}</p>
        <p>Date_of_birth:{user.date_of_birth}</p>
        <p>Address      :{user.address.street_name},{user.address.street_city}</p>
        
        </div>
    <button  id="arun"onClick={hand}>refrash</button>
        
        
        
        
        
        
        
        </div>}
        
        
        
        
        </div>
  )
};

export default Userapi
