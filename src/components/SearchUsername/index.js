import React, { useState } from "react";

const SearchUsername = ({ setUsername }) => {
    const [nameInput, setNameInput] = useState("");

    const handleInput = e => setNameInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(nameInput);
        setNameInput("");
    };
    return (
        <>
            <div id="form-container">
                <form onSubmit={handleFormSubmit}>
                    <label id="form" htmlFor="username">GitHub Username: </label>
                    <input type="text" id="username" name="username" placeholder="Enter username here" value={nameInput} onChange={handleInput} />
                    <input type="submit" id="submit" value="Submit" />
                </form>
            </div>
        </>
    )

};



export default SearchUsername;
