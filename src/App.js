import React from 'react';
import {Form, FormControl, InputGroup, Button} from 'react-bootstrap'
class App extends React.Component {
  state={
    currVal: null,
    valArr: [],
    count: null,
    bool: ''
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

  treeAddVals=(func) => {
    this.state.valArr.forEach(val => {func(val)})
  }

  arrSort=() => {
    return this.state.valArr.sort();
  }


  handleLinearSubmit=() => {
    this.setState({count: null})
    const {valArr}=this.state;
    const {currVal}=this.state;
    let count=0;
    for(let i=0;i<valArr.length;i++) {
      count++;
      if(valArr[i]===currVal) {
        this.setState({count: count})
        this.setState({bool: 'true'})
        return;
      }
    }
    this.setState({count: count})
    this.setState({bool: 'false'})
    return;

  }

  handleBinarySubmit=() => {}


  render() {
    return (
      <div className="App text-center p-4 font-mono">
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
              <InputGroup.Text id="basic-addon2" className="bg-gray-200"></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Button className="m-2 px-2 border rounded shadow" variant="primary" size="lg" onClick={this.handleSubmit} >Submit</Button>
          <Button className="m-2 px-2 border rounded shadow" variant="primary" size="lg " onClick={this.handleLinearSubmit}>Linear</Button>
          <Button className="m-2 px-2 border rounded shadow" variant="primary" size="lg">Binary</Button>
        </Form>{' '}



      </div>
    )
  }
}

export default App;
