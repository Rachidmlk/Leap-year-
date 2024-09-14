function leapYear(year: number): boolean {

     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
 
}
function powerFunction (num: number, power: number): number {
    if (power == 1) return num
    if (power < 0) return 1
    if(power == 1) return num 
    
    return num * powerFunction(num, power-1)
   
}



