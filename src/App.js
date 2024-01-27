import React from 'react';
import MoviesList from './Components/MoviesList';
import './App.css';



// Added my own movie data
const moviesData = [
  {
    id: 1,
    title: "Bridget Jones's Diary",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/17/BridgetJonesDiaryMoviePoster.jpg",
    synopsis:
      "Bridget Jones is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
    rating: "R",
  },
  {
    id: 2,
    title: "Bridesmaids",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/df/BridesmaidsPoster.jpg",
    synopsis:
      "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
    rating: "R",
  },
  {
    id: 3,
    title: "Uncle Buck",
    image: "https://static.tvtropes.org/pmwiki/pub/images/rsz_uncle_buck_xlg.jpg",
    synopsis:
      "Laid back commitment-phobe Buck babysits his brother's rebellious teenage daughter and her cute younger brother and sister.",
    rating: "PG",
  },
  {
    id: 4,
    title: "Sixteen Candles",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/34/Sixteen_Candles.jpg",
    synopsis:
      "A girl's 'sweet' sixteenth birthday is anything but special: her family forgets about it, and she suffers from every embarrassment possible.",
    rating: "PG",
  },
  {
    id: 5,
    title: "Bohemian Rhapsody",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
    synopsis:
      "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
    rating: "R",
  },
];

const App = () => {
  return (
    <div className='appBody'>
      <h1>Five of My Favorite Movies</h1>
      <MoviesList movies={moviesData} />
    </div>
  );
};

export default App;
