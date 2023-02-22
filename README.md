# Pianity Frontend Dev Interview

## Goal

Your task is to implement an audio player in order to stream the songs present in the app. There are two buttons already implemented in the app which need to play/pause the audio. Feel free to get inspiration from the Pianity website.

You are free to implement this component as you see fit as long as you respect the following rules.

## Rules

1. You must respect all eslint rules (you can run `yarn lint` to check)
2. You must respect prettier formatting (you can run `yarn prettier` to check)
3. The audio player must never be interrupted when switching pages.
4. The audio player must display the current time of the song in real time (e.g. 0:40/2:30).
5. The audio player must display the title + artist of the song.
6. The text in the button of the song currently playing must display "play" or "pause" accordingly.  
   i.e. If the song "Tanqueta" is playing, the button on the "Tanqueta" card on the home page AND the button on the "Tanqueta" page (/song/[id]) must be a "pause" button.
7. There must be a play/pause button on the audio player itself.
8. The audio player should be able to be played from anywhere in the app.
9. Clicking a card's play button from the home page should **not** redirect you to the song's page.
10. You should be able to explain all your decisions.

If you have any questions or concerns, you can reach out to me: [felix@pianity.com](mailto:felix@pianity.com)

Good luck!
