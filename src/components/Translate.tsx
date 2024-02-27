// import React from "react";

export default function Translate({ str }: { str: string }) {
  const translateGeoToEn = (str: string) => {
    const geoToEnMap: { [key: string]: string } = {
      ა: "a",
      ბ: "b",
      გ: "g",
      დ: "d",
      ე: "e",
      ვ: "v",
      ზ: "z",
      თ: "T",
      ი: "i",
      კ: "k",
      ლ: "l",
      მ: "m",
      ნ: "n",
      ო: "o",
      პ: "p",
      ჟ: "J",
      რ: "r",
      ს: "s",
      ტ: "t",
      უ: "u",
      ფ: "f",
      ქ: "q",
      ღ: "R",
      ყ: "y",
      შ: "S",
      ჩ: "C",
      ც: "c",
      ძ: "Z",
      წ: "w",
      ჭ: "W",
      ხ: "x",
      ჯ: "j",
      ჰ: "h",
      " ": " ",
      "?": "?",
      ",": ",",
      ".": ".",
      ":": ":",
      "'": "'",
      "(": "(",
      ")": ")",
      "=": "=",
      "!": "!",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "0": "0",
      "∙": "∙",
      ";": ";",
      "-": "-",
      "⁃": "⁃",
    };

    let translatedStr = "";
    for (let i = 0; i < str.length; i++) {
      if (geoToEnMap.hasOwnProperty(str[i])) {
        translatedStr += geoToEnMap[str[i]];
      } else if (str[i] === "\n") {
        // Preserve newline characters
        translatedStr += "<br/>";
      } else {
        translatedStr += " ";
      }
    }
    return translatedStr;
  };

  const translatedStr = translateGeoToEn(str);

  return <div dangerouslySetInnerHTML={{ __html: translatedStr }} />;
}
