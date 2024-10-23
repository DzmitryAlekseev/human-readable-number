module.exports = function toReadable (number) {
    let numberObj = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '15': 'fifteen',
        '18': 'eighteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '80': 'eighty',
        '00': ''
    }
    
    let strNumb = String(number);
    let value = Object.keys(numberObj).includes(strNumb) ? numberObj[strNumb] : '';
    if(!value){
        for(let i = 0; i < strNumb.length; i += 1){
            if(strNumb.length === 2){
                if(number < 21){
                    return value = numberObj[strNumb.slice(1, strNumb.length)] + 'teen';
                } else if(Object.keys(numberObj).includes(strNumb[0] + '0')){
                    return value = numberObj[strNumb[0] + '0'] + ' ' + numberObj[strNumb.slice(1, strNumb.length)];
                } else if(!(Object.keys(numberObj).includes(strNumb[0] + '0'))){
                  
                    if(strNumb[strNumb.length -1] === '0'){
                          return value = numberObj[strNumb[0]] + 'ty' ;
                    }
                    return value = numberObj[strNumb[0]] + 'ty' + ' ' + numberObj[strNumb.slice(1, strNumb.length)]  ;
                }
            }
            
            
            
            if(strNumb.length === 3){
                if(strNumb.length === 3 && Object.keys(numberObj).includes(strNumb[1] + strNumb[strNumb.length - 1])){
                    console.log('includes last 2 numbers')
                    if(strNumb[1] + strNumb[strNumb.length - 1] == '00'){
                         return value = numberObj[strNumb[0]] + ' hundred';
                    } else {
                         return value = numberObj[strNumb[0]] + ' hundred ' + numberObj[strNumb[1] + strNumb[strNumb.length - 1]];
                    }
                } else if(strNumb.length === 3 && !(Object.keys(numberObj).includes(strNumb[1] + strNumb[strNumb.length - 1]))){
                    console.log('non includes 2 last numbers');
                    console.log('last str' + strNumb[1] + strNumb[strNumb.length - 1])
                    if(strNumb[1] === '0'){
                        return value = numberObj[strNumb[0]] + ' hundred ' + numberObj[strNumb[strNumb.length - 1]];
                    } else if(strNumb[1] !== '0'){
                        console.log('str non equal 0')
                        if(Object.keys(numberObj).includes(strNumb[1] + '0') && strNumb[1] !== '1' ){
                            console.log('21')
                               return value = numberObj[strNumb[0]] + ' hundred ' + numberObj[strNumb[1] + '0'] + ' ' + numberObj[strNumb[strNumb.length - 1]];
                        }
                        
                         if(strNumb[1] === '1'){
                            console.log('19')
                               return value = numberObj[strNumb[0]] + ' hundred ' + numberObj[strNumb[strNumb.length - 1]] + 'teen';
                        }
                        
                        if(strNumb[strNumb.length - 1] === '0'){
                             return value = numberObj[strNumb[0]] + ' hundred ' + numberObj[strNumb[1]] + 'ty';
                        }
                     
                         return value = numberObj[strNumb[0]] + ' hundred ' + numberObj[strNumb[1]] + 'ty ' + numberObj[strNumb[strNumb.length - 1]];
                    }
                }
            }
        }
    }
        
    return value;
}
