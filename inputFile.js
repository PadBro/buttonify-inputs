inputFile = function(classesBTN = '', classesLable = '') {
    var id = '',
    counter = 0,
    originalinput = $('input[type="file"]'),
    originalinput_data = originalinput.data();
    originalinput.each(function(index, element) {
        counter++;
        if ($(element).data('alreadyinitialized')) {
            return;
        }
        if (! $(element).is('input[type="file"]')) {
          return;
        }
        $(element).data('alreadyinitialized', true);
        if ($(element)[0].id) {
            id = $(element)[0].id;
        } else {
            id = 'file' + counter;
            $(element)[0].id = 'file' + counter;
        }
        var label = '<p class="' + classesLable + '" id="' + id + 'Text">Kein Bild ausgewählt.</p>';
        var btn = '<label class="' + classesBTN + '" for="' + id + '">Bild auswählen</label>';

        $(element).hide();
        $(element).after(btn + label);

        originalinput.on('change', function(e) {
            var id = e.target.id;
            var fileName = 'Kein Bild ausgewählt.';
            if (e.target.files[0]) {
                fileName = e.target.files[0].name;   
            }
            $('#' + id + 'Text').html('<p>' + fileName + '</p>');
        });
    });
}