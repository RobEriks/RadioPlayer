// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

fetch('https://api.sr.se/api/v2/channels/?format=json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
    data.channels.forEach((channel) => {
      console.log(channel);
      
     // Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
      const audio = document.createElement('audio');
      audio.controls = true;
      const source = document.createElement('source');
      source.src = channel.liveaudio.url;
      source.type = 'audio/mpeg';
      audio.appendChild(source);
      document.body.appendChild(audio);
    });
    
  });

  

  

   