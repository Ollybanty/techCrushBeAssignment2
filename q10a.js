const totalSeconds = 98765;

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
const hours = Math.floor((totalSeconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
const minutes = Math.floor((totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
const seconds = totalSeconds % SECONDS_IN_MINUTE;

function label(amount, unit) {
    return `${amount} ${unit}${amount === 1 ? "" : "s"}`;
}

console.log(
    `${label(days, "day")}, ${label(hours, "hour")}, ${label(minutes, "minute")}, ${label(seconds, "second")}`
);
