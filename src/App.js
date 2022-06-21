import './App.scss';
import Person1 from './images/person-1.jpg'
import Person2 from './images/person-2.jpg'
import Person3 from './images/person-3.jpg'
import Person4 from './images/person-4.jpg'
import Person5 from './images/person-5.jpg'
import { useState } from 'react'

const persons = [
  {photo: Person1, name: 'jessica mill', job: 'ui/ux designer', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellat ullam et veniam dolor dolores expedita. Aasdlkjsaşlf afbdsndskl şgoirkhiroş ajkslemsşajrş pgfıgpgprjgjğr rjıg rjıpgjrpg eıpjr'},
  {photo: Person2, name: 'elisa brown', job: 'backend developer', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellat ullam et veniam dolor dolores expedita. Veniam amet vero reiciendis.'},
  {photo: Person3, name: 'harry dunnwell', job: 'web developer', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellat ullam et veniam dolor dolores expedita ullam et veniam dolor dolores expedita. ullam et veniam dolor dolores expedita. ullam et veniam dolor dolores expedita'},
  {photo: Person4, name: 'peter smith', job: 'frontend developer', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellat aşkdsjşdjaks ullam et veniam dolor dolores expedita. consectetur adipisicing elitconsectetur adipisicing elit'},
  {photo: Person5, name: 'julia johnson', job: 'data analyst', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellat ullam et veniam dolor dolores expedita. Veniam amet vero reiciendis? repellat ullam et veniam dolor dolores expedita. Veniam amet vero reiciendis? Veniam amet Veniam amet.'}
]

const App = () => {
  const [index, setIndex] = useState(1)
  const {photo, name, job, bio} = persons[index]

  const next = () => {
    if(index < 4) setIndex(index + 1)
  }

  const previous = () => {
    if(index > 0) setIndex(index - 1)
  }

  const random = () => {
    setIndex(Math.floor(Math.random()*5))
  }

  return (
    <div id='container'>
      <h1>Reviews</h1>
      <div id='review-box'>
        <div id='review-img'>
          <img src={photo}></img>
        </div>
        <div id='review-text'>
          <p id='name'>{name}</p>
          <p id='job'>{job}</p>
          <p id='bio'>{bio}</p>
        </div>
        <div id='review-btn'>
          <button id='prev' onClick={previous}><i className="fa-solid fa-angle-left"></i></button>
          <button id='random' onClick={random}>Random</button>
          <button id='next' onClick={next}><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
    </div>
  )
}

export default App;
