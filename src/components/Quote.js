  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  import { connect } from 'react-redux';
  import { fetchQuote } from '../actions/quoteActions';

  class Quote extends Component {
    componentWillMount() {
      const script = document.createElement("script");
      script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
      document.body.appendChild(script);
      
    }

    componentDidMount() {
      this.props.fetchQuote();
    }
    
    tweet() {
    }

    render() {
      let quote = {}
      if(this.props.data.quote) {
        quote = this.props.data.quote;
      }
      const encodedQuote = encodeURIComponent(quote.quote +" - "+quote.author);
      const encodedURL= encodeURIComponent(window.location.href);
      const twitterAttr = { "href": "https://twitter.com/intent/tweet?text="+encodedQuote+"&url="+encodedURL  };
      
  
      return (
        <div id="quote-box">
          <blockquote id="text">{quote.quote}</blockquote>
          <cite id="author">{quote.author}</cite>
          <br / >
          <div className="button-row">
            <button id="new-quote" className="button" onClick={this.props.fetchQuote}>New quote</button>
            <a id="tweet-quote" className="button" target="_blank" { ...twitterAttr }>Tweet quote</a>
          </div>
        </div>
      );
    }
  }

  Quote.propTypes = {
    fetchQuote: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => ({
    data: state.quote
  });

  export default connect(mapStateToProps, { fetchQuote })(Quote);
