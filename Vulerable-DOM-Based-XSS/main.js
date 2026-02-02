var queryString = window.location.search;
var searchQuery = new URLSearchParams(queryString).get('search');


if (searchQuery) {
    document.getElementById('search_string')
        .innerHTML = 'Search results for "' + searchQuery + '"';
    document.getElementById('search_text').value = searchQuery;
    document.getElementById("search_results").classList.remove("hide");
    document.getElementById("game_preview").classList.add("hide");
}

function profileAction(actionNum) {
    switch (Number(actionNum)) {
        case 0: linkSocialMedia(); break;
        case 1: deleteAccount(); break;
        case 2: changePassword(); break;
        case 3: logout(); break;
        default: alert("Error");
    }
}

function logout() {
    alert("Logging out...");
}

function deleteAccount() {
    alert("Deleting Account...");
}

function changePassword() {
    alert("Changing password...");
}

function linkSocialMedia() {
    alert("Linking Social Media...");
}

function playGame() {
    window.location = "/";
}

function sendCoins() {
    var sendToUser = document.getElementById('send_to_user').value;
    var numCoins = document.getElementById('num_coins').value;
    alert("Sending " + numCoins + " coins to " + sendToUser);
}
