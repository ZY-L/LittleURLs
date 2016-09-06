function appendResults(text) {
    var results = document.getElementById('results').innerHTML = text;
}
function makeLittle() {
    var longUrl = document.getElementById("longurl").value;
    var request = gapi.client.urlshortener.url.insert({
        'longUrl': longUrl
    });
    request.then(function (response) {
        appendResults(response.result.id);
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}
function init() {
    gapi.client.setApiKey('AIzaSyC21HyuTljQ6Ouv2ARdZ4FNX7oIxniOI3o');
    gapi.client.load('urlshortener', 'v1');
}
gapi.load('client', init);
