function toDefault(item) {
  if(!item) return item;
  const { type } = item;
  return type ? toDefault(item[type]): item;
}

function toText(item) {
  const { type } = item;
  const [obj] = item[type];
  return obj?.text?.content;
}

function toDate(item) {
  const {date} = item;
  return date?.start;
}

function toFiles(item) {
  return item.files.map(obj => {
    const response = obj?.file ? obj?.file : obj?.external;
    return response;
  });
}

const formaterMap = {
  date: toDate,
  rich_text: toText,
  title: toText,
  files: toFiles,
};

function parseItem(item) {
  return Object.fromEntries(Object.entries(item).map(([key, value]) => {
    const parser = formaterMap[value.type];
    const result = parser ? parser(value) : toDefault(value);
    return [key, result || null];
  }));
}

function parseArray(arrayToParse) {
  return arrayToParse.map(objectToParse => parseItem(objectToParse));
}

function parseNotion(objectToParse) {
  return Array.isArray(objectToParse) ? parseArray(objectToParse) : parseItem(objectToParse);
}

export default parseNotion;