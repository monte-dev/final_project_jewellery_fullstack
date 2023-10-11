/* SELECTORS */
export const getOrder = ({ order }) => order;

/* ACTIONS */

const createActionName = (name) => `app/order/${name}`;

const CREATE_ORDER = createActionName('CREATE_ORDER');

export const createOrder = (orderData) => ({
  type: CREATE_ORDER,
  payload: orderData,
});

/* THUNKS */

/* INITIAL STATE */

const initialState = {
  order: [],
};

/* REDUCER */

export default function orderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
