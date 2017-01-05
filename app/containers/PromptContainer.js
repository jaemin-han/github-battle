var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: ''
    }
  },

  // this [function] is for users --- whatever they type in the input field
  handleUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    });
  },

  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    //  if player one has a route param that is truthy that means we're on second route
    // and we need to go to the battles page.
    if (this.props.routeParams.playerOne) {
      // console.log(this.context)
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    // if not, we're on first page (player one page) and still needs to go to player two page
    } else {
      // console.log(this.context)
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function () {
    // console.log(this)
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
