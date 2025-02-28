var ionscript = document.createElement("script")
ionscript.type = "module"
ionscript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
document.body.appendChild(ionscript)

var ionscript2 = document.createElement("script")
ionscript2.nomodule = "true"
ionscript2.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
document.body.appendChild(ionscript2)

var navbar = `
<link href="https://unpkg.com/movement.css/movement.css" rel="stylesheet" />
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<link rel="stylesheet" href="/styles/hover.css" />

<nav>
  <div class="container">
    <img src="/icon.png" alt="Logo" />
    <ul>
      <li data-m="bounce-down" class="hvr-underline-from-left"><a href="/"><ion-icon name="home"></ion-icon> Home</a></li>
      <li data-m="bounce-down" class="hvr-underline-from-left"><a href="/gs.html"><ion-icon name="game-controller"></ion-icon> Games</a></li>
      <li data-m="bounce-down" class="hvr-underline-from-left"><a href="/apps.html"><ion-icon name="apps"></ion-icon> Apps</a></li>
      <li data-m="bounce-down" class="hvr-underline-from-left"><a href="/emulator.html"><ion-icon src="../assets/joystick.svg"></ion-icon> Emulator</a></li>
      <li data-m="bounce-down" class="hvr-underline-from-left"><a href="/utils.html"><ion-icon name="hammer"></ion-icon> Utilities</a></li>
      <li data-m="bounce-down" class="hvr-underline-from-left"><a href="/settings.html"><ion-icon name="cog"></ion-icon> Settings</a></li>
    </ul>
  </div>
</nav>
`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", navbar)