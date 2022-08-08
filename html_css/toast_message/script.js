// Toast function

function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        //Remove toast when click
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-triangle-exclamation'
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML =
            `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <div class="toast__title">
                 ${title}
            </div>
            <div class="toast__mes">
                ${message}
            </div>
        </div>
        <div class="toast__close">
             <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        // Add vào HTML
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Bạn đã đăng nhập thành công.',
        type: 'success',
        duration: 3000
    })
}
function showInfoToast() {
    toast({
        title: 'Xem thêm',
        message: 'Danh sách các mặt hàng trên website',
        type: 'info',
        duration: 3000
    })
}
function showWaringToast() {
    toast({
        title: 'Cảnh báo',
        message: 'Cảnh báo, vui lòng điền đầy đủ thông tin!',
        type: 'warning',
        duration: 3000
    })
}
function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Vui lòng kiểm tra lại thông tin tài khoản và mật khẩu',
        type: 'error',
        duration: 3000
    })
}

