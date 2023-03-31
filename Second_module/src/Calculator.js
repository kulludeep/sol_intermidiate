import {React, useState} from 'react'
import {ethers} from 'ethers'
import contract_abi from './Contracts/calculator.json'
const Calculator = () => {
	const provider = new ethers.providers.JsonRpcProvider(); 
	const signer = provider.getSigner(); 
let contract_address = '0x804a85dBe0743FaB694CC99d51Bf0330c74A67D5';
	const _contract = new ethers.Contract(contract_address, contract_abi, provider); 
	const _contract_signer = _contract.connect(signer); 
const [valueOfa , seta] = useState(0) ;
const [valueOfb , setb] = useState (0) ;
const [result , setResult] = useState(0) ;

const geta = async() =>{
	let _i = await _contract.a();
	seta(_i);
	console.log(valueOfa.toString());
}

const getb = async() =>{
	let _i = await _contract.b();
	setb(_i.toString());
	console.log(valueOfb.toString());
}

const setValues = async(_a , _b) =>{
	  await _contract_signer.setValues(_a,_b);
}

const add = async() =>{
	let result = await _contract.add() ;
	setResult(result.toString());
	console.log(result.toString());
}

const sub = async() =>{
	let result = await _contract.sub() ;
	setResult(result.toString());
	console.log(result.toString());
}

const divi = async() =>{
	let result = await _contract.divide() ;
	setResult(result.toString());
	console.log(result.toString());
}
const multi = async() =>{
	let result = await _contract.multiply() ;
	setResult(result.toString());
	console.log(result.toString());
}

function submitValues() {
    setValues(valueOfa, valueOfb);
  }
	return (
	<div >
			 <h3> The Value of result ----- {result} </h3>
			 <button onClick={geta}>value of a </button>
			 <button onClick={getb}>value of b </button>

			 <div>
      <label htmlFor="valueOfa">Enter the first number:</label>
      <input type="number" id="valueOfa" value={valueOfa} onChange={(e) => seta(parseInt(e.target.value))} />

      <label htmlFor="valueOfb">Enter the second number:</label>
      <input type="number" id="valueofb" value={valueOfb} onChange={(e) => setb(parseInt(e.target.value))} />

      <button onClick={submitValues}>Submit</button>
    </div>
	<button onClick={add}>+</button>
	<button onClick={multi}>X</button>
	<button onClick={divi}>/</button>
	<button onClick={sub}>-</button>
		</div>
	)
}
export default Calculator;