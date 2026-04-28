# Fitness Core - Cẩm Nang Tập Luyện (Core, Legs & Stamina)

Được xây dựng trên nền tảng React và Vite, **Fitness Core** là một ứng dụng Web (Single Page Application) hiện đại, giúp người dùng nắm vững các kỹ thuật tập luyện cơ bản và nâng cao thông qua sự hỗ trợ của các Video mô phỏng trực quan.

## ✨ Tính Năng Nổi Bật

- **Interactive Exercise Flow**: Giao diện tương tác mượt mà, phân rã thông tin theo 3 chuyên mục: Các thao tác SAI (Nguy hiểm), Form CHUẨN (An toàn), và Mẹo của PT.
- **Dynamic Video Visualizer**: Hệ thống mô phỏng video tự động (auto-play loop), tập trung vào kỹ thuật chuyển động chuẩn của người tập thay vì hình ảnh tĩnh tĩnh.
- **Export to JSON**: Dễ dàng trích xuất toàn bộ dữ liệu lịch tập với một thao tác sao chép duy nhất.
- **Công Nghệ Tối Ưu**: Sử dụng thế hệ mới của `Vite` siêu tốc độ tích hợp sẵn `Tailwind CSS v4` mạnh mẽ.

---

## 🚀 Hướng Dẫn Chạy Dự Án

### 1. Yêu Cầu Hệ Thống
Để chạy được tài liệu này trên máy cá nhân, bạn phải đảm bảo đã cài đặt **[Node.js](https://nodejs.org/en/)** (khuyến nghị phiên bản LTS).

Bạn có thể kiểm tra xem máy mình đã cài đặt chưa bằng cách mở Terminal / Command Prompt và chạy lệnh:
```bash
node -v
npm -v
```

### 2. Cài Đặt Thư Viện (Dependencies)
Tại thư mục gốc của dự án (nơi chứa file `package.json`), hãy chạy lệnh sau để tải về các thư viện cần thiết:
```bash
npm install
```

### 3. Khởi Chạy Môi Trường Phát Triển (Development Server)
Để khởi chạy ứng dụng lên giao diện Web cục bộ trên máy, chạy lệnh sau:
```bash
npm run dev
```

Lệnh này sẽ biên dịch dự án cực nhanh và tự động cung cấp cho bạn một đường Link ở Terminal. Mặc định Link sẽ là:
👉 **[http://localhost:5173](http://localhost:5173)** 

*Lưu ý: Nếu bạn muốn nó tự động pop-up trên trình duyệt ngay lập tức, bạn có thể chạy `npm run dev -- --open`.*

### 4. Đóng Gói (Build) Để Đưa Lên Mạng (Production)
Khi bạn muốn tải mã nguồn này lên host nhằm publish cho người khác dùng (như Vercel, Netlify, Github Pages), hãy chạy lệnh:
```bash
npm run build
```
Vite sẽ nén và tối ưu hoá dự án vào trong thư mục `dist`. Thư mục này là phiên bản nhẹ nhất, nhẹ hơn rất nhiều, sẵn sàng để Release!

---

## 🛠 Tech Stack Khởi Khai

- **React 19**
- **Vite**
- **Tailwind CSS V4** (@tailwindcss/vite)
- **Lucide-React** (Hệ thống hệ Icon hiện đại)

*(Source code dự án đã áp dụng tư duy cấu trúc Component linh hoạt, giúp anh em Dev nhanh chóng custom lại thông số, video và số buổi tập trong `workoutPlan` - `src/App.jsx`)*
