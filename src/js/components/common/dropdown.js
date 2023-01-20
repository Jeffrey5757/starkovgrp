export default class Dropdown {
	constructor(select) {
		this.elems = {
            dropdown: select,
            dropdownHeader: select.querySelector('.my-select-header'),
            dropdownHeaderText: select.querySelector('.my-select-header__option'),
            dropdownHeaderInput: select.querySelector('.my-select-header__selected'),
            dropdownBody: select.querySelector('.my-select-dropdown'),
            options: select.querySelectorAll('.my-select-dropdown__option'),
        };


		this.initEvents();
	}

	initEvents = () => {
		// open dropdown
		this.elems.dropdownHeader.addEventListener('click', this.dropdownOpen);

		// select option
		this.elems.options.forEach(option => {
			option.addEventListener('click', this.selectOption);
		})
	}

	dropdownOpen = event => {
		event.preventDefault()

		this.elems.dropdown.classList.toggle('active');

		window.addEventListener('click', this.documentClick);
	}

	dropdownClose = () => {
		this.elems.dropdown.classList.remove('active');
		
		window.removeEventListener('click', this.documentClick);
	}

	documentClick = event => {
		if( !this.elems.dropdown.contains(event.target) ) {
			this.dropdownClose()
		}
	}

	selectOption = event => {
		event.preventDefault()
		const target = event.currentTarget || event.target;

		this.elems.dropdownHeaderInput.value = target.dataset.select;
        this.elems.dropdownHeaderText.innerHTML = target.innerHTML;

        this.elems.options.forEach(option => option.classList.remove('selected'));
        target.classList.add('selected');
        
        this.elems.dropdown.dispatchEvent(new CustomEvent("selected", {
            detail: { target }
        }));

		this.dropdownClose();
	}
}


const selets = document.querySelectorAll('.my-select');
selets.forEach(select => new Dropdown(select));