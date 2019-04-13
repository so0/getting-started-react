// 각 전화번호 정보 보여줌

import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    };
    state = {
        // 수정 버튼을 눌렀을 때 editing 값을 true로 변경.
        editing: false,

        // 입력 값
        name: '',
        phone: '',
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // editing 상태 토글 함수
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({editing: !editing});
    }

    // input 에서 onChange 이벤트 발생 시 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // editing 값이 바뀔 떄 처리할 로직
        // 수정 클릭 시 기존의 값이 input에 나타남
        // 수정 적용 시 input 값을 부모에게 넘겨줌

        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing false => true 일 때 (수정 시)
            // 현재 name, phone 정보를 input 필드에 보여줌
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }

        if(prevState.editing && !this.state.editing) {
            // editing true => false 일 때 (저장 시)
            // 현재 입력한 값을 부모에 넘겨줌
            this.props.onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }

    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        const { editing } = this.state;
        
        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    {/* <button onClick={this.handleRemove}>삭제</button> */}
                </div>
            );
        }
        // 일반 모드
        const {
            name, phone, id 
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;