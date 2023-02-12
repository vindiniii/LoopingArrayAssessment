//Loop 1: Logs EVEN numbers: 1000 to 0
for(let i = 1000; i >= 0; i -= 2) {
    console.log(i);
}

//Loop 2: 0 to 10000
for(let i = 0; i <= 10000; i++) {
    //one-fourth way done
    if(i == 2500) {
        alert("A quarter of the way there!");
    }
    //halfway done
    if(i == 5000) {
        alert("Halfway there!");
    }
    //fully done
    if(i == 10000) {
        alert("The loop is done!");
    }
}

//Array
favTvShows = ["One Piece", "Business Proposal", "Modern Family", "Our Beloved Summer", "Bleach"];
//Loop Through Array to Output
for(let i = 0; i < favTvShows.length; i++) {
    console.log("My #" + (i + 1) + " favorite tv show is " + favTvShows[i]);
}