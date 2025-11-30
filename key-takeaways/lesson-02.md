# GIT & JAVA SCRIPT BASIC
## Version control system = Hệ thống quản lý phiên bản
- Là hệ thống kiểm tra các phiên bản khác nhau
- Mục tiêu: 
    - Xem lịch sử thay đổi (thay đổi này diễn ra lúc nào thời gian nào, ai là người thay đổi, thay đổi gì)
    - Quay trở về bản thay đổi trước đó
- Type of version control system: 
    - Local: lưu ở máy cá nhân
    - Centralize: lưu ở một máy chủ tập trung.
    - Distributed: lưu ở nhiều máy khác nhau
- So sánh tổng quan: 

| Tiêu chí | Local | Centralize | Distributed |
|----------|-------|------------|-------------|
|Cộng tác  |Không  |Có          |Có           |
|Offline   |Có     |Không       |Có           |
|Tốc Độ    |Nhanh     |     Phụ thuộc mạng     |  Nhanh           |
|Backup    |  Không tự động     |Có (Trên server)            |Có (mọi clone)             |
|Độ phức tạp  |Thấp       |Trung Bình             |Cao             |

- ***Hiện nay phổ biến nhất vẫn là Distributed Version Control System.***
- ***Git - một distributed version control system! (DVCS)***
## GIT
- Cha đẻ của Git là Linux Torvalds (cha đẻ hệ điều hành Linux)
- Linux Torvalds chỉ viết Git trong vài tuần
- Hiện nay, Git là DVCS phổ biến nhất thế giới
#### So sánh Git với VSC khác:
- Tính năng: Dễ dùng, có nhiều tính năng vượt trội: branching, tốc độ xử lý nhanh
- Chi phí: Free
- Phổ biến: nhiều công ty sử dụng

#### Git và GitHub là hai khái niệm khác nhau

| GIT| GITHUB |
|-----|---------|
| Là một phần mềm | Là một dịch vụ web|
| Cài trên máy của bạn | Host trên website |
| Là một command line tool | Là công cụ có giao diện |
|Là công cụ quản lý phiên bản, đưa file vào Git repository| Là nơi để upload Git repository lên |
| Có các tính năng của Version Control System |Có các tính năng của Version Control System vàmột số tính năng khác (GitHub Actions, GitHubCo-pilot)|

### Git -  status
- Có three status
    - Working Directory: Các file mới hoặc file có thay đổi
    - Staging area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
    - Repository: Các commit (phiên bản)
- Commit sau sẽ nằm ở trên (Cấu trúc stack)
- Tổng kết Git:
    - Khởi tạo repo local: git init => `Làm 1 lần duy nhất`
    - Tạo repo GitHub và liên kết tới repo local: git remote add origin <url> => `Làm 1 lần duy nhất`
    - Thêm file vào staging:  git add . => `Làm mỗi khi có thay đổi`
    - Commit file: git commit -m ”<message>” => `Làm mỗi khi có thay đổi`
    - Push code: git push origin main =>`Làm mỗi khi có thay đổi`

![Hình ảnh](./Image/flowstatus.png)

- Đối với file trong folder: có 2 cách:
    - Git add folder/[tên file].txt
    - Tại folder: gõ câu lệnh: “cd folder” => (Change directory) => đi vào bên trong folder đấy =>git add file5.txt (trong folder)
    - Đi ra bên ngoài: cd ..`

### Git -  Cấu Hình:
- Để commit được, ta cần “nói cho git biết ta là ai”
    - Nếu không nói, sẽ bị lỗi 
- Hai lệnh này để đặt mặc định username và email cho toàn bộ các repo trên máy tính: 
    `git config --global user.name “Tên bạn”`;
    `git config --global user.email “email của bạn`

- Set username, password riêng trong từng repo (đứng tại terminal của repo đó)
    `git config user.name “Alex”`
    `git config user.name “alex@betterbytesvn.com”`
### Git -  1 số câu lệnh:
- Xem trạng thái file: git status
    - File màu xanh: vùng staging
    - File màu đỏ: vùng working directory
- Kiểm tra danh sách commit: git log
### Git -  commit convention:
- Convention = quy tắc
- Convention giúp:
    - Cả team làm việc với nhau theo một quy tắc
    - Code gọn gàng, sạch đẹp hơn
    - Chuyên nghiệp hơn!
- Format: ***<type>: <short_description>***
    - Trong đó:
        - type: loại commit
        - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
        - feat: thêm tính năng mới, test case mới
        - fix: sửa lỗi 1 test trướcđó
        - short_description: mô tảngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không

- Ví dụ
`chore: remove unused file
feat: add code for exercises 2
fix: fix automation for case 1”`
### Git -  Simple workflow:
![Image](./Image/config.png)

## JAVASCRIPT BASIC
### JavaScript?
- Là một ngôn ngữ lập trình.
- Ra đời năm 1995 bởi Brendan Eich.
- Fun fact: “Ăn theo” cái tên hot hit: Java

### Mục đích:
- Giúp cho browser hoạt động được.=> là 1 phần rất quan trọng 
- Bình thường javascrip chạy được do browser engine support
    - Edge: ChaKa
    - Firefox: SpiderMonkey
    - Chrome: V8
- Khi chạy trên máy tính, chúng ta không có browser engine => cần công cụ khác để chạy => node.js
![Image](./Image/flowstatus.png)


### Javascrip - Hello World:
- Cú pháp: Có thể dùng nháy đơn hoặc nháy kép đều được
    `console.log(“nội dung”);
    console.log(‘nội dung’);`
- Ví dụ: Thực hành:
    - Tạo file: “01-hello.js”
    - Thêm vào file nội dung: console.log(“Hello world!”);
    - Chạy lệnh: node 01-hello.js
    - Quan sát kết quả
- **Question**: Nếu file nằm trong thư mục, thì câu lệnh sẽ thế nào?
- **Answer**: Sẽ dùng lệnh node <đường dẫn tới file>

### Javascrip - Comment:
- Comment là cách “vô hiệu hoá” tạm thời một đoạn code
- Dòng code được comment sẽ bị bỏ qua, không được thực thi.
- Có 2 cách comment:
    - Comment 1 dòng: thêm // vào trước đoạn code muốn comment
        `// const name = “Better Bytes Academy”`
    - Có thể thêm vào giữa dòng
        `const name = “Playwright Việt Nam” // Declare name variable`
    - Comment nhiều dòng: thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng
			`/*
            const name = “Phong”;
            console.log(name);*/`

## Biến - Hằng:
### Biến:
- Biến là khái niệm cơ bản nhất trong lập trình
- Từ biến trong “biến thiên”, có nghĩa là thay đổi được
- Khai báo biến:
    `<từ khoá> <tên biến> = <giá trị>`
    - Từ khoá: var/let
- Vd: var centerName = “Better Bytes Academy”;
      let isLovePlaywright = true;
- Sử dụng:
    `console.log(name); // In ra Better Bytes Academy
    console.log(isLovePlaywright); // In ra true`
- **Question**: var và let khác nhau thế nào? Khi nào dùng var, khi nào dùng let?

| Tiêu Chí | Var | Let |
|-------|-------|-------|
| Về cú pháp | var ra đời trước, cú pháp cũ, ít sử dụng | let ra đời sau, là cú pháp hiện đại và an toàn hơn |
| An toàn hơn | var cho phép khai báo lại; var có phạm vi global,| let thì không; let thì phạm vi theo block; Code nằm trong cặp ngoặc nhọn được gọi là “một block code” |
- Ví dụ var:
var x = 1;
var x = 2; // OK
- Ví dụ let:
let y = 1;
let y = 2; // Lỗi: Identifier 'y' has already been declared

**Lưu Ý:**
- Với một đoạn code dài, có thể “quên” rằng đã khai báo trước đó
=> khai báo lại
=> có thể gây nhầm lẫn

### Hằng:
- Hằng là các giá trị không thay đổi được
- Từ hằng trong từ hằng số
- Hằng dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc giá trị chỉ dùng một lần
- `Khai báo hằng: <từ khoá> <tên hằng> = <giá trị>`
    - Từ khoá: const (constant)
    - Ví dụ: const slogan = “Học Kỹ - Hiểu Bản Chất - Mentor Tận Tình”
- **Question**: Khi nào dùng biến, khi nào dùng hằng?
    - Mặc định dùng const - giúp code an toàn hơn, dễ đọc hơn
    - Chỉ dùng let khi chắc chắn cần gán lại giá trị
    - Không dùng var

## Javascrip - Data Type:
- Một biến/hằng luôn có kiểu dữ liệu.
- Kiểu dữ liệu là loại dữ liệu mà biến đó đang mang.
- Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm
    - Kiểu nguyên thuỷ (primitive types)
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
        - BigInt
    - Kiểu tham chiếu (reference types)
        - Object
### Data Type - Number:
- Number: Số nguyên và số thực (không phân biệt int/float)
    - integer (số nguyên). 
    - float là kiểu dữ liệu số thực (floating-point number) dùng để lưu số có phần thập phân
- Ví dụ: 
	- const age = 25; // Số nguyên
    - const price = 19.99; // Số thực
    - const infinity = Infinity; // Vô hạn
    - const notANumber = NaN; // Không phải là số
### Data Type - String:
- String: Chuỗi ký tự
- Ví dụ:
    - name = "John"; // Dùng nháy kép
    - const message = 'Hello'; // Dùng nháy đơn
    - const template = `Age: 10`; // Dùng “backtick” (dấu huyền cạnh số 1)

### Data Type - Boolean:
- Boolean: Giá trị logic
- Ví dụ:
	- const isActive = true; // Giá trị đúng
    - const isComplete = false; // Giá trị sai

- **Question**: Làm sao để biết một biến có kiểu dữ liệu gì?
- **Answer:** Đọc code xem khai báo thế nào!
    - Sử dụng hàm typeof: typeof <variable>
    - Output: number || string || boolean

### Javascrip - Toán tử so sánh:
- Toán tử so sánh dùng để so sánh 2 toán hạng. Kết quả trả về ở dạng boolean
- Chia làm ba nhóm:
    - So sánh bằng: == và ===
    - So sánh không bằng: !
    - So sánh lớn hơn, nhỏ hơn: >, <, <=,  >=
#### So sánh hai bằng == (Loose Equality)
- So sánh giá trị sau khi chuyển đổi kiểu (type coercion)
- Ví dụ: 
    - 5 == "5" // true (chuyển string thành number)
    - 5 == "6" // false (chuyển string thành number)
    - true == 1 // true (true chuyển thành 1)
    - false == 0 // true (false chuyển thành 0)
#### So sánh ba bằng === (Strict Equality) =>(nên dùng)
- So sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu
- Ví dụ:
    - 5 === "5" // false (khác kiểu)
    - true === 1 // false (khác kiểu)
    - false === 0 // false (khác kiểu)
    - 5 === 5 // true (cùng kiểu, cùng giá trị)
#### So sánh không bằng != và !==
- != : So sánh giá trị, KHÔNG so sánh kiểu dữ liệu
- !== — So sánh KHÔNG bằng NGHIÊM NGẶT: So sánh cả giá trị và kiểu dữ liệu., KHÔNG có ép kiểu.
- Ví dụ:
    - 5 != "5" // false (chuyển string thành number)
    - true != 1 // false (true chuyển thành 1)
    - false != 0 // false (false chuyển thành 0)
    - 5 !== "5" // true (khác kiểu)
    - true !== 1 // true (khác kiểu)
    - false !== 0 // true (khác kiểu)
    - 5 !== 5 // false (cùng kiểu, cùng giá trị)
#### So sánh lớn hơn, nhỏ hơn, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng
	- 5 > 10 // false
    - 5 >= 10 // false
    - 5 < 10 // true
    - 5 <= 10 // true

- **Question**: Khi nào thì so sánh hai bằng (==), khi nào thì so sánh ba bằng (===)
- **Answer**: 
    - Luôn dùng so sánh ba bằng!
    - Chỉ sử dụng == khi có chủ đích, muốn so sánh mà không quan tâm tới kiểu dữ liệu.

### Javascrip - Toán tử logic:
- Toán tử logic dùng để kết hợp nhiều điều kiện và trả về boolean
    - && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
    - || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng

![Image](./Image/condition.png)

### Javascrip - Toán tử một ngôi:
- Toán tử một ngôi là toán tử chỉ cần một toán hạng để thực hiện.
- Có Hai loại:
    - Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
        - ++x;
        - --x;
    - Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
        - X++;
        - x--;
- Ví dụ: 
	- let a = 10;
    - b = ++a; // tăng a lên 11 rồi trả về => b có giá trị là 11
    - let c = 10;
    - d = c++; // trả về giá trị 10 cho d rồi mới tăng
    // => d có giá trị là 10

### Javascrip - Toán tử toán học:
- Toán tử toán học tương tự như các phép tính cộng trừ nhân chia đã được học: +, -, *, /
- Ví dụ:
    const firstNumber = 5;
    const secondNumber = 10;
    const result = firstNumber + secondNumber; // result = 15
- Lưu ý: khi chia cho 0, sẽ ra kết quả infinity (vô cực)
### Javascrip - Câu điều kiện:
- Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy
- Nếu điều kiện đúng thì mới chạy
- Trong JavaScript, có các loại câu điều kiện:
    - if
    - if...else
    - if...else if...else
    - switch...case
#### Điều kiện IF
- Cú pháp:
    if (<điều kiện>) {
    // code…
    }
- Ví dụ:
    - let hour = 8;
    - if (hour <= 11) {
    - console.log(“Good morning”);
    }
- Ví dụ: Kết hợp nhiều điều kiện
    - let hour = 8;
    - if (hour >= 6 && hour <= 11) {
    -  console.log(“Good morning”);
    }
- Ví dụ: Kết hợp nhiều điều kiện
    - let hour = 8;
    - if (hour >= 6) {
    - if (hour <= 11) {
    - console.log(“Good morning”);
    }   }


### Javascrip - vòng lặp:
- Vòng lặp dùng để lặp lại 1 đoạn logic.
- Có thể lặp một số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dừng
- Trong JavaScript, có các loại vòng lặp:
    - for (i)
    - for (of)
    - for (each)
    - for (in)
    - while
    - Do...while

#### Vòng lặp For
- Cú pháp vòng lặp for (i)
`for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}`
    - Trong đó:
        - Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu.
        - Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
        - Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.
    - Ví dụ: 
        `for (let i = 0;i < 5; i++) {
        console.log("Xin chào!")
           }`
    - Giải thích:
        - Vòng 1: (i = 0)
            - Khởi tạo: i = 0
            - Kiểm tra: i < 5 => đúng
            => chạy
            - Chạy logic: console.log...
            - Cập nhật: i++ => i = 1
        - Vòng 2: (i = 1)
            - Kiểm tra: i < 5 => đúng
            => chạy
            - Chạy logic: console.log...
            - Cập nhật: i++ => i = 2
        - Vòng 3: (i = 2)
            - Kiểm tra: i < 5 => đúng
            => chạy
            - Chạy logic: console.log...
            - Cập nhật: i++ => i = 3
        - Vòng 4: (i = 3)
            - Kiểm tra: i < 5 => đúng
            => chạy
            - Chạy logic: console.log...
            - Cập nhật: i++ => i = 4
        - Vòng 5: (i = 4)
            - Kiểm tra: i < 5 => đúng
                => chạy
            - Chạy logic: console.log...
            - Cập nhật: i++ => i = 5

***NOTE: FORMAT CODE: 
Mac: Option + Shift + F; 
Window: Alt + Shift + F***























