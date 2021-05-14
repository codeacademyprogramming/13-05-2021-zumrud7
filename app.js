let singleNum = [
  "",
  "bir",
  "iki",
  "üç",
  "dörd",
  "beş",
  "altı",
  "yeddi",
  "səkkiz",
  "doqquz",
];

let doubleNum = [
  "",
  "",
  "iyirmi",
  "otuz",
  "qırx",
  "əlli",
  "altmış",
  "yetmiş",
  "səksən",
  "doxsan",
];

function convert_millions(num) {
  if (num >= 1000000) {
    return (
      convert_millions(Math.floor(num / 1000000)) +
      " milyon " +
      convert_thousands(num % 1000000)
    );
  } else {
    return convert_thousands(num);
  }
}
function convert_thousands(num) {
  if (num == 1000) return "min";
  else if (num > 1000 && num < 2000)
    return "min " + convert_hundreds(num % 1000);
  else if (num >= 2000) {
    return (
      convert_hundreds(Math.floor(num / 1000)) +
      " min " +
      convert_hundreds(num % 1000)
    );
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num >= 100 && num < 200) return "yüz " + convert_tens(num % 100);
  else if (num >= 200) {
    return singleNum[Math.floor(num / 100)] + " yüz " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if (num < 10) return singleNum[num];
  else if (num >= 10 && num < 20) return "on " + singleNum[num - 10];
  else {
    return doubleNum[Math.floor(num / 10)] + " " + singleNum[num % 10];
  }
}

export function convert(num) {
  if (num == 0) return "sıfır";
  else if (num >= 1000000000) return;
  else return convert_millions(num);
}
console.log(convert(300));
