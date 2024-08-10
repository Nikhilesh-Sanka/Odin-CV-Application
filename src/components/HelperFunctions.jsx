export function closeFormNew(
  setState,
  state,
  currentStateName,
  currentStateObject
) {
  setState({
    ...state,
    isFormOpen: false,
    [currentStateName]: currentStateObject,
  });
}

export function addFormNew(
  setState,
  state,
  currentStateName,
  fieldType,
  defaultCurrentStateObject
) {
  let newArray = [...state[fieldType]];
  if (state[currentStateName].id === null) {
    newArray.push({ ...state[currentStateName], id: `${newArray.length + 1}` });
  } else {
    newArray = newArray.map((item) => {
      if (item.id === state[currentStateName].id) {
        return state[currentStateName];
      }
      return item;
    });
  }
  let newState = {
    ...state,
    [currentStateName]: defaultCurrentStateObject,
    [fieldType]: newArray,
    isFormOpen: false,
  };
  setState(newState);
}

export function deleteField(
  state,
  setState,
  currentStateName,
  fieldType,
  defaultCurrentStateObject
) {
  if (state[currentStateName].id === null) {
    closeFormNew(setState, state, currentStateName, defaultCurrentStateObject);
    return;
  }
  let newArray = [...state[fieldType]];
  newArray = newArray.filter(
    (field) => state[currentStateName].id !== field.id
  );
  resolveId(newArray);
  let newState = {
    ...state,
    [fieldType]: newArray,
    [currentStateName]: defaultCurrentStateObject,
    isFormOpen: false,
  };
  setState(newState);
}

export function openAndEditFieldInForm(
  field,
  currentStateName,
  state,
  setState
) {
  setState({ ...state, [currentStateName]: field, isFormOpen: true });
}

export function changeVisibilityOfField(field, fieldType, state, setState) {
  let newVisibility = field.isVisible ? false : true;
  let newArray = [...state[fieldType]];
  newArray = newArray.map((item) => {
    if (item.id === field.id) {
      return { ...field, isVisible: newVisibility };
    }
    return item;
  });
  setState({ ...state, [fieldType]: newArray });
}
function resolveId(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].id = `${i}`;
  }
}
