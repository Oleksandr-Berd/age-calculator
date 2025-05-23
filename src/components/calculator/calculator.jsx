import * as SC from "./CalculatorStyled"

import EntryData from "../EntryData/EntryData";
import { useState } from "react";
import Result from "../Result/Result";

const Calculator = () => {
const [birthDay, setBirthDay] = useState(null)

const handleBirthDate = (day, months, year) => {
setBirthDay (day, months, year)
}

    return ( 
        <SC.CalculatorCustom>
            <EntryData handleData={handleBirthDate}/>
            <Result birthDay={birthDay}/>
        </SC.CalculatorCustom>
     );
}
 
export default Calculator;