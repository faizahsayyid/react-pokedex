import ReactDOM from "react-dom";
import { FaTimes, FaCheck } from "react-icons/fa";
import "./SettingsModal.css";

const SettingsModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
        <div className="settings-modal-overlay"></div>
        <div className="settings">
          <header className="settings-header">
            <FaTimes color="#777" onClick={onClose} className="close-icon" />
            <h2 className="settings-title">Settings</h2>
          </header>
          <label htmlFor="name" className="settings-pokedex-name">
            Who's Pokedex is this?
            <input type="text" name="name" placeholder="Enter your name..." />
            <button type="button">Save</button>
          </label>
          <div className="settings-toggle">
            <p>Dark Mode</p>
          </div>
          <div className="settings-toggle">
            <p>Music</p>
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );
  }
};

export default SettingsModal;
