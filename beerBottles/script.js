function lyricsSong(){
    let lyrics1 = " bottles of beer on the wall";
    let lyrics2 = " bottles of beer<br />Take one down and pass it around, ";
    let lyricsEnding = "No more bottles of beer on the wall, no more bottles of beer<br />Go to the store and buy some more, 99 bottles of beer on the wall ";
    let lyricsLine;
    let leftover;
    let completeLyrics="";
    
    for (i=99; i>=0; i--){
        leftover = i-1; 
        lyricsLine = i+lyrics1+", "+i+lyrics2+leftover+lyrics1+"<br/>";
         
        if (i===2){
            lyricsLine = i+lyrics1+", "+i+lyrics2+leftover+" bottle of beer on the wall"+"<br />";
        }
        else if (i===1){
            lyricsLine = "1 bottle of beer on the wall, 1 bottle of beer<br />Take one down and pass it around, no more bottles of beer on the wall<br />";
        }
        else if(i===0){
            lyricsLine = lyricsEnding;
        }
        completeLyrics += "<br />"+lyricsLine;
    }
    document.getElementById("lyricsPlaceholder").innerHTML = `<p>${completeLyrics}</p>`



}