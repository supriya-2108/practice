import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [status,setStaus]=useState()
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStaus(false)})
        window.addEventListener("online",()=>{
            setStaus(true)
        },[])
    })
return status
}

export default useOnlineStatus