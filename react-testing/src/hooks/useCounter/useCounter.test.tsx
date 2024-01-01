import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { debug } from "console";

describe('Counter', ()=>{

    test('should render initial Counts', ()=>{
       const {result} = renderHook(useCounter);
       console.log(result);

       expect(result.current.count).toBe(0);

    })

    test('should initial value render with 3008', ()=>{
        const {result} = renderHook(useCounter, {
            initialProps : {
                initialCount : 3008
            }
        });

        expect(result.current.count).toBe(3008)
        
        
    })

    test('should render with by increment by one', ()=>{
        const {result} = renderHook(useCounter);

        act(()=>result.current.increment())

        expect(result.current.count).toBe(1);
        console.log(result);
    })

    test('should render with by decrement by one i.e -1', ()=>{
        const {result} = renderHook(useCounter);

        act(()=>result.current.decrement());

        expect(result.current.count).toBe(-1);


    })    

})