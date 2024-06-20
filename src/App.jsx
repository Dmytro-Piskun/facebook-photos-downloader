import { useState, useEffect } from 'react';
import Login from './components/Login';
import Photos from './components/Photos';
import Loading from './components/Loading'

function App() {
  const [appState, setAppState] = useState("signup");
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(false);

  const handleSuccessfullLogin = async (user) => {
    setError(false)
    console.log(user);
    setAppState("loading")
    try {
      const response = await fetch(` https://graph.facebook.com/${user.userID}/photos?fields=images&type=uploaded&access_token=${user.accessToken}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();

      const photos = data.data.map((photo)=>{
        return {id:`${photo.id}`,imageUrl:`${photo.images[0].source}`}
      });
      // console.log(photos)


      setPhotos(photos);
      setAppState("photos")
    } catch (error) {
      setAppState("signup")
      setError(true)
    }
    setAppState("photos");
  };

  const handleFailedLogin = () => {
    setError(true)
  }



  return (
    <div className='app flex justify-center items-center min-h-screen'>
      {appState === "signup" && (
        <Login handleSuccessfullLogin={handleSuccessfullLogin} handleFailedLogin={handleFailedLogin} error={error}/>
      )}
      {appState === "photos" && (
        <Photos photos={photos}/>
      )}
      {appState === "loading" && (
        <Loading />
      )}


    </div>
  );
}

export default App;