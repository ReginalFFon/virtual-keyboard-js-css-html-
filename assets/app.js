let keys = document.querySelectorAll('.keyboard-wrapper .key .row span'),
    keyPad = document.querySelector('.keyboard-wrapper .key'),
    display = document.querySelector('.keyboard-wrapper .display');


    if(keys && keyPad && display)
    {
        let capsLockMode = false;
        keys.forEach(key=>
        {
            key.addEventListener('click', function()
            {
                // console.log(this.innerText);
                if(this.classList.contains('caps'))
                {
                    this.classList.toggle('active');
                    keyPad.classList.toggle('uppercase');
                    capsLockMode ? capsLockMode = false : capsLockMode = true;
                }
                else if (this.classList.contains('backspace')){
                    let str = display.innerText;
                    display.innerText = str.substring(0, (str.length-1));
                }else{
                    if(capsLockMode)
                    {
                        display.innerText += this.dataset.key.toUpperCase();
                    }else{
                        display.innerText += this.dataset.key.toLowerCase();
                    }
                }
            });
        });
    }

/*if (keys && keyPad && display) {
    keys.forEach(key => {
        key.addEventListener('click', function() {
            
            if (this.classList.contains('caps')) {
                this.classList.toggle('active');
                keyPad.classList.toggle('uppercase');

                capsLockMode ? capsLockMode = false : capsLockMode = true;
            } else if (this.classList.contains('backspace')) {
                let str = display.innerText;
                display.innerText = str.substring(0, (str.length-1));
            } else {
                if (capsLockMode) {
                    display.innerText += this.dataset.key.toUpperCase();
                } else {
                    display.innerText += this.dataset.key.toLowerCase();
                }
            }
        })
    })
}*/