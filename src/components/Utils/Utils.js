const Utils = () => {
};

export const LogTimeDifference = (area, startDateTime, endDateTime) => {
    var difference = endDateTime - startDateTime;
    console.log(area + "," + difference + "," + startDateTime.toISOString() + "," + endDateTime.toISOString());
    return difference;
  };

export default Utils;
