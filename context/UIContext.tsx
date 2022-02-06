import { createContext, useReducer, FC } from 'react';

export type UIContextT = {
  mobileMenu: {
    isOpen: boolean;
  };
};
export const TOGGLE_MENU = 'TOGGLE_MENU';

export type TState = {
  mobileMenu: {
    isOpen: boolean;
  };
  [key: string]: any;
};
export type TActions = {
  type: string;
  payload?: any;
};

export const UIContext = createContext<TState>({
  mobileMenu: { isOpen: false },
});
export const Reducers = (state: TState, actions: TActions): TState => {
  switch (actions.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        mobileMenu: {
          isOpen: !state.mobileMenu.isOpen,
        },
      };

    default:
      return state;
  }
};

const UIContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers, {
    mobileMenu: { isOpen: false },
  });
  return (
    <UIContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
