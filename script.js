document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('guest-form');
  const input = document.getElementById('guest-name');
  const list = document.getElementById('guest-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    if (list.children.length >= 10) {
      alert('Guest list is full! Maximum 10 guests allowed.');
      console.log('Guest list is full! Maximum 10 guests allowed.');
      return;
    }

    const name = input.value.trim();
    if (name === '') {
      return;
    }

    const li = document.createElement('li');
    li.textContent = name + ' ';

    
    const rsvpButton = document.createElement('button');
    rsvpButton.textContent = 'Mark as Attending';
    rsvpButton.className = 'rsvp-btn';
    li.appendChild(rsvpButton);


    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    li.appendChild(removeButton);


    let attending = false;
    rsvpButton.addEventListener('click', function() {
      attending = !attending;
      if (attending) {
        rsvpButton.textContent = 'Mark as Not Attending';
      } else {
        rsvpButton.textContent = 'Mark as Attending';
      }
    });


    removeButton.addEventListener('click', function() {
      list.removeChild(li);
    });

    list.appendChild(li);
    input.value = '';
  });
});


