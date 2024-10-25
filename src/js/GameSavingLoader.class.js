import read from "./reader";
import json from "./parser";

// const { read } = require("./reader");
// const { json } = require("./parser");

//class GameSavingLoader {
export default class GameSavingLoader {
    load() {
        return read().then(value => json(value))
    }
}
// Вариант 2
// const save = new GameSavingLoader;
// save.load()
//     .then(value => JSON.parse(value))
//     .then(saveGame => new GameSaving(saveGame.id, Date(saveGame.created * 1000), saveGame.userInfo))
//     .then(save => console.log(save))

// module.exports = {
//     GameSavingLoader
// }