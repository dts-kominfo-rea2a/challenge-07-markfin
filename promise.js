const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
    let x = await promiseTheaterIXX();
    let y = await promiseTheaterVGC();
    const arrFilm = (await x).concat(await y);
    return arrFilm.filter((Element) => Element.hasil === emosi).length;
}
module.exports = {
    promiseOutput,
};