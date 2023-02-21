class SeparatExcelData {
  constructor(unpSepArr, exceptionArr) {
    this.unplanned = unpSepArr;
    this.exception = exceptionArr;
    this.reslultArr = [];
  }
  separatExcel() {
    for (let i = this.unplanned.length - 1; i >= 0; i--) {
      for (let j = 0; j < this.exception.length; j++) {
        if (this.exception[j] === this.unplanned[i]?.Unplanned) {
          this.unplanned.splice(i, 1);
          this.reslultArr.push(this.unplanned[i]);
          break;
        }
      }
    }
  }
}

export default SeparatExcelData;
