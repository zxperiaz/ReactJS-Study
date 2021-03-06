import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import { type } from 'os';

// function getFullName(firstName, lastName) {
// 	return firstName + ' ' + lastName;
// }

// const arrUser = [
// 	{
// 		firstName: "Trung",
// 		lastName: "Phan",
// 		email: "trungphan@gmail.com"	
// 	},

// 	{
// 		firstName: "Nho",
// 		lastName: "Nguyen",
// 		email: "nhonguyen@gmail.com"	
// 	},

// 	{
// 		firstName: "Hieu",
// 		lastName: "Phan",
// 		email: "hieuphan@gmail.com"	
// 	},

// 	{
// 		firstName: "Trung",
// 		lastName: "Phan",
// 		email: ""	
// 	},

// 	{
// 		firstName: "Nho",
// 		lastName: "Nguyen",
// 		email: "nhonguyen@gmail.com"	
// 	},

// 	{
// 		firstName: "Hieu",
// 		lastName: "Phan",
// 		email: ""	
// 	}
// ]

// const user = {
// 	firstName: "Trung",
// 	lastName: "Phan",
// 	email: "trungphan@gmail.com"
// }

// const nameStyle = {
// 	fontSize: '1.5em'
// }

// const emailStyle = {
// 	color: '#595959'
// }

// const nonEmailStyle = {
// 	color: '#bfbfbf',
// 	fontStyle: 'italic'
// }

// const User = (props) => {
// 	const user = props.user;

// 	const name = (
// 		<div style={nameStyle}>{`${user.firstName} ${user.lastName}`}</div>
// 	)

// 	// const email = (user.email) ? (
// 	// 	<div style={emailStyle}>{user.email}</div>
// 	// ) : (
// 	// 	<div style={nonEmailStyle}>emptyemail@gmail.com</div>
// 	// )

// 	const email = (
// 		<div style={{
// 			color: 'grey',
// 			fontStyle: user.email ? 'initial' : 'italic'
// 		}}> {user.email || 'Email is empty'} </div>
// 	)

// 	const element = (
// 		<div>{name}{email}</div>
// 	)

// 	return element;
// }

//App -> Counter
class App extends React.Component {
	state = { 
		showCounter: true,
		delta: 1
	}

	handleDeltaChange = (nextDelta) => {
		this.setState({ delta: nextDelta })
	}

	handleToggleCounter = () => {
		this.setState({ showCounter: !this.state.showCounter })
	}

	render() {
		return (	
			<div>
				{this.state.showCounter ?
					<div>
						<Counter name="Counter 1" delta={this.state.delta} onDeltaChange={this.handleDeltaChange}/>
						<hr/>
						<Counter name="Counter 2" delta={this.state.delta} onDeltaChange={this.handleDeltaChange}/>
					</div> : null}
				<button type="button" onClick={this.handleToggleCounter}>
					{this.state.showCounter ? 'Hide' : 'Show'} counter
				</button>
			</div>
		)
	}
}

//App -> User
// function App() {
// 	const element = arrUser.map(user => {
// 		return <User user={user}/>
// 	});

// 	return element;
// }

// const App = () => {
// 	const firstName = "Trung";
// 	const lastName = "Phan";

// 	const element = (
// 		<div style={{
// 			backgroundColor: "green"
// 		}}>Hello <b>{getFullName(firstName, lastName)}</b></div>
// 	)

// 	const welcome = <div>Welcome message: {element}</div>

// 	return welcome;
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
