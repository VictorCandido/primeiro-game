import createKeyboardListener from "./keyboard-listener.js";
import createGame from "./game.js";
import renderScreen from "./render-screen.js";

const socket = io();
const game = createGame();
const keyboardListener = createKeyboardListener(document);
keyboardListener.subscribe(game.movePlayer);

const screen = document.getElementById(`screen`);
renderScreen(screen, game, requestAnimationFrame); 

socket.on('connect', () => {
    const playerId = socket.id;
    console.log(`Player connected on Client width id: ${playerId}`)
});

socket.on('setup', (state) => {
    game.state = state
})