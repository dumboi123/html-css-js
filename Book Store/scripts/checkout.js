const cartContainer = document.querySelector('.cart-container table')
const orderTotal = document.querySelector('.cart-container h2')
let items = JSON.parse(window.localStorage.getItem("cart"));

var total = 0
for(item of items){
    const product = document.createElement("tr");
    product.innerHTML=
    `<td>
        <div class="item-info">
            <img src="`+ item.image +`">
            <div>
                <p class="name">`+ item.title +`</p>
                <button type="button"><i class="fa-solid fa-trash-can"></i>Xoá</button>
            </div>
        </div>
    </td>
    <td><p>`+ item.amount +`</p></td>
    <td class="price">`+ item.price*item.amount +`.000đ</td>`
    cartContainer.appendChild(product);
    total += item.price*item.amount
}
orderTotal.outerHTML =
    `<h2>Tổng cộng: 
        <span class="total">`+total+`.000đ</span>
    </h2>`

const orderBtn = document.querySelector('.order-form button')
const customerName = document.querySelector('.customer-name')
const customerPhone = document.querySelector('.customer-phone')
const customerAddress = document.querySelector('.customer-address')

orderBtn.addEventListener('click', function(){
    const orderBtn = document.querySelector('.order-form button')
    const customerName = document.querySelector('.customer-name')
    const customerPhone = document.querySelector('.customer-phone')
    const customerAddress = document.querySelector('.customer-address')
    if(customerName.value === '' || customerPhone.value === '' || customerAddress.value === ''){
        alert('Vui lòng nhập đầy đủ thông tin')
        return
    }
    alert('Đã đặt hàng!')
    window.location.href = '/index.html'
    localStorage.removeItem('cart');
})