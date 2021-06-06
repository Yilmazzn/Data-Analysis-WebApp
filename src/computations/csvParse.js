const csvParse = text => {

    text = text.replaceAll("\r", "");

    // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = text.slice(0, text.indexOf("\n")).split(",");

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  let rows = text.slice(text.indexOf("\n") + 1).split("\n");
  rows = rows.filter(row => row.length > 0)
    const m = rows.map(row => row.split(","));

  const data = {}

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  for(var i = 0; i < headers.length; i++){
    data[headers[i]] = []
    for(var j = 0; j < m.length; j++){
        data[headers[i]].push(Number(m[j][i]))
    }
  }

  return data

}

export default csvParse