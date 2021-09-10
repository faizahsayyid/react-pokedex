import React, { createContext, useReducer } from "react";
import SettingsReducer from "./SettingsReducer";
import { SETTINGS_ACTIONS } from "./SettingsActions";

const initialState = {
  isDarkModeOn: false,
  name: "",
  isMusicOn: false,
};

export const SettingsContext = createContext(initialState);

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SettingsReducer, initialState);

  const toggleIsDarkModeOn = () => {
    dispatch({
      type: SETTINGS_ACTIONS.TOGGLE_IS_DARK_MODE_ON,
    });
  };

  const toggleMusicOn = () => {
    dispatch({
      type: SETTINGS_ACTIONS.TOGGLE_IS_MUSIC_ON,
    });
  };

  const updateName = (updatedName) => {
    dispatch({
      type: SETTINGS_ACTIONS.UPDATE_NAME,
      payload: updatedName,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        isDarkModeOn: state.isDarkModeOn,
        name: state.name,
        isMusicOn: state.isDarkModeOn,
        toggleIsDarkModeOn,
        toggleMusicOn,
        updateName,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
