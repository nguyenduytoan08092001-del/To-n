import React, { useState } from "react";

// class AddUserinfor extends React.Component{
//     state = {
//         name: '',
//         address: '',
//         age: ''

// }
//     handleOnchangeInput = (event) => {
//         this.setState({
//         name: event.target.value
//     })
//     }
//     handleOnchangeAge = (event) => {
//         this.setState({
//         age: event.target.value
//     })
//     }
    
//     hanldeOnsubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.props.hanldeAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1)+'-random',
//             name: this.state.name,
//             age: this.state.age,
//         });
//     }
    
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm {this.state.age}
//                 <form onSubmit={(event) => this.hanldeOnsubmit(event)}>
//                     <label>Your name:</label>
//                     <input type="text"
//                     value={this.state.name}
//                         onChange={(event) => this.handleOnchangeInput(event)} />
//                     <label>Your age:</label>
//                     <input type="text"
//                     value={this.state.age}
//                         onChange={(event) => this.handleOnchangeAge(event)} />
//                     <button>Submit</button>

//                 </form></div>
//         )
//     }
// }
const AddUserinfor = (props) => {

    const [name, setname] = useState('');
    // const [address, setaddress] = useState('');
    const [age, setage] = useState('');
const handleOnchangeInput = (event) => {
        setname(event.target.value)
    }
const handleOnchangeAge = (event) => {
      setage(event.target.value)
    }
    
const hanldeOnsubmit = (event) => {
        event.preventDefault();
        props.hanldeAddNewUser({
            id: Math.floor((Math.random() * 100) + 1)+'-random',
            name: name,
            age: age,
        });
    }
    return (
        <>
            My name is {name} and I'm {age}
            <form onSubmit={(event) => hanldeOnsubmit(event)}>
            <label>Your name:</label>
            <input type="text"
            value={name}
            onChange={(event) => handleOnchangeInput(event)} />
            <label>Your age:</label>
            <input type="text"
            value={age}
            onChange={(event) => handleOnchangeAge(event)} />
            <button>Submit</button>
            </form>
        </>
    )
}
export default AddUserinfor;
