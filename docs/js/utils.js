function toFirst(fieldData, index) {
  if (index != 0) {
    fieldData.unshift(fieldData.splice(index, 1)[0]);
  }
}
