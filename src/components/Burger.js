import React, { Component } from 'react'
import './BurgerStyle.css';

export default class Burger extends Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0
  }
  addRemoveIngredient = (action, ingredient) => {
    let {
      lettuce,
      tomato,
      cheese,
      meat
    } = this.state;
    let stateValue;
    switch(ingredient) {
      case 'lettuce':{
        stateValue = lettuce;
        break;
      }
      case 'tomato':{
        stateVelue = tomato;
        break;
      }
      case 'cheese':{
        stateVelue = cheese;
        break;
      }
      case 'meat':{
        stateVelue = meat;
        break;
      }
      default: break;
    }
    if(action === 'add'){
      stateValue = stateValue + 1;
    }else {
      stateValue = stateValue - 1;
    }
    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0
    });


  }
  burger1 = () => {
    let {
      lettuce,
      tomato,
      cheese,
      meat
    } = this.state;
    let burger = [];
    for (let i=0; i<lettuce; i++){
      burger.push(<div key={burger.length} className='lettuceSide'></div>);
    }
    
    for (let i=0; i<tomato; i++){
      burger.push(<div key={burger.length} className='tomatoSide'></div>);
    }
    for (let i=0; i<cheese; i++){
      burger.push(<div key={burger.length} className='cheeseSide'></div>);
    }
    for (let i=0; i<meat; i++){
      burger.push(<div key={burger.length} className='meatSide'></div>);
    }
    if(burger.length === 0)
      burger.push(<p key="0">Aub voeg het ingredient toe</p>);
      return burger;

  }

  render(){
    return(<>
    <div className="burgerIngredients">
      <div className="topSide"></div>
      {this.burger1()}
      <div className="bottomSide"></div>
    </div>
    <div className="ingredientBlock">
      <p>Lettuce</p>
      <div className="ingrBtns">
        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','lettuce')}>Toevoegen</button>
        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','lettuce')}>Verwijderen</button>
      </div>
      <p>Tomato</p>
      <div className="ingrBtns">
        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>Toevoegen</button>
        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>Verwijderen</button>
      </div>
      <p>Cheese</p>
      <div className="ingrBtns">
        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','cheese')}>Toevoegen</button>
        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','cheese')}>Verwijderen</button>
      </div>
      <p>Meat</p>
      <div className="ingrBtns">
        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','meat')}>Toevoegen</button>
        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','meat')}>Verwijderen</button>
      </div>
    </div>
    </>)
  }



}