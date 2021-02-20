import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function QRCodeGen(props) {
  return <QRCode value={props.value} />;
}

export default QRCode;
