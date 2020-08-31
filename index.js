$(document).ready(function(){
    $('tr').each(function(){
        var totmarks=0;
        $(this).find('.abc').each(function(){
            var marks=$(this).text();
            if(marks.length!==0)
            {
                totmarks+=parseFloat(marks);
            }
        });
        $(this).find('$TotMarks').html('= '+totmarks)
    });
});