// Problem Statement :
// An e-commerce site tracks the purchases made each day. The product that is purchased
// the most one day is the featured product for the following day. If there is a tie for the product
// purchased most frequently, those product names are ordered alphabetically ascending and
// the last name in the list is chosen.[Amazon]
// ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat','pinkHat', 'blackShirt', 'yellowShirt',
// 'greenPants', 'greenPants', 'greenPants']
// 'yellowShirt' - 2
// 'redHat' - 2
// 'blackShirt' - 2
// 'bluePants' - 1
// 'greenPants' - 3
// 'pinkHat' - 1
// Output - greenPants

// Time Complexity: O(N)
// Space Complexity: O(N)
function featuredProduct(arr) {

    // Initialize maxFreq and hashMap.
    let maxFreq = Number.MIN_VALUE;
    const hashMap = new Map();

    // iterate through arr and store in hashMap =>  T.C. O(N) , S.C. O(N)
    for (let ele of arr) {
        if (hashMap.has(ele)) {
            const freq = hashMap.get(ele);
            hashMap.set(ele, freq + 1);
        } else {
            hashMap.set(ele, 1);
        }
    }

    for (let [key, val] of hashMap) {
        if (val > maxFreq) {
            maxFreq = val;
        }
    }

    const result = [];
    for (let [key, val] of hashMap) {
        if (val === maxFreq) {
            result.push(key)
        }
    }
    result.sort();
    return result[0];
}

const products = ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat', 'pinkHat', 'blackShirt', 'yellowShirt',
    'greenPants', 'greenPants', 'greenPants'];
console.log(featuredProduct(products));