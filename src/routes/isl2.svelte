<div class="flex">
  <input type="radio" id="trigger1" name="slider" />
  <label for="trigger1" />
  <div class="slide bg1" />

  <input type="radio" id="trigger2" name="slider" checked autofocus />
  <label for="trigger2" />
  <div class="slide bg2" />

  <input type="radio" id="trigger3" name="slider" />
  <label for="trigger3" />
  <div class="slide bg3" />

  <input type="radio" id="trigger4" name="slider" />
  <label for="trigger4" />
  <div class="slide bg4" />

  <input type="radio" id="trigger5" name="slider" />
  <label for="trigger5" />
  <div class="slide bg5" />

  <a target="_blank" href="https://twitter.com/kamildyrek"
    ><svg
      style="width:2em;height:2em;position:fixed;top:1em;left:1em;opacity:.8;"
      viewBox="0 0 24 24"
      ><path
        fill="#fff"
        d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"
      /></svg
    ></a
  >
</div>

<style>
  .flex {
    display: flex;
    flex-grow: 1;
  }
  body,
  html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
  }

  input {
    position: relative;
    opacity: 0;
    margin-top: 95vh;
    cursor: pointer;
  }

  label {
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    border: solid 1px #fad7d7;
    border-radius: 999px;
    background-color: transparent;
    margin: 95vh 6px 0 6px;
    z-index: 2;
    cursor: pointer;
    transition-duration: 0.4s;
  }

  input:checked + label {
    background-color: white;
  }

  input:focus + label {
    box-shadow: 0 0 0 2px #fad7d7, 0 0 18px white;
  }

  .slide {
    position: fixed;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    transform: translateX(100%);
    transition-duration: 0.4s;
    opacity: 1;
  }

  input:checked ~ .slide {
    transform: translateX(100%);
  }

  input:checked + label + .slide {
    transform: translateX(0);
    opacity: 1;
  }

  .bg1 {
    background-image: url(/isl/05.jpg);
  }
  .bg2 {
    background-image: url(/isl/06.jpg);
  }
  .bg3 {
    background-image: url(/isl/07.jpg);
  }
  .bg4 {
    background-image: url(/isl/08.jpg);
  }
  .bg5 {
    background-image: url(/isl/04.jpg);
  }
</style>
