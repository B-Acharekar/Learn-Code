for (var i = 1; i <= 3 ; i++){
    setTimeout( function(){
        console.log(`❌ User var: ${i}`)
    },i*1000)
}

// Fix using closure
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`✅ Using let: ${i}`); // ✅ prints 1, 2, 3
  }, i * 1000);
}