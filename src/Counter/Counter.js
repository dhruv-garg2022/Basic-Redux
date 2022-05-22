import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {

    const counterValue = useSelector((state) => state.counter)
    // const {counter} = useSelector((state) => state)
    const show = useSelector((state) => state.showCounter )
    
    const dispatch = useDispatch()
    
    const incrementHandler = () => {
        dispatch({type:'increment'})
    }

    const decrementHandler = () => {
        dispatch({type:'decrement'})
    }

    const increaseHandler = () => {
        dispatch({type:'increase', value: 10})
    }

    const toggleHandler = () => {
        dispatch({type:'toggle'})
    }

    return (
        <main>
            <h1>redux Counter</h1>
            {show ? <div> Counter value from Store {counterValue}</div> : ""}
            <button onClick={incrementHandler}>Increament</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={toggleHandler}>Toggle</button>
            
        </main>
    )
}

export default Counter;