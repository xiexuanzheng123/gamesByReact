import React from 'react';

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
// var user = {
//     firstName: 'xx',
//     lastName: 'zz'
// };

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}</h1>
//     } else {
//         return <h1>Hello</h1>
//     }
// }
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }

// class Hello extends React.Component {
//     render () {
//         return (
//             <Welcome name="YES" />
//         )
//     }
// }

// export default Hello;

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: new Date(), num: [2, 3]};
//         this.handleClick = this.handleClick.bind(this);
//     }
//     tick() {
//         this.setState({value: new Date()})
//     }
//     componentDidMount() {
//         // this.timeID =  setInterval(() => this.tick(), 1000);
//     }
//     handleClick() {

//         const nums = this.state.num;
//         this.setState({num: nums.concat([4])});
//         // this.setState({num: this.state.num + 1});
//         // this.setState({num: 'this.state.num + 1'});
//     }
    
//     render() {
//         const numbers = [1, 2, 3, 4, 5];
//         return (
//             <div>
//                 <ul>
//                     {numbers.map(item => (<li key={item.toString()}>{item}</li>))}
//                 </ul>
//                 Hello {this.state.num.join('-')}
//                 <button onClick={this.handleClick}>Click</button>    
//             </div>

//         )
//     }
// }

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: '', selected: null};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleSelect = this.handleSelect.bind(this);
//     }

//     handleSelect(e) {
//         this.setState({select: e.target.value})
//     }
//     handleChange(e) {
//         this.setState({
//             value: e.target.value
//         })
//     }
//     handleSubmit(e) {
//         alert('提交的名字： ' + this.state.value);
//         e.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字：<input type="text" onChange={this.handleChange} value={this.state.value}/>
//                 </label>
//                 <input type="submit" value="提交" />
//                 <select multiple={true} defaultValue={this.state.selected} onSelect={this.handleSelect}>
//                     <option value="grapefruit">葡萄柚</option>
//                     <option value="lime">柠檬</option>
//                     <option value="coconut">椰子</option>
//                     <option value="mango">芒果</option>
//                 </select>
//             </form>
//         );
//     }
// }

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            参与:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            来宾人数:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }
export default Reservation;