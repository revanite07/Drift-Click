import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';
import cars from "./cars.json";
import './App.css';

class App extends Component {

    constructor(){
       super()
       this.handleDriftCars = this.handleDriftCars.bind(this)
    }

    state = {
        score: 0,
        topScore: 0,
        maxScore: 14,
        message: "Click a Car to Drift!",
        messageClass: "",
        cars: cars
    }
    
    drift = (array) => {
        let currentIndex = array.length;
        let tempVal;
        let randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
      
            tempVal = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempVal;
          }
      
      return array;

    }

    correctSelection = () => {
       
        if (this.state.score + 1 > this.state.topScore) {
           this.setState({
               topScore: this.state.topScore + 1, 
            })
       }
       if (this.state.score +1 === this.state.maxScore) {
           this.setState({
            score: this.state.score + 1, 
            message: "You Win!",
            messageClass: "correct"
         })
       } else {
           this.setState({
           score: this.state.score + 1,
           message: "You guessed correct!",
           messageClass: "correct"})
       }
    }

    handleReset = (currentCars) => {
        
        if (this.state.score + 1 === this.state.maxScore) {
            this.setState ({
                score: 0,
                topScore: 0
            })
            const updatedCars =  currentCars.map(car => (true)
            ? { ...car, isClicked: false } : car)
            return updatedCars;
        } else 
        return currentCars;
    }

  
    incorrectSelection = () => {
     
        this.setState({score: 0, message: "You guessed incorrectly!"})
        const updatedCars = this.state.cars.map(ch => ch.isClicked === true ? { ...ch, isClicked: false } : ch)
        return updatedCars
    }
    

  handleDriftCars = (name) =>  {
      var resetNeeded = false;
      const cars = this.state.cars.map(car => {
          if(car.name === name) {
              if (car.isClick === false){
                  this.correctSelection()
                  return {...car, isClicked: true}
              } else {
                  resetNeeded = true
                  return { ...car, isClicked: false}
              }
          }
          return car
      })
         if(resetNeeded){
             this.setState ({
                 cars: this.drift(this.incorrectSelection()),
                 messageClass: "incorrect"
             })
         } else {
             this.setState ({
                 cars: this.drift(this.handleReset(cars))
             })
         }
   }
   renderCars = () => {
    return this.state.cars.map((car) =>
      <Image
         image = {car.image}
         name = {car.name}
         onClick = {this.handleDriftCars}
         />
    );
}

    render() {
        return (
           <div className="App">
             <Navbar 
              score = {this.state.score}
              topscore = {this.state.topScore}
              message = {this.state.message}
              messageClass = {this.state.messageClass}
              />
              <Header />
              <div className = "content">
                {this.renderCars()}
              </div>
              <Footer />
           
           </div>
        );
    }
}

export default App;