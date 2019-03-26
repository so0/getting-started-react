import React, { Component } from 'react';

// 컴포넌트 에러 발생 
const Problematic = () => {
    throw (new Error('버그'));
    return (
        <div>

        </div>
    );
};

class Counter extends Component {
    // state 정의 시 class fields 문법 사용
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componnetDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componnetWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
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

    componentDidCatch(error, info) {
        console.log('componentDidCatch');
        console.log('error', error);
        console.log('info', info);
        this.setState({
            error: true
        });
    }

    render() {
        console.log('render');
        if (this.state.error) return (<h1>에러발생!</h1>);

        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Problematic />}

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

/*
LifeCycle API

# 컴포넌트 초기 생성
1. constructor : 컴포넌트 생성자 함수. 새로 만들어질 때마다 호출
    constructor(props) {
    super(props);
    }

2. componentWillMount : 컴포넌트가 화면에 그려지기 직전 호출되는 API. v16.3 에서는 해당 API 가 deprecated

3. componentDidMount : 컴포넌트가 화면에 나타났을 대 호출됨. DOM 사용 외부 라이브러리 연동, 데이터 요청 등


# 컴포넌트 업데이트

1. componentWillReceiveProps : 컴포넌트가 새로운 props를 받게 되었을 때 호출. state가 props에 따라 변하는 로직 작성. 이 API 또한 v16.3 부터 deprecate 
    componentWillReceiveProps(nextProps) {
    // this.props 는 아직 바뀌지 않은 상태
    }

2. static getDerivedStateFromProps()
v16.3 이후에 만들어진 라이프사이클 API 
props로 받아온 값을 state로 동기화하는 작업을 해줄 때 사용
    static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.

    if (nextProps.value !== prevState.value) {
        return { value: nextProps.value };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미

    }
3. shouldComponentUpdate
컴포넌트 최적화시 유용. 기본적으로 true 반환. 
false 반환 시 render 함수 호출 안함
불필요한 리렌더링 방지.

4. componentWillUpdate
shouldComponentUpdate에서 true 반환시에만 호출.
애니메이션효과 초기화, 이벤트 리스너 제거 작업. render() 함수 호출 전에 실행됨.
 v16.3 이후 deprecate ,  getSnapshotBeforeUpdate 로 대체

5. getSnapshotBeforeUpdate()
render - getSnapshotBeforeUpdate - DOM에 변화 발생 - componentDidUpdate
DOM 변화 직전 DOM상태를 가져오고 리턴하는 값은 componentDidUpdate에서 세번째 파라미터로 받아올 수 있음

6. componentDidUpdate
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
render() 호출 뒤 발생. this.props와 this.state가 바뀌어 있음.
파라미터를 통해 이전 값 조회 가능.
getSnapshotBeforeUpdate에서 반환한 snapshot 값은 세번째 값으로 받아온다.

# 컴포넌트 제거
componentWillUnmount
이벤트 제거, clearTimeout 등

# 컴포넌트 에러 발생 시
componentDidCatch
    componentDidCatch(error, info) {
    this.setState({
        error: true
    });
    }
에러 발생 시 실행됨. 컴포넌트 자신의 에러는 잡을 수 없고 자식의 에러를 잡을 수 있다.

*/