import "./Titletext.css";


function Titletext(props) {
  const text = props.titledescription;
  return (
    <div>
      <div>
        <p className="titletext">{text}</p>
      </div>
    </div>
  );
}

export default Titletext;
