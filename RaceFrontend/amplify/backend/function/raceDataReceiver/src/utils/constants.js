exports.ERRORS = {
  MISSING_VARIABLE: "MISSING_VARIABLE",
  UNABLE_TO_FETCH_RACE_INFO: "UNABLE_TO_FETCH_RACE_INFO",
  RACE_DOESNT_EXIST: "RACE_DOESNT_EXIST",
  RACE_NOT_ONGOING: "RACE_NOT_ONGOING",
  UNABLE_TO_CREATE_LAPTIME: "UNABLE_TO_CREATE_LAPTIME",
  PLAYER_NOT_IN_RACE: "PLAYER_NOT_IN_RACE"
}

exports.SUCCESS_MESSAGES = {
  SUCCESSFULLY_CREATED_LAPTIME: "SUCCESSFULLY_CREATED_LAPTIME"
}

exports.RACE_STATES = {
  LOBBY: "lobby",
  PENDING: "pending",
  PRACTICE: "practice",
  RED_FLAG: "red_flag",
  YELLOW_FLAG: "yellow_flag",
  GREEN_FLAG: "green_flag",
  CHECKERED_FLAG: "checkered_flag",
  ABORTED: "aborted"
}

exports.STATUS = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS"
}

exports.FUNCTION_INPUTS = {
  RACE_ID: "raceId",
  PLAYER_ID: "playerId",
  TIME_IN_MS:"timeInMilliSec",
}

exports.LAPTIME_TYPE_STRING = "laptime"

exports.USING_LOCAL_ENDPOINT = process.env.API_RACER_GRAPHQLAPIENDPOINTOUTPUT.startsWith('http://')