//数组去重
export function dedupe(array) {
  return Array.from(new Set(array));
}


export function getDes(data) {
  return data.substr(data.indexOf(")") + 1);

}

export function getFormat(data) {
  return data.substr(0, data.indexOf(")") + 1);

}

