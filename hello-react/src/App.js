import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    const value = 1;
    return (
      // <Fragment>
      //   <div>
      //     Hello {name}!
      //   </div>
      //   <div>
      //     Bye
      //   </div>
      // </Fragment>
      <div>
         1 + 1 === 2
        {
          // 삼항 연산자
          1 + 1 === 2
            ? (<div> 맞다 </div>)
            : (<div> 틀리다 </div>)

          
        }
        {
        //조건부 연산자
          1 + 1 === 2 && (<div>맞아요!</div>)
        }

        {
          //IIFE
          // (function() {
          //   if (value === 1) return (<div>하나</div>);
          //   if (value === 2) return (<div>둘</div>);
          //   if (value === 3) return (<div>셋</div>);
          // })()

          // IIFE 화살표함수
          (() => {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}

export default App;