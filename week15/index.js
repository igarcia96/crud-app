$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindex_array = $(this).serializeArray();
    var data = {}

    $.map(unindex_array, funtion(n,i){
        data: 'name' = 'vaule'
    })    

    var request = {
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(funtion(reponse){
        alert:("Data Updated Successfully!");
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request ={
            "method": "DELETE"
        }

        if(comfirm ("Do you really wnat to delete this record")){
            $.ajax(request).done(funtion(reponse){
                alert:("Data Deleted Successfully!");
                location,reload();
            })
        }
    })
}
