/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion';

injectGlobal`
* {
  box-sizing: inherit;
}

html, body, #app {
  height: 100%;
}

body {
  background-attachment: fixed;
  background-blend-mode: normal;
  background-color: #cddc39;
  background-image: linear-gradient(135deg, #009688, rgba(255, 255, 255, 0.2));
  color: rgba(0, 0, 0, 0.65);
  font-family: "Nixie One", "Segoe UI", "Helvetica Neue", sans-serif;
  font-weight: 400;
  margin: 0;
}

button,
input {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
}

::-webkit-input-placeholder {
  color: rgba(153, 153, 153, 0.65);
}

:-ms-input-placeholder {
  color: rgba(153, 153, 153, 0.65);
}

::-ms-input-placeholder {
  color: rgba(153, 153, 153, 0.65);
}

::placeholder {
  color: rgba(153, 153, 153, 0.65);
}

.app {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
}
.app__title {
  font-weight: 400;
  margin: 1rem auto 2rem;
  text-align: center;
  font-size: 60px;
}

.clock {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
.clock__display {
  height: 160px;
  position: relative;
  width: 160px;
}
.clock__text {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;
}
.clock__amount {
  font-size: 3.75rem;
}
.clock__unit {
  font-size: 0.75rem;
}

.circle {
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0, 1.7);
}

.form {
  align-items: center;
  display: flex;  
  margin-bottom: 1rem;
}

.btn,
.form__field {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0.5rem;
}

.form__field {
  flex-shrink: 1;
}

.btn {
  background-color: #e91e63;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  flex-shrink: 1;
}

.message {
  margin: 0 auto 1rem;
  text-align: center;
}
.message--error {
  background-color: #e91e63;
  color: rgba(255, 255, 255, 0.6);
  padding: 1rem;
}

`;
