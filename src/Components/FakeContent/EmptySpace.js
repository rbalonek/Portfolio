import React from "react";
import "./FakeContent.css";

export default function EmptySpace() {
  return (
    <div className="empty-space">
      <input type="radio" checked id="radio-front" name="select-face" />
      <input type="radio" id="radio-left" name="select-face" />
      <input type="radio" id="radio-right" name="select-face" />
      <input type="radio" id="radio-top" name="select-face" />
      <input type="radio" id="radio-bottom" name="select-face" />
      <input type="radio" id="radio-back" name="select-face" />

      <div></div>

      <div class="scene">
        <div class="cube">
          <div class="cube-face  cube-face-front"></div>
          <div class="cube-face  cube-face-back"></div>
          <div class="cube-face  cube-face-left"></div>
          <div class="cube-face  cube-face-right"></div>
          <div class="cube-face  cube-face-top"></div>
          <div class="cube-face  cube-face-bottom"></div>
        </div>
      </div>
    </div>
  );
}
