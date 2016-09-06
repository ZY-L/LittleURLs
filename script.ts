declare var gapi:any;

 function appendResults(text: string) {
        var results: string = document.getElementById('results').innerHTML = text;
      }

      function makeLittle():void {
        var longUrl: string = (<HTMLInputElement>document.getElementById("longurl")).value;
        var request: any = gapi.client.urlshortener.url.insert({
          'longUrl': longUrl
        });
        request.then(function(response) {
          appendResults(response.result.id);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      }

      function init():void {
        gapi.client.setApiKey('AIzaSyC21HyuTljQ6Ouv2ARdZ4FNX7oIxniOI3o');
        gapi.client.load('urlshortener', 'v1');
      }
      gapi.load('client', init);
 
 