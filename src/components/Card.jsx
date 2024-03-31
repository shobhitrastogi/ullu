import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Card = () => {
  const cards = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
      altText: '...',
      title: 'Paneer Ticca ',
      description: 'Description for Card 1',
      // link: '...'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
      altText: '...',
      title: 'Pizza',
      description: 'Description for Card 2',
      // link: '...'
    },
     {
      imageSrc: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D',
      altText: '...',
      title: 'Bread Sandwitch',
      description: 'Description for Card 2',
      // link: '...'
    }, 
    {
      imageSrc: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D',
      altText: '...',
      title: 'Ice-Cream',
      description: 'Description for Card 2',
      // link: '...'
    },
     {
      imageSrc: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D',
      altText: '...',
      title: 'Egg-Kadi',
      description: 'Description for Card 2',
      // link: '...'
    }, 
    {
      imageSrc: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fHw%3D',
      altText: '...',
      title: 'Bara',
      description: 'Description for Card 2',
      // link: '...'
    },
     {
      imageSrc: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D',
      altText: '...',
      title: 'Chaumin',
      description: 'Description for Card 2',
      // link: '...'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fHw%3D',
      altText: '...',
      title: 'Burger',
      description: 'Description for Card 2',
      // link: '...'
    },
     {
      imageSrc: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjJ8fHxlbnwwfHx8fHw%3D',
      altText: '...',
      title: 'Remon-Noodles',
      description: 'Description for Card 2',
      // link: '...'
    },
    // Add more card objects as needed
  ];

  return (
    <>
      <Navbar />
      <Link to={"/ullu"}>
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
              <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <img src={card.imageSrc} className="card-img-top" alt={card.altText} />
                <div className="card-body">
                  <h5 className="card-title text-de w-bold " >{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          </Link>
    </>
  );
};

export default Card;
