import { exception, kpiException, otherKpi } from "../data/exceptions";
import SeparatExcelData from "../data/SeparatesExcelData";

const GetDataFromExcel = (dataArray) => {
  let unplannedArray = dataArray.slice();
  let plannedArray = [];

  //ezt át kell gondolni, mert sok az ismétlés

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

  for (let i = unplannedArray.length - 1; i >= 0; i--) {
    for (let j = 0; j < kpiException.length; j++) {
      if (kpiException[j] === unplannedArray[i]?.Unplanned) {
        kpi.push(unplannedArray[i]);
        unplannedArray.splice(i, 1);
        break;
      }
    }
  }

  let othersKpi = [];

  for (let i = kpi.length - 1; i >= 0; i--) {
    for (let j = 0; j < otherKpi.length; j++)
      if (otherKpi[j] === kpi[i]?.Unplanned) {
        othersKpi.push(kpi[i]);
        kpi.splice(i, 1);
        break;
      }
  }

  let sorter = [...unplannedArray];
  sorter.sort((a, b) => b.OeeLoss - a.OeeLoss);

  let sortOeeResult = sorter.slice(0, 5);

  return { unplannedArray, plannedArray, sortOeeResult, kpi, othersKpi };
};

export default GetDataFromExcel;
