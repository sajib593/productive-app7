import axios from "axios"
import { useEffect, useState } from "react"



let useApps =()=>{

    let [apps, setApps] = useState([]);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(true)

    useEffect(()=>{

        setLoading(true)

        axios('/fake.json')
        .then(data => setApps(data.data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))

    },[])

    return {apps, error, loading}
}


export default useApps