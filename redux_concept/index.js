import { createStore } from "https://unpkg.com/redux@4.0.5/es/redux.mjs";

const initialState = {
  buttonClicked: "no",
  divVisible: "no",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "BUTTON_CLICKED":
      return { ...state, buttonClicked: "yes" };
    // return Object.assign({}, state, { buttonClick: 'yes' });

    case "DIV_VISIBLE":
      return Object.assign({}, state, { divVisible: "yes" });
    default:
      return state;
  }
}

const store = createStore(rootReducer);

const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log("button clicked");
  const buttonClickedAction = {
    type: "BUTTON_CLICKED",
  };
  const divVisibleAction = {
    type: "DIV_VISIBLE",
  };

  store.dispatch(buttonClickedAction);
  store.dispatch(divVisibleAction);
});

store.subscribe(function () {
  if (store.getState().divVisible === "yes") {
    const div = document.getElementById("myDiv");
    div.style.display = "block";
  }
});

//store.dispatch() for sending action to store
//store.subscribe() for listening state change
//store.getState() for checking state value
//npx serve  = to make server object
