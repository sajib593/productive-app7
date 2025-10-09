import notFound from "./../../assets/App-Error.png"

const NotFound = () => {
    return (
         <div className="flex flex-col justify-center items-center gap-5">
                   <div>
                     <h1 className='text-5xl '>oooops Details no found</h1>
                   </div>
        
        
                    <div>
                        <img src={notFound} alt="" />
                    </div>
        
        
                </div>
    );
};

export default NotFound;