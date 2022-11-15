import React, { Component } from 'react';

import Slider from 'react-slick';

import ActiveBonusesCard from './BonusesCards/Cards/ActiveBonusesCard';
import BlockedBonusesCard from './BonusesCards/Cards/BlockedBonusesCard';


import s from './SlickTest.module.scss';

export default class SlickTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settingsTop = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settingsBottom = {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={s.slickContainer}>
        <div className={s.sliderTop}>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            {...settingsTop}
          >
            <div>
              <ActiveBonusesCard />
            </div>
            <div>
              <BlockedBonusesCard />
            </div>
          </Slider>
        </div>
        <div className={s.sliderBottom}>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settingsBottom}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
