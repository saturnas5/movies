

function trim(name) {
    const chars = {' ': '-', ':': '', '-': '-'};
    return name.trim().toLowerCase().replace(/[ :-]/g, m => chars[m]);
}

export {trim};