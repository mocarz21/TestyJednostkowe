export const convertPLNToUSD = (PLN) => {

  //console.log('alert',typeof(PLN))
  const PLNtoUSD = PLN / 3.5;
  
  if(PLN < 0){ 

    return 0
  
  }else if(typeof(PLN)=== 'object'){
    
    return Error
  
  }else if(PLN === null){

    return Error

  }else if(isNaN(PLN)){  

    return NaN

  }else{

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  }
  
}