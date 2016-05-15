$(function(){
    $('#EN').hover(function(){
        $(document).tooltip();

    });
  });
    function toggler(divId) {
      $("#" + divId).toggle();
    };

  $('#exportPdfDayView').on('click', function () {

      $.alert('Successfully exported to pdf', {

        title: 'Success',
                //closeTime: $('#time').val() * 1000,
               // autoClose: $('#autoClose').is(':checked'),
               // position: [$(this).data('position')],
                //withTime: $('#withTime').is(':checked'),
                //type: $('#type').val(),
                // danger, success, warning, info
                type: 'success',
    });

  });

  $('#BABuildingID').on('click', function () {
      $.alert("1)UCD Tutorial Tuesday 19:30 \r\n  2)OOP Tutorial Thursday 17:30", {

        title: '',
                //closeTime: $('#time').val() * 1000,
               // autoClose: $('#autoClose').is(':checked'),
               // position: [$(this).data('position')],
                //withTime: $('#withTime').is(':checked'),
                //type: $('#type').val(),
                // danger, success, warning, info
                type: 'info',
    });

  });
  $('#ENBuildingID').on('click', function () {
      $.alert("1)UCD Lecture Tuesday 17:30  2)OOP Lecture Wesnedday 17:30", {

        title: '',
                //closeTime: $('#time').val() * 1000,
               // autoClose: $('#autoClose').is(':checked'),
               // position: [$(this).data('position')],
                //withTime: $('#withTime').is(':checked'),
                //type: $('#type').val(),
                // danger, success, warning, info
                type: 'info',
    });

  });

  

  
  $('#exportCalendarDayView').on('click', function () {

      $.alert('Successfully exported to your calendar', {

        title: 'Success',
            type: 'success',
    });

  });
  $('#exportCalendarUnitView').on('click', function () {

      $.alert('Successfully exported to your calendar', {

        title: 'Success',
            type: 'success',
    });

  }); 
  $('#exportPdfUnitView').on('click', function () {

      $.alert('Successfully exported to pdf file', {

        title: 'Success',
            type: 'success',
    });

  }); 
  $('#exportCalendarMapView').on('click', function () {

      $.alert('Successfully exported to your calendar', {

        title: 'Success',
            type: 'success',
    });

  }); 
  $('#exportPdfMapView').on('click', function () {

      $.alert('Successfully exported to pdf file', {

        title: 'Success',
            type: 'success',
    });

  });   
  $('#chooseClassTimetableTab').on('click', function () {

      $.alert('This feature is disabled on this test', {

        title: 'Warning',
            type: 'warning',
    });

  });


$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){
  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  $('#calendar').fullCalendar({
    allDaySlot: false,
    weekends: false,
    minTime: '08:00', // a start time (10am in this example)
    maxTime: '22:00',
    changeView: 'week',
    header: {
      left: 'prev,next today',
      //center: 'title',
      right: 'agendaWeek,month'

    },

    columnFormat: {
                month: 'ddd',
                week: 'ddd '
            },
    defaultView: 'agendaWeek',
    editable: true,
    events: [
      /*{
        title: 'All Day Event',
        start: new Date(y, m, 1)
      },*/
      {
            title  : 'Object Oriented Programming Tutorial',
            start  : '2016-05-12T17:30:00',
            end    : '2016-05-12T19:30:00',
            color  :  '#42B48E',
            allDay : false
            
      },
      {
            title  : 'Object Oriented Programming Tutorial',
            start  : '2016-05-19T17:30:00',
            end    : '2016-05-19T19:30:00',
            color  :  '#42B48E',
            allDay : false
      },
      { 
            title  : 'Object Oriented Programming Tutorial',
            start  : '2016-05-05T17:30:00',
            end    : '2016-05-05T19:30:00',
            color  :  '#42B48E',
            allDay : false
        
      },

      {
        title: 'UCD Lecture',
        start  : '2016-05-03T17:30:00',
        end    : '2016-05-03T19:30:00',
        color  :  '#006dcc',
        allDay : false
      },
      {
        title: 'UCD Lecture',
        start  : '2016-05-10T17:30:00',
        end    : '2016-05-10T19:30:00',
        color  :  '#006dcc',
        allDay : false
      },
      {
        title: 'UCD Lecture',
        start  : '2016-05-17T17:30:00',
        end    : '2016-05-17T19:30:00',
        color  :  '#006dcc',
        allDay : false
      },
      {
        title: 'UCD Lecture',
        start  : '2016-05-24T17:30:00',
        end    : '2016-05-24T19:30:00',
        color  :  '#006dcc',
        allDay : false
      },

      {
        title: 'UCD Tutorial',
        start  : '2016-05-03T19:30:00',
        end    : '2016-05-03T21:30:00',
        color  :  '#006dcc',
        allDay : false
      },
      {
        title: 'UCD Tutorial',
        start  : '2016-05-10T19:30:00',
        end    : '2016-05-10T21:30:00',
        color  :  '#006dcc',
        allDay : false
      },
      {
        title: 'UCD Tutorial',
        start  : '2016-05-17T19:30:00',
        end    : '2016-05-17T21:30:00',
        color  :  '#006dcc',
        allDay : false
      },
      {
        title: 'UCD Tutorial',
        start  : '2016-05-24T19:30:00',
        end    : '2016-05-24T21:30:00',
        color  :  '#006dcc',
        allDay : false
      },
      {
            title  : 'Object Oriented Programming Lecture',
            start  : '2016-05-11T17:30:00',
            end    : '2016-05-11T19:30:00',
            color  :  '#42B48E',
            allDay : false
      },

      {
            title  : 'Object Oriented Programming Lecture',
            start  : '2016-05-18T17:30:00',
            end    : '2016-05-18T19:30:00',
            color  :  '#42B48E',
            allDay : false
      },

      {
            title  : 'Object Oriented Programming Lecture',
            start  : '2016-05-04T17:30:00',
            end    : '2016-05-04T19:30:00',
            color  :  '#42B48E',
            allDay : false
      },
    ]
  });

  
  $('#calendar2').fullCalendar({
    allDaySlot: false,
    weekends: false,
    minTime: '08:00', // a start time (10am in this example)
    maxTime: '22:00',
    changeView: 'week',
    header: {
      left: 'prev,next today',
      //center: 'title',
      right: 'agendaWeek,month'

    },

    columnFormat: {
                month: 'ddd',
                week: 'ddd '
            },
    defaultView: 'agendaWeek',
    editable: true,
    events: [
    ]
  });  
});