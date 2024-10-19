import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './batman.png',
    fullDecal: './batman.png',

});

export default state;