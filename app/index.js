// var app = document.getElementById('app');
// app.innerHTML = 'Hello!'

//run a local server - grab index.js -- run through babel loader -- jsx to js -- output to dist/index_bundle.js
// and then html webpack plugin runs and throw into index.html which references the file I made [localhost:8080]!!! woohoo!!
var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
//   render: function () {
//     // console.log(this.props)
//     return (
//       <div> Hello {this.props.name} {this.props.anySortOfData} </div>
//     )
//   }
// });

var ProfilePic = React.createClass ({
  render: function () {
    return <img src={this.props.imageURL} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass ({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avartar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageURL={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(<Avartar user={USER_DATA} />, document.getElementById('app'));
