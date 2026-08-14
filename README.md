# UED Journal of Social Sciences, Humanities and Education

[![GitHub Pages](https://img.shields.io/github/actions/workflow/status/Base27-CVNSS/jsshe/pages.yml?branch=main&label=GitHub%20Pages&logo=github)](https://base27-cvnss.github.io/jsshe/)
[![ISSN](https://img.shields.io/badge/ISSN-1859--4603-123f3a)](https://portal.issn.org/resource/ISSN/1859-4603)
[![License: MIT](https://img.shields.io/badge/source-MIT-d6ef54)](LICENSE)
[![Open Access](https://img.shields.io/badge/research-open%20access-267064)](https://jshe.vn/index.php/jshe)

Giao diện xuất bản học thuật tối giản cho **UED Journal of Social Sciences, Humanities and Education (UED-JSHE)**. Dự án chuyển cấu trúc trang OJS gốc thành một publication front-end nhanh, responsive và dễ tiếp cận, đồng thời giữ liên kết về cổng tạp chí chính thức để gửi bài, xem DOI và tải PDF.

> Website trình bày này không thay thế hệ thống quản trị Open Journal Systems. Quy trình gửi bài, phản biện và quản lý xuất bản vẫn được thực hiện trên cổng JSHE chính thức.

## Điểm nổi bật

- Giao diện học thuật tối giản, tập trung vào khả năng đọc và tra cứu.
- Song ngữ Anh–Việt ở lớp giao diện; ghi nhớ lựa chọn bằng `localStorage`.
- Danh mục đầy đủ 10 bài của Vol. 15, No. 2 (2025), liên kết bài, DOI và PDF thật.
- Tìm kiếm tức thời theo tiêu đề, tác giả hoặc DOI; phím tắt `/`.
- Số hiện hành, kho lưu trữ, thông báo, phạm vi, chính sách và quy trình phản biện.
- Responsive cho desktop, tablet và điện thoại; hỗ trợ chế độ sáng/tối và in ấn.
- Semantic HTML, skip link, trạng thái ARIA, reduced motion và điều hướng bàn phím.
- SEO với Open Graph, canonical URL, JSON-LD `Periodical`, sitemap, robots và web manifest.
- GitHub Actions tự động xuất bản lên GitHub Pages.

## Chạy cục bộ

Không cần cài dependency hoặc build:

```bash
python -m http.server 8080
```

Mở `http://localhost:8080`. Không nên mở trực tiếp bằng `file://` nếu muốn kiểm tra đầy đủ manifest và hành vi trình duyệt.

## Cấu trúc

```text
.
├── .github/workflows/pages.yml  # triển khai GitHub Pages
├── assets/
│   ├── app.js                   # dữ liệu bài, tìm kiếm, i18n, theme
│   ├── styles.css               # hệ thiết kế responsive
│   ├── favicon.svg
│   └── social-card.svg
├── index.html                   # publication front-end
├── 404.html
├── manifest.webmanifest
├── robots.txt
└── sitemap.xml
```

## Dữ liệu và liên kết

Nội dung tạp chí dựa trên website chính thức [jshe.vn](https://jshe.vn/index.php/jshe). Các nút gửi bài, DOI, PDF, chính sách và lưu trữ đều dẫn về nguồn chính thức; kho này không sao chép hoặc lưu trữ các PDF học thuật.

## Triển khai

Workflow `pages.yml` triển khai nội dung ở thư mục gốc khi có commit vào `main`. Trong **Settings → Pages**, chọn **Source: GitHub Actions** nếu kho chưa tự kích hoạt Pages.

Địa chỉ dự kiến: <https://base27-cvnss.github.io/jsshe/>

## Công nghệ và nguyên tắc

HTML, CSS và JavaScript thuần được chọn để trang tải nhanh, dễ bảo trì lâu dài và không phụ thuộc framework. Thiết kế lấy cảm hứng từ triết lý hạ tầng học thuật mở của [Public Knowledge Project](https://pkp.sfu.ca/) và mô hình publication website của Open Journal Systems, không sao chép theme hoặc tài sản độc quyền.

## Bản quyền

- Mã nguồn giao diện: MIT © 2026 Long Ngo.
- Nội dung bài báo và PDF: thuộc tạp chí/tác giả theo điều khoản công bố tương ứng.
- Tên, ISSN và thông tin đơn vị xuất bản được dùng cho mục đích trình bày tạp chí.

## Liên hệ tạp chí

- Email: [editor@ued.udn.vn](mailto:editor@ued.udn.vn)
- Điện thoại: (+84) 02366 569 179
- Địa chỉ: Tòa A5, 459 Tôn Đức Thắng, Liên Chiểu, Đà Nẵng, Việt Nam

---

Phát triển giao diện bởi **Long Ngo** · Mã nguồn mở theo giấy phép MIT.
