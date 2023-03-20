import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { assertions, history } = this.props;
    const three = 3;
    return (
      <div>
        <Header />
        <span data-testid="feedback-text">
          {
            assertions < three ? <p>Could be better...</p> : <p>Well Done!</p>
          }
        </span>
        <button
          data-testid="btn-play-again"
          onClick={ () => history.push('/') }
        >
          Play Again
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Feedback);