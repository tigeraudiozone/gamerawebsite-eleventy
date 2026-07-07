let index = 0;

let next = document.getElementById("right-featured-game");
let prev = document.getElementById("left-featured-game");




function update_feature_game() {
    
    const game = featuredGames[index];

    document.getElementById("featuredscreenshot").src = game.img;

    document.getElementById("featureddeveloper").innerHTML =
        `◼ ${game.developer}, ${game.year}
        <br>
        ◼ ${game.publisher}`
    ;

    /*Check: a <br> must be added*/
    document.getElementById("featuredtitle").innerHTML = game.title.join("<br>");

    document.getElementById("featureddescription").textContent = game.description;
}


function right_featured_game() {
    index++;

    if(index >= featuredGames.length) {
        index = 0;
    }

    update_feature_game();
}


function left_feature_game() {

    index--;

    if(index < 0) {
        index = featuredGames.length - 1;
    }

    update_feature_game();
}


next.addEventListener("click", right_featured_game);
prev.addEventListener("click", left_feature_game);