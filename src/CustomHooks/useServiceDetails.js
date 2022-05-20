import { useEffect, useState } from "react"

const useServiceDetails=(serviceId)=>{  //serviceId must lagbey
    const [service,setService]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/service/${serviceId}` //backend a url/api create korey ashsi and shei api thekey dynamic id ar basis a service fetched hobey

        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[serviceId])

    return [service]
}
export default useServiceDetails