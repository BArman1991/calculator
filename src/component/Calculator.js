import React from 'react';
import Batton from './Batton';
import Display from './Display';
import './Calculator.css';


class Calculator extends React.Component{
  state = {
    value: '',
    result: '',
    action: ''
}
   
printValue(value) {
  const newVal = this.state.value + value
  parseInt(newVal); 
  this.setState(() => ({value: newVal }))
  
}

zeroValue = () => {
  this.setState(()=>({
      value: '',
      action: '',
      result: ''
  }))
  console.log(this.state.value,this.state.action,this.state.result)
};


onAction(e){
  const newAction = e;

  var numResult = 0;
  var numValue = 0;


  if(this.state.result != ""){
    numResult = parseInt(this.state.result, 10);
  }
  console.log('NumResult '+numResult)
  console.log("before action value:", this.state.value)


  if(this.state.value != ""){
    numValue = parseInt(this.state.value, 10);
  }
  console.log('numValue '+numValue)

  if(this.state.action == ""){
    this.setState(() => ({
      action: newAction,
      value: '',
      result: numValue,
    }));
    console.log('NumValue'+numValue, 'NumResult'+numResult);
  }else{
    switch (this.state.action) {
      case '+':
        this.setState(() => ({
          action: newAction,
          value: '',
          result: numResult + numValue,
        }))
        console.log('NumValue+'+numValue, 'NumResult'+numResult);
        break;
      case '-':
        console.log("The result is: ", numResult)
         this.setState(() => ({
          action: newAction,
          value: '',
          result: numResult - numValue,
        }))
        console.log('NumValue-'+numValue, 'NumResult'+numResult);
        break;
      case 'X':
        this.setState(() => ({
          action: newAction,
          value: '',
          result: numResult * numValue,
        }))
        console.log('NumValueX'+numValue, 'NumResult'+numResult);
        break;
      case ':':
        this.setState(() => ({
          action: newAction,
          value: '',
          result: numResult / numValue,
        }))
        console.log('NumValue:'+numValue, 'NumResult'+numResult);
        break;
      case '±':
        this.setState(() => ({
          action: newAction,
          value: '',
          result: numResult * -1
        }))
        console.log('NumValue%'+numValue, 'NumResult'+numResult);
        break;
      default:
        break;
    }
    console.log('Result:'+this.state.value,'Value:'+this.state.action,this.state.result)
  }
  }

  

onEquall(){
  var numResult = 0;
  var numValue = 0;
  var result = 0;
  if(this.state.result){
     numResult = parseInt(this.state.result, 10);
    }
  if(this.state.value){
      numValue = parseInt(this.state.value, 10);
    }
  if(this.state.action === '+'){
    result = numResult + numValue
  }
  if(this.state.action === '-'){
    result = numResult - numValue
  }
  if(this.state.action === 'X'){
    result = numResult * numValue
  }
  if(this.state.action === ':'){
    result = numResult / numValue
  }
  if(this.state.action === '%'){
    result = numResult / 100
  }
  if(this.state.action === '±'){
    result = numResult * -1
  }
  this.setState(() => ({
   value: result,
  }))
  console.log('Result:'+this.state.result, 'Value:'+ this.state.value)
}

updateChange = (e) => {
 this.setState({
   value: e.target.value,
 })
}


printAction(){
  this.setState((e)=>({
    value: e = this.result
  }));
}



    render(){
        return(
            <div className="Calculator">
            <Display 
            changeValue={(e) => this.updateChange(e)}
            value={this.state.value} 
            action={this.state.action} 
            result={this.state.result}/>
            <Batton className='topButton' value='AC' changeValue={() => this.zeroValue()}/>
            <Batton className='topButton' value='±' changeValue={() => this.onAction('±')}/>
            <Batton className='topButton' value='%' changeValue={() => this.onAction('%')}/>
            <Batton className='rightButton' value=':' changeValue={() => this.onAction(':')}/>
            <Batton value="7" changeValue={() => this.printValue('7')}/>
            <Batton value="8" changeValue={() => this.printValue('8')}/>
            <Batton value="9" changeValue={() => this.printValue('9')}/>
            <Batton className='rightButton' value='X' changeValue={() => this.onAction('X')}/>
            <Batton value="4" changeValue={() => this.printValue('4')}/>
            <Batton value="5" changeValue={() => this.printValue('5')}/>
            <Batton value="6" changeValue={() => this.printValue('6')}/>
            <Batton className='rightButton' value='-' changeValue={() => this.onAction('-')}/>
            <Batton value="1" changeValue={() => this.printValue('1')}/>
            <Batton value="2" changeValue={() => this.printValue('2')}/>
            <Batton value="3" changeValue={() => this.printValue('3')}/>
            <Batton className='rightButton' value='+' changeValue={() => this.onAction('+')}/>
            <Batton value="0" className='zero' changeValue={() => this.printValue('0')}/>
            <Batton value='.' changeValue={() => this.printValue('.')}/>
            <Batton className='rightButton' value='=' changeValue={() => this.onEquall()}/>
            </div>
        );
    }
}

export default Calculator;