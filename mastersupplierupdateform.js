get = function()
{
    return {
        model: {
            id: null,
            supplier_name: null,
            status: 1,
            updated_date: null
        },
        tableName: 'master_supplier',
        fields: [
            {
                key: "supplier_name",
                type: "input",
                props: {
                    label: "Supplier Name",
                    placeholer: "Supplier Name",
                    required: true
                },
            },
            {
                type: "button",
                props: {
                    text: "Simpan",
                    color: "primary",
                    onClick: function($event, id) {
                        const validate = this.functions.validate()

                        if (validate.length == 0) {
                            this.functions.save()
                        }
                    }
                },
            },
        ],
        functions: {
            save: function () {
                const date = new Date();

                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                // This arrangement can be altered based on how we want the date's format to appear.
                const currentDate = `${year}-${month}-${day}`;
                
                this.model.updated_date = currentDate

                this.dataService.sendModel(
                    this.model,
                    this.apiConfig,
                    this.tableName
                ).subscribe( response => {
                    console.log(response)

                    if (response.success == 'OK') {
                        this.router.navigate(['./main'])
                    }
                })
            },
            addErrorMessage: function (elementId, label) {
                 // Get the element by ID
                 var inputElement = document.getElementById(elementId);

                 // Create a span element for the error message
                 var errorMessageSpan = document.createElement('span');
                 errorMessageSpan.innerHTML = label + ' wajib di isi';
                 errorMessageSpan.style.color = 'red'; // Customize the style if needed

                 // Add a class to the span for styling purposes (optional)
                 errorMessageSpan.classList.add('error-message');
                 errorMessageSpan.id = elementId + '.error'

                 // Append the error message span to the parent of the input element
                 inputElement.parentNode.appendChild(errorMessageSpan);
            },
            removeErrorMessage: function (elementId) {
                var spanError = document.getElementById(elementId + '.error');

                if (spanError) {
                    spanError.parentNode.removeChild(spanError)
                }  
            },
            validate: function () {
                let count = [];

                this.fields.forEach(item => {
                    console.log(item)
                    if (item.key) {
                        const element = document.getElementById(item.id).value
                        if (element.length == 0) {
                            this.functions.addErrorMessage(item.id, item.props.label)
                            
                            count.push(item.id)
                        } else {
                            
                            this.functions.removeErrorMessage(item.id)
                        }
                    }
                })

                return count;
            }
        },
    }
}