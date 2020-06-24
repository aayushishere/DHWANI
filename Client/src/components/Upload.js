import React, { useState } from "react";


const Upload = ({ file, onchange }) => {
  return (
    <>
      <input
        className="forminput"
        type="file"
        name="image"
        onChange={onchange}
      />
      <div class="img">
        <img className="pic" src={file} />

      </div>
    </>
  );
};

export default Upload;
