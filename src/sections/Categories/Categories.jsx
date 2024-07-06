import './Categories.css'
import { useState } from 'react';
import { pro13Max, pro14Max, s23Ultra, s24Ultra, watch1, watch2, watch3, watch4, headset1, headset2, headset3, headset4, accessory1, accessory2, accessory3 } from '../../assets/index';
import Container from '../../components/Container/Container'
import MainTitle from '../../components/mainTitle/mainTitle';
import Card from './Card/Card';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [
    { id: 1, img: pro13Max, name: 'iPhone 13 Pro Max', description: 'perfect for performance', price: '499.00', category: 'phones' },
    { id: 2, img: headset1, name: 'Black Headset', description: 'perfect phone for games', price: '48.99', category: 'headsets' },
    { id: 3, img: watch1, name: 'beauty Watch', description: 'perfect headset for games', price: '30.00', category: 'watches' },
    { id: 4, img: accessory1, name: 'Phone Holder', description: 'perfect watch for vlogs', price: '34.99', category: 'accessories' },

    { id: 5, img: s23Ultra, name: 'Samsung s23 Ultra', description: 'get the new trend one', price: '490.99', category: 'phones' },
    { id: 6, img: headset2, name: 'White Headset', description: 'perfect phone for games', price: '25.35', category: 'headsets' },
    { id: 7, img: watch2, name: 'Gray Watch', description: 'perfect headset for gentleman', price: '50.20', category: 'watches' },
    { id: 8, img: accessory2, name: 'Samsung Charger', description: 'Super Samsung Charger', price: '99.00', category: 'accessories' },

    { id: 9, img: s24Ultra, name: 'Samsung s24 Ultra', description: 'the GOAT officially', price: '669.99', category: 'phones' },
    { id: 10, img: headset3, name: 'Gaming Headset', description: 'best for Gamers', price: '110.00', category: 'headsets' },
    { id: 11, img: watch3, name: 'Formal Watch', description: 'perfect headset for fasion', price: '80.99', category: 'watches' },
    { id: 12, img: accessory3, name: 'Power Bank', description: 'black Power Back', price: '200.99', category: 'accessories' },

    { id: 13, img: pro14Max, name: 'iPhone 14 pro max', description: 'perfect one to anyone', price: '680.00', category: 'phones' },
    { id: 14, img: headset4, name: 'Super Headset', description: 'perfect phone for sounds', price: '150.35', category: 'headsets' },
    { id: 15, img: watch4, name: 'Formal Watch', description: 'perfect for teens', price: '50', category: 'watches' },

  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards = categories.filter((card) => {
    if (selectedCategory === 'all') return true;
    return card.category === selectedCategory;
  });

  return (
    <div className='categories' id='categories'>
      <Container>
        <MainTitle title="Categories" />
        <Titles handleCategoryClick={handleCategoryClick} />
        <div className="cards">
          {filteredCards.map((card) => (
            <Card key={card.id} img={card.img} name={card.name} description={card.description} price={card.price} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const Titles = ({ handleCategoryClick }) => {
  return (
    <div className="titles">
      <div className="all" onClick={() => handleCategoryClick('all')}>All</div>
      <div className="phones" onClick={() => handleCategoryClick('phones')}>Phones</div>
      <div className="headsets" onClick={() => handleCategoryClick('headsets')}>Headsets</div>
      <div className="accessories" onClick={() => handleCategoryClick('accessories')}>Accessories</div>
      <div className="watches" onClick={() => handleCategoryClick('watches')}>Watches</div>
    </div>
  );
};

export default Categories;
