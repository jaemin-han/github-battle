var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: [],
    }
  },

// +++++++++++++++++++++++++ React Life Cycle ++++++++++++++++++++++
// 1. getInitialState
//   - we establish our first initial state
// 2. componentWillMount will run before it 'renders'
// 3. Once 'render function' renders, componentDidMount will run
// 4. Anytime this component receives a new props, componentWillReceiveProps will run
// 5. once we navigate to a different route or switch away from this particular component,
//     componentWillUnmount occurs
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // componentWillMount: function () {
  //   console.log('componentWillMount')
  // },

// This function is fetchting information from github and then update state
// Once 'ConfirmBattle' renders to the view, (componentDidMount) callback function is going to run
// and gets playerOne and playerTwo query information from 'PromptContainer.js' file by fetching github api
  componentDidMount: function () {
    // console.log('componentDidMount')
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        // console.log('PLAYERS', players)
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      //.bind(this) allows to set a context. 'this' keyword inside of this function is going to be whatever I pass in to .bind
      }.bind(this))
    // fetch info from github and then update state
  },

  // componentWillReceiveProps: function () {
  //   console.log('componentWillReceiveProps')
  // },

  // componentWillUnmount: function () {
  //   console.log('componentWillUnmount');
  // },

  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },


// isLoading and playersInfo from componentDidMount function and info taken from PromptContainer
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}
      />
    )
  }
});

module.exports = ConfirmBattleContainer;
