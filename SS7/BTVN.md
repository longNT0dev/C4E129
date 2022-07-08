# Bài tập bắt buộc
1. Cho người dùng nhập vào 1 số, kiểm tra số đó dương, hay âm 
2. Kiểm tra 1 số được người dùng nhập vào có phải số nguyên tố không, 
biết số nguyên tố là số chỉ chia hết cho 1 và chính nó  
3. Cho người dùng nhập vào 1 string, đếm số lượng kí tự 'a', 'i' trong đoạn đó 

# Bài tập nâng cao 
1.Cho 1 đoạn string, chuyển các kí tự trong string thành vị trí của nó trong bảng chữ cái
Ví dụ: "The sunset sets at twelve o' clock."
=> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
=> Bài tập này cần search gg thêm, còn search gì mn nghĩ thử xem ヾ(•ω•`)o

2. Cho 1 đoạn string, biết các kí tự được chia thành 2 phe (trái và phải)
Một số kí tự ở 2 phe mang trong mình sức mạnh, các kí tự khác không có giá trị  
LEFT:
    w - 4
    p - 3 
    b - 2
    s - 1
RIGHT:
    m - 4
    q - 3 
    d - 2
    z - 1
Biết kí tự * trong string sẽ tiêu diệt các kí tự bên cạnh nó 
Hãy đưa ra thông báo kết quả phe nào thắng/thua

Ví dụ: "s*zz" => Right side wins!
       "www*www****z" => Left side wins!

Gợi ý cho tất cả bài tập: Chúng ta có thể truy cập vào 1 kí tự của string thông qua chỉ số 
Ví dụ có string example = "abcdef" => example[0] = a
                                      example[1] = b    
                                      ...
