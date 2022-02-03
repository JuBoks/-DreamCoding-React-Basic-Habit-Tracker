/**
 * ReactHook 을 사용하여 리팩토링하는 예제
 */
import React, {Component, useState} from 'react';

const SimpleHabit = (props) => {

    /**
     * ReactHook 에서는 state 를 사용하기위해 useState API 를 사용한다.
     * 아래와 같이 [count, setCount] 를 변수로 넣으면
     * count 라는 state 와
     * setCount 라는 state 를 변경하는 함수를 리턴받는다.
     */
    const [count, setCount] = useState(0);

    /**
     * 클래스에서 이벤트 부분은 멤버변수로 선언되어 할당되고
     * ReactHook 에서는 더이상 this 를 사용하지 않고 멤버변수로 접근할 수 있게된다.
     */
    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}

export default SimpleHabit;