$('.delete-workout').click(function(e) {
    // console.log("DELETED!");
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: 'DELETE',
    }).done(function(data){
        console.log("DELETED!");
      window.location.href = '/profile';
    });
  });