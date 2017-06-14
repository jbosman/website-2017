const limitBreakAudio = document.createElement('audio');
limitBreakAudio.src = 'audio/limit.wav';
limitBreakAudio.load();

const swordSlashAudio = document.createElement('audio');
swordSlashAudio.src = 'audio/cross.wav';
swordSlashAudio.load();

function limitBreakAudioPlay(){ limitBreakAudio.play(); }
function swordSlashAudioPlay(){ swordSlashAudio.play(); }

module.exports = {
	limitBreakAudioPlay,
	swordSlashAudioPlay
}

