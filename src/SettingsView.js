import React from "react";

export function SettingsView({ active }) {
  
  return <div className="view" data-active={active || undefined}>
    <h1>Car Settings</h1>
  </div>;
}
