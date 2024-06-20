import Photo from "./Photo";
import { useState, useEffect } from "react";

const Photos = ({ photos }) => {
    const [selectedPhotos, setSelectedPhotos] = useState([]);

    useEffect(() => {
        console.log(selectedPhotos);
    }, [selectedPhotos])


    const downloadPhoto = async (url, name) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } catch (error) {
            console.error('Failed to download photo:', error);
          }
    };

    const handleDownloadPhotos = () => {
        if (!selectedPhotos) {
            return;
        }
        selectedPhotos.forEach(photoId => {
            photos.forEach(photo=>{if(photo.id === photoId){
            downloadPhoto(photo.imageUrl,`Image${photo.id}.jpg`)
            }})
        }
    )
    };


    const handleSelection = (id) => {
        setSelectedPhotos(prevSelectedPhotos => {
            const isPhotoSelected = prevSelectedPhotos.some(photoId => photoId === id);
            if (isPhotoSelected) {
                return prevSelectedPhotos.filter(photoId => photoId !== id);
            } else {
                return [...prevSelectedPhotos, id];
            }
        });
    }

    return (
        <div className="bg-white p-8 rounded-2xl text-center max-sm:w-full max-sm:h-screen max-sm:rounded-none max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <h1 className="text-center text-3xl mb-8 text-gray-600  ">Select Photos You Want To Download</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {photos.map(photo => (
                    <Photo
                        key={photo.id}
                        url={photo.imageUrl}
                        id={photo.id}
                        handleSelection={handleSelection}
                        isSelected={selectedPhotos.includes(photo.id)}
                    />
                ))}
            </div>
            <button onClick={handleDownloadPhotos} className="px-6 py-2  rounded-xl text-white bg-blue-400 hover:bg-blue-500 active:hover:bg-blue-600 transition-all">Download</button>
        </div>
    );
};

export default Photos;