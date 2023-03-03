import React from 'react'
import './App.css'
import axios from 'axios'
//we must install axios by using npm install axios//


class App extends React.Component {
  state ={advice:''};

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
          .then((response) =>{
              const {advice} = response.data.slip;
              
              this.setState({advice});
          })
          .catch((error) =>{
              console.log(error)
          } );
  }

  render() {
    const {advice} = this.state;
    return (
      <div className='App'>
        <div className='card'>
          <h2 className='heading'>{advice}</h2>
          <button className='button' onClick={this.fetchAdvice}>
            <span>Next Advice</span>
          </button>
        </div>
      </div>

    );
  }
}

export default App
