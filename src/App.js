import "./styles.css";
import { useEffect, useMemo, useState } from "react";
import { getData, formatData } from "./util";

export default function App() {
  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function fetchData() {
      const resp = await getData();
      setData(resp);
    }
    fetchData();
  }, []);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function handleChange(e) {
    const { value } = e.target;
    setPassword(value);
  }

  const isPasswordValid = /^[a-zA-Z0-9]{8,}/.test(password);

  useMemo(() => {
    setFormattedData(formatData(data));
  }, [data]);

  return (
    <div className="App">
      <input type="text" name="text" value={text} onChange={handleChange} />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
      />
      <button disabled={!isPasswordValid}>Submit</button>
      <ul>
        {formattedData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
