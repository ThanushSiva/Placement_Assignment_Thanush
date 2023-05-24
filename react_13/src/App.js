import { useState } from "react";
import "./App.css";

function App() {
  const [scn, setScn] = useState("");
  let [text, setText] = useState("");

  function insert(num) {
    setText(scn);
    setText(text += num)
    setScn(text);
  }

  function equals() {
    setScn(eval(text));
  }

  function clean() {
    setScn("");
  }

  function back() {
    setScn(scn.slice(0, scn.length - 1));
  }

  return (
    <div className="App">
      <div className="container">
        <form name="form">
          <input className="textview" value={scn} name="textview"></input>
        </form>
        <table>
          <tr>
            <td>
              <input
                className="allclearButton"
                type="button"
                value="AC"
                onClick={clean}
              />
            </td>
            <td>
              <input className="button" type="button" value="C" onClick={back} />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="/"
                onClick={() => insert('/')}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="x"
                onClick={() => insert('*')}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="button"
                type="button"
                value="7"
                onClick={() => insert(7)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="8"
                onClick={() => insert(8)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="9"
                onClick={() => insert(9)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="-"
                onClick={() => insert('-')}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="button"
                type="button"
                value="4"
                onClick={() => insert(4)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="5"
                onClick={() => insert(5)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="6"
                onClick={() => insert(6)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="+"
                onClick={() => insert('+')}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="button"
                type="button"
                value="1"
                onClick={() => insert(1)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="2"
                onClick={() => insert(2)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="3"
                onClick={() => insert(3)}
              />
            </td>
            <td rowspan="2">
              <input
                className="equalButton"
                type="button"
                value="="
                onClick={equals}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="button"
                type="button"
                value="%"
                onClick={() => insert('%')}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="0"
                onClick={() => insert(0)}
              />
            </td>
            <td>
              <input
                className="button"
                type="button"
                value="."
                onClick={() => insert('.')}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
