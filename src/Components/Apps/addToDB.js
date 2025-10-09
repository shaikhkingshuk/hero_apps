const getInstalledApp = () => {
  const storedAppSTR = localStorage.getItem("installedList");
  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAllApps = getInstalledApp();
  if (storedAllApps.includes(id)) {
    // alert("fasdfadfafas");
  } else {
    storedAllApps.push(id);
    // console.log(storedAllApps);
    const appData = JSON.stringify(storedAllApps);
    localStorage.setItem("installedList", appData);
  }
};

const removeFromStore = (id) => {
  const dataList = getInstalledApp();
  const updatedDataList = dataList.filter((val) => val !== id);
  const appData = JSON.stringify(updatedDataList);
  localStorage.setItem("installedList", appData);
};

export { addToStoredDB, getInstalledApp, removeFromStore };
