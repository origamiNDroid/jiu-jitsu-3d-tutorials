import { useState } from "react";
import { Moves } from "../js/Moves.js";

function App() {
    const [query, setQuery] = useState("");
    return (
        <div className = "app">
            <input
                type="text"
                placeholder="Search..."
                className="search"
                onChange={(e) => setQuery(e.target.value)}
            />
            <Table data={Moves}/>
        </div>
    )
}