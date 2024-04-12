import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import ProductList from './tp/store/productlist';
import HelloWord from './helloword/helloword';
import TextField from './forms/textField';
import Fruits from './fruits/fruitsList';
import Counter from './counter/counter';
import Event from './events/events';
import Form from './forms/form_2';
import ToggleName from './toggle/toggleName';
const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitArray = [
  'aple',
  'orange',
  'lemon',
  'strawbary'
]
root.render(
  <React.StrictMode>
    <Form />
  
  </React.StrictMode>
);

 /*
  <ProductList />
     <HelloWord lastName='amin' />
     <TextField inputName="someName" inputLabel="XYY" >
      enter you name
     </TextField>
     
     <TextField inputName="someName" inputLabel="XYY" >
      enter your cat name
     </TextField >

    <Fruits />
    <Counter  step={1} initialValue={2}/>

   <Event/>

   <Form />

   <ToggleName />
 */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
