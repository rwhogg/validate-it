/** Represents an validator that cannot run on this machine, so its results are not reliable. */
class NotReadyError extends Error {}

module.exports = NotReadyError
