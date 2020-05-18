const refBtn = document.getElementsByClassName("btn-add")[0];
const refLocalStorage = browser.storage.local;
const refInput = document.getElementsByClassName("form-control")[0];
const refFeedback = document.getElementsByClassName("feedback")[0];

function reloadTabs() {
  const value = this.innerText;
  refLocalStorage
    .get()
    .then((tabList) => {
      if (tabList) {
        browser.windows
          .create({
            url: tabList[value],
          })
          .catch((err) =>
            browser.windows.create({
              url: "https://google.com",
            })
          );
      }
    })
    .catch((err) =>
      browser.windows.create({
        url: "https://google.com",
      })
    );
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  render();

  refBtn.addEventListener("click", () => {
    browser.tabs
      .query({
        currentWindow: true,
      })
      .then((tabs) => {
        let arr = [];
        arr = tabs.map((item, index) => {
          console.log("tabs ", index, " ", item);
          return item.url;
        });

        refLocalStorage
          .get()
          .then((savedTabs) => {
            const sessionName = refInput.value;

            if (
              sessionName === "" ||
              sessionName === null ||
              typeof sessionName === undefined
            ) {
              refInput.classList.add("is-invalid");
              refFeedback.innerHTML = "Please enter session name";

              refInput.addEventListener("change", (event) => {
                if (refInput.classList.contains("is-invalid")) {
                  refInput.classList.remove("is-invalid");
                  refFeedback.innerHTML = "";
                }
              });

              return;
            }

            if (!isEmpty(savedTabs)) {
              const flag = Object.keys(savedTabs).filter(
                (item) => item === sessionName
              );
              if (flag.length > 0) {
                refInput.classList.add("is-invalid");
                refFeedback.innerHTML = "Name already exists";

                refInput.addEventListener("change", (event) => {
                  if (refInput.classList.contains("is-invalid")) {
                    refInput.classList.remove("is-invalid");
                    refFeedback.innerHTML = "";
                  }
                });

                return;
              }
            } else {
              document.getElementsByClassName("tabList")[0].innerHTML = "";
            }
            savedTabs[sessionName] = arr;
            refLocalStorage.set(savedTabs).then(() => {
              refInput.value = "";
              render();
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  refInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      refBtn.click();
    }
  });
});
