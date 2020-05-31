import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ImageCarousel from './components/imagecarousel';
import Header from './components/header';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState([])
  const [error, setError] = useState(false)
  const [breedQuery, setBreedQuery] = useState('')

  const fetchDog = () => {
    axios.get("https://dog.ceo/api/breeds/image/random/7").then((response) => { 
      setDogImageUrl(response.data.message); setError(false); 
    })
  }
  useEffect(() => {
    fetchDog()
  }, [])

  const fetchBreed = async (breed = 'random') => {
    console.log(breed)
    if (breed === '') {
      return;
    }
    try {
      const api = `https://dog.ceo/api/breed/${breed}/images/random/7`;
      const breedOfDogs = await axios.get(api);
      setDogImageUrl(breedOfDogs.data.message);
      setError(false)
      setBreedQuery('')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  const onChange = (event)=>{
      setBreedQuery(event.target.value)
  }

  return (
    <div className={'container'}>
      <div className={'header-content text-center'}>
        <Header/>
      </div>
      <div className={'row'}>
        <div className={'main-img-container'}><img className="img-fluid " src={dogImageUrl[0]} /></div>
      </div>
      <div className={'row'}>
        <input value={breedQuery} onChange={onChange} name="breed" type="text" placeHolder="enter breed of dog"/>
        <button type="button" class="btn btn-primary" onClick={()=>{fetchBreed(breedQuery)}}>Anotha One</button>
      </div>
      <div className={'row carosel-container'}>
        <div className={'carosel'}><ImageCarousel images={dogImageUrl.slice(1)} />
        </div>
      </div>
    </div>
  );
}

export default App;
