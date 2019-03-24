import React, { Component } from 'react';

class Counter extends Component {
    // state 정의 시 class fields 문법 사용
    state = {
        number: 0
    }

    // class field 사용 안할 경우 constructor 내부에 명시
    // class fields 가 먼저 실행되고, 그 다음에 constructor 에서 설정된 것이 나옴
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    // 메소드 작성
    handleIncrease = () => {
        // state 값 변경 시 this.setState 사용해야함. 호출 시 컴포넌트 리렌더링
        this.setState({
            number: this.state.number + 1
        });
    }

    // setState는 객체로 전달되는 값만 업데이트한다.
    // state = {
    //     number: 0,
    //     foo: 'bar'
    // }
    // this.setState({ number: 1 }); 을 하게 된다면, foo 는 그대로 남고, number 값만 업데이트 됩니다.
    // 객체 내부까지 확인 불가능 -> 전개 연산자 사용해야함 -> immutable.js / immer.js 사용
    // this.setState({
    //     number: 0,
    //     foo: {
    //       ...this.state.foo,
    //       foobar: 2
    //     }
    //   });

    handleDecrease = () => {
        // this.setState({
        //     number: this.state.number - 1
        // });

        // 객체 대신 함수 전달
        // this.setState(
        //     (state) => ({
        //       number: state.number - 1
        //     })
        // );
        
        // 비구조화 할당
        // this.setState(
        //     ({ number }) => ({
        //       number: number - 1
        //     })
        // );

        const { number } = this.state;
        this.setState({
            number: number + 1
        });

    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>

                {/* 이벤트 함수 설정 시 html과 다르게 카멜케이스로 작성하기 
                    이벤트에 전달하는 값은 함수여야함.
                */}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
};

export default Counter;