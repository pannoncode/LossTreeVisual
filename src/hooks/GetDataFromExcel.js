const exception = [
  "MS_GD Maker,MS_Teflon csere és hegesztok tisztítás",
  "CO_Termékváltás,CO_Termékváltás",
  "CO_Termékváltás",
  "CIL",
  "CIL,CIL_PIT STOP",
];

const kpiException = [
  "Excluded time",
  "Uptime",
  "QL (PR)",
  "TRL (PR)",
  "PR",
  "QL (OEE)",
  "TRL (OEE)",
  "OEE",
  "Planned",
  "Unplanned",
];

const GetDataFromExcel = (dataArray) => {
  let unplannedArray = dataArray.slice();
  let plannedArray = [];

  // for (let i = 0; i < unplannedArray.length; i++) {
  //   for (let j = 0; j < exception.length; j++) {
  //     if (exception[j] === unplannedArray[i]?.Unplanned) {
  //       plannedArray.push(unplannedArray[i]);
  //       unplannedArray.splice(i, 1);
  //     }
  //   }
  // }

  for (let i = unplannedArray.length - 1; i >= 0; i--) {
    for (let j = 0; j < exception.length; j++) {
      if (exception[j] === unplannedArray[i]?.Unplanned) {
        plannedArray.push(unplannedArray[i]);
        unplannedArray.splice(i, 1);
        break;
      }
    }
  }

  let kpi = [];

  for (let i = 0; i < unplannedArray.length; i++) {
    for (let j = 0; j < kpiException.length; j++) {
      if (kpiException[j] === unplannedArray[i]?.Unplanned) {
        kpi.push(unplannedArray[i]);
        unplannedArray.splice(i, 1);
      }
    }
  }

  let sorter = [...unplannedArray];
  sorter.sort((a, b) => b.OeeLoss - a.OeeLoss);

  let sortOeeResult = sorter.slice(0, 5);

  return { unplannedArray, plannedArray, sortOeeResult, kpi };
};

export default GetDataFromExcel;
