var adminAcc = [
    {
        "username": 'tkthinh',
        "password": 12345,
        "name": "Trần Khang Thịnh",
        "email": "tkthinh@12345"
    },
    {
        "username": 'nknam',
        "password": 45678,
        "name": "Nguyễn Khánh Nam",
        "email": "nknam@45678"
    },
    {
        "username": 'trinhtrang',
        "password": 56789,
        "name": "Vũ Lê Khánh Trình",
        "email": "vlktrinh@56789"
    },
    {
        "username": 'hkngan',
        "password": 78910,
        "name": "Nguyễn Hoàng Kiều Ngân",
        "email": "nhkngan@78910"
    }
]
localStorage.setItem('adminAcc', JSON.stringify(adminAcc));

var adminStatus = [false, ''];
localStorage.setItem('adminStatus', JSON.stringify(adminStatus));