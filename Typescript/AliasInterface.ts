//alias

type MerchantName = string;
type MerchantType = string;
type MerchantYear = number;

type Merchant = {
  name: MerchantName;
  type: MerchantType;
  year: MerchantYear;
};

const merchantName: MerchantName = "Chef john";
const merchantType: MerchantType = "Food";
const merchantYear: MerchantYear = 2009;

const merchant: Merchant = {
  name: merchantName,
  type: merchantType,
  year: merchantYear,
};

console.log(merchant);

//Interfaces

interface myData {
  name: string;
  age: number;
  id: number;
}

const data: myData = {
  name: "Ankita",
  age: 23,
  id: 1059,
};

console.log(data);

//extended
interface myData1 {
  name: string;
  age: number;
  id: number;
}

interface myData2 extends myData1 {
  address: string;
}
const dataMy: myData2 = {
  name: "Ankita",
  age: 23,
  id: 1059,
  address: "Rehan, Himachal Pradesh",
};

console.log(dataMy);

//Parial- some fields are required
interface newInterface {
  name: string;
  age?: number;
}

const interFace: Partial<newInterface> = {};
interFace.name = "John Doe";
console.log(interFace);

//Required- all fields are required
interface newReqInterface {
  name: string;
  age?: number;
}

const interFaceReq: Required<newReqInterface> = {
  name: "John Doe",
  age: 30,
};

console.log(interFaceReq);

//omit- remove fields from the type.
interface newOmitInterface {
  name: string;
  age: number;
}

const interFaceOmit: Omit<newOmitInterface, "age"> = {
  name: "John Doe",
};

console.log(interFaceOmit);
