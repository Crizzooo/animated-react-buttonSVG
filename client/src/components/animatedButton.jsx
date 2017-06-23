import React, { Component } from 'react';
import Anime from 'react-anime';

import './buttonStyle.scss';

export default class Button extends Component {

    constructor (props) {
        super(props);
        this.state = {
            inButton: false
        }

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    /* What can they customize?
    stroke-width
    stroke color
    button height
    button size
    font size
    font content
    custom path
    */
    onMouseEnter(evt) {
      console.log('Im inside here!', evt);
      this.setState({inButton: true});
    }

    onMouseLeave() {
      console.log('im leaving!');
      this.setState({inButton: false});
    }

    render() {
        return (this.state.inButton) ? this.renderHover() : this.renderNormal();
    }

    renderHover() {
        return(
            <a className="buttonHolder"
               onMouseEnter={ this.onMouseEnter }
               onMouseLeave={ this.onMouseLeave }
                >
                <svg viewBox="0 0 180 60" className="buttonSVG">
                    <Anime
                    d="M10,10 C10,10 50,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,50 170,50 C170,50 130,53 90,53 C50,53 10,50 10,50 C10,50 8,40 8,30 C8,20 10,10 10,10 Z"
                    elasticity="700"
                    offset="0"
                    >
                        <path
                            className="buttonSVGPath"
                            d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z"
                            >
                        </path>
                    </Anime>
                </svg>
                <Anime
                    scale="1.15"
                    duration="800"
                    offset="0">
                    <div>I'm a Button!</div>
                </Anime>
            </a>
        );
    }

    renderNormal() {
        return(
            <a className="buttonHolder"
               onMouseEnter={ this.onMouseEnter }
               onMouseLeave={ this.onMouseLeave }
                >
                    <svg viewBox="0 0 180 60" className="buttonSVG">
                            <path
                                className="buttonSVGPath"
                                d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z"
                                >
                            </path>
                    </svg>
                    <div>I'm a Button!</div>
            </a>
        );
    }
}
