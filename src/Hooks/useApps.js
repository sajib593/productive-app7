import axios from "axios"
import { useEffect, useState } from "react"



let useApps =()=>{

    let [apps, setApps] = useState([])

    useEffect(()=>{

        axios('../fake.json')
        .then(data => setApps(data.data))

    },[])

    return {apps}
}


export default useApps