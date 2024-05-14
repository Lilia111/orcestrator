var $table = $('#table-robots')
var $remove = $('#remove')
var $change = $('#change')


function getIdSelections() {
    return $.map($table.bootstrapTable('getSelections'), function (row) {
        return row.id
    })
}

$table.on('check.bs.table uncheck.bs.table ' +
    'check-all.bs.table uncheck-all.bs.table', function () {
        $remove.prop('disabled', !$table.bootstrapTable('getSelections').length)
    })

$remove.click(function () {
    var ids = getIdSelections()
    $table.bootstrapTable('remove', {
        field: 'id',
        values: ids
    })
    $remove.prop('disabled', true)
    $change.prop('disabled', true)
})

//для переключения кнопки изменить  при выборе строки
$table.on('check.bs.table uncheck.bs.table', function (e, row) {
    $change.prop('disabled', !$table.bootstrapTable('getSelections').length)
});

function operateFormatter(value, row, index) {
    return [
        '<a class="play" href="javascript:void(0)" title="Play">',
        '<i class="fa-regular fa-circle-play"></i>',
        '</a>  '
    ].join('')
}

window.operateEvents = {
    'click .play': function (e, value, row, index) {
        alert('You click play action, row: ' + JSON.stringify(row))
    }
}