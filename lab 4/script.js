// Приклад використання:
var array = [];
for (var i = 0; i < 100; i++) {
    if (i % 10 === 0) {
        array.push(undefined); // Кожен десятий елемент буде undefined
    } else {
        array.push(i); // Інші елементи будуть цілими числами від 1 до 99
    }
}


console.log("Before sorting:", array);
console.log("Метод обміну");
console.log("Sorted array (ascending):", ExchangeSortLibrary.exchangeSort(array.slice(), "asc"));
console.log("Sorted array (descending):", ExchangeSortLibrary.exchangeSort(array.slice(), "desc"));
console.log(" метод Мінімальних елементів");
console.log("Sorted array (ascending):", MinElementSortLibrary.minElementSort(array.slice(), "asc"));
console.log("Sorted array (descending):", MinElementSortLibrary.minElementSort(array.slice(), "desc"));

console.log(" метод вставок");
console.log("Sorted array (ascending):", InsertionSortLibrary.insertionSort(array.slice(), "asc"));
console.log("Sorted array (descending):", InsertionSortLibrary.insertionSort(array.slice(), "desc"));

console.log(" метод Шелла");
console.log("Sorted array (ascending):", ShellSortLibrary.shellSort(array.slice(), "asc"));
console.log("Sorted array (descending):", ShellSortLibrary.shellSort(array.slice(), "desc"));

console.log("Sorted array (ascending):", QuickSortLibrary.quickSort(array.slice(), "asc"));
console.log("Sorted array (descending):", QuickSortLibrary.quickSort(array.slice(), "desc"));
