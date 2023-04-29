const calculateTemp = () => {
  const numberTemp =  document.getElementById('temp').value;
    const temp_selected = document.getElementById('temp_diff'); 
    const option =  temp_selected.options[temp_selected.selectedIndex].value;


    const celToFah = (cel) => {
        let  fahrenheit =  Math.round((cel * 9/5) + 32);
        return fahrenheit;
}


const fehToCel = (fehr) => {
    let  celsius =  Math.round((fehr - 32) * 5/9);
    return celsius;
}

    let result; 

    if(option == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}ºFahrenheit`;
    }else{
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}ºCelsius`; 
    }
}