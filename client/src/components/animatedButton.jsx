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

        this.pathStyle = {
            strokeWidth: props.strokeWidth || 1,
            stroke: props.strokeColor || 'green',
            fill: props.fill || 'none',
            fillRule: props.fillRule || 'evenodd',
        }

        // Default width is 180, best height is 1/3;
        console.log('prop Width:' , props.width);
        console.log('prop Height: ', props.height );
        this.width = props.width ? +props.width : 180;
        this.height = +this.width / 3;
        console.log('calculated height: ', this.height);
        console.log('calculated width: ', this.width);

        this.buttonText = props.buttonText || 'Hover Me!';

        this.path = props.path || "M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z";
        this.animatedPath = props.animatedPath || "M10,10 C10,10 50,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,50 170,50 C170,50 130,53 90,53 C50,53 10,50 10,50 C10,50 8,40 8,30 C8,20 10,10 10,10 Z";
    }
    // TODO: Make separate text for animation?
    /* What can they customize?
    stroke-width - strokeWidth                         X
    stroke color - strokeColor                         X
    fill         - fill                                X
    fillRule     - fillRule                            X
    height       - given value || props.width * 1/3    X
    width        - given value || 180                  X
    font size    - buttonTextStyle, buttonHoverTextStyle
    font content - buttonText                          X
    custom path  - path, animatedPath                  X
    cusotmAnimations - pathAnimationProps, textAnimationProps X
    textStyle, textClassName
        textStyle is on both normal and hover text     X
        hoverTextClassName                             X
        normalTextClassName                            X
    */
    onMouseEnter() {
      this.setState({inButton: true});
    }

    onMouseLeave() {
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
               style={{"width": this.width, "height": this.height}}
                >
                <svg viewBox={`0 0 180 60`} className="buttonSVG" style={{...this.pathStyle}} {...this.props.additionalButtonProps}>
                    <Anime
                    d={this.animatedPath}
                    elasticity="700"
                    offset="0"
                    {...this.props.pathAnimationProps}
                    >
                        <path
                            className="buttonSVGPath"
                            d={this.path}
                            >
                        </path>
                    </Anime>
                </svg>
                <Anime
                    scale="1.15"
                    duration="800"
                    offset="0"
                    {...this.props.textAnimationProps}
                >
                    <div style={{"zIndex":"1000", ...this.props.textStyle}} className={this.props.hoverTextClassName}>{this.buttonText}</div>
                </Anime>
            </a>
        );
    }

    renderNormal() {
        return(
            <a className="buttonHolder"
               onMouseEnter={ this.onMouseEnter }
               onMouseLeave={ this.onMouseLeave }
               style={{"width": this.width, "height": this.height}}
                >
                    <svg
                        viewBox={`0 0 180 60`}
                        className="buttonSVG" style={this.pathStyle}
                        {...this.props.buttonStyle}>
                            <path
                                className="buttonSVGPath"
                                d={this.path}
                                >
                            </path>
                    </svg>
                    <div style={{"zIndex":"1000", ...this.props.textStyle}}
                        className={this.props.normalTextClassName}>{this.buttonText}</div>
            </a>
        );
    }
}
