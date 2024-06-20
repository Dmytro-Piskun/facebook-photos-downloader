

const Loading = () => {
    return (
        <div className=' p-16 w-[30rem] h-[30rem] bg-white  rounded-lg flex justify-center items-center text-center'>
            <div className="spinner">
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
            </div>
        </div>
    );
};

export default Loading;