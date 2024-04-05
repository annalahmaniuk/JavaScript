var ExchangeSortLibrary = (function() {
    function exchangeSort(array, order) {
        var comparisons = 0;
        var exchanges = 0;
  
        if (!Array.isArray(array)) {
            console.error("Input is not an array.");
            return;
        }
  
        if (array.length <= 1) {
            console.warn("Array is too short to sort.");
            return array;
        }
  
        // Виконуємо сортування
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = i + 1; j < array.length; j++) {
                comparisons++;
                if (order === "asc" ? array[i] > array[j] : array[i] < array[j]) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    exchanges++;
                }
            }
        }
  
        console.log("Comparisons: " + comparisons);
        console.log("Exchanges: " + exchanges);
        console.log("Sorted array (" + order + "):", array); // Вивід відсортованого масиву
        return array;
    }
  
    return {
        exchangeSort: exchangeSort
    };
  })();
  
  var MinElementSortLibrary = (function() {
    function minElementSort(array, order) {
        var comparisons = 0;
        var exchanges = 0;
  
        if (!Array.isArray(array)) {
            console.error("Input is not an array.");
            return;
        }
  
        if (array.length <= 1) {
            console.warn("Array is too short to sort.");
            return array;
        }
  
        for (var i = 0; i < array.length - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < array.length; j++) {
                comparisons++;
                if (order === "asc" ? array[j] < array[minIndex] : array[j] > array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                var temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
                exchanges++;
            }
        }
  
        console.log("Comparisons: " + comparisons);
        console.log("Exchanges: " + exchanges);
        console.log("Sorted array (" + order + "):", array);
        return array;
    }
  
    return {
        minElementSort: minElementSort
    };
  })();
  
  var InsertionSortLibrary = (function() {
    function insertionSort(array, order) {
        var comparisons = 0;
        var exchanges = 0;
  
        if (!Array.isArray(array)) {
            console.error("Input is not an array.");
            return;
        }
  
        if (array.length <= 1) {
            console.warn("Array is too short to sort.");
            return array;
        }
  
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
  
            while (j >= 0 && (order === "asc" ? array[j] > key : array[j] < key)) {
                comparisons++;
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = key;
            exchanges++;
        }
  
        console.log("Comparisons: " + comparisons);
        console.log("Exchanges: " + exchanges);
        console.log("Sorted array (" + order + "):", array);
        return array;
    }
  
    return {
        insertionSort: insertionSort
    };
  })();
  
  var ShellSortLibrary = (function() {
    function shellSort(array, order) {
        var comparisons = 0;
        var exchanges = 0;
  
        if (!Array.isArray(array)) {
            console.error("Input is not an array.");
            return;
        }
  
        if (array.length <= 1) {
            console.warn("Array is too short to sort.");
            return array;
        }
  
        var n = array.length;
        for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (var i = gap; i < n; i++) {
                var temp = array[i];
                var j = i;
                while (j >= gap && (order === "asc" ? array[j - gap] > temp : array[j - gap] < temp)) {
                    comparisons++;
                    array[j] = array[j - gap];
                    j -= gap;
                    exchanges++;
                }
                array[j] = temp;
            }
        }
  
        console.log("Comparisons: " + comparisons);
        console.log("Exchanges: " + exchanges);
        console.log("Sorted array (" + order + "):", array);
        return array;
    }
  
    return {
        shellSort: shellSort
    };
  })();
  
  var QuickSortLibrary = (function() {
    function quickSort(array, order) {
        var comparisons = 0;
        var exchanges = 0;
  
        if (!Array.isArray(array)) {
            console.error("Input is not an array.");
            return;
        }
  
        if (array.length <= 1) {
            console.warn("Array is too short to sort.");
            return array;
        }
  
        function partition(arr, low, high) {
            var pivot = arr[Math.floor((low + high) / 2)];
            var i = low;
            var j = high;
  
            while (i <= j) {
                while (order === "asc" ? arr[i] < pivot : arr[i] > pivot) {
                    i++;
                    comparisons++;
                }
                while (order === "asc" ? arr[j] > pivot : arr[j] < pivot) {
                    j--;
                    comparisons++;
                }
                if (i <= j) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    i++;
                    j--;
                    exchanges++;
                }
            }
            return i;
        }
  
        function quickSortRecursive(arr, low, high) {
            if (low < high) {
                var pi = partition(arr, low, high);
  
                quickSortRecursive(arr, low, pi - 1);
                quickSortRecursive(arr, pi, high);
            }
        }
  
        quickSortRecursive(array, 0, array.length - 1);
  
        console.log("Comparisons: " + comparisons);
        console.log("Exchanges: " + exchanges);
        console.log("Sorted array (" + order + "):", array);
        return array;
    }
  
    return {
        quickSort: quickSort
    };
  })();