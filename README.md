[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15218486&assignment_repo_type=AssignmentRepo)
# Slice

- Jika pass semua test, score test 85

### RESTRICTION

- Hanya boleh menggunakan built-in function push()

### HINTS

- Nama function haruslah `slice` dan **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

### Wajib menggunakan `While loop`

---

## Objectives

- Mampu menggunakan built in function pada Array
- Mampu melakukan manipulasi pada sebuah Array
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function

## Directions

Diberikan sebuah function `slice` yang dapat menerima 3 paramter yaitu `data` (mandatory) dengan tipe Array, `start` (optional) dengan tipe integer dan `end` (optional) dengan tipe integer.

Buatlah algoritma di dalam function `slice` sehingga bisa menghasilkan output seperti contoh berikut:

```js
function slice(data, start, end) {
  // your code here
}

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 20)); //[]
console.log(slice()); //Invalid data
```
