import { useState } from "react";
import Header from "./components/Header"
import Card from "./components/Card";
const App = ()=>{

 const users = [
  {
    "name": "Sarah Johnson",
    "role": "Senior Developer",
    "status": "active",
    "profile": "https://i.pravatar.cc/150?img=1"
  },
  {
    "name": "Michael Chen",
    "role": "Product Manager",
    "status": "active",
    "profile": "https://i.pravatar.cc/150?img=2"
  },
  {
    "name": "Emma Williams",
    "role": "UX Designer",
    "status": "active",
    "profile": "https://i.pravatar.cc/150?img=3"
  },
  {
    "name": "James Rodriguez",
    "role": "DevOps Engineer",
    "status": "active",
    "profile": "https://i.pravatar.cc/150?img=4"
  },
  {
    "name": "Olivia Brown",
    "role": "Marketing Director",
    "status": "inactive",
    "profile": "https://i.pravatar.cc/150?img=5"
  },
  {
    "name": "Daniel Kim",
    "role": "Data Scientist",
    "status": "active",
    "profile": "https://i.pravatar.cc/150?img=6"
  },
  {
    "name": "Sophia Martinez",
    "role": "HR Manager",
    "status": "active",
    "profile": "https://i.pravatar.cc/150?img=7"
  },
  {
    "name": "Ryan Thompson",
    "role": "Sales Executive",
    "status": "active",
    "profile": "https://i.pravatar.cc/150?img=8"
  },
  {
    "name": "Ava Patel",
    "role": "QA Lead",
    "status": "inactive",
    "profile": "https://i.pravatar.cc/150?img=9"
  },
  {
    "name": "Ethan Davis",
    "role": "Backend Developer",
    "status": "active",
    "profile": "https://i.pravatar.cc/150?img=10"
  }
]
  
  
return (
  <>
  <Header></Header>
  <div className="flex-nowrap items-center justify-center ">

   {users.map((user)=>{
    return (<Card user={user} />)
   })}
  </div>
 
  </>
)
}
export default App;