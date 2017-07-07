import React, { Component } from 'react';
import Anime from 'react-anime';

class Button extends Component {

    constructor (props) {
        super(props);
        this.state = {
            inButton: false
        }

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.pathStyle = {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            strokeWidth: props.strokeWidth || 1,
            stroke: props.strokeColor || 'blue',
            fill: props.fill || 'none',
            fillRule: props.fillRule || 'evenodd',
        }

        this.width = props.width ? +props.width : 180;
        this.height = +this.width / 3;

        this.buttonText = props.buttonText || 'hover me!';
        this.animatedText = props.animatedText;

        this.containerStyle = {opacity: 1,
                               boxSizing: "border-box",
                               display: "flex",
                               flexDirection: "column",
                               justifyContent: "center",
                               position: "relative",
                               textAlign: "center",
                               width: this.width,
                               height: this.height,
                               ...props.containerStyle};

        this.path = props.path || "M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z";
        this.animatedPath = props.animatedPath || "M10,10 C10,10 50,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,50 170,50 C170,50 130,53 90,53 C50,53 10,50 10,50 C10,50 8,40 8,30 C8,20 10,10 10,10 Z";

        this.hoverTextClassName = props.hoverTextClassName || 'hoverText';
        this.normalTextClassName = props.normalTextClassName || 'normalText';
    }

    onMouseEnter() {
      this.setState({inButton: true});
    }

    onMouseLeave() {
      this.setState({inButton: false});
    }

    render() {
        return this.state.inButton ? (this.renderHover()) : (this.renderNormal());
    }

    renderHover() {
        let textStyle = {'zIndex':'1000', ...this.props.textStyle}
        return(
            <a className="buttonHolder"
               onMouseEnter={ this.onMouseEnter }
               onMouseLeave={ this.onMouseLeave }
               style={this.containerStyle}
                >
                <svg viewBox={`0 0 180 60`} className="buttonSVG" style={this.pathStyle} {...this.props.additionalButtonProps}>
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
                    <div style={textStyle} className={this.hoverTextClassName}>{this.animatedText || this.buttonText}</div>
                </Anime>
            </a>
        );
    }

    renderNormal() {
        return(
            <a className="buttonHolder"
               onMouseEnter={ this.onMouseEnter }
               onMouseLeave={ this.onMouseLeave }
               style={this.containerStyle}
                >
                    <svg
                        viewBox={`0 0 180 60`}
                        className="buttonSVG" style={this.pathStyle}
                        {...this.props.additionalButtonProps}>
                            <path
                                className="buttonSVGPath"
                                d={this.path}
                                >
                            </path>
                    </svg>
                    <div style={{"zIndex":"1000", ...this.props.textStyle}}
                        className={this.normalTextClassName}>{this.buttonText}</div>
            </a>
        );
    }
}

module.exports = Button;
