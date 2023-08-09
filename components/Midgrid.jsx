import Image from "next/image";
import "./Midgrid.css";

function Midgrid() {
  return (
    <div className="container">
      <div className="grid">
        <div className="gridItem">
          <Image
            src="/frcbooks.jpeg"
            alt="Description of image 1"
            width={500}
            height={300}
            layout="responsive"
          />

          <h1 className="header1">Your Header 1</h1>
        </div>
        <div className="gridItem rowReverse">
          <Image
            src="/frcflowers.jpeg"
            alt="Description of image 2"
            width={500}
            height={300}
            layout="responsive"
          />
          <h1 className="header2">Your Header 2</h1>
        </div>
      </div>
    </div>
  );
}

export default Midgrid;
