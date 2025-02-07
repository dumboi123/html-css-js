// @ts-nocheck
/**
 * @typedef {{ id: Number,  image: String,  title: String,  author: String, price: Number,  type?: String[],   description: String }} product
 * @typedef {{ book: product[], vpp: product[] }} Products
 */
//localStorage.status = 'false'
//Lấy sản phẩm
/**
 * @type { Products }
 */
var products = window.localStorage.getItem('product') ? JSON.parse(window.localStorage.product) : { book: [], vpp: [] };

var admin_status = JSON.parse(window.localStorage.adminStatus);
/**
 * @type { HTMLTableSectionElement? }
 */
//Wrapper của sản phẩm
var productTable = document.querySelector('.content .products');

//Nút content sản phẩm
/**@type { NodeListOf <HTMLButtonElement> } */
var product_btns = document.querySelectorAll('.product_btn');

/**@type { HTMLDivElement? } */
//Bảng thêm sản phẩm
var adding_table = document.querySelector('.adding_table');

/**
 * @type { HTMLSelectElement? }
 */
//Lựa chọn loại sản phẩm
var procuct_choice = document.querySelector('#product_choice');
/**
 * @type { HTMLButtonElement? }
 */
//Nút tăng và giảm
var prev_button = document.querySelector('#prev_button');
/**
 * @type { HTMLButtonElement? }
 */
var next_button = document.querySelector('#next_button');

//Các thành phần cần để phân trang
var current_page = 1;
/**
 * @type { number }
 */
var max_id;
const products_per_page = 8;
/**
 * @type { number }
 */
var maxPage;
/**@type {number[]} */
var curr_page_ids=[];

var logout_btn = document.querySelector('.logout_btn');

//================================================================//
window.onload = start;

function start() {
    if (admin_status[0] == false) {
        window.location.href = '/index.html';
    }
    document.querySelector('.admin_name').innerText = `${admin_status[1]}`
    //Hàm mặc định chạy khi mở website
    renderProducts();
}
//=============================Lựa chọn in nội dung nào===================================//
/**@type {HTMLDivElement?} */
var productContent = document.querySelector('.content.product_content');


product_btns.forEach(ele => {
    ele.addEventListener('click', () => {
        if (!productContent?.classList.contains('active') && !adding_table?.classList.contains('active')) {
            productContent?.classList.add('active');
            adding_table?.classList.add('active');
        }
    })
})
setPage(current_page);
//===============================Tùy chọn loại sản phẩm in ra=================================//
function productList() {
    /** @type { product[] } */
    var product_list = [];

    var choice = procuct_choice?.value;
    if (choice == 'books') {
        product_list = products.book;
        maxPage = Math.ceil(product_list.length / products_per_page);
        if (current_page > maxPage)
            current_page = maxPage;
        if(current_page == 0){
            current_page = 1;
        }
    }
    else if (choice == 'stationery') {
        product_list = products.vpp;
        maxPage = Math.ceil(product_list.length / products_per_page);
        if (current_page > maxPage)
            current_page = maxPage;
        if(current_page == 0){
            current_page = 1;
        }
    }
    else if (choice == 'all') {
        product_list = products.book.concat(products.vpp);
        maxPage = Math.ceil(product_list.length / products_per_page);
        if (current_page > maxPage)
            current_page = maxPage;
        if(current_page == 0){
            current_page = 1;
        }
    }
    return product_list;
}
//==============================Cập nhật id để tạo sản phẩm mới==================================//
function updateMaxId() {
    if (products.book.length == 0 && products.vpp.length == 0) {
        max_id = 0;
    }
    else {
        var temp = products.book.concat(products.vpp);
        max_id = temp[temp.length - 1].id;
        for (var i = temp.length - 1 - 1; i >= 0; i--) {
            if (max_id < temp[i].id) {
                max_id = temp[i].id;
            }
        }
    }
}

//==============================Tạo bảng sản phẩm==================================//
/**
 * @param {product[]} list
 * @param {HTMLTableSectionElement | null} wrapper
 * @param {number} ppp
 * @param {number} curr_page
 */
function displayProducts(list, wrapper, ppp, curr_page) {
    //@ts-expect-error
    wrapper.innerHTML = "";
    var start;
    var end;
    start = (curr_page - 1) * ppp;
    end = start + ppp;
    //Cắt mảng sản phẩm cần trong 1 trang
    var curr_page_items = list.slice(start, end);
    var length = curr_page_items.length;
    var output = '';
    //Dùng vòng lặp in từng sản phẩm
    for (var i = 0; i < length; i++) {
        output += `<tr>
           <td>${curr_page_items[i].id}</td>
           <td><img src="${curr_page_items[i].image}" /></td>
           <td><h3>${curr_page_items[i].title}</h3><br/>
           <td>${curr_page_items[i].price}</td>
           <td><button class="detail_btn" value="${curr_page_items[i].id}" onclick="openDetailTable(${curr_page_items[i].id})">Xem</button></td>
           <td><button class="del_btn" value="${curr_page_items[i].id}" onclick="delItem(this)">Xóa</button> </td>
           </tr>`
        wrapper.innerHTML = output;
        if(i==0){
            curr_page_ids = [];
        }
        curr_page_ids.push(curr_page_items[i].id);
    }
    console.log(curr_page_ids);
}
//==============================Tải sản phẩm và phân trang lên trang==================================//
function renderProducts() {
    var list = productList();
    //Kiểm tra mảng sản phẩm rỗng
    if (list.length == 0) {
        var checkPagination = document.querySelector('.pagination-wrap.active');
        if (checkPagination)
            checkPagination.classList.remove('active');
        displayProducts(list, productTable, products_per_page, current_page);
        console.warn('Không có sản phẩm!');
    }
    //Tiến hành in nếu mảng không rỗng
    else {
        //Wrapper phân trang
        /** @type {HTMLDivElement?} */
        var pagination_wrapper = document.querySelector('.pagination-wrap');
        pagination_wrapper?.classList.add('active');
        //Wrapper số trang
        var pagination_num = document.querySelector('.pagination-numbers');
        //Xử lí nút tăng và giảm 1 trang
        handleNextAndPrevButton();
        //Render bảng sản phẩm
        displayProducts(list, productTable, products_per_page, current_page);
        //Render phân trang
        displayPagination(list, productTable, pagination_num, products_per_page);
    }
}
//localStorage.status = 'false'

//==============================Tạo phân trang==================================//

/**
 * @param {product[]} list
 * @param {HTMLTableSectionElement | null} content_wrapper
 * @param {Element | null} pagination_wrapper
 * @param {number} ppp
 */
function displayPagination(list, content_wrapper, pagination_wrapper, ppp) {
    //@ts-expect-error
    pagination_wrapper.innerHTML = '';
    //Số trang bằng tổng sản phẩm chia số sản phẩm 1 trang
    var pages = Math.ceil(list.length / ppp);
    for (var i = 1; i <= pages; i++) {
        //Thêm hàm tạo nút và thêm nút vào phần phân trang
        var newButton = paginationButton(i, list, content_wrapper)
        //@ts-expect-error
        pagination_wrapper.appendChild(newButton);
    }
}
//Tạo các button
/**
 * @param {number} curr_page
 * @param {product[]} list
 * @param {HTMLTableSectionElement | null} content_wrapper
 */
function paginationButton(curr_page, list, content_wrapper) {
    //Tạo button và đánh số các trang cho button
    var button = document.createElement('button');
    button.innerText = curr_page.toString();

    //Nếu button được kích hoạt thì active nó (xem chi tiết active ở file admin.css)
    if (curr_page == current_page)
        button.classList.add('active');

    //Nếu chọn button sẽ đưa danh sách sản phẩm tương ứng
    button.addEventListener('click', () => {
        current_page = curr_page;
        /** @type {HTMLButtonElement?} */
        var curr_btn = document.querySelector('.pagination-wrap.active button.active');
        curr_btn?.classList.remove('active');
        button.classList.add('active');
        handleNextAndPrevButton();
        displayProducts(list, content_wrapper, products_per_page, current_page);
    })
    return button;
}
//Xử lí các nút tăng giảm 1 trang
/**
 * @param {HTMLButtonElement | null} button
 */
function disableButton(button) {
    if (button !== null) {
        button.classList.add("disabled");
        button.setAttribute("disabled", 'true');
    }
}
/**
 * @param {HTMLButtonElement | null} button
 */
function enableButton(button) {
    if (button !== null) {
        button.classList.remove("disabled");
        button.removeAttribute("disabled");
    }
}
function handleNextAndPrevButton() {
    if (current_page === 1) {
        disableButton(prev_button);
    }
    else {
        enableButton(prev_button);
    }
    if (current_page === maxPage) {
        disableButton(next_button);
    }
    else {
        enableButton(next_button);
    }
}
prev_button?.addEventListener('click', () => {
    current_page -= 1;
    handleNextAndPrevButton();
    /**@type {HTMLButtonElement?} */
    var curr_btn = document.querySelector('.pagination-wrap.active button.active');
    curr_btn?.classList.remove('active');
    var btn = document.querySelectorAll('.pagination-numbers button');
    btn[current_page - 1].classList.add('active');

    displayProducts(productList(), productTable, products_per_page, current_page);
})

next_button?.addEventListener('click', () => {
    current_page += 1;
    handleNextAndPrevButton();
    var curr_btn = document.querySelector('.pagination-wrap.active button.active');
    /**@type {HTMLButtonElement?} */
    curr_btn?.classList.remove('active');
    var btn = document.querySelectorAll('.pagination-wrap.active button');
    btn[current_page].classList.add('active');

    displayProducts(productList(), productTable, products_per_page, current_page);
})


//====================================================================================Chức năng========================================================================================//

//===================================================================================Thêm=========================================================================================//

/**@type {HTMLSelectElement?} */
var product_type = document.querySelector('#product_type');         //Bảng thêm sản phẩm 
/**@type {HTMLButtonElement?} */
var add_img_btn = document.querySelector('.add_img_btn');           //Nút thêm ảnh
/**@type {HTMLInputElement?} */
var add_img_input = document.querySelector('.add_img_input');       //Input ảnh vào
/**@type {HTMLDivElement?} */
var file_img_add = document.querySelector('.file_img_add');

var img;                      //Ảnh mới
/**@type {string[]} */
var bookTypes = [];
/**@type {product} */
var newItem;                  //SP mới

//=======================================================================================//
//Thêm ảnh
add_img_btn?.addEventListener('click', () => {
    confirm('Hãy chọn ảnh trong đường dẫn img/book');
    add_img_input?.click();
})

//Show ảnh
add_img_input?.addEventListener('change', (event) => {
    /**@type { HTMLInputElement }*/
    var eT = event.target;
    if (eT == undefined) {
        console.warn('Không chọn ảnh');
    }
    else {
        img = showAddImg(eT.files[0]);
    }
})
/**
 * @param {File} file
 */
function showAddImg(file) {
    var fileType = file.type;
    var checkFileType = ['image/png', 'image/jpeg', 'image/png'];
    if (checkFileType.includes(fileType)) {
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener("load", () => {
            file_img_add.innerHTML = `<img src=\"${fr.result}\">`;
        })
    }
    else {
        alert('Không phải file ảnh!');
    }
    return file.name;
}
//Kiểm tra giá trị input
/**@type { NodeListOf <HTMLInputElement> } */
var add_product_inputs = document.querySelectorAll('.add_product_input');   //Input các giá trị
/**@type { NodeListOf <HTMLInputElement> } */
var add_error_messages = document.querySelectorAll('.add_error_message');   //Báo lỗi chưa điền thông tin
/**@type {NodeListOf <HTMLInputElement>} */
var add_type_input = document.querySelectorAll('.add_type_input');

//Kiểm tra vô hiệu hóa thanh thể loại
function checkProductTypeWhenAdd() {
    if (product_type?.value == 'themvpp') {
        add_type_input.forEach(ele => {
            ele.setAttribute('disabled', 'true');
        })
    }
    else if (product_type?.value == 'themsach') {
        add_type_input.forEach(ele => {
            ele.removeAttribute('disabled');
        })
    }
}
//Kiểm tra thể loại
function validateBookTypeInput() {
    bookTypes = ['All'];
    /**@type {boolean} */
    var chk = false;
    add_type_input.forEach(ele => {
        if (ele.checked) {
            chk = true;
            bookTypes.push(ele.name);
        }
    })
    if (chk === false) {
        add_error_messages[add_error_messages.length - 1].innerText = 'Chưa chọn thể loại';
    }
    else if (chk === true) {
        add_error_messages[add_error_messages.length - 1].innerText = '';
    }
}
//Kiểm tra ảnh
function validateImgInput() {
    if (file_img_add.innerHTML == '') {
        add_error_messages[0].innerText = 'Chưa chọn ảnh';
    }
    else {
        add_error_messages[0].innerText = '';
    }
}
function validateInput() {
    validateImgInput();
    for (var i = 1; i < add_error_messages.length - 1; i++) {
        if (add_product_inputs[i - 1].value == '') {
            add_error_messages[i].innerText = `Chưa nhập ${add_product_inputs[i - 1].name}`;
        }
        else {
            add_error_messages[i].innerText = ``;
        }
    }
    if (product_type?.value == 'themsach') {
        validateBookTypeInput();
    }
}
//Thêm vào localstorage
function handleAdding() {
    updateMaxId();
    if (product_type?.value == 'themsach') {
        newItem = {
            id: max_id + 1,
            image: `img/book/${img}`,
            title: `${add_product_inputs[0].value}`,
            author: `${add_product_inputs[2].value}`,
            price: Number(add_product_inputs[1].value),
            type: bookTypes,
            description: `${add_product_inputs[3].value}`
        };
        products.book.push(newItem);
        localStorage.setItem('product', JSON.stringify(products));

        renderProducts();
    }
    else if (product_type?.value == 'themvpp') {
        newItem = {
            id: max_id + 1,
            image: `img/book/${img}`,
            title: `${add_product_inputs[0].value}`,
            author: `${add_product_inputs[2].value}`,
            price: Number(add_product_inputs[1].value),
            description: `${add_product_inputs[3].value}`
        };
        products.vpp.push(newItem);
        localStorage.setItem('product', JSON.stringify(products));

        renderProducts();
    }
}
//Thêm thông tin còn lại
function addItem() {
    validateInput();
    var arrError = [];
    for (var i = 0; i < add_error_messages.length; i++) {
        arrError.push(add_error_messages[i].innerText);
    }
    /**@type {boolean} */
    var check = arrError.every(ele => ele == '');

    if (check) {
        handleAdding();
        add_product_inputs.forEach(ele => {
            ele.value = '';
        })
        if (file_img_add !== null) {
            file_img_add.innerHTML = '';
        }
        add_type_input.forEach(ele => {
            if (ele.checked) {
                ele.checked = false;
            }
        })
        confirm('Thêm thành công');
    }
    else {
        console.warn('Nhập thiếu!');
    }
}
//===================================================================================CHỈNH SỬA=========================================================================================//

//Đóng, mở bảng chi tiết
/**@type {HTMLImageElement?} */
var detail_close_btn = document.querySelector('#close_detail_img');
/**@type {HTMLDivElement?} */
var detail_wrapper = document.querySelector('.detail_wrapper');
/**@type {HTMLDivElement?} */
var detail_table = document.querySelector('.detail_table');
//Nút chỉnh sửa
/**@type {HTMLImageElement?} */
var edit_detail_img = document.querySelector('#edit_detail_img');
//xác định là sách hay vpp và là cái nào
/**@type {product & string} */
var temp = [];
/**
 * 
 * @param {number | string} id 
 */
function openDetailTable(id) {
    detail_wrapper?.classList.add('active');
    detail_table?.classList.add('active');
    renderToEdit(id);
}

detail_close_btn?.addEventListener('click', () => {
    if (!edit_img_btn.hasAttribute('disabled')) {
        edit_img_btn.setAttribute('disabled', 'true');
        edit_img_input.setAttribute("disabled", "true");
        edit_product_inputs.forEach(ele => {
            ele.setAttribute('disabled', 'true');
        })
        edit_error_messages.forEach(ele => {
            ele.setAttribute('disabled', 'true');
        })
        editing_btn.setAttribute('disabled', 'true');
        edit_type_inputs.forEach(ele => {
            if (ele.checked) {
                ele.checked = false;
            }
            ele.setAttribute('disabled', 'true');
        })
    }
    edit_error_messages.forEach(ele => {
        ele.innerText = '';
    })
    document.querySelector('.detail_wrapper')?.classList.remove('active');
    document.querySelector('.detail_table')?.classList.remove('active');
})

//=====================================Bảng chỉ tiết==================================//

/**@type {HTMLButtonElement?} */
var edit_img_btn = document.querySelector('.edit_img_btn');           //Nút thay đổi
/**@type {HTMLInputElement?} */
var edit_img_input = document.querySelector('.edit_img_input');       //Input ảnh thay đổi
/**@type {HTMLDivElement?} */
var file_img_edit = document.querySelector('.file_img_edit');
var editImg;
var resultEditImg;
function activeImgInput() {
    alert('Vui lòng chọn ảnh trong file /img/book! Xin cảm ơn');
    edit_img_input.click();
}
//Show ảnh
edit_img_input?.addEventListener('change', (event) => {
    /**@type { HTMLInputElement }*/
    var eT = event.target;

    if (eT == undefined) {
        console.warn('Không chọn ảnh');
    }
    else {
        editImg = showEditImg(eT.files[0]);
    }
})
/**
 * @param {File} file
 */
function showEditImg(file) {
    var fileType = file.type;
    var checkFileType = ['image/png', 'image/jpeg', 'image/png'];
    if (checkFileType.includes(fileType)) {
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener("load", () => {
            file_img_edit.innerHTML = `<img src=\"${fr.result}\">`;
        })
    }
    else {
        alert('Không phải file ảnh!');
    }
    return file.name;
}

//Kiểm tra giá trị input
/**@type { NodeListOf <HTMLInputElement> } */
var edit_product_inputs = document.querySelectorAll('.edit_product_input');   //Input các giá trị
/**@type { NodeListOf <HTMLInputElement> } */
var edit_error_messages = document.querySelectorAll('.edit_error_message');   //Báo lỗi chưa điền thông tin
/**@type {NodeListOf <HTMLInputElement>} */
var edit_type_inputs = document.querySelectorAll('.edit_type_input');
/**@type {HTMLButtonElement?} */
var editing_btn = document.querySelector('.submit_btn.editing_btn');

/**
 * @param {string | number} id 
 */
function checkItemToRenderToEdit(temp, id) {
    var len1 = products.book.length;
    var len2 = products.vpp.length;
    for (var i = 0; i < len1; i++) {
        if (products.book[i].id == id) {
            temp[0] = products.book[i];
            temp[1] = "sach";
            temp[2] = i;
        }
    }
    for (var i = 0; i < len2; i++) {
        if (products.vpp[i].id == id) {
            temp[0] = products.vpp[i];
            temp[1] = "vpp";
            temp[2] = i;
        }
    }
}
function renderTypeToEdit() {
    var typeArr = temp[0].type;
    edit_type_inputs.forEach(ele => {
        ele.checked = false;
        typeArr.forEach(value => {
            if (ele.name == value) {
                ele.checked = true;
            }
        })
    })
}
/**
 * 
 * @param {number | string} id 
 */
function renderToEdit(id) {
    checkItemToRenderToEdit(temp, id);
    //Ảnh
    file_img_edit.innerHTML = `<img src="${temp[0].image}">`;
    editImg = `${temp[0].image}`;
    //Thể loại nếu là sách
    if (temp[1] == 'sach') {
        renderTypeToEdit();
    }
    if (temp[1] == 'vpp') {
        edit_type_inputs.forEach(ele => {
            ele.checked = false;
        })
    }
    //Thông tin còn lại
    edit_product_inputs[0].value = temp[0].title;
    edit_product_inputs[1].value = temp[0].price;
    edit_product_inputs[2].value = temp[0].author;
    edit_product_inputs[3].value = temp[0].description;
}


//=====================================Thay đổi chỉ tiết==================================//
edit_detail_img.addEventListener('click', () => {
    edit_img_btn.toggleAttribute("disabled");
    edit_img_input.toggleAttribute("disabled");
    edit_product_inputs.forEach(ele => {
        ele.toggleAttribute("disabled");
    })
    edit_error_messages.forEach(ele => {
        ele.toggleAttribute("disabled");
    })
    editing_btn.toggleAttribute("disabled");
    if (temp[1] == 'sach') {
        edit_type_inputs.forEach(ele => {
            ele.toggleAttribute("disabled");
        })
    }
})

function validateEditImgInput() {
    if (file_img_edit.innerHTML == '') {
        edit_error_messages[0].innerText = 'Chưa chọn ảnh';
    }
    else {
        edit_error_messages[0].innerText = '';
    }
}

function validateTypeEdit() {
    var c = false;
    edit_type_inputs.forEach(ele => {
        if(ele.checked){
            c = true;
        }
    })
    if (c === false) {
        edit_error_messages[edit_error_messages.length - 1].innerText = 'Chưa chọn thể loại';
    }
    else if (c === true) {
        edit_error_messages[edit_error_messages.length - 1].innerText = '';
    }
}

function validateAllEditInput() {
    validateEditImgInput();
    for (var i = 1; i < edit_error_messages.length - 1; i++) {
        if (edit_product_inputs[i - 1].value == '') {
            edit_error_messages[i].innerText = `Chưa nhập ${edit_product_inputs[i - 1].name}`;
        }
        else {
            edit_error_messages[i].innerText = ``;
        }
    }
    if(temp[1] == 'sach'){
        validateTypeEdit();
    }
}

/**
 * @param {number} mode 
 * @param {number | string} index 
 * @param {string} imgPath
 */
function handelEditing(mode, index) {
    var editType = ['All'];
    var image = '';
    if (editImg == temp[0].image) {
        image = temp[0].image;
    }
    else {
        image = `img/book/${editImg}`;
    }
    if (mode == 1) {
        edit_type_inputs.forEach(ele => {
            if (ele.checked)
                editType.push(ele.name);
        })
        var editedItem = {
            id: temp[0].id,
            image: `${image}`,
            title: `${edit_product_inputs[0].value}`,
            author: `${edit_product_inputs[2].value}`,
            price: Number(edit_product_inputs[1].value),
            type: editType,
            description: `${edit_product_inputs[3].value}`
        };
        products.book.splice(index, 1, editedItem);
        localStorage.setItem('product', JSON.stringify(products));
        renderProducts();
    }
    else if (mode == 2) {
        var editedItem = {
            id: temp[0].id,
            image: `${image}`,
            title: `${edit_product_inputs[0].value}`,
            author: `${edit_product_inputs[2].value}`,
            price: Number(edit_product_inputs[1].value),
            description: `${edit_product_inputs[3].value}`
        };
        products.vpp.splice(index, 1, editedItem);
        localStorage.setItem('product', JSON.stringify(products));
        renderProducts();
    }
}
function confirmEditItem() {
    validateAllEditInput();
    var arrError = [];
    for (var i = 0; i < edit_error_messages.length; i++) {
        arrError.push(edit_error_messages[i].innerText);
    }
    /**@type {boolean} */
    var check = arrError.every(ele => ele == '');

    if(check){
        var ck = confirm('Xác nhận thay đổi ?');
        if (ck == true) {
            if (temp[1] == 'sach') {
                handelEditing(1, temp[2]);
            }
            else if (temp[1] == 'vpp') {
                handelEditing(2, temp[2]);
            }
        }
        else {
            console.warn('Không thay đổi');
        }
    }
    else{
        console.warn('Không đủ dữ liệu thay đổi!');
    }
}

//=================================================================================== XÓA =========================================================================================//

/**
 * @param {{value: string}} obj
 */
function delItem(obj) {
    var ck = confirm('Xác nhận xóa sản phẩm ?');
    var id = obj.value;
    if (ck == true) {
        handleDeletingProduct(products.book, products.book.length, id);
        handleDeletingProduct(products.vpp, products.vpp.length, id);

        localStorage.setItem('product', JSON.stringify(products));
        renderProducts();
        console.warn('Đã xóa!');
    }
    else {
        console.warn('Không xóa!');
    }
}
/**
 * @param {product[]} product_list
 * @param {number} length
 * @param {string | number} id
 */
function handleDeletingProduct(product_list, length, id) {
    if (length == 0) {
        return;
    }
    else if (length == 1) {
        product_list.pop();
    }
    else if (length > 1) {
        for (var i = 0; i < length; i++) {
            if (product_list[i].id == Number(id)) {
                console.log(product_list[i]);
                product_list.splice(i, 1);
                break;
            }
        }
    }
}
//Xóa 1 trang
function delOnePage(){
    var ck = confirm('Xác nhận xóa toàn bộ sản phẩm ở trang này!');
    if(ck){
        console.log(curr_page_ids)
        curr_page_ids.forEach(ele => {
            handleDeletingProduct(products.book, products.book.length, ele);
            handleDeletingProduct(products.vpp, products.vpp.length, ele);
        })
        curr_page_ids=[];
        localStorage.setItem('product', JSON.stringify(products));
        renderProducts();
    }
    else{
        console.warn('Không xóa sản phẩm trang này');
    }
}
//============================================================================================================================================================================//
//==============================================================Leftmenu=======================================================//
//Chuyển đổi thanh left menu
function toggleMenu() {
    /** @type {HTMLDivElement?} */
    var leftmenu = document.querySelector('.leftmenu');
    /** @type {HTMLDivElement?} */
    var main = document.querySelector('.main');
    leftmenu?.classList.toggle('active');
    main?.classList.toggle('active');
}
//=====================================================================================================================//

function closing() {
    var upateAdminStat = [false, ''];
    localStorage.setItem('adminStatus', JSON.stringify(upateAdminStat));
    window.location.href = '/index.html';
}
logout_btn.addEventListener('click', () => {
    closing();
})