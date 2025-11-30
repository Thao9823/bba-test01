# Git & Javascript basic
## Git
### Git: undo
#### Commit message
- <span style="color: red;">Question</span>: Giả sử viết message bị sai => Cách đổi lại message?
- <span style= "color: green;">Answer</span>: Sử dụng câu lệnh:  
>git commit --amend -m”message”

#### File staging → working directory
- <span style="color: red;">Question</span>: Giả sử add nhầm, add dư file, có 1 file chưa chắc chắn=> Cách bỏ file từ vùng staging area => working directory
- <span style= "color: green;">Answer</span>: Khi chúng ta muốn bỏ 1 file cụ thể, sử dụng câu lệnh:  
>git restore --staged <file_name>
- <span style= "color: green;">Answer</span>: Khi chúng ta muốn bỏ all file, sử dụng câu lệnh:  
>git restore --staged .


#### File repository → working directory (un-commit)
- Khi commit vào vùng repository, sau khi commit xong sẽ tạo 1 phiên bản ở vùng repository.
- <span style="color: red;">Question</span>: Cách để đưa phiên bản từ vùng repository về working directory?
- <span style= "color: green;">Answer</span>: Sử dụng câu lệnh:  
>`git reset HEAD~n`
> - trong đó: n=> số lượng commit muốn reset
- Ví dụ: 
    - git reset HEAD~1 =>reset 1 commit
    - git reset HEAD~3 =>reset 3 commit
- **Lưu Ý:**
    - Commit đầu tiên không thể bị reset.
    - Nếu muốn reset → xoá thư mục .git đi rồi init lại

### Git - Branch
#### Lấy code từ server về: 
- Sử dụng câu lệnh: `git pull origin main`
#### Branch: 
- Git sử dụng nhánh (branch) để tạo ra các “phiên bản” riêng của code, tránh ảnh hưởng tới “bản gốc”
- Khi khởi tạo repo (git init), nhánh mặc định sẽ được tạo ra (gọi là nhánh main hoặc master dựa vào config)
- Ở bài 1, chạy lệnh:
    `git config --global init.defaultBranch main`
    - cấu hình: khi khởi tạo, đặt nhánh mặc định là nhánh main

- Một số câu lệnh với nhánh
    - <span style= "color: yellow;">1. Xem danh sách nhánh</span>:
        >`git branch`
        - **Lưu ý:**  Cần có ít nhất 1 commit mới hiện danh sách nhánh
    - <span style= "color: yellow;">2. Tạo nhánh mới</span>: 
        >`git branch`
        - **Lưu ý:**  Nhánh mới “copy” giống hệt nhánh hiện tại
    - <span style= "color: yellow;">3. Chuyển sang nhánh mới</span>:
        >`git checkout <tên_branch>`
    - <span style= "color: yellow;">4. Vừa tạo, vừa chuyển sang nhánh mới</span>:
        >`git checkout -b <tên>`

    - <span style= "color: yellow;">5. Xoá branch:</span>:
        >`git branch -D <tên nhánh>`
        - **Lưu ý:**  đứng ở nhánh khác trước khi xoá.

- **LƯU Ý:**
    - Luôn pull code về trước khi tạo nhánh mới

### Git - ignore file
<span style= "color: red;">Tại sao cần .gitignore</span>:
- Trong dự án thường có nhiều file không cần thiết phải đưa vào Git repository, Có những folder không muốn push lên: ví dụ mật khẩu
    - File tạm thời của hệ điều hành (.DS_Store, Thumbs.db)
    - Thư mục dependencies (node_modules/, vendor/) ●
    - File build và artifacts (dist/, build/, *.exe)
    - File cấu hình cá nhân (IDEsettings, environment variables)
    - File nhạy cảm (API keys,passwords, certificates)
    - File log và database local
#### Định Nghĩa: 
- File .gitignore là một file cấu hình quan trọng trong Git, giúp bạn chỉ định những file và thư mục nào sẽ không được theo dõi (untracked) bởi Git.
- Lưu ý: có dấu chấm "." ở đầu tên file

#### Cú pháp file .gitignore
- #Comment - dòng bắt đầu bằng # là
ghi chú
- #Ignore file cụ thể
`secret.txt`
- #Ignore tất cả file có extension .log
`*.log`
- #Ignore thư mục
`node_modules/`
`build/`
- #Ignore file trong mọi thư mục con
`**/*.tmp`
- #Ngoại lệ - KHÔNG ignore file này
(dùng !)
`!important.log`
- #Ignore file chỉ ở thư mục gốc
`/TODO`
- #Ignore tất cả file .txt trong thư mục
`doc/`
`doc/**/*.txt`
## Javascript
### Convention = quy tắc 
#### Ưu điểm:
- Convention giúp:
    - Code theo format chung, dễ nhìn
    - Người khác trong team dễ đọc code

#### Type:
- Có nhiều loại convention:
    - Đặt tên file
    - Đặt tên biến
    - Đặt tên commit

- Một số convention phổ biến:
    - snake_case: trông giống con rắn; tất cả các chữ viết thường, cách nhau bởi dấu gạch dưới
    - kebab-case: trông giống que xiên Hàn Quốc; tất cả các chữ viết thường, cách nhau bởi dấu gạch ngang
    - camelCase: trông giống con lạc đà; chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên
    - PascalCase: tên của nhà toán học Pascal; tất cả các chữ cái đầu viết hoa

- Sử dụng convention trong lớp học:
    - snake_case: tạm thời
không dùng
    - kebab-case: đặt tên file và
folder
    - camelCase: đặt tên biến,
hàm
    - PascalCase: đặt tên class

###  Console log
#### Định nghĩa:
- Console log là một công cụ quan trọng giúp debug và theo dõi code.
#### Format:
- console.log with ‘ and “
- Formatted console.log
- Ví dụ:
    - console.log(‘Toi la Nga’);
    - console.log(“Toi la Phong”);
    - console.log(`${variable_name}`)
    - let name = “Nga”;
    - console.log(`Toi la ${name}`);
    - console.log(“Toi ten la” + name + “”)

###  Object:
#### Định nghĩa:
- Object là một trong những kiểu dữ liệu quan trọng nhất trong JavaScript, dùng để lưu trữ dữ liệu dạng key-value.
- Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số
#### Format:
- Cú pháp: 
>const/let <variable_name> = {
key1: value1,
key2: value2,...}
- Trong đó:
    - `<key>`: giống quy tắc đặt tênbiến
    - `<value>`: có kiểu giống biến, hoặc là 1 object khác.
- Sử dụng:
    - console.log("name = " + user.name);
    - console.log("manufacturer name = " + product.manufacturer.name);
    - console.log(“price = “, product[“price”]);

### Logical operator
- && : cả 2 vế của mệnh đề đều đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của mệnh đề

### Array: Mảng
- Tạo mảng
    - Khai báo
    - Sử dụng
- Truy xuất mảng
    - Độ dài mảng: length
    - Lấy phần tử theo index: [0], [1], [2]

### Function
- Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
- Khai báo
>function <nameFunction>() {
// code
}
- Parameter
- Return value