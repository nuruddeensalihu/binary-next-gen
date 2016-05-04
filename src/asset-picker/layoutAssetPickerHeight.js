const firstPattern = {
        layout11: [],
        layout21: [1],
        layout22: [],
        layout31: [1, 2],
        layout32: [2],
        layout33: [1],
        layout34: [2],
        layout41: [2, 3],
        layout42: [3],
        layout43: [1, 2, 3],
        layout51: [1, 2, 3, 4],
        layout54: [2, 3, 4],
        layout55: [3, 4],
};

const secondPattern = {
    layout35: [1, 2],
    layout44: [2, 3],
    layout45: [1, 2],
    layout52: [1, 2, 3],
    layout53: [2, 3, 4],
};

export default ln => {
    let pattern = 0;
    let layout = [];
    if (firstPattern[ln]) {
        pattern = 2;
        layout = firstPattern[ln];
    } else {
        pattern = 3;
        layout = secondPattern[ln];
    }
    return { pattern, layout };
};
