const limitBreakAudio = document.createElement('audio');
limitBreakAudio.src = 'audio/limit.wav';
limitBreakAudio.load();

const swordSlashAudio = document.createElement('audio');
swordSlashAudio.src = 'audio/cross.wav';
swordSlashAudio.load();

const audioTracks = [swordSlashAudio, swordSlashAudio];

function limitBreakAudioPlay(){ limitBreakAudio.play(); }

function swordSlashAudioPlay(){ swordSlashAudio.play(); }

function makeAllAudioAvailableOnMobile(){
	audioTracks.forEach( (track) => {
		track.play();
		track.pause();
	})
}

module.exports = {
	limitBreakAudioPlay,
	swordSlashAudioPlay,
	makeAllAudioAvailableOnMobile
}

