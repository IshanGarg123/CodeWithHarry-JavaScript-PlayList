// problem with callback functions
// we can give a function to a function
// so it can misuse it and create errors also
// in your code
// callback problem we give full control
// of our function to another function

// pyramid of doom or callbackHell
// when we have callback inside call it is difficult to manage
// apka code horizontally grow kare jaa raha hai

function hello(name) {
  console.log("Hello");
  name();
}

hello(() => {
  console.log("Ishan Garg");
  hello(() => {
    console.log("Ishan Garg1");
    hello(() => {
      console.log("Ishan Garg2");
      hello(() => {
        console.log("Ishan Garg3");
        hello(() => {
          console.log("Ishan Garg4");
        });
      });
    });
  });
});

// if we have callback inside callback it is difficult to manage
// the code is inc in the horizontal side;
// this will run in the async way
// it you have 1-2 callback than ok else avoid it

// let hi = ()=>{
//     console.log("Hi");
//     hi();
// }

// hi();

// load script wala function in callback hell
function loadScript(scr, callback) {
  var script = document.createElement("script");
  script.src = scr;
  script.onload = callback(null, scr);
  script.onerror = callback(true, scr);
  document.body.appendChild(script);
}
function hello(error, src) {
  if (error) {
    console.log("Error");
  }
  alert("Hello World" + src);
}

function goodmorning(error, src) {
  if (error) {
    console.log("Error");
  }
  alert("Hello World" + src);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
  function hello(error, src) {
    if (error) {
      console.log("Error");
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
      function hello(error, src) {
        if (error) {
          console.log("Error");
          return;
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
          function hello(error, src) {
            if (error) {
              console.log("Error");
              return;
            }
            loadScript(
              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
              function hello(error, src) {
                if (error) {
                  console.log("Error");
                  return;
                }
                loadScript(
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
                  function hello(error, src) {
                    if (error) {
                      console.log("Error");
                      return;
                    }
                    loadScript(
                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
                      function hello(error, src) {
                        if (error) {
                          console.log("Error");
                          return;
                        }
                        loadScript(
                          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
                          function hello(error, src) {
                            if (error) {
                              console.log("Error");
                              return;
                            }
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
