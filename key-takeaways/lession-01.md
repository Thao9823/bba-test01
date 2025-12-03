# Playwright
## Framework là gì?
- Framework là bộ khung làm sẵn gồm các thư viện, quy tắc, cấu trúc… giúp lập trình viên xây dựng ứng dụng nhanh, dễ và đúng chuẩn hơn.
- Framework = bộ khung + công cụ + quy tắc để bạn xây phần mềm lên trên đó.
## Playwright
### Định nghĩa:
- Playwright là một framework tự động hóa kiểm thử web (web test automation framework) 
- Tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên.
### Ưu điểm của Playwright
- Cross browser: hỗ trợ trên nhiều trình duyệt: firefox, chrome, edge, safari (lên tới 143 trình duyệt)
- Cross platform: code 1 lần chạy trên nhiều hệ điều hành phổ biến: macOS, linux, Window
- Tính năng xịn xò: auto waiting, auto-retry assertion giúp giảm flaky test (lúc pass lúc fail)
- Report đầy đủ thông tin: pass/fail theo từng loại trình duyệt, chi tiết ở từng thời điểm: gọi api nào, responsive trả về gì ứng với dòng code gì
- Trace hiển thị chi tiết: thời gian chạy, lỗi ở đâu,dòng nào
- Code gan: thao tác để sinh ra code
### Tại sao chọn học playwring typescript
- Dễ cài đặt
- Cú pháp đơn giản, dễ học
- Framework trending, nhiều cơ hội việc làm
## Phân biệt giữa typescript và javascript
### JavaScript (JS)
- Là ngôn ngữ lập trình chạy trên trình duyệt và server (Node.js).
- Không có kiểm tra kiểu dữ liệu (dynamic typing).
### TypeScript (TS)
- Là phiên bản mở rộng của JavaScript do Microsoft phát triển.
- Thêm kiểu dữ liệu (type) → giúp code an toàn hơn.
## Giải thích 1 số ngôn ngữ viết tắt
### NVM
- nvm: node version manager = quản lý các phiên bản nodejs
- Nodejs: công cụ để chạy code
- 2 option: cài trực tiếp nodejs vào máy hoặc cài thông qua nvm
    - Chọn cài thông qua nvm vì dễ chuyển đổi nhiều phiên bản nodejs
## Cài đặt Playwright
- Chạy test đầu tiên:
    1. Tạo thư mục
    2. Chạy lệnh npm init playwright@latest
    3. Đi tới file: example.spec.ts
    4. Click run test
## GIT
- Quản lý source code
### Cài đặt cấu hình Git
1. config username
    >git config --global user.name "name"
2. config email
    >git config --global user.email "email"
3. Config branch default:
    > git config --global init.defaultBranch main
## GITHUB
- Chia sẻ code, làm việc nhóm
### SSH key là gì?
- SSH key:
    - Cặp khoá (2 cái)
        - id_rsa và id_rsa.pub
        - >id_rsa: cần giữ bí mật
        - >id_rsa.pub: có thể gửi cho người khác
    - Giúp xác thực đăng nhập trở nên dễ dàng hơn
    - Lưu ở ~/.ssh 
        -  “~” đại diện cho thư mục home
### Kết nối với GitHub
#### Tạo SSH key
- Lưu ý: nếu file đã tồn tại, cần kiểm tra kỹ trước khi ghi đè
    1.  Câu lệnh: 
    > ssh-keygen -trsa -b 4096 -C "your_email@example.com"
    2. Lấy nội dung ssh key: cat ~/.ssh/id_rsa.pub
    3. Truy cập: https://github.com/settings/ssh/new để thêm ssh key
#### Đưa code lên GitHub
    git push origin main
#### Tạo repo
    1. Truy cập: https://github.com/new
    2. Điền tên repository
    3. Chọn “Public”
#### Khởi tạo
    1. Khởi tạo repo local: 
        git init
    2. Liên kết với repository vừa tạo với Git
        git remote add origin << ssh_link>>
    3. Thêm code:
        git add .
    4. Thêm commit:
        git commit -m "init project"
#### Đưa code lên github
    git push origin main
#### Invite collaborators:
- Invite để mentor chấm bài
    1. Truy cập repo setting: https://github.com/<username>/<repo_name>/settings/access
    2. Add collaborator





