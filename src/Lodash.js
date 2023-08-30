import React from "react";
import _ from "lodash";

const Lodash = () => {
  // (a) Symmetric Difference of 2 Arrays
  const arrOne = [
    {
      id: 20,
      name: "alex",
    },
    {
      id: 30,
      name: "alina",
    },
  ];

  const arrTwo = [
    {
      id: 40,
      name: "hello",
    },
    {
      id: 30,
      name: "world",
    },
  ];

  const result = _.xorBy(arrOne, arrTwo, "id");
  console.log(result);

  const commonIds = _.intersection(_.map(arrOne, "id"), _.map(arrTwo, "id"));
  const res = _.filter([...arrOne, ...arrTwo], (obj) =>
    commonIds.includes(obj.id)
  );
  console.log(res);

  // (b) Get all the tables ['E', 'F'], ['E']
  const str = ["u", "ec"];
  const arr = [
    {
      storageVal: "u",
      table: ["E", "F"],
    },
    {
      storageVal: "data",
      table: ["E", "F"],
    },
    {
      storageVal: "ec",
      table: ["E"],
    },
  ];
  let bResult = [];
  let bMatched = _.filter(arr, (obj) => {
    if (obj.storageVal === str[0] || obj.storageVal === str[1]) {
      return bResult.push(obj.table);
    }
  });
  console.log(bMatched);
  console.log(bResult);

  // (c) Flatten an array
  const a = [["E"], ["F"]];
  const aFlat = _.flatMap(a);
  console.log(aFlat);

  // (d) Flatten an array
  const t = [
    ["E", "F"],
    [["F"], ["G"]],
  ];
  let tFlat = _.flatten(t);
  tFlat = _.flatten(tFlat);
  console.log(tFlat);
  let tFlatUnique = _.uniq(tFlat);
  console.log(tFlatUnique);

  return (
    <div>
      <h2>Symmetric Difference of 2 Arrays</h2>
      <div style={{ backgroundColor: "lightgrey" }}>
        <p>result: </p>
        {result.map((elem, index) => {
          return (
            <div key={index}>
              id: {elem.id}, name: {elem.name}
            </div>
          );
        })}
      </div>
      <div style={{ backgroundColor: "lightgrey" }}>
        <p>res: </p>
        {res.map((elem, index) => {
          return (
            <div key={index}>
              id: {elem.id}, name: {elem.name}
            </div>
          );
        })}
      </div>

      <h2>Get All Tables ['E', 'F'], ['E']</h2>
      <div style={{ backgroundColor: "lightgrey" }}>
        {JSON.stringify(bResult)}
      </div>

      <h2>Flatten an array [['E'], 'F']</h2>
      <div style={{ backgroundColor: "lightgrey" }}>
        {JSON.stringify(aFlat)}
      </div>

      <h2>Flatten an array [ ["E", "F"], [["F"], ["G"]], ]</h2>
      <div style={{ backgroundColor: "lightgrey" }}>
        {JSON.stringify(tFlatUnique)}
      </div>
    </div>
  );
};

export default Lodash;
