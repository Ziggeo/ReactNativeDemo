let logsList = [];

export function addLog(name, details) {
    logsList.push({name: name, details: details, timestamp: new Date()});
}

export function getLogs() {
    return logsList.reverse();
}