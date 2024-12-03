const filterBorders = (req, res, next) => {
  const sendData = res.json;

  res.json = (data) => {
    const filteredData = {
      commonName: data.commonName,
      officialName: data.officialName,
      countryCode: data.countryCode,
      borders: data.borders,
    };
    sendData.call(res, filteredData);
  };

  next();
};

export default filterBorders;