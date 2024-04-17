export interface Fields {
  content: string;
}

export type Data = { validatedData: Fields };

export type Err = Record<keyof Fields, string> | null;

export type State = {
  data: Data;
  err: Err | null;
  showNotification: boolean;
};

export const initialState: State = {
  data: {
    validatedData: {
      content: "",
    },
  },
  err: null,
  showNotification: false,
};

export type Action =
  | { type: "SET_CONTENT"; payload: string }
  | { type: "SET_ERR"; payload: Err }
  | { type: "SET_SHOW_NOTIFICATION"; payload: boolean }
  | { type: "RESET_FORM" };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CONTENT":
      return {
        ...state,
        err: null,
        data: {
          validatedData: {
            content: action.payload,
          },
        },
      };
    case "SET_ERR":
      return {
        ...state,
        err: action.payload,
        showNotification: true,
      };
    case "SET_SHOW_NOTIFICATION":
      return {
        ...state,
        showNotification: action.payload,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};
