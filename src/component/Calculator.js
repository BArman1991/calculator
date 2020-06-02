import React from 'react';
import Batton from './Batton';
import Display from './Display';  
import './Calculator.css';



class Calculator extends React.Component{
  state = {
    value: '',
    result: '',
    action: '',
    inPut:''
}
   
printValue(value) {
  const newVal = this.state.value + value
  //parseFloat(newVal); 
  // this.setState(() => ({value: newVal }))
  this.setState(() => ({value: newVal }))
  
}


getDisplayValue(){
  return this.state.value?this.state.value:this.state.result
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
  var numMemory = 0;


  // if(this.state.result !== ""){
  if(this.state.result){
    numResult = parseFloat(this.state.result, 10);
  }
  

  // if(this.state.value !== ""){
  if(this.state.value){
    numValue = parseFloat(this.state.value, 10);
  }
  

  if(this.state.action === ""){
    this.setState(() => ({
      action: newAction,
      value: '',
      result: numValue,
    }));
  }else{
    switch (this.state.action) {
      case '+':
        numMemory = numResult + numValue 
        console.log('Plus NumValue '+numValue, 'NumResult '+numResult, 'action'+newAction,' Input '+this.state.inPut);
        break;
      case '-':
         numMemory = numResult - numValue;
        console.log('Minus NumValue '+numValue, 'NumResult '+numResult);
        break;
      case '×':
        numMemory = numResult * numValue;
        console.log('umnojit NumValue '+numValue, 'NumResult '+numResult);
        break;
      case '÷':
        numMemory = numResult / numValue;
        console.log('Delit NumValue: '+numValue, 'NumResult '+numResult);
        break;
      default:
    }
    var multiplier = newAction !== "±" ? 1 : -1;
    this.setState(() => ({
      action: newAction,
      value:'',
      result: numMemory * multiplier
    }))
    console.log('Value: '+this.state.value,'Result: '+this.state.result, ' Input: '+this.state.inPut,' Action: '+this.state.action)
  }
}

switchAction(e){
  const newAction = e;

  var numResult = 0;
  var numValue = 0;


  if(this.state.result !== ""){
    numResult = parseFloat(this.state.result, 10);
  }
  

  if(this.state.value !== ""){
    numValue = parseFloat(this.state.value, 10);
  }
  
  switch (newAction) {
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
    case '*':
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
      return this.state.value + newAction;
  }
}
  


onEquall(){
  var numResult = 0;
  var numValue = 0;
  var result = 0;
  if(this.state.result){
     numResult = parseFloat(this.state.result, 10);
    }
  if(this.state.value){
      numValue = parseFloat(this.state.value, 10);
    }
  if(this.state.action === '+'){
    result = numValue + numResult
    this.setState(()=> ({
      result:'',
      inPut: result
    }))
    console.log('Plus NumValue+ '+numValue,''+this.state.value , 'NumResult '+numResult,+''+this.state.result, 'action'+this.state.action);
  }
  if(this.state.action === '-'){
    result =  numResult - numValue
    console.log('Minus Dvajdi NumValue '+numValue, 'NumResult '+numResult, 'action'+this.state.action);
    this.setState(()=> ({
      result: '',
      action: ''
      
    }))
    console.log('Minus NumValue+ '+numValue, 'NumResult '+numResult, 'action'+this.state.action);
  }
  if(this.state.action === '×'){
    result = numResult * numValue
    this.setState(()=>({
      action:''
    }))
    console.log('Umnogit NumValue+ '+numValue, 'NumResult '+numResult, 'action'+this.state.action);
  }
  if(this.state.action === '÷'){
    result = numResult / numValue
    this.setState(()=> ({
      action:''
    }))
    console.log('Delit NumValue+ '+numValue, 'NumResult '+numResult, 'action'+this.state.action);
  }
  if(this.state.action === '%'){
    result = numResult / 100
    this.setState(() => ({
      action:'',
    }))
  }
  if(this.state.action === '±'){
    result = numResult * -1
  }
  this.setState(() => ({
   value: result,
  }))
  console.log(' na Ravno Result:'+this.state.resut, 'Value:'+ this.state.value)
}

updateChange = (e) => {
  this.setState({
    value: e.target.value
  })


  
  console.log('ono'+this.state.value)
  console.log('skolko bykv'+this.state.value.length)
 this.switchAction(this.state.value[this.state.value.length -1])
}


<<<<<<< HEAD





=======
>>>>>>> 0b177264bfa8d08f743d04083c34573d7162b31a
    render(){
        return(
            <div className="Calculator">
            <Display 
            changeValue={(e) => this.updateChange(e)}
            value={this.getDisplayValue()} 
            action={this.state.action} 
            result={this.state.result}
            />
            <Batton className='topButton' value={this.state.value > 0 || this.state.result > 0?'C':'AC'} changeValue={() => this.zeroValue()}/>
            <Batton className='topButton' value='±' changeValue={() => this.onAction('±')}/>
            <Batton className='topButton' value='%' changeValue={() => this.onAction('%')}/>
            <Batton className='rightButton' value='÷' changeValue={() => this.onAction('÷')}/>
            <Batton value="7" changeValue={() => this.printValue('7')}/>
            <Batton value="8" changeValue={() => this.printValue('8')}/>
            <Batton value="9" changeValue={() => this.printValue('9')}/>
            <Batton className='rightButton' value='×' changeValue={() => this.onAction('×')}/>
            <Batton value="4" changeValue={() => this.printValue('4')}/>
            <Batton value="5" changeValue={() => this.printValue('5')}/>
            <Batton value="6" changeValue={() => this.printValue('6')}/>
            <Batton className='rightButton' value='-' changeValue={() => this.onAction('-')}/>
            <Batton value="1" changeValue={() => this.printValue('1')}/>
            <Batton value="2" changeValue={() => this.printValue('2')}/>
            <Batton value="3" changeValue={() => this.printValue('3')}/>
            <Batton className='rightButton' value='+' changeValue={() => this.onAction('+')}/>
            <Batton value="0" className='zero' changeValue={() => this.printValue('0')}/>
            <Batton value='.' changeValue={() => this.printValue(this.state.value.indexOf('.')>=0?'':'.')}/>
            <Batton className='rightButton' value='=' changeValue={() => this.onEquall()}/>
            </div>
        );
    }
}

export default Calculator;