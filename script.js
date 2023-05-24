    function luas() {
  
    var sisiLuas = document.getElementById("sisiLuas").value;
    
    var luas = sisiLuas*sisiLuas;

    document.getElementById("luas").innerHTML = luas;
    
    }

    function keliling() {
  
        var sisiLuas = document.getElementById("sisiLuas").value;
        
        var keliling = 4*sisiLuas;
    
        document.getElementById("keliling").innerHTML = keliling;
        
        }
    
    function formReset() {
        document.getElementById("luas").reset();
        document.getElementById("luas").reset();
    }
    
