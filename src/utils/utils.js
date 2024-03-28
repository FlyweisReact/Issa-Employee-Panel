/** @format */

// mm/dd/yyyy
export const DateFormtter = (date) => {
  const originalDate = new Date(date);
  const timezoneOffset = originalDate?.getTimezoneOffset();
  const adjustedTime = new Date(
    originalDate?.getTime() + timezoneOffset * 60000
  );
  const year = adjustedTime?.getFullYear();
  const month = adjustedTime?.getMonth() + 1;
  const day = adjustedTime?.getDate();

  return `${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }/${year}`;
};

// mm-dd-yy
export const DateforInput = (date) => {
  if (date) {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  }
};

// print report
export const PrintThis = (handlePrint) => {
  var elements = document.getElementsByClassName("hidePrint");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  handlePrint();
  setTimeout(() => {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }, 1000);
};

// Return Signature
export const signatureFormat = ({ sign, date, time, withText = true }) => {
  return withText === true
    ? sign && (
        <p>
          Digitally Sign by {sign} {date && DateFormtter(date)} {time}{" "}
        </p>
      )
    : sign && (
        <p>
          {sign} {date && DateFormtter(date)} {time}{" "}
        </p>
      );
};
