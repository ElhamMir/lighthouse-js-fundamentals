const whichSchool  = function (age) {
    var result
      if (age < 13) {
        return("Elementary School")  
      }
      else if
      (18 <= age && age >= 13) 
      {result = ("Secondary School")   }
      else  
      { result = ("Lighthouse Labs") }  
         return  result  ;            
        }   
        
     console.log(whichSchool(18))