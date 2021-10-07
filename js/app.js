const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    formValidation();
})

function formValidation() {
    const $inputs = d.querySelectorAll(".contact__form [required]"),
          $form = d.querySelector(".contact__form");

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span .id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact__error", "none");

        $form.insertAdjacentElement("beforeend", $span);
    })

    d.addEventListener("keyup", (e) => {
        if(e.target.matches(".contact__form [required]")){
            let $target = e.target,
                pattern = $target.pattern;

                if(pattern && $target.value !== ""){
                    let regEX = new RegExp(pattern);
                    return !regEX.exec($target.value)
                    ? d.getElementById($target.name).classList.add("active")
                    : d.getElementById($target.name).classList.remove("active")
                }
        }
    })
    
}