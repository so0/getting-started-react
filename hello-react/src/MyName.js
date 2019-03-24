import React, { Component } from 'react';

// 함수형 컴포넌트
const MyName = ({ name }) => {
    return (
        <div>
            안녕하세요! 제 이름은 <b>{name}</b> 입니다.
        </div>
    );
};
// class MyName extends Component {
//     // props 의 기본값 설정
//     static defaultProps = {
//         name: '홍길동'
//     }
//     render() {
//         return (
//             <div>
//                 안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
//             </div>
//         )
//     };
// }

// 함수형 컴포넌트에서 defaultProps 설정 시
MyName.defaultProps = {
    name: '기본이름'
}

export default MyName;