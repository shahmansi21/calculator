import React,{useState,useEffect} from 'react';

const Calculator = () =>{

    const [result,setResult] = useState("");

    const [Num1,setNum1] = useState("");

    const [Num2,setNum2] = useState("");

    const[operator,setOperator] = useState("");

    const[isOperator,setIsoperator]  = useState(false);

    const[resultQuery,setResultquery] = useState("");

    const[History,setHistory] = useState([]);

    


    


    const handleClick = (num) => {

        if(isOperator)
        {
            setNum2(Num2.concat(num));
        }
        else
        {
            setNum1(Num1.concat(num));
            
        }
        setResult(result.concat(num));
    }

    const getResult = () => {

        let resultQuery = result;
        if(operator === '+')
         {
             let Answer = parseInt(Num1)+parseInt(Num2) ;
            setResultquery(resultQuery);
             setResult("");
             setResult(Answer);
             History.push(resultQuery + ' = ' + Answer)
         }
         else if(operator === '-')
         {
            let Answer = parseInt(Num1) - parseInt(Num2) ;
             setResultquery(resultQuery);
             setResult("");
             setResult(Answer);
             History.push(resultQuery + ' = ' + Answer)

         }
         else if(operator === '*')
         {
            let Answer = parseInt(Num1) * parseInt(Num2) ;
            setResultquery(resultQuery);
             setResult("");
             setResult(Answer);
             History.push(resultQuery + ' = ' + Answer)

         }
         else if(operator === '/')
         {
             
            let Answer = parseInt(Num1) * parseInt(Num2) ;
            setResultquery(resultQuery);
             setResult("");
             setResult(Answer);
             History.push(resultQuery + ' = ' + Answer)
         }
            localStorage.setItem('ResultHistory',History);

            console.log("History",History);
            setNum1("");
            setNum2("");
            setResultquery("");
            setOperator("");
            setIsoperator(false);       
    }

    const setoperators = (op) =>{
        
        setIsoperator(true) ;
        setOperator(op); 
        setResult(result.concat(op)); 

    }

    const backspace = () =>{
        if(isOperator){
            setNum2(Num2.slice(0,-1));
        }
        else
        {
            setNum1(Num1.slice(0,-1));
        }
            setResult(result.slice(0,-1));
    }

    const reset = () => {

        setResult("");
        setNum1("");
        setNum2("");
        setResultquery("");
        setOperator("");
        setIsoperator(false);

    }

    const removeLocal = () => {
        localStorage.removeItem("ResultHistory");
        

    }

    useEffect(()=>{
        let HistoryResult = localStorage.getItem('ResultHistory');  
    })

    return(
        <>
         
            <div className="cal-container">
 
                <input type="text" className="resultbox" value={result}></input>
                <button class="w-50" onClick ={() => reset()}>C</button>
	 			<button class="w-50" onClick ={() => backspace()}>{'<-'}</button>
	 			<button onClick = {() => handleClick("7")}>7</button>
                <button onClick = {() => handleClick("8")}>8</button>
                <button onClick = {() => handleClick("9")}>9</button>
                <button onClick= {() => setoperators("/")}>/</button>
                <button onClick = {() => handleClick("4")}>4</button>
                <button onClick = {() => handleClick("5")}>5</button>
                <button onClick = {() => handleClick("6")}>6</button>
                <button onClick= {() => setoperators("*")}>*</button>
                <button onClick = {() => handleClick("1")}>1</button>
                <button onClick = {() => handleClick("2")}>2</button>
                <button onClick = {() => handleClick("3")}>3</button>
                <button onClick= {() => setoperators("-")}>-</button>
                <button onClick= {() => setoperators("+")}>+</button>
                <button class="w-50" onClick= {() => {getResult()}}>=</button>
                <button onClick = {() => handleClick("0")}>0</button>

            </div>

            <div>

                <h1>History</h1>
                <button type="submit" onClick={removeLocal()} >Delete</button>
                {
                    History.map((item) => 
                        <h3>{item}</h3>
                    )  
                }
                
            </div>

        </>
    );
}

export default Calculator;