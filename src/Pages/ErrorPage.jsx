import error from "./../assets/error-404.png"

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
           <div>
             <h1 className='text-5xl text-red-600'>YOU CHOOSE WRONG THING</h1>
           </div>


            <div>
                <img src={error} alt="" />
            </div>


        </div>
    );
};

export default ErrorPage;