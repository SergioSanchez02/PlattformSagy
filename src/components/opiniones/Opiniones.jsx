import React from 'react'
import './opiniones.css'

export default function Opiniones() {
  return (
    <div className='Opiniones' id="SectionOpiniones">
      <div className='conatinerOpinionesTi'>
          <div className='headerOpiniones'>
              <h1>Opiniones</h1>
          </div>
      </div>
      <div className='containerOpiniones'>
        <div class="slider">    

          <input type="radio" class="radio" name="images" id="radio-1" ></input>
          <input type="radio" class="radio" name="images" id="radio-2" ></input>
          <input type="radio" class="radio" name="images" id="radio-3" ></input>
          <input type="radio" class="radio" name="images" id="radio-4" ></input>

          <div class="slide0" id="slide-0">
              <img className="imgOpinion1" src={process.env.PUBLIC_URL + 'Opinion1.png'} alt="Opinion1.png"/>
          </div>
          <div class="slide" id="slide-1">
              <img className="imgOpinion1" src={process.env.PUBLIC_URL + 'Opinion1.png'} alt="Opinion1.png"/>
          </div>
          <div class="slide" id="slide-2">
              <img className="imgOpinion2" src={process.env.PUBLIC_URL + 'Opinion2.png'} alt="Opinion2.png"/>
          </div>
          <div class="slide" id="slide-3">
              <img className="imgOpinion3" src={process.env.PUBLIC_URL + 'Opinion3.png'} alt="Opinion3.png"/>
          </div>
          <div class="slide" id="slide-4">
              <img className="imgOpinion4" src={process.env.PUBLIC_URL + 'Opinion4.png'} alt="Opinion4.png"/>
          </div>

          <div class="dots">
              <label for="radio-1" id="label-1"></label>
              <label for="radio-2" id="label-2"></label>
              <label for="radio-3" id="label-3"></label>
              <label for="radio-4" id="label-4"></label>
          </div>
        </div>
      </div>
    </div>
  )
}

