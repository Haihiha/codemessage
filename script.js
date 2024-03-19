// script.js

document.addEventListener('DOMContentLoaded', function() {
    const conversationLinks = document.querySelectorAll('.conversations li a');
    const messagesContainer = document.querySelector('.messages');
    const messageInput = document.querySelector('.input-bar input[type="text"]');
    const sendButton = document.querySelector('.input-bar button');
  
    // Xử lý sự kiện khi nhấp vào một cuộc trò chuyện 
    conversationLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        // Loại bỏ lớp active từ tất cả các li
        conversationLinks.forEach(conversation => conversation.parentElement.classList.remove('active'));
        // Thêm lớp active cho li được nhấp vào
        e.target.parentElement.classList.add('active');
        // Cập nhật tin nhắn trong phần hiển thị tin nhắn (đây là giả lập)
        messagesContainer.innerHTML = `
          <div class="message self">
            <p>Đây là tin nhắn do tôi gửi.</p>
          </div>
          <div class="message">
            <p>Đây là tin nhắn do người khác gửi.</p>
          </div>
        `;
        // Cuộn xuống dưới cùng của vùng hiển thị tin nhắn
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      });
    });
  
    // Xử lý sự kiện khi nhấp vào nút Gửi
    sendButton.addEventListener('click', () => {
      sendMessage();
    });
  
    // Xử lý sự kiện khi nhấn Enter trong ô nhập tin nhắn
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    // Hàm gửi tin nhắn
    function sendMessage() {
      const message = messageInput.value.trim();
      if (message !== '') {
        // Thêm tin nhắn mới vào phần hiển thị tin nhắn (đây là giả lập)
        messagesContainer.innerHTML += `
          <div class="message self">
            <p>${message}</p>
          </div>
        `;
        // Xóa nội dung của ô nhập tin nhắn
        messageInput.value = '';
        // Cuộn xuống dưới cùng của vùng hiển thị tin nhắn
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }
  });
  