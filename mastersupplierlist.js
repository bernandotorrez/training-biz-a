get = function()
{
    return {
        columns: [
            {
                title: "Supplier Name",
                data: "MASTER_SUPPLIER.SUPPLIER_NAME",
                type: "string"
            },
            {
                title: "Created Date",
                data: "MASTER_SUPPLIER.CREATED_DATE",
                type: "date"
            },
            {
                title: "Edit",
                data: "MASTER_SUPPLIER.ID",
                button: [
                    {
                        caption: "Edit",
                        icon: "edit",
                        color: "primary",
                        onClick: "edit"
                    }
                ]
            }
        ],
        buttons: [],
        filter: [],
        functions : {
            edit: function(id){
                this.router.navigate(['./form', 'mastersupplierupdateform', id])
            },
        }
    }
}