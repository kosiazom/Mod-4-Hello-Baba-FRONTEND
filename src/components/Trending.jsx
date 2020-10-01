import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import styled from 'styled-components';
import {Image} from 'semantic-ui-react' 

// import ItemsCarousel from '../../src/ItemsCarousel';



// const Trending = (props) => 
// {

    
    // const {trendingProducts} = this.props.trendingProducts

    
const noOfItems = 4;
const noOfCards = 1;
const autoPlayDelay = 5000;
const chevronWidth = 100;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 500px;
  max-height: 500px;
  margin: 0 ;
`;

const SlideItem = styled.div`
  height: 200px;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index}>
    {index+1}
  </SlideItem>
));

export default class Trending extends React.Component {
  state = {
    activeItemIndex: 0,
  };
  

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
  const trendingDivs = this.props.trendingProducts.map(trendingProduct => {return <div > <br/> {trendingProduct.name} <Image style ={{height: 400, width: 300}}src= {trendingProduct.product_img} /></div>})
    return (
      <Wrapper >
           <p class="ui  large orange ribbon label">
      Halloween Sale
    </p>
    <div class= "ui black tag label">$10.31</div>
        <ItemsCarousel
      
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          activePosition='center'
          requestToChangeActive={this.onChange}
          rightChevron={<div class="ui animated button" tabIndex="0">
          <div class="visible content">Next</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>}
        
          leftChevron={<div class="ui animated button" tabIndex="0">
          <div class="visible content">Previous</div>
          <div class="hidden content">
            <i class="left arrow icon"></i>
          </div>
        </div>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        >
            
{trendingDivs}
         </ItemsCarousel>
         
      </Wrapper>
    );
  }
}


                
        
    

