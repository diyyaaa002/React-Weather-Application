//npm i react-icons react-hot-toast
//toast is used to show the pop up message of password copied
//This imports icons from the react-icons library.
//FaCopy is the copy icon.
//FaKey is the key icon.
import React, { useState } from "react";
import { FaCopy, FaKey } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import './Automatic_Password_Generator.css'
const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  // Character sets
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+{}[]<>?/";

  const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];

  const shuffleString = (str) =>
    str.split("").sort(() => Math.random() - 0.5).join("");

  const generatePassword = () => {
    let selectedSets = [];

    if (uppercase) selectedSets.push(upperChars);
    if (lowercase) selectedSets.push(lowerChars);
    if (numbers) selectedSets.push(numberChars);
    if (symbols) selectedSets.push(symbolChars);

    if (selectedSets.length === 0) {
      setPassword("Select at least one option");
      return;
    }

    if (length < selectedSets.length) {
      setPassword(`Min length should be ${selectedSets.length}`);
      return;
    }

    let tempPassword = "";

    // Guarantee at least one of each selected type
    selectedSets.forEach((set) => {
      tempPassword += getRandomChar(set);
    });

    const allChars = selectedSets.join("");

    // Fill remaining length
    for (let i = tempPassword.length; i < length; i++) {
      tempPassword += getRandomChar(allChars);
    }

    setPassword(shuffleString(tempPassword));
  };

  const copyToClipboard = () => {
    if (!password || password.includes("Select") || password.includes("Min")) return;
    navigator.clipboard.writeText(password);
    toast.success("Password copied!");
  };

  return (
    <div className="container">
      <Toaster position="top-center" />
      <h1>Password Generator</h1>
      <div className="display-box">
        <input type="text" value={password} readOnly />
        <button onClick={copyToClipboard}>
          <FaCopy />
        </button>
      </div>

      <div className="settings">
        <label>
          Length:
          <input
            type="number"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          Uppercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          Lowercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          Symbols
        </label>
      </div>

      <button className="generate-btn" onClick={generatePassword}>
        <FaKey /> Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;