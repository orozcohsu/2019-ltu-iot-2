<script>
var value = "1";
// or overwrite value in your callback function ...
this.scope.action = function() { return value; }

function updateF() {
  var source = '/photo1.JPEG',
  timestamp = (new Date()).getTime(),
  newUrl = source + '?_=' + timestamp;
  document.getElementById("photo").src = newUrl;
}
</script>

<md-button ng-click="send({payload:action()})" onclick="setTimeout(updateF, 2500);" style="padding:40px; margin-bottom: 40px;" >
 <ui-icon icon="camera"></ui-icon>
 Take a photo<br>
</md-button>

<div style="margin-bottom:40px;">
 <img src="/photo1.JPEG" id="photo" width="100%" height="100%">
</div>