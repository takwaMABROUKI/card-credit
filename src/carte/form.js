import React, { Component } from 'react'
import'./carte.css'
import Carte from './carte.js'

export default class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: "xxxxxxxx",
            number: '•••• •••• •••• ••••',
            date:"\M\M / \Y\Y",
    
                       
          }

        }
        //Name of Card credit
  nameChange=(event) => {
    const regex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    if(( (event.target.value).length<=20) && (regex.test(event.target.value)))
    this.setState({
    
      name: (event.target.value).toUpperCase()
    });

    else 
    {    event.target.value=""
    this.setState({
    
     name: ""})

    }
  }
  //Number of Card credit
  numberChange=(event) => {
    
    const regex_num=/[0-9]/g
    if((String (event.target.value).length<=16) && (regex_num.test(event.target.value)))
      
    this.setState({
      number: event.target.value.slice(0, 4).concat(' ',event.target.value.slice(4, 8)).concat(' ',event.target.value.slice(8, 12)).concat(' ',event.target.value.slice(12, 16))
    });
    else
    {    event.target.value="";
    this.setState({
    
      number: ""})

    } 
  }

   //Date of Card credit
   dateChange=(event) => {
    
    
    
                  
        if (isNaN(event.target.value.slice(event.target.value.length-1, event.target.value.length)))
        
         {
           event.target.value="";
       
           this.setState({date: ""})
         }
          else
          {
       
        this.setState({date: event.target.value})
        if (this.state.date.length==1)
          {
     
              event.target.value += "/";
 
   
         if (  (event.target.value) > "13") 
         {
         event.target.value="";
   
         this.setState({date: ""})
         return; 
   
        }
        else
       
       this.setState({date: event.target.value})  
        
  
          }
         }
      
     }






   
        
    render() {
        return (
            
            <div className="carte-crédit">
            
            <Carte userNumber={this.state.number} userName={this.state.name} userDate={this.state.date}/>

            <form className="formulaire" method="POST" action="#">
            
            <input type="text" name="nombre" onChange={this.numberChange}/>
 
            <input type="text" name="Nom" onChange={this.nameChange}/>

            <input  type="text" name="date" maxLength="5" onChange={this.dateChange} />

            </form>
            
            </div>
        )
    }
    }
