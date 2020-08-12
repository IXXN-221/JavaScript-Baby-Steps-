let t = true;

function myFunction() {
    

    if (t) {
        t = false;
        document.getElementById('pic').src='2.jpg';
        
    } else {
        t = true;
        document.getElementById('pic').src='1.jpg';
        
    }
}