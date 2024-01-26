import React from 'react';
import MoviesList from './Components/MoviesList';
import './App.css';



// Added my own movie data
const moviesData = [
  {
    id: 1,
    title: "Old School",
    image:
      "https://impdb.fandom.com/wiki/Old_School?file=Old_School_2003.jpg",
    synopsis:
      "Three friends attempt to recapture their glory days by opening up a fraternity near their alma mater.",
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
    title: "Wedding Crashers",
    image:
      "https://www.imdb.com/title/tt0396269/mediaviewer/rm746526464/?ref_=tt_ov_i",
    synopsis:
      "John Beckwith and Jeremy Grey, a pair of committed womanizers who sneak into weddings to take advantage of the romantic tinge in the air, find themselves at odds with one another when John meets and falls for Claire Cleary.",
    rating: "R",
  },
  {
    id: 5,
    title: "Step Brothers",
    image:
      "https://www.imdb.com/title/tt0838283/mediaviewer/rm3433645824/?ref_=tt_ov_i",
    synopsis:
      "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
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
