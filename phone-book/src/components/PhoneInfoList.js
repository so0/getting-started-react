import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        list: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 데이터가 변하지 않으면 리렌더링 안함
        return nextProps.data !== this.props.data;
    }
    
    render() {
        console.log('render PhoneInfoList');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
            <PhoneInfo 
                key={info.id} 
                info={info}
                onRemove={onRemove} 
                onUpdate={onUpdate} 
            />)
        );

        return (
            <div>
                {list}
            </div>
        )
    }
};

export default PhoneInfoList;