---
marp: true
theme: default
paginate: true
class:
  - lead
---

<style>
    section {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 28px;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    }

    h2 {
        font-size: 30px;
        font-weight: bold;
    }
</style>

### Overview

- Axios
- Tanstack query

---

### Axios

- là thư viện dùng để call http request
- hỗ trợ interceptor (middleware để thực hiện hành động nào đó trước khi gửi request hoặc sau khi nhận response)

---

### Tanstack

- là thư viện dùng để quản lí việc gửi request
- cung cấp state loading để hiện mấy cái quay quay
- có cơ chế cache, refetch

---

### Custom hook

- tách việc xử lí logic ra khỏi component
- tái sử dụng lại logic ở nhiều component

---

### Source code

Github: https://github.com/thanhisme
