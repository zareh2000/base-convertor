module.exports = {
    convertToBinary: (num) => {
        if (num >= 0) 
        {
            let result = "";
            num = Math.round(num);
            
            while(num > 0) {
                result += num % 2; 
                num = Math.floor(num/2);
            }
            result = (result) ? result : "0"; 
            return [...result].reverse().join(''); 
        }
        return false
    },
    convertToHexa: (num) => {
        if (num >= 0) 
        {
            let result = "";
            num = Math.round(num); 
            while(num > 0) {
                switch(num % 16){
                    case 15:
                        result += "F";
                        break;
                    case 14:
                        result += "E";
                        break;
                    case 13:
                        result += "D";
                        break;
                    case 12:
                        result += "C";
                        break;
                    case 11:
                        result += "B";
                        break;
                    case 10:
                        result += "A";
                        break;
                    default: 
                        result += num % 16;
                }
                num = Math.floor(num/16);
            }
            result = (result) ? result : "0";
            return result.split().reverse().join('');
        }
        return false
    }
}