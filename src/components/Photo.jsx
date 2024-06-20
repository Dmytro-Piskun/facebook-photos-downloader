import { useState } from "react";


const Photo = ({ url, id, isSelected, handleSelection }) => {

    let classes = "overflow-hidden rounded-lg shadow-md transition-all relative flex justify-center items-center " 

    if (isSelected) {
        classes += " brightness-75"
    }

    return (
        <div onClick={() => { handleSelection(id) }} className={classes}>
            <img src={url} alt={`Photo ${id}`} className="w-80 h-80 object-cover" />
            {isSelected && <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" className=" absolute " data-name="Isolation Mode" viewBox="0 0 24 24" fill="#FFFFFF" width="40" height="40"><path d="M7.8,21.425A2.542,2.542,0,0,1,6,20.679L.439,15.121,2.561,13,7.8,18.239,21.439,4.6l2.122,2.121L9.6,20.679A2.542,2.542,0,0,1,7.8,21.425Z" /></svg>
            }
        </div>
    );
};

export default Photo;