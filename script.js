/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 1 *****************************************/

// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე;

for (let i = 5; i < 101; i++) {
    console.log(i);
}

/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 2 *****************************************/

/* 2. მოცემულია მასივი:Let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]; 
ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე;*/

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i of array1) {
    if (i > 0 && i < 10) {
        console.log(i);
    }
}

/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 3 *****************************************/

/* 3. მოცემულია მასივი Let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი; */

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of array2) {
    if (array2.includes(5)) {
        console.log('aris');
    } else {
        console.log('ar aris');
        break
    }
}

/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 4 *****************************************/

/* 4. მოცემულია მასივი Let array3 = [1, 2, 3, 4, 5];
ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი */

let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array3.length; i++) {
    sum += array3[i];
}

console.log(sum);

/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 5 *****************************************/

/*Let array4 = [1, 2, 3, 7, 6, 9];
გამოთვალეთ საშუალო არითმტიკული(ჯამი გავყოთ ელემნტების რაოდენობაზე) */

let array4 = [1, 2, 3, 7, 6, 9];
let result = 0;

for (let i = 0; i < array4.length; i++) {
    result += array4[i] / array4.length;
}

console.log(result);

/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 6 *****************************************/

/*Let array5 = [1, 2, 3, 7, 6, 9];
გამოიტანეთ ყველა რიცხვი 7 ის გარდა */

let array5 = [1, 2, 3, 7, 6, 9];

for (let i of array5) {
    x = 7;
    if (array5.includes(x)) {
        y = array5.indexOf(x);
        array5.splice(y, 1);
    }
}

console.log(array5);

/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 7 *****************************************/

//მოცემულია ობიექტი:

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};

// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

console.log(user.studentstatus);


/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 8 *****************************************/

// მოცემულია ობიექტი:

let user1 = {
    name: 'giorgi',
    age: 27,
    studentstatus: 'off'
}

/*თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:
Hello;
თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;*/

if (user1.age < 18 && user1.studentstatus == 'active') {
    console.log('Hello');
} else if (user1.name == 'levani') {
    console.log('Hello Levani');
} else if (user1.studentstatus == 'active' || user1.age < 25) {
    console.log('Hello World');
} else {
    console.log("error");
}

/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 9 *****************************************/

//მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] > 0) {
            console.log(array[i][j])
        }
    }
}

/********************************************************************************************/
/********************************** ა მ ო ც ა ნ ა 10 *****************************************/

/*let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
1.ამოიღეთ მარტო ლუწი რიცხვები
2.ამოიღეთ კენტი რიცხვები */

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]

//1.ამოიღეთ მარტო ლუწი რიცხვები

for (let i of array6) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 2.ამოიღეთ კენტი რიცხვები

for (let i of array6) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}