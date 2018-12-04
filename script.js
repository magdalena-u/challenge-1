const square = document.querySelectorAll(".fa-square");

square.forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('show')
    }
    )
}
)