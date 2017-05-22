# BT-UDPT-2 - *lab2*

**lab2** là một bài tập 2 tại môn UDPT. Ứng dụng cho phép người dùng gửi tin nhắn (email) cho người dùng khác.

Thành viên:
* [x] **1412278** Phan Khánh Lâm (lam0196vn)
* [x] **1412414** Vương Thiên Phú (1412414)

URL: **URL hosting của bài tập**

## Yêu cầu

Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Yêu cầu **GIT**
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [x] Sử dụng GIT theo Feature Branch Workflow.
* [ ] Sử dụng GIT theo Gitflow Workflow.

Yêu cầu **bắt buộc**
* [x] Website layout theo kiến trúc MVC với các thành phần được tách thành nhiều module theo hướng dẫn. (**1412278**)
* [x] Trang web được thiết kế sẽ bao gồm các trang: home, messages, users, about. (**1412278**)
* [x] Cho phép người dùng biết họ đang ở trang nào (sử dụng breadcrumb, highlight navigation bar,...). (**1412414**)
* [x] Cho phép người dùng đăng ký tài khoản bằng các thông tin: email, password, name, phone.(**1412414**)
* [x] Đăng nhập bằng email và password.(**1412414**)
* [x] Sau khi đăng nhập, người dùng sẽ được chuyển đến trang liệt kê danh sách các tin nhắn đã nhận, sắp xếp theo thứ tự thời gian, một nút để tạo tin nhắn mới, nút để xem danh sách bạn bè và nút để xem các tin nhắn đã gửi.(**1412278**)
* [x] Tin nhắn chưa đọc phải được làm nổi bật hơn các tin nhắn khác, có ghi nhận thời gian đã cách đây bao lâu.(**1412278**)
* [x] Trang users cho phép xem danh sách người dùng có trong hệ thống và phải có nút "add" với những người dùng chưa là bạn để thêm vào danh sách bạn bè.(**1412414**)
* [x] Trang about thể hiện thông tin nhóm thực hiện đề tài.(**1412278**)
* [x] Nhấn nút "new message" sẽ chuyển sang giao diện cho phép người dùng gửi tin nhắn cho người dùng trong danh sách bạn bè. Người gửi phải nằm trong danh sách bạn bè và cho phép người dùng chọn qua combobox.(**1412414**)
* [ ] Nhấn "sent" sẽ chuyển sang giao diện hiển thị danh sách tin nhắn đã gửi. Mỗi tin nhắn cần hiện thời gian người nhận đã đọc.(**MSSV**)
* [ ] Nhấn "refresh" để cập nhật danh sách tin nhắn mới nhất (ko nạp lại dữ liệu trên trang).(**MSSV**)
* [ ] Cho phép người dùng layout tin nhắn bằng markdown. (**MSSV**)

Yêu cầu **không bắt buộc**:
* [x] Chuyển nút "add" thành nút "remove" sau khi thêm bạn thành công.(**1412414**)
* [ ] Tự động refresh lại danh sách tin nhắn đã nhận sau 1 khoảng thời gian nhất định và có hiển thị đã refresh danh sách tin nhắn cách đây bao lâu.(**MSSV**)
* [ ] Cuối danh sách tin nhắn sẽ có "load more" để nạp thêm 10 tin nhắn tiếp theo.(**MSSV**)
* [ ] Khi người dùng kéo đến cuối danh sách sẽ tự động nạp thêm 10 tin nhắn tiếp theo.(**MSSV**)
* [ ] Cho phép gửi email nội dung tin nhắn cho người dùng không nằm trong hệ thống.(**MSSV**)
* [ ] Cho phép người dùng đăng nhập bằng tài khoản facebook và lấy ảnh đại diện, email từ facebook. (**MSSV**)
* [ ] Cho phép gửi tin nhắn đến người dùng facebook.(**MSSV**)
* [ ] Nạp danh sách bạn bè từ facebook khi người dùng đăng nhập bằng facebook.(**MSSV**)
* [ ] Quản lý các thay đổi trong cơ sở dữ liệu (sử dụng [db-migrate](https://www.npmjs.com/package/db-migrate))(**MSSV**)

Liệt kê các **yêu cầu nâng cao** đã thực hiện:
* [ ] Chức năng 1
* [ ] Chức năng 2

## Demo

Link ảnh GIF demo ứng dụng:
1. Cho phép người dùng đăng ký tài khoản bằng các thông tin: email, password, name, phone.
![Video Walkthrough](https://github.com/UDPT-2017/lab02-lab02-1412278-1412414/blob/master/Demo/DangKy.gif)
2. Đăng nhập bằng email và password.
![Video Walkthrough](https://github.com/UDPT-2017/lab02-lab02-1412278-1412414/blob/master/Demo/DangNhap_DangXuat.gif)
3. Sau khi đăng nhập, người dùng sẽ được chuyển đến trang liệt kê danh sách các tin nhắn đã nhận, sắp xếp theo thứ  tự  thời gian, một nút để tạo tin nhắn mới, nút để xem danh sách bạn bè và nút để xem các tin nhắn đã gửi.(1412278)
4. Tin nhắn chưa đọc phải được làm nổi bật hơn các tin nhắn khác(1412278)
![Video Walkthrough](https://github.com/UDPT-2017/lab02-lab02-1412278-1412414/blob/master/Demo/HienThiTinNhan.gif)
5. Trang users cho phép xem danh sách người dùng có trong hệ thống và phải có nút "add" với những người dùng chưa là bạn để thêm vào danh sách bạn bè. Chuyển nút "add" thành nút "remove" sau khi thêm bạn thành công.
![Video Walkthrough](https://github.com/UDPT-2017/lab02-lab02-1412278-1412414/blob/master/Demo/Users_ThemBan.gif)
6. Nhấn nút "new message" sẽ chuyển sang giao diện cho phép người dùng gửi tin nhắn cho người dùng trong danh sách bạn bè. Người gửi phải nằm trong danh sách bạn bè và cho phép người dùng chọn qua combobox.
![Video Walkthrough](https://github.com/UDPT-2017/lab02-lab02-1412278-1412414/blob/master/Demo/themTinNhan.gif)
7. Trang about hien thi ra thong tin cua nhom
![Video Walkthrough](https://github.com/UDPT-2017/lab02-lab02-1412278-1412414/blob/master/Demo/About.gif)
Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
