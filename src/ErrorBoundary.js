import React, { Component } from 'react';

// ErrorBoundary is a higher order component
// Add this component around components that should have error handling
class ErrorBoundary extends Component{
	state = {
		hasError: false,
		errorMessage: 'asss',
		errorInfo: 'as'
	}	

	componentDidCatch = (error, info) => {
		this.setState({
			hasError: true,
			errorMessage: error,
			errorInfo: info
		})
	}

	render(){
		if(this.state.hasError){
			return (
				<div>
					<h1> Error : {this.state.errorMessage} </h1>
					<p>Info: {this.state.errorInfo}</p>
				</div>
			)
		}
		else{
			return this.props.children;
		}
	}
}

export default ErrorBoundary;