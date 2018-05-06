const { successHandler, serverErrorHandler } = require('../utils/handlers-helper');
const { initialGame } = require('../models/ticTacToe');
const { createGame } = require('../dao/game');

// noinspection JSUnusedGlobalSymbols
module.exports.handler = async (event, context, callback) => {
  try {

    const result = createGame(initialGame);
    await successHandler(callback)(result);
  } catch (err) {
    await serverErrorHandler(callback)(err);
  }
};
