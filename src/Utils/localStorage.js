import toast from "react-hot-toast";


export let getData = () =>{
    try {
        let datas = localStorage.getItem('appList')
        return datas ? JSON.parse(datas) : []

    }  catch (err){

        console.log(err);

        return []

    }
}



export let updateData = (data)=>{

    let appList = getData()


    try {
        let isDuplicate = appList.some(a => a === data)
        if (isDuplicate){

            // return alert('This is duplicate maal')
            return toast.success("✅ This is duplicate maal!");
        }

        let updateAppList = [...appList, data]
        localStorage.setItem('appList', JSON.stringify(updateAppList))

    } catch (err){

        console.log(err);

    }
}


// delete 

export let removeFromAppList =(id)=>{

    let appList = getData()

    try {
        let updateList = appList.filter(f => f !== id)
        localStorage.setItem('appList', JSON.stringify(updateList))
    }

    catch (err){

        console.log(err);

    }


}