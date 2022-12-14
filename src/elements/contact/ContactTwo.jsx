import React, { Component } from "react";

class ContactTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">Let's Say Hi</span>
                                <h2 className="title">Contact With Us.</h2>
                                <div className="im_address">
                                    <span>Call us directly:</span>
                                    <a className="link im-hover" href="phone">+1(929)257-6102</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>Contact Email:</span>
                                    <a className="link im-hover" href="email">Hello@monstergraphics.com</a>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <form>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30" style={{padding:"5rem"}}>
                                <img src="/assets/images/about/about-1.png" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;