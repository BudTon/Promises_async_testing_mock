/* eslint-disable no-undef */
import GameSaving from "../GameSaving.class";
import GameSavingLoader from "../GameSavingLoader.class";

jest.setTimeout(15000);
test('Testing classes in app.js', async () => {
    const saveUserGame = new GameSavingLoader
    const saving = await saveUserGame.load()
    const saveGame = await JSON.parse(saving)
    const userGameSaving = new GameSaving(saveGame.id, Date(saveGame.created * 1000), saveGame.userInfo)
    const expected = { "id": 1, "level": 10, "name": "Hitman", "points": 2000 }
    expect(userGameSaving.userInfo).toEqual(expected);
})
