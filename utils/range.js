function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

export const range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start)
export const pickerRange = (start, end) => Array.from({length: (end - start)}, (v, k) => pad(k + start))
