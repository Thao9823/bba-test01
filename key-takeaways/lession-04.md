# JAVASCRIPT
## Phạm vi của biến (Hay còn gọi là scope)
- Phạm vi (scope) xác định nơi mà biến có thể truy cập
- JavaScript có ba loại phạm vi:
    - Toàn cục (global)
    - Function scope (hàm)
    - Block scope (khối)

### Toàn cục (global)
- Có 2 cách để khởi tạo được biến
    -  var
    - let
- Ví dụ
 > var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục";
function testFunction() {
console.log(globalVar); // Truy cập được
console.log(globalLet); // Truy cập được
}

- Giải thích: 2 biến trên khởi tạo ở bên ngoài function, khi dùng nó trong function => nó đều truy cập được=> 2 cái biến trong phạm vi global toàn cụ => không nằm trong scope nào cả
### Function scope (hàm)
- Nằm trong phạm vi là function
- Ví dụ:
> function myFunction() {
    var functionScoped = "Chỉ có thể truy cập trong hàm này";
    let alsoFunctionScoped = "Tương tự";
    console.log(functionScoped); // OK
    }
    console.log(functionScoped); // Error: functionScoped is not defined
- Giải thích: Khởi tạo 2 biến trong function , 2 biến này chỉ truy cập trong funct ion này. Còn ở bên ngoài thì sẽ báo lỗi
### Block scope (khối)
- "var không có block scope";
- "let có block scope";
- "const cũng có block scope";
- Ví dụ:
    - > if (true) {
    var varVariable = "var không có block scope";
    let letVariable = "let có block scope";
    const constVariable = "const cũng có block scope";
    }
    - console.log(varVariable); // OK - var không bị giới hạn bởi block
    - console.log(letVariable); // Error: letVariable is not defined
    - console.log(constVariable); // Error: constVariable is not defined
- Giải thích: Vì var không có bị giới hạn bởi block nên vẫn truy cập dc, let và const bị giới hạn
### Hoisting
- JavaScript di chuyển các khai báo biến lên đầu phạm vi của chúng trước khi thực thi code.
- Ví dụ 1:
    - `console.log(x); // undefined (không phải error)var x = 5;`
    - // Tương đương với:
    `var x;
    console.log(x); 
    // undefined
    x = 5;`
    - // Với let và const:
    `console.log(y); // Error: Cannot access 'y' before initialization
    let y = 5;`
    
## JavaScript - Câu điều kiện nâng cao 
### Break
- Định nghĩa: Khi gặp break => nó sẽ thoát ra khỏi vòng lặp (không chạy tiếp cái nào nữa )
- Ví dụ 1:
    - // Thoát khi tìm thấy giá trị
    - `for (let i = 0; i < 10; i++) {
    if (i === 5) {
    break; }`
    - // Thoát vòng lặp khi i = 5
    `console.log(i);
    }`
    - // Output: 0, 1, 2, 3, 4`
- Ví dụ 2:
    - // Ví dụ thực tế: Tìm phần tử đầu tiên
    - `const numbers = [1, 3, 8, 7, 9, 11];
    let firstEven = null;
    for (let num of numbers) {
    if (num % 2 === 0) {
    firstEven = num;
    break; }}`
    - // Dừng ngay khi tìm thấy
### Continue
- Định nghĩa: Bỏ qua vòng lặp và chạy đến vòng lặp tiếp theo => có nghĩa là bỏ qua đoạn code bên dưới => chạy tiếp đoạn vòng lặp tiếp theo luôn
- Ví dụ 1:
    - // Bỏ qua số chẵn
    - `for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
    continue; `
    - // Bỏ qua số chẵn
    - `}
    console.log(i);
    }`
    - // Output: 1, 3, 5, 7, 9

- Ví dụ 2:
    - // Ví dụ thực tế: Lọc dữ liệu
    - `const scores = [85, 92, 78, 95, 60, 88];
    console.log("Điểm >= 80:");
    for (let score of scores) {
    if (score < 80) {
    continue; // Bỏ qua điểm < 80
    }
    console.log(score);
    }`
    - // Output: 85, 92, 95, 88
### Câu điều kiện if...else:
- Thực thi code khác nhau cho trường hợp true và false:
- Ví dụ:
    `let score = 75;
    if (score >= 60) {
    console.log("Bạn đã qua môn");
    } else {
    console.log("Bạn cần học lại");
    }`

### Câu điều kiện if...else...if: 
- Kiểm tra nhiều điều kiện theo thứ tự
- Ví dụ:
    >let score = 85;
    if (score >= 90) {
    console.log("Xuất sắc");
    } else if (score >= 80) {
    console.log("Giỏi");
    } else if (score >= 70) {
    console.log("Khá");
    } else if (score >= 60) {
    console.log("Trung bình");
    } else {
    console.log("Yếu");
    }

### Ternary operator (toán tử điều kiện):
- Cách viết ngắn gọn cho if...else đơn giản
- Ví dụ:
    > let age = 20;
    let status = (age >= 18) ? "Người lớn" : "Trẻ em";
    console.log(status); // "Người lớn"
    // Có thể lồng nhau (nên cẩn thận với độ phức tạp)
    let score = 75;
    let grade = score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" :
    score >= 60 ? "D" : "F";

## JavaScript - Vòng lặp nâng cao
### for...in Loop
- Dùng để duyệt qua các thuộc tính (properties) có thể đếm được của một object, bao gồm cả thuộc tính kế thừa.

    #### Với object
    - Ví dụ
    >const person = {
    name: "John",
    age: 30,
    city: "Hanoi"
    };
    for (let key in person) {
    console.log(key + ": " + person[key]);
    }
    - // Output:
   > // name: John
    // age: 30
    // city: Hanoi
     #### Với Array <span style= "color: red;">(không khuyến khích)</span>:
    - Ví dụ: 
    > const colors = ["red", "green", "blue"];
    colors.customProperty = "rainbow";
    for (let index in colors) {
    console.log(index + ": " + colors[index]);
    }
    - // Output:
    >// 0: red
    // 1: green
    // 2: blue
    // customProperty: rainbow
### forEach Method
- Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue.
- Ví dụ:
    // Với Array <span style= "color: red;">(không khuyến khích)</span>:
    > const colors = ["red", "green", "blue"];
    colors.customProperty = "rainbow";
    for (let index in colors) {
    console.log(index + ": " + colors[index]);
    }
    - // Output:
    >// 0: red
    // 1: green
    // 2: blue
    // customProperty: rainbow

## JavaScript - Utils function
### Định nghĩa:
- Utils = tiện ích
- Utils function là các hàm có sẵn của JavaScript, giúp việc code trở nên nhanh hơn.
- Trong bài này, ta học 2 loại utils function thường sử dụng là:
    - String utils: các hàm xử lý chuỗi
    - Array utils: các hàm xử lý mảng
### Utils function - String
- Một số string utils thường dùng:
    - trim(): cắt khoảng trắng hai đầu
        - trimLeft(): cắt bên trái
        - trimRight(): cắt bên phải
    - toLowerCase(): chuyển chuỗi thành chữ thường
    - toUpperCase(): chuyển chuỗi thành chữ hoa
    - includes(<substr>): kiểm tra chuỗi bao gồm chuỗi con <substr> không
    - replace(<chuỗi cần thay>, <chuỗi mới>)
    - split(<tách_bởi_gì>)
    - substring(<điểm_bắt_đầu>, <điểm_kết_thúc>): lấy 1 chuỗi con từ điểm bắt đầu tới điểm kết thúc
    - indexOf(<chuỗi kí tự>): tìm vị trí của chuỗi con
### Utils function - Array
- Một số array utils thường dùng:
    - map
    - filter
    - find
    - reduce
    - some
    - every
    - sort
    - push
    - pop
    - shift
    - unshift
#### map
- map: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
- Ví dụ 1:
   > const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // [2, 4, 6, 8, 10]
    console.log(numbers); // [1, 2, 3, 4, 5] - mảng gốc không thay đổi

- Ví dụ 2: 
    > const students = ['An', 'Bình', 'Cường'];
    const studentList = students.map((name, index) =>
    ({
    id: index + 1,
    name: name,
    code: `SV00${index + 1}`
    }));
    console.log(studentList);
    - [Output
        - // { id: 1, name: 'An', code: 'SV001' },
        - // { id: 2, name: 'Bình', code: 'SV002' },
        - // { id: 3, name: 'Cường', code: 'SV003' }
        // ]
#### filter
- filter: Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện trong hàm callback. Trả về mảng đã được lọc
- Ví dụ 1: 
    >const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.filter(num => num % 2
    === 0);

    >console.log(evenNumbers); // [2, 4, 6, 8, 10]
    console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] - mảng gốc không đổi

- Ví dụ:
    >const products = [
    { name: 'iPhone 15', price: 28000000, category: 'phone', inStock: true },
    { name: 'Samsung S24', price: 22000000, category: 'phone', inStock: false },
    { name: 'iPad Pro', price: 35000000, category: 'tablet', inStock: true },
    { name: 'MacBook Air', price: 32000000, category: 'laptop', inStock: true },
    { name: 'AirPods', price: 4000000, category: 'accessory', inStock: true }
    ];
    - // Lọc sản phẩm còn hàng
    const availableProducts = products.filter(product => product.inStock);
    console.log(availableProducts); // 4 sản phẩm còn hàng
    - // Lọc sản phẩm giá dưới 30 triệu
    const affordableProducts = products.filter(product => product.price < 30000000);
    - // Lọc nhiều điều kiện: điện thoại còn hàng
    const availablePhones = products.filter(product =>
    product.category === 'phone' && product.inStock
    );
    console.log(availablePhones); // [iPhone 15]
#### find
- find: Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Trả về undefined nếu không tìm thấy
- Ví dụ 1:
    >const numbers = [1, 5, 3, 8, 2, 10, 7];
    -  // Tìm số chẵn đầu tiên
    const firstEven = numbers.find(num => num % 2 === 0);
    console.log(firstEven); // 8 (không phải 2 hay 10)
    - // Tìm số lớn hơn 6
    const greaterThanSix = numbers.find(num => num > 6);
    console.log(greaterThanSix); // 8 (dừng ngay khi tìm thấy)
    - // Không tìm thấy
    const negative = numbers.find(num => num < 0);
    console.log(negative); // undefined
- Ví dụ 2: 
    >const users = [
        { id: 101, name: 'An', role: 'admin', active: true },
    { id: 102, name: 'Bình', role: 'user', active: false },
    { id: 103, name: 'Cường', role: 'user', active: true },
    { id: 104, name: 'Dũng', role: 'admin', active: true }
    ];
    - // Tìm user theo ID
    const userId = 103;
    const user = users.find(user => user.id === userId);
    console.log(user); // { id: 103, name: 'Cường', role: 'user', active: true }
    -  // Tìm admin đầu tiên
    const firstAdmin = users.find(u => u.role === 'admin');
    console.log(firstAdmin); // { id: 101, name: 'An', ... }
    - // Tìm user không active
    const inactiveUser = users.find(u => !u.active);
    console.log(inactiveUser); // { id: 102, name: 'Bình', ... }
#### reduce
- reduce: Duyệt qua mảng và tích lũy các phần tử thành một giá trị duy nhất (số, chuỗi, object...) dựa trên hàm callback
- Ví dụ 1:
    > const numbers = [1, 2, 3, 4, 5];
    - // Cách hoạt động từng bước
    const sum = numbers.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current:
    ${current}`);
    return accumulator + current;
    }, 0;)
    - // accumulator: 0, current: 1 -> return 1
    - // accumulator: 1, current: 2 -> return 3
    - // accumulator: 3, current: 3 -> return 6
    - // accumulator: 6, current: 4 -> return 10
    - // accumulator: 10, current: 5 -> return 15
    - console.log(sum); // 15

#### some
- some: Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true/false.
- Ví dụ 1:
    > const numbers = [1, 3, 5, 7, 8, 9];
    - // Kiểm tra có số chẵn không?
    >const hasEven = numbers.some(num => num % 2 === 0);
    console.log(hasEven); // true (vì có số 8)
    - // Kiểm tra có số > 10 không?
    >const hasGreaterThan10 = numbers.some(num => num > 10);
    console.log(hasGreaterThan10); // false
    - // Dừng ngay khi tìm thấy
    >const hasEvenWithLog = numbers.some(num => {
    console.log(`Checking: ${num}`);
    return num % 2 === 0;
    });
    - Output
        - // Checking: 1
        - // Checking: 3
        - // Checking: 5
        - // Checking: 7
        - // Checking: 8
        - // => Dừng, không kiểm tra 9
- Ví dụ 2:
    >const user = {
    name: 'Nguyễn Văn A',
    roles: ['user', 'editor']
    };
    const adminRoles = ['admin', 'superadmin'];
    const editorRoles = ['editor', 'admin'];
    - // Kiểm tra user có quyền editor không?
    > const canEdit = user.roles.some(role => editorRoles.includes(role));
    console.log(canEdit); // true (có role 'editor')
    - // Kiểm tra user có phải admin không?
    >const isAdmin = user.roles.some(role => adminRoles.includes(role));
    console.log(isAdmin); // false
    - // Hàm kiểm tra quyền tổng quát
    >function hasPermission(userRoles, requiredRoles) {
    return userRoles.some(role => requiredRoles.includes(role));
    }
    console.log(hasPermission(user.roles, ['viewer', 'editor'])); // true
#### every
- every: Kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều kiện hay không. Trả về true/false.
- Ví dụ 1:
    >const numbers = [2, 4, 6, 8, 10];
    - // Kiểm tra tất cả là số chẵn?
    >const allEven = numbers.every(num => num % 2 === 0);
    console.log(allEven); // true
    - // Kiểm tra tất cả > 0?
    >const allPositive = numbers.every(num => num > 0);
    console.log(allPositive); // true
    - // Kiểm tra tất cả > 5?
    >const allGreaterThan5 = numbers.every(num => num > 5);
    console.log(allGreaterThan5); // false (2 và 4 không > 5)
    - // Dừng ngay khi gặp false
    >const checkWithLog = numbers.every(num => {
    console.log(`Checking: ${num}`);
    return num < 5;
    });
    - output
        - // Checking: 2
        - // Checking: 4
        - // Checking: 6
        - // => Dừng tại 6, không kiểm tra 8, 10
    >console.log(checkWithLog); // false

- Ví dụ 2:
    >const orderItems = [
    { product: 'iPhone 15', quantity: 1, inStock: 5, price: 25000000 },
    { product: 'AirPods', quantity: 2, inStock: 10, price: 4000000 },
    { product: 'Case', quantity: 1, inStock: 20, price: 500000 }
    ];
    - // Tất cả sản phẩm còn đủ hàng?
    >const allAvailable = orderItems.every(item => item.inStock >= item.quantity);
    console.log(allAvailable); // true
    - // Tất cả sản phẩm có giá hợp lệ?
    >const allValidPrices = orderItems.every(item => item.price > 0);
    console.log(allValidPrices); // true
    - // Kiểm tra giới hạn số lượng (max 10 mỗi sản phẩm)
    >const withinQuantityLimit = orderItems.every(item => item.quantity <= 10);
    console.log(withinQuantityLimit); // true
    - // Tổng hợp validation
    >function canPlaceOrder(items) {
    return items.every(item =>
    item.inStock >= item.quantity &&
    item.price > 0 &&
    item.quantity > 0 &&
    item.quantity <= 10
#### sort
- sort: Sắp xếp các phần tử trong mảng theo thứ tự (mặc định là alphabet/tăng dần). Thay đổi mảng gốc.
- Ví dụ 1:
    - // Sort chuỗi
    >const fruits = ['banana', 'apple', 'orange', 'grape']; fruits.sort();
    console.log(fruits); 
    - Output ['apple', 'banana', 'grape', 'orange']
- Ví dụ 2:
    - // <span style= "color: red;">BUG phổ biến: sort số KHÔNG đúng theo mặc định!</span>
    >const numbers = [10, 5, 40, 25, 1000, 1];
    numbers.sort();
    console.log(numbers); // [1, 10, 1000, 25, 40, 5]
    - <span style= "color: red;">SAI!</span>
        - // Vì sort mặc định chuyển thành string: "10" < "5"

    - <span style= "color: green;">CÁCH ĐÚNG: dùng compare function</span>// 
    >const numbers2 = [10, 5, 40, 25, 1000, 1];
    numbers2.sort((a, b) => a - b); // tăng dần
    console.log(numbers2); // [1, 5, 10, 25, 40,
    1000] 
        - <span style= "color: green;">ĐÚNG!</span>// 
- Ví dụ 3:
        - // Giảm dần
    > const numbers3 = [10, 5, 40, 25, 1000, 1];
    numbers3.sort((a, b) => b - a);
    console.log(numbers3); 
    - output// [1000, 40, 25, 10, 5, 1]

#### Compare function trả về:
- // - Số âm: a đứng trước b
- // - Số 0: giữ nguyên thứ tự
- // - Số dương: b đứng trước a
- Ví dụ:
    `const arr = [3, 1, 2];
    arr.sort((a, b) => {
    console.log(`Compare ${a} với ${b}`);
    if (a < b) return -1; // a trước b
    if (a > b) return 1; // b trước a
    return 0; // bằng nhau
    });
    // Compare 3 với 1
    // Compare 3 với 2
    // Compare 1 với 2
    console.log(arr); // [1, 2, 3]`
    - // Viết gọn với phép trừ (cho số)
`arr.sort((a, b) => a - b); // tương đương code trên`
#### push
- push: Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng gốc và trả về độ dài mới.
- Ví dụ:
    >const fruits = ['apple', 'banana'];
    const newLength = fruits.push('orange');
     - push 1 phần tử: 
    >console.log(fruits); // ['apple', 'banana', 'orange']
    console.log(newLength); // 3 (độ dài mới)

    - // Push nhiều phần tử cùng lúc
    >fruits.push('grape', 'mango');
    console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'mango']

#### pop
- pop: Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc và làm giảm độ dài.
- Ví dụ:
    >const fruits = ['apple', 'banana', 'orange', 'grape'];
    const lastFruit = fruits.pop();

    >console.log(lastFruit); // 'grape' - phần tử bị xóa
    console.log(fruits); // ['apple', 'banana', 'orange']
    - mảng đã thay đổi

    - // Pop từ mảng rỗng
    >const empty = [];
    const result = empty.pop();
    console.log(result); // undefined
    console.log(empty); // []
#### shift
- shift: Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làm giảm độ dài
- Ví dụ:
    >const fruits = ['apple', 'banana', 'orange', 'grape'];
    const firstFruit = fruits.shift();

    > console.log(firstFruit); // 'apple' - phần tử bị xóa
    onsole.log(fruits); // ['banana', 'orange', 'grape'] - mảng đã thay đổi

    - // Shift từ mảng rỗng
    >const empty = [];
    const result = empty.shift();
    console.log(result); // undefined
    console.log(empty); // []

#### unshift
- unshift: Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi mảng gốc và trả về độ dài mới của mảng.
- Ví dụ:
    > const fruits = ['banana', 'orange'];const newLength = fruits.unshift('apple');

    > console.log(fruits); // ['apple', 'banana', 'orange']
    console.log(newLength); // 3 (độ dài mới)

    - // Unshift nhiều phần tử cùng lúc
    >fruits.unshift('grape', 'mango');
    console.log(fruits); // ['grape', 'mango', 'apple', 'banana', 'orange']