let state;
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  state = reducer(state, action);
  render();
}

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

dispatch({type: '@@INIT'})

let button = document.getElementById('button');

// after grabbing button, use vanilla js to add event listener
// on listener, use dispatch as the callback
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
}) 
