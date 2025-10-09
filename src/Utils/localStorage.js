

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

            return alert('This is duplicate maal')
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
        let updateList = appList.filter(f => f.id !== id)
        localStorage.setItem('appList', JSON.stringify(updateList))
    }

    catch (err){

        console.log(err);

    }


}