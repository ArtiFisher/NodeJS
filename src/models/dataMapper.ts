
export default (dataObj: object) =>
    Object.fromEntries(
        Object.entries(dataObj)
            .map(entry => [entry[0].toLowerCase(), entry[1]])
    );
