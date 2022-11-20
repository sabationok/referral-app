import React, { Component } from 'react';

import Slider from 'react-slick';

import ActiveBonusesCard from '../Cards/ActiveBalaceCard';
import BlockedBonusesCard from '../Cards/BlockedBalanceCard';
import TransactionsList from '../TransactionsList/TransactionsList';



import s from './BonusesCards.module.scss';

export default class BonusesCards extends Component {
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
    // const settingsBottom = {
    //   dots: false,
    //   infinite: true,
    //   arrows: false,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };
    return (
      <div className={s.slickContainer}>
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

        {/* <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settingsBottom}
        >
          <TransactionsList />
          <TransactionsList />
        </Slider> */}
        <TransactionsList />
      </div>
    );
  }
}
