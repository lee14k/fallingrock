import Image from "next/image";
import "./Midgrid.css";

function Midgrid() {
  return (
    <div className="container">
      <div className="grid">
        <div className="gridItemone"></div>

        <div className="one">
          <div className="oneframe">
            <h1 className="header1">Your Header 1</h1>
          </div>
        </div>

        <div className="two">
          <div className="oneframe">
            <h1 className="header2">Your Header 2</h1>
          </div>
        </div>
                  <div className="gridItemtwo"></div>

      </div>
    </div>
  );
}

export default Midgrid;
