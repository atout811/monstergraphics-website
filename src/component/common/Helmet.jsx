import PropTypes from "prop-types";
import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.pageTitle} </title>
                </Helmet>
            </React.Fragment>
        )
    }
}
PageHelmet.propTypes = {
    title: PropTypes.string
};
export default PageHelmet;
