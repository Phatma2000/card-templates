(function () {
  "use strict";

  // Inject a script tag to load the React app
  var script = document.createElement("script");
  script.src = "http://localhost:3000/static/js/bundle.js"; // Update the path accordingly
  document.head.appendChild(script);
})();
