import React, { createContext, useReducer } from "react";
import SettingsReducer from "./SettingsReducer";
import { SETTINGS_ACTIONS } from "./SettingsActions";

const stringToBoolean = (str) => {
  return str === "true";
};

const initialState = {
  isDarkModeOn: stringToBoolean(localStorage.getItem("isDarkModeOn")),
  name: localStorage.getItem("name"),
  isMusicOn: stringToBoolean(localStorage.getItem("isMusicOn")),
};

export const SettingsContext = createContext(initialState);

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SettingsReducer, initialState);

  const toggleIsDarkModeOn = () => {
    dispatch({
      type: SETTINGS_ACTIONS.TOGGLE_IS_DARK_MODE_ON,
    });
    localStorage.setItem("isDarkModeOn", !state.isDarkModeOn);
  };

  const toggleIsMusicOn = () => {
    dispatch({
      type: SETTINGS_ACTIONS.TOGGLE_IS_MUSIC_ON,
    });
    localStorage.setItem("isMusicOn", !state.isMusicOn);
  };

  const updateName = (updatedName) => {
    dispatch({
      type: SETTINGS_ACTIONS.UPDATE_NAME,
      payload: updatedName,
    });
    localStorage.setItem("name", updatedName);
  };

  return (
    <SettingsContext.Provider
      value={{
        isDarkModeOn: state.isDarkModeOn,
        name: state.name,
        isMusicOn: state.isMusicOn,
        toggleIsDarkModeOn,
        toggleIsMusicOn,
        updateName,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
