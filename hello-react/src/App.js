import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <MyName name="리액트"/>
    )
  }
}

export default App;

// import './App.css';

// class App extends Component {
//   render() {
//       // 객체 형태로 css 작성
//       const style = {
//         backgroundColor: 'black',
//         padding: '16px',
//         color: 'white',
//         fontSize: '36px'
//       };


//       return (
//       <Fragment>
//         {/* style 객체 사용 */}
//         <div style={style}>안녕하세요!</div>

//         {/* css class 적용 */}
//         <div className="App">
//           리액트 
//         </div>
//       </Fragment>
//       )
//     const name = 'react';
//     const value = 1;
//     return (
//       // <Fragment>
//       //   <div>
//       //     Hello {name}!
//       //   </div>
//       //   <div>
//       //     Bye
//       //   </div>
//       // </Fragment>
//       <div>
//          1 + 1 === 2
//         {
//           // 삼항 연산자
//           1 + 1 === 2
//             ? (<div> 맞다 </div>)
//             : (<div> 틀리다 </div>)

          
//         }
//         {
//         //조건부 연산자
//           1 + 1 === 2 && (<div>맞아요!</div>)
//         }

//         {
//           //IIFE
//           // (function() {
//           //   if (value === 1) return (<div>하나</div>);
//           //   if (value === 2) return (<div>둘</div>);
//           //   if (value === 3) return (<div>셋</div>);
//           // })()

//           // IIFE 화살표함수
//           (() => {
//             if (value === 1) return (<div>하나</div>);
//             if (value === 2) return (<div>둘</div>);
//             if (value === 3) return (<div>셋</div>);
//           })()
//         }
//       </div>
//     );
//   }
// }

// export default App;