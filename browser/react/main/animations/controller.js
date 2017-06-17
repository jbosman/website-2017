
import { 
	limitBreakAudioPlay, 
	swordSlashAudioPlay,
	makeAllAudioAvailableOnMobile 
} from '../audio/controller';

import { 
	getOrbsFromDOM, 
	rotateAllOrbs, 
	centerAllOrbs,
	fadeOutOrbMenu,
	registerOrbRotationEndEvent,
	registerOrbCenterEndEvent
} from '../orbMenu/orbAnimations/orbAnimations';

import {
	getSwordsFromDOM,
	staggeredSwordSlash,
	rotationalSwordSlash,
	registerSwordSlashEndEvent,
	registerRotationalSwordSlashEndEvent
} from '../sword-slashes/sword-animations/sword-animations';

// Animation sequence
	//	1. User clicks one of the orbs.
	//	2. All orbs begin orb rotation animation and limit break audio plays
	//  3. On end of orb rotation animation
	//		3a. All orbs begin linear movement animation to the center of the screen.
	//	4. On end of orb linear movement animation
	//		4a. Linear sword slash animations begin and sword cross audio plays
	//  5. On end of last sword slash animation
	//		5a. All rotational sword slash animations begin
	//	6. On end of rotational sword slash animations
	//		6a. All orbs begin orb disolve animation.


function setupOrbAnimations(){
	getOrbsFromDOM();
	registerOrbRotationEndEvent(centerAllOrbs);
}

function linearSwordsWithAudio(){
	staggeredSwordSlash(600);
	swordSlashAudioPlay();
}

function setupSwordAnimations(){
	getSwordsFromDOM();
	registerOrbCenterEndEvent(linearSwordsWithAudio);
	registerSwordSlashEndEvent(rotationalSwordSlash);
	registerRotationalSwordSlashEndEvent(fadeOutOrbMenu, 500);
}

function animationSequencer(){
	setupOrbAnimations();
	setupSwordAnimations();
}

function kickOffAnimationWithAudio(){
	rotateAllOrbs();
	limitBreakAudioPlay();
}

function handleOrbClick(){
	makeAllAudioAvailableOnMobile();
	animationSequencer();
	kickOffAnimationWithAudio();
}

module.exports = {
	handleOrbClick
}