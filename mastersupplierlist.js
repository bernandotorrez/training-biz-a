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
                    },
                    {
                        caption: "Delete",
                        icon: "delete",
                        color: "primary",
                        onClick: "delete"
                    }
                ]
            },
        ],
        buttons: [],
        filter: [],
        functions : {
            edit: function(id){
                this.router.navigate(['./form', 'mastersupplierupdateform', id])
            },
            delete: function(id){
                if (confirm("Yakin mau hapus?")){
                    this.dataService.deleteModel(id, this.apiConfig, 'MASTER_SUPPLIER').pipe(
                        this.switchMap( ()=>this.loadData() )
                    )
                    .subscribe(()=>{
                        alert('berhasil hapus data');
                    })
                }
            },
        }
    }
}