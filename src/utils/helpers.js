export const formatPrice = (number) => {
return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(number/100)

}

export const getUniqueValues = (data, item) => {

let test = data.map((i)=>{return i[item]})

if(item === 'colors'){
test = test.flat()

}
return [...new Set(test)]



}


