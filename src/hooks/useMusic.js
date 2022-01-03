import { useEffect, useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

const useMusic = (audio) => {
  const { isMusicOn } = useContext(SettingsContext);

  useEffect(() => {
    audio.play();
  }, []);
};

export default useMusic;
