/* eslint-disable eqeqeq */
import React from 'react';
import {Form, FormControl, InputGroup, Button} from 'react-bootstrap'
import FadeIn from './FadeIn.js'
class App extends React.Component {
  state={
    currVal: null,
    valArr: [],
    useArr: [],
    setArr: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,
    ],
    count: null,
    bool: '',
    whichArr: 'mine',
  }

  handleChangeVal(e) {
    console.log('I run')
    this.setState({currVal: e.target.value})
  }

  handleSubmit=() => {
    let currVal=this.state.currVal;
    this.setState({valArr: [...this.state.valArr, currVal]})
    document.getElementById("userVal").reset();

  }

  selectFromArr(e) {
    let value=e.target.id;
    this.setState({currVal: value})
  }

  treeAddVals=(func) => {
    this.state.valArr.forEach(val => {func(val)})
  }
  handleSwitchArr=() => {
    this.state.whichArr==='mine'? this.setState({useArr: this.state.setArr, whichArr: 'yours'}):this.setState({useArr: this.state.valArr, whichArr: 'mine'});
  }
  renderSetArr=() => {
    return this.state.useArr.map((val, i) =>
      <FadeIn delay={100*i} transitionDuration={10*i} key={(i*100)+'c'}><h4 className="flex flex-1 font-bold text-xl text-center justify-center m-1 p-4 px-4 w-1/8 bg-blue-500 rounded-full hover:bg-yellow-300 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-125" onClick={(e) => this.selectFromArr(e)} id={val} key={i+1}>
        {val}</h4></FadeIn>)
  }
  arrSort=(arr) => {
    let newArr=arr.sort((a, b) => {return a-b});
    return newArr;
  }

  binarySearch=(array, value, start, end, count) => {
    count=count===undefined? 1:count+1;
    start=start===undefined? 0:start;

    end=end===undefined? array.length:end;

    if(start>end) {
      return this.setState({bool: 'false', count: count});
    }

    const index=Math.floor((start+end)/2);
    const item=array[index];

    console.log(start, end, item, index);
    if(item==value) {
      this.setState({count: count, bool: 'true'})
      return index;
    }
    else if(item<value) {

      return this.binarySearch(array, value, index+1, end, count);
    }
    else if(item>value) {
      return this.binarySearch(array, value, start, index-1, count);
    }
  };

  handleLinearSubmit=() => {
    this.setState({count: null})
    const {valArr}=this.state;
    const {currVal}=this.state;
    let count=0;
    for(let i=0;i<valArr.length;i++) {
      count++;
      if(valArr[i]==currVal) {
        this.setState({count: count})
        this.setState({bool: 'true'})
        return;
      }
    }
    this.setState({count: count})
    this.setState({bool: 'false'})
    return;

  }

  handleBinarySubmit=() => {
    this.binarySearch(this.arrSort(this.state.setArr), this.state.currVal)
  }


  render() {
    return (
      <div className="App text-center align-items-center p-4 font-mono">
        <header className="App-header mb-8">
          <h1 className="text-5xl ">Binary Search Trees</h1>
        </header>
        {this.state.count&&<h1 className="text-blue-600">Ran search {this.state.count} times</h1>}
        <h1>{this.state.bool}</h1>
        <Form id="userVal">
          <InputGroup className="mb-3 border" name="userVal" onChange={(e) => this.handleChangeVal(e)}>
            <FormControl
              placeholder="Enter value here"
            />
            <InputGroup.Append>
            </InputGroup.Append>
          </InputGroup>
          <Button className="m-2 px-2 border rounded shadow" variant="primary" size="lg" onClick={this.handleSubmit} >Submit</Button>
          <Button className="m-2 px-2 border rounded shadow" variant="primary" size="lg " onClick={this.handleLinearSubmit}>Linear</Button>
          <Button className="m-2 px-2 border rounded shadow" variant="primary" size="lg" onClick={this.handleBinarySubmit}>Binary</Button>
        </Form>{' '}


        <div className="align-center px-20 m-8 rounded-full border-transparent border-dotted border-8 bg-gradient-to-b from-transparent via-teal-200 to-transparent">
          <h2>Current Array</h2>
          <Button onClick={this.handleSwitchArr} className="m-2 px-2 border rounded shadow">Switch Array</Button>
          <div className="flex flex-row flex-wrap max-w-md ">

            {this.renderSetArr()}

          </div>
        </div>
      </div>
    )
  }
}

export default App;
