import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      // name: e.target.value //e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어옴
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지. (이벤트 기본 작업 방지)
    e.preventDefault();

    this.props.onCreate(this.state);  // props로 받은 onCreate함수 호출.
    this.setState({
      name: '',
      phone: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    )
    // return (
    //   <form>
    //     <input
    //       placeholder="이름"
    //       value={this.state.name}
    //       onChange={this.handleChange}
    //       name="name" 
    //     />
    //     <input
    //       placeholder="전화번호"
    //       value={this.state.phone}
    //       onChange={this.handleChange} 
    //       name="phone"
    //     />
    //     <div>{this.state.name} {this.state.phone}</div>
    //   </form>
    // );
  }
}

export default PhoneForm;