const btn = document.querySelector('#submit');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="framework"]:checked');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            alert(values);
        });    
