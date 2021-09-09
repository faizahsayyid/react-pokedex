import React, { useState } from "react";
import "./Header.css";
import { BsGearFill } from "react-icons/bs";
import SettingsModal from "../SettingsModal/SettingsModal";

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  return (
    <header className="main-header">
      <h1 className="pokemon-title">Pokedex</h1>
      <div className="settings-icon">
        <BsGearFill
          color="#f2e750"
          size={30}
          onClick={() => setIsSettingsOpen(true)}
        />
        <SettingsModal
          open={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
