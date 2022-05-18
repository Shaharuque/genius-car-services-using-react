import { useEffect, useState } from "react"

const useServices=()=>{
    const [services, setServices] = useState([])
    //for data load
    useEffect(() => {
        fetch('http://localhost:5000/service')  //this url is our own url we made and the data saved on mongoDB
            .then(res => res.json())
            .then(data => setServices(data))
    }, []) 

    return [services, setServices]
}

export {useServices};