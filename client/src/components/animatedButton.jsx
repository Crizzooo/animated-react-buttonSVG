import React, { Component } from 'react';
import Anime from 'react-anime';

import './buttonStyle.scss';

export default class Button extends Component {

    constructor (props) {
        super(props);
        this.state = {
            inButton: false
        }
        console.log('im  a constructor prop', props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.pathStyle = {
            strokeWidth: props.strokeWidth || 1,
            stroke: props.strokeColor || 'green',
            fill: props.fill || 'none',
            fillRule: props.fillRule || 'evenodd'
        }
    }
    /* What can they customize?
    stroke-width - strokeWidth
    stroke color - strokeColor
    button height- 1/3 of the width
    button size  - buttonWidth
    font size    - buttonTextStyle, buttonHoverTextStyle
    font content - buttonText
    custom path  - buttonPath, buttonHoverPath
    */
    onMouseEnter(evt) {
      this.setState({inButton: true});
    }

    onMouseLeave() {
      this.setState({inButton: false});
    }

    render() {
        return (this.state.inButton) ? this.renderHover() : this.renderNormal();
    }

    renderHover() {
        let width = 180;
        return(
            <a className="buttonHolder"
               onMouseEnter={ this.onMouseEnter }
               onMouseLeave={ this.onMouseLeave }
               style={{width, "height": width / 3}}
                >
                <svg viewBox="0 0 180 60" className="buttonSVG" style={this.pathStyle}>
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
                    <div style={{"zIndex":"1000"}}>I'm a Button!</div>
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
                    <svg viewBox="0 0 180 60" className="buttonSVG" style={this.pathStyle}>
                            <path
                                className="buttonSVGPath"
                                d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z"
                                >
                            </path>
                    </svg>
                    <div style={{"zIndex":"1000"}}>I'm a Button!</div>
            </a>
        );
    }
}
