import { printf, toFail } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/String.js";

export function getColorBM(rowData) {
    let ccData;
    const matchValue = rowData.Area;
    if (matchValue.tag === 0) {
        const data = matchValue.fields[0];
        ccData = data;
    }
    else {
        const arg10 = rowData.Area;
        const clo1 = toFail(printf("wrong %A"));
        ccData = clo1(arg10);
    }
    return ccData;
}

