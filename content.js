console.log('Load Extention JS: Google Hire Beautifying (content.js).');

$( document ).ready(function() {
  setInterval(function(){ run(); }, 3000);
  console.log('Ready');
});

function run(){
  console.log('run');
  updateStatusColor()
}

function updateStatusColor(){
  console.log('updateStatusColor');
  $(".bb-status-pill").each(function(){
    var pill     = $(this).children('bb-stage-display');
    var pillText = pill.children('span');
    var stage    = pillText.html();
    if( stage == 'New Applicant' ){
      $(this).addClass('categoryNew');
    }else if( stage == 'Applicant Rejected' ){
      $(this).addClass('categoryNew');
    }else if( stage == 'Screen Feedback' ){
      $(this).addClass('categoryScreen');
    }else if( stage == 'Selected For Assay' ){
      $(this).addClass('categoryScreen');
    }else if( stage == 'Assay In Progress' ){
      $(this).addClass('categoryScreen');
    }else if( stage == 'Assay Needs Evaluation' ){
      $(this).addClass('categoryScreen');
    }else if( stage == 'Assay Assessed' ){
      $(this).addClass('categoryScreen');
    }else if( stage == 'Selected For Interview' ){
      $(this).addClass('categoryInterview');
    }else if( stage == 'Interview Scheduled' ){
      $(this).addClass('categoryInterview');
    }else if( stage == 'Interview Confirmed' ){
      $(this).addClass('categoryInterview');
    }else if( stage == 'Interview Feedback' ){
      $(this).addClass('categoryInterview');
    }else if( stage == 'Applicant Final Evaluation' ){
      $(this).addClass('categoryInterview');
    }else if( stage == 'In Negotiation' ){
      $(this).addClass('categoryOffer');
    }else if( stage == 'Proposal Accepted' ){
      $(this).addClass('categoryOffer');
    }
  });
}