import React from 'react';
import ny from '../../assets/ny.JPG'
import uh from '../../assets/uh.jpg'
import nju from '../../assets/nju.jpg'
import sw from '../../assets/sw.jpg'
import './inde.css'

const Card = () => {
  return (

<main>
      <div class="cover">
      <div class="container">
          <img src={nju} alt="Tupac" class="image" />
          <h3>Njue Brian</h3>
          <p>Highly respected lawyer in Kenya. He has been practicing law since the early 1990s, and has since become one of the most influential lawyers in the country.
           He has represented numerous high-profile clients, including multinational corporations and political leaders, and is renowned for his vast knowledge and understanding of Kenyan law.  </p>
            <button onclick="openMoreInfo();" class="btn">View More</button>        
           
          </div>

      

        <div class="container">
          <img src={ny} alt="Eazy-E" class="image"/>
          <h3>Nyaga Njeru</h3>
          <p> Retired hitman and assassin turned Reverend. He is portrayed as an unparalleled master of hand-to-hand combat and gunplay, often taking down multiple opponents at once. 
          He is known for his brutality and willingness to do whatever it takes to complete a mission </p>
            <button onclick="openMoreInfo();" class="btn">View More</button>
            
          </div>

          <div class="container">
            <img src={sw} alt="Ice Cube" class="image" />
            <h3>Samuel Maina</h3>
            <p>Responsible for providing personalized health care to a specific individual.
            work closely with their patients to develop long-term health plans that are tailored specifically to their individual situation.</p>
              <button onclick="openMoreInfo();" class="btn">View More</button>
              
            </div>
        
          <div class="container">
            <img src={uh} alt="Nate Dogg" class="image" />
            <h3>Uhuru Kenyatta</h3>
            <p>
            Another member of the Far EastCoast Movement is the former president and has a long history of involvement in politics. He is also a member of the African Union, the Commonwealth, and other international organizations.</p>
            <button onclick="openMoreInfo();" class="btn">View More</button>

          </div>


      
        
       
          </div>
    
</main>
  )}

  export default Card;