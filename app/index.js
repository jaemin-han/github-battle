// var app = document.getElementById('app');
// app.innerHTML = 'Hello!'

//run a local server - grab index.js -- run through babel loader -- jsx to js -- output to dist/index_bundle.js
// and then html webpack plugin runs and throw into index.html which references the file I made [localhost:8080]!!! woohoo!!
// var USER_DATA = {
//   name: 'Jaemin Han',
//   username: 'jaemin-han',
//   image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/029/2c5/1076db2.jpg'
// }

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// var HelloWorld = React.createClass({
//   render: function () {
//     // console.log(this.props)
//     return (
//       <div> Hello {this.props.name} {this.props.anySortOfData} </div>
//     )
//   }
// });


// Focused
// Independent
// Reusable
// Small
// Testable

// var ProfilePic = React.createClass ({
//   render: function () {
//     return <img src={this.props.imageURL} style={{height: 100, width: 100}} />
//   }
// });

// var Link = React.createClass ({
//   changeURL: function () {
//     window.location.replace(this.props.href)
//     // built in browser DOM method
//   },
//   render: function () {
//     return (
//       <span
//       style={{color: 'blue', cursor: 'pointer'}}
//       onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     )
//   }
// })

// var ProfileLink = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Link href={'https://www.github.com/' + this.props.username}>
//           {this.props.username}
//         </Link>
//       </div>
//     )
//   }
// });

// var ProfileName = React.createClass ({
//   render: function () {
//     return (
//       <div>{this.props.name}</div>
//     )
//   }
// });

// var Avartar = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <ProfilePic imageURL={this.props.user.image} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username} />
//       </div>
//     )
//   }
// })

// this is just to test Avatar
// ReactDOM.render(<Avartar user={USER_DATA} />, document.getElementById('app'));

ReactDOM.render(routes, document.getElementById('app'));
