let email = document.getElementById('email');
let source = document.getElementById('source');
let destination = document.getElementById('destination');
let time = document.getElementById('time');
let submit = document.getElementById('submit');
let footer = document.getElementById('footer');
 let error_Message;



function submitter() {
  footer.innerHTML += ` <div
          class="alert alert-danger alert-dismissible shadow-soft fade show"
          role="alert"
        >
          <span class="alert-inner--icon">
            <span class="fas fa-fire"></span>
          </span>
          <span class="alert-inner--text">
           [ ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ]- <strong>Form data sent!</strong> Api will be responding soon.
          </span>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ;`;
  let email_value = email.value;
  let source_value = source.value;
  let destination_value = destination.value;
  let time_value = time.value;

  let source_arr = source_value.split(",");
  let source_lat = source_arr[0];
  let source_long = source_arr[1];
  let destination_arr = destination_value.split(",");
  let destination_lat = destination_arr[0];
  let destination_long = destination_arr[1];

  let data= {
    source_lat: source_lat,
    source_long: source_long,
    destination_lat: destination_lat,
    destination_long: destination_long,
    time: time_value,
    email: email_value
  }
 

  fetch("https://lzcfgr.deta.dev/schedule", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response)
    .then((data) => data.json())
    .then((final) => {
      if (final.status == 500) {
        error_Message = final.message;
      }
      let value = JSON.stringify(final.value);
      let googletime = JSON.stringify(final.duration);
      let sendtime = JSON.stringify(final.time);
      if (value) {
        footer.innerHTML += `<div id="information">
      <div
        class="alert alert-success alert-dismissible shadow-soft fade show"
        role="alert"
      >
        <span class="alert-inner--icon"
          ><span class="far fa-thumbs-up"></span
        ></span>
        <span class="alert-inner--text"
          >[ ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ]-<strong>Email scheduled for ${email_value} at ${sendtime}</strong> You need ${googletime} minutes to reach your destination</span
        >
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
      } else {
        footer.innerHTML += ` <div
          class="alert alert-danger alert-dismissible shadow-soft fade show"
          role="alert"
        >
          <span class="alert-inner--icon">
            <span class="fas fa-fire"></span>
          </span>  
          <span class="alert-inner--text">
           [ ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ]- <strong>API failed</strong> Status 500. ${error_Message}
          </span>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      `;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

}





//  {
//   source_lat: '25.597313',
//   source_long: '85.086286',
//   destination_lat: '25.60001544921823',
//   destination_long: '85.08843754612461',
//   time: '16:10',
//   email: 'akum19cs@cmrit.ac.in'
// }