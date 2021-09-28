async function thoughtFormHandler(event) {
  event.preventDefault();

  const thought_text = document.querySelector('textarea[name="thought-body"]').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (thought_text) {
    const response = await fetch('/api/thoughts', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        thought_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.thought-form').addEventListener('submit', thoughtFormHandler);